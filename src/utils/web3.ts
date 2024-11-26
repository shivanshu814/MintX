/** @format */

import { ethers } from 'ethers';

// Replace with your smart contract's ABI and address
const CONTRACT_ADDRESS = 'YOUR_CONTRACT_ADDRESS';
const ABI = [
	'function mintNFT(address recipient, string memory tokenURI) public onlyOwner returns (uint256)',
	'function totalSupply() public view returns (uint256)',
	'function tokenOfOwnerByIndex(address owner, uint256 index) public view returns (uint256)',
];

let provider: ethers.providers.Web3Provider;
let signer: ethers.Signer;
let nftContract: ethers.Contract;

export const connectWallet = async () => {
	if (typeof window.ethereum === 'undefined') {
		alert('Please install MetaMask.');
		return;
	}

	// Request access to MetaMask
	await window.ethereum.request({ method: 'eth_requestAccounts' });

	provider = new ethers.providers.Web3Provider(window.ethereum);
	signer = provider.getSigner();
	nftContract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);

	const address = await signer.getAddress();
	return { address };
};

// Function to mint a new NFT
export const mintNFT = async (uri: string) => {
	const tx = await nftContract.mintNFT(await signer.getAddress(), uri);
	await tx.wait();
	alert('NFT Minted Successfully!');
};

// Function to fetch NFTs owned by the connected wallet
export const fetchNFTs = async (address: string) => {
	const totalSupply = await nftContract.totalSupply();
	const nftList = [];

	for (let i = 0; i < totalSupply.toNumber(); i++) {
		const tokenId = await nftContract.tokenOfOwnerByIndex(address, i);
		const tokenURI = await nftContract.tokenURI(tokenId);
		const nftData = {
			id: tokenId,
			uri: tokenURI,
		};
		nftList.push(nftData);
	}
	return nftList;
};
