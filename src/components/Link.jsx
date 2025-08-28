import '../css/blocks/link.css' // Custom CSS file for animation

const Link = () => {
	return (
		<div className='relative flex items-center justify-center h-max py-10'>
			<a
				href='/temurbek_samatov_frontend_developer.pdf'
				style={{ zIndex: 1000 }}
				className='circle relative w-64 h-64 flex items-center justify-center'
				download={'temurbek_samatov_frontend_developer.pdf'}
			>
				<a href='/' className='text-gray-200 font-mono text-2xl'>
					{'<Download CV/>'}
				</a>
				<div className='absolute w-full h-full flex items-center justify-center'>
					<div className='orbit'></div>
					<div className='orbit_two'></div>
				</div>
			</a>
		</div>
	)
}

export default Link
