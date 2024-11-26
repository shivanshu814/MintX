/** @format */

import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '@/components/navbar/navbar';

export default function Marketplace() {
	const [nfts, setNfts] = useState([]);

	const fetchNFTs = async () => {
		try {
			const { data } = await axios.get('/api/marketplace');
			setNfts(data.nfts);
		} catch (error) {
			console.error('Error fetching NFTs:', error);
		}
	};

	useEffect(() => {
		fetchNFTs();
	}, []);

	return (
		<>
			<Navbar />
			<div className='min-h-screen bg-gray-900 text-white flex flex-col items-center p-6'>
				<h1 className='text-4xl font-bold mb-6'>NFT Marketplace</h1>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
					{nfts.map((nft) => (
						<div key={nft.tokenId} className='bg-gray-800 p-4 rounded'>
							<img
								src={nft.image}
								alt={nft.name}
								className='w-full h-48 object-cover mb-4 rounded'
							/>
							<h2 className='text-xl font-bold'>{nft.name}</h2>
							<p className='text-gray-400'>{nft.description}</p>
							<p className='text-blue-400 font-bold mt-2'>
								Price: {nft.price} ETH
							</p>
							<button
								onClick={() => alert('Buy function not implemented')}
								className='bg-blue-500 px-4 py-2 mt-4 rounded'>
								Buy NFT
							</button>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
