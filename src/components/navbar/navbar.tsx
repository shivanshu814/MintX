/** @format */

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
	const [walletAddress, setWalletAddress] = useState<string | null>(null);

	// Connect to MetaMask
	const connectWallet = async () => {
		if (typeof window.ethereum !== 'undefined') {
			try {
				// Request wallet connection
				const accounts = await window.ethereum.request({
					method: 'eth_requestAccounts',
				});
				setWalletAddress(accounts[0]);
			} catch (error) {
				console.error('Connection failed:', error);
				alert('Failed to connect to MetaMask');
			}
		} else {
			alert('MetaMask not found. Please install it.');
		}
	};

	// Check if wallet is already connected on initial render
	useEffect(() => {
		if (typeof window.ethereum !== 'undefined') {
			window.ethereum
				.request({ method: 'eth_accounts' })
				.then((accounts: string[]) => {
					if (accounts.length > 0) {
						setWalletAddress(accounts[0]);
					}
				})
				.catch((error) => console.error('Failed to fetch accounts:', error));
		}
	}, []);

	return (
		<nav className='bg-gray-800 p-4 flex justify-between items-center text-white'>
			<h1 className='text-2xl font-bold'>MintXchange</h1>
			<div className='space-x-4 flex items-center'>
				{/* Navigation Links */}
				<Link href='/' className='hover:text-gray-300'>
					Home
				</Link>
				<Link href='/mint' className='hover:text-gray-300'>
					Mint
				</Link>
				<Link href='/marketplace' className='hover:text-gray-300'>
					Marketplace
				</Link>

				{/* Wallet Connection */}
				{walletAddress ? (
					<span className='text-sm'>
						Connected: {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
					</span>
				) : (
					<button
						onClick={connectWallet}
						className='bg-blue-500 px-4 py-2 rounded hover:bg-blue-400'>
						Connect Wallet
					</button>
				)}
			</div>
		</nav>
	);
}
