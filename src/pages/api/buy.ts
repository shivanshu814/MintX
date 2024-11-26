/** @format */

import { NextApiRequest, NextApiResponse } from 'next';
import { ethers } from 'ethers';

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!;
const abi = [
	/* Contract ABI goes here */
];

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== 'POST') {
		return res.status(405).json({ error: 'Method not allowed' });
	}

	const { tokenId, buyerAddress } = req.body;

	if (!tokenId || !buyerAddress) {
		return res.status(400).json({ error: 'Missing required fields' });
	}

	try {
		const provider = new ethers.providers.JsonRpcProvider(
			process.env.NEXT_PUBLIC_INFURA_URL
		);
		const signer = provider.getSigner(buyerAddress);
		const contract = new ethers.Contract(contractAddress, abi, signer);

		// Fetch price of the NFT from the contract
		const price = await contract.getPrice(tokenId);

		// Send the transaction to buy the NFT
		const tx = await contract.buyItem(tokenId, { value: price });
		const receipt = await tx.wait();

		res
			.status(200)
			.json({
				message: 'NFT purchased successfully',
				transactionHash: receipt.transactionHash,
			});
	} catch (error) {
		console.error('Error buying NFT:', error);
		res.status(500).json({ error: 'Failed to purchase NFT' });
	}
}
