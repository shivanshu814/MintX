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

	const { tokenId, price, walletAddress } = req.body;

	if (!tokenId || !price || !walletAddress) {
		return res.status(400).json({ error: 'Missing required fields' });
	}

	try {
		const provider = new ethers.providers.JsonRpcProvider(
			process.env.NEXT_PUBLIC_INFURA_URL
		);
		const signer = new ethers.Wallet(
			process.env.NEXT_PUBLIC_OWNER_PRIVATE_KEY!,
			provider
		);
		const contract = new ethers.Contract(contractAddress, abi, signer);

		const listingPrice = ethers.utils.parseEther(price.toString()); // Price in ETH
		const tx = await contract.listItem(tokenId, listingPrice, {
			from: walletAddress,
		});
		const receipt = await tx.wait();

		res
			.status(200)
			.json({
				message: 'NFT listed successfully',
				transactionHash: receipt.transactionHash,
			});
	} catch (error) {
		console.error('Error listing NFT:', error);
		res.status(500).json({ error: 'Failed to list NFT' });
	}
}
