/** @format */

import { useState } from 'react';
import axios from 'axios';
import Navbar from '@/components/navbar/navbar';

export default function Mint() {
	const [file, setFile] = useState<File | null>(null);
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');

	const handleMint = async () => {
		if (!file || !name || !description) {
			alert('Please fill out all fields.');
			return;
		}

		const formData = new FormData();
		formData.append('file', file);
		formData.append('metadata', JSON.stringify({ name, description }));

		try {
			const { data } = await axios.post('/api/mint', formData);
			alert(`NFT minted with Token ID: ${data.tokenId}`);
		} catch (error) {
			console.error('Minting failed:', error);
			alert('Failed to mint NFT');
		}
	};

	return (
		<>
			<Navbar />
			<div className='min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white'>
				<h1 className='text-4xl font-bold mb-6'>Mint Your NFT</h1>
				<input
					type='file'
					onChange={(e) => setFile(e.target.files?.[0] || null)}
					className='mb-4'
				/>
				<input
					type='text'
					placeholder='NFT Name'
					value={name}
					onChange={(e) => setName(e.target.value)}
					className='p-2 bg-gray-800 rounded mb-4'
				/>
				<textarea
					placeholder='NFT Description'
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					className='p-2 bg-gray-800 rounded mb-4'
				/>
				<button onClick={handleMint} className='bg-blue-500 px-6 py-2 rounded'>
					Mint NFT
				</button>
			</div>
		</>
	);
}
