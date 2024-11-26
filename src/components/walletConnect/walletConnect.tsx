/** @format */

import { useEffect, useState } from 'react';

export default function WalletConnect() {
	const [walletAddress, setWalletAddress] = useState('');

	const connectWallet = async () => {
		if (window.ethereum) {
			const accounts = await window.ethereum.request({
				method: 'eth_requestAccounts',
			});
			setWalletAddress(accounts[0]);
		} else {
			alert('MetaMask not found. Please install it.');
		}
	};

	useEffect(() => {
		connectWallet();
	}, []);

	return (
		<button
			className='bg-blue-500 px-4 py-2 text-white rounded'
			onClick={connectWallet}>
			{walletAddress
				? `Connected: ${walletAddress.slice(0, 6)}...`
				: 'Connect Wallet'}
		</button>
	);
}
