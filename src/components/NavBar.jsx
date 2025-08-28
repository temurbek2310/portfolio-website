import Btnfirst from './buttons/First'

const NavBar = () => {
	return (
		<>
			<header className='bg-transparent bg-red-400 fixed w-full h-20 flex top-0 items-center justify-between z-10 px-20'>
				<div className='logo'>
					<img src='/logo.png' alt='' /> Portfolio
				</div>
				<div className='transition-all'>
					<Btnfirst
						text='Download Cv'
						link={'temurbek_samatov_frontend_developer.pdf'}
					/>
				</div>
			</header>
		</>
	)
}

export default NavBar
