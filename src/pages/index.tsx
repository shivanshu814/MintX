/** @format */

import { motion } from 'framer-motion';
import Navbar from '@/components/navbar/navbar';

export default function Home() {
	return (
		<>
			<Navbar />
			{/* Hero Section */}
			<div className='min-h-screen bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 flex flex-col items-center justify-center text-white relative overflow-hidden'>
				{/* Background Animation */}
				<motion.div
					className='absolute w-[500%] h-[500%] bg-gradient-to-r from-indigo-600 to-indigo-400 opacity-20'
					animate={{ rotate: 360 }}
					transition={{
						duration: 60,
						repeat: Infinity,
						ease: 'linear',
					}}
				/>

				<motion.div
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.5 }}
					className='text-center'>
					<h1 className='text-6xl font-extrabold mb-4'>
						Discover the Future of Digital Ownership
					</h1>
					<p className='text-xl mb-6 opacity-80'>
						A decentralized platform to mint, trade, and own your NFTs.
						Empowering creators and collectors.
					</p>
					<motion.button
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1, delay: 1 }}
						className='bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition transform hover:bg-blue-700 hover:scale-105'>
						Get Started
					</motion.button>
				</motion.div>
			</div>

			{/* About Section */}
			<div className='bg-gray-900 text-white py-24 px-6 text-center'>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 0.5 }}
					className='max-w-4xl mx-auto'>
					<h2 className='text-4xl font-bold mb-6'>What is MintXchange?</h2>
					<p className='text-lg mb-6'>
						MintXchange is a decentralized platform that enables creators to
						mint, showcase, and trade their NFTs. From digital art to
						collectibles, MintXchange empowers you to monetize your creative
						work.
					</p>
					<motion.div
						whileHover={{ scale: 1.05 }}
						className='inline-block px-6 py-3 bg-blue-600 rounded-full text-lg font-semibold hover:bg-blue-700 transition'>
						Learn More
					</motion.div>
				</motion.div>
			</div>

			{/* NFT Showcase Gallery */}
			<div className='bg-gray-800 py-24 px-6'>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 0.5 }}
					className='text-center mb-12'>
					<h2 className='text-4xl font-bold text-white mb-6'>
						Explore Exclusive NFTs
					</h2>
					<p className='text-lg text-gray-400'>
						Browse through a curated selection of unique digital assets. Find
						your next favorite NFT here.
					</p>
				</motion.div>

				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
					{/* NFT Cards */}
					<motion.div
						whileHover={{ scale: 1.05 }}
						className='bg-white rounded-lg overflow-hidden shadow-xl cursor-pointer'>
						<img
							src='https://via.placeholder.com/400x400.png?text=NFT+1'
							alt='NFT 1'
							className='w-full h-64 object-cover'
						/>
						<div className='p-4'>
							<h3 className='text-lg font-semibold mb-2'>NFT Title 1</h3>
							<p className='text-gray-600'>Creator: John Doe</p>
							<p className='text-blue-600 mt-2 font-bold'>Price: 1.5 ETH</p>
						</div>
					</motion.div>

					<motion.div
						whileHover={{ scale: 1.05 }}
						className='bg-white rounded-lg overflow-hidden shadow-xl cursor-pointer'>
						<img
							src='https://via.placeholder.com/400x400.png?text=NFT+2'
							alt='NFT 2'
							className='w-full h-64 object-cover'
						/>
						<div className='p-4'>
							<h3 className='text-lg font-semibold mb-2'>NFT Title 2</h3>
							<p className='text-gray-600'>Creator: Jane Smith</p>
							<p className='text-blue-600 mt-2 font-bold'>Price: 2.0 ETH</p>
						</div>
					</motion.div>

					<motion.div
						whileHover={{ scale: 1.05 }}
						className='bg-white rounded-lg overflow-hidden shadow-xl cursor-pointer'>
						<img
							src='https://via.placeholder.com/400x400.png?text=NFT+3'
							alt='NFT 3'
							className='w-full h-64 object-cover'
						/>
						<div className='p-4'>
							<h3 className='text-lg font-semibold mb-2'>NFT Title 3</h3>
							<p className='text-gray-600'>Creator: Sarah Lee</p>
							<p className='text-blue-600 mt-2 font-bold'>Price: 3.2 ETH</p>
						</div>
					</motion.div>
				</div>
			</div>

			{/* Why Choose Us Section */}
			<div className='bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 py-24 text-center text-white'>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 1 }}>
					<h2 className='text-4xl font-bold mb-6'>Why MintXchange?</h2>
					<p className='text-xl mb-8'>
						Unlock a seamless experience for minting, showcasing, and trading
						NFTs with the most user-friendly platform.
					</p>
					<div className='flex justify-center space-x-12'>
						<motion.div
							whileHover={{ scale: 1.1 }}
							className='bg-white text-blue-700 px-6 py-4 rounded-xl shadow-lg'>
							<h3 className='text-2xl font-semibold mb-2'>Decentralized</h3>
							<p>
								Your assets are fully owned and managed by you with no
								middlemen.
							</p>
						</motion.div>
						<motion.div
							whileHover={{ scale: 1.1 }}
							className='bg-white text-blue-700 px-6 py-4 rounded-xl shadow-lg'>
							<h3 className='text-2xl font-semibold mb-2'>Secure</h3>
							<p>
								Built on blockchain technology, ensuring complete security for
								your NFTs.
							</p>
						</motion.div>
						<motion.div
							whileHover={{ scale: 1.1 }}
							className='bg-white text-blue-700 px-6 py-4 rounded-xl shadow-lg'>
							<h3 className='text-2xl font-semibold mb-2'>User-Friendly</h3>
							<p>
								Intuitive interface for seamless minting, buying, and selling of
								NFTs.
							</p>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</>
	);
}
