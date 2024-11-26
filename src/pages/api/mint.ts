/** @format */

import { NextApiRequest, NextApiResponse } from 'next';
import { ethers } from 'ethers';
import { create } from 'ipfs-http-client';

const ipfs = create({ url: 'https://ipfs.infura.io:5001/api/v0' });
const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!;
const abi: ethers.ContractInterface = [
	// Place your ABI here
];

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== 'POST') {
		return res.status(405).json({ error: 'Method not allowed' });
	}

	try {
		const { file, metadata } = req.body;

		// Upload file to IPFS
		const fileResult = await ipfs.add(file);
		const tokenURI = `https://ipfs.infura.io/ipfs/${fileResult.path}`;

		// Interact with contract
		const provider = new ethers.providers.JsonRpcProvider(
			process.env.NEXT_PUBLIC_INFURA_URL
		);
		const wallet = new ethers.Wallet(
			process.env.NEXT_PUBLIC_OWNER_PRIVATE_KEY!,
			provider
		);
		const contract = new ethers.Contract(contractAddress, abi, wallet);

		const tx = await contract.mint(tokenURI);
		const receipt = await tx.wait();

		res
			.status(200)
			.json({ tokenId: receipt.events[0].args.tokenId.toString() });
	} catch (error) {
		console.error('Error minting NFT:', error);
		res.status(500).json({ error: 'Minting failed' });
	}
}
b;
