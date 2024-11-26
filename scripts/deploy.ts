/** @format */

import { ethers } from 'hardhat';

async function main() {
	const NFT = await ethers.getContractFactory('NFT');
	console.log('Deploying NFT contract...');
	const nft = await NFT.deploy();
	await nft.deployed();
	console.log('NFT contract deployed to:', nft.address);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
