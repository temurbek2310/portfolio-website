import {
	faEarthAmericas,
	faPersonCircleQuestion,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'
import fnumber from '../Assets/projects/fnumber.png'
import geadezist from '../Assets/projects/geodezist.png'
import temur from '../Assets/projects/temur.png'
import uzum from '../Assets/projects/uzum.png'
import Btnfirst from './buttons/First'

function Projects() {
	useEffect(() => {
		AOS.init({
			// Bu yerda sizning sozlamalaringiz, masalan:
			duration: 1000,
			once: false, // faqat bir marta animatsiyani ishga tushirish
		})
	}, [])

	const [listProjects] = useState([
		{
			name: 'Geadezist',
			type: 'web-app',
			des: 'Web Dashboard application in browser. Clone of the website geodezist.uz',
			mission:
				'The goal of the project: a web-based geospatial visualization tool tailored for geodesy and mapping professionals.',
			language:
				'Vite, TypeScript (ReactJs), Tailwind CSS, Ant Design, Tanstack (React query), Axios',
			images: geadezist,
			link: 'https://geodezist.uz/',
			github: 'https://github.com/temurbek2310/GEADEZIST',
		},
		{
			name: 'Uzum Market',
			type: 'e-commerce',
			des: 'E-commerce web aplication. Clone of the e-commerce website uzum.uz',
			mission: `The goal of the website is to empower people and businesses across Uzbekistan by providing convenient access to a wide range of goods and services, fostering entrepreneurship, and building essential digital and financial infrastructure to improve the overall quality of life and unlock the country's economic potential`,
			language:
				'ReactJs, Tailwind CSS, Styled Components, other (Js libraries)',
			images: uzum,
			link: 'uzum-market-eta.vercel.app',
			github: 'http://github.com/temurbek2310/uzum_market_clone',
		},
		{
			name: 'Find random number',
			type: 'game',
			des: 'A Find random number game written in JavaScript (JS), an implementation of the JavaScript programming language to define a version of the classic  game to run in web browsers.',
			mission:
				'The goal of the project is a deep understanding of java scripting down to the basics',
			language: 'HTML5, CSS3, Java Script',
			images: fnumber,
			link: 'https://find-random-number-game-with-javasc.vercel.app/',
			github:
				'https://github.com/temurbek2310/find-random-number-game-with-javascript',
		},
		{
			name: 'Great Amir Temur',
			type: 'web-app',
			des: `This website is about great Amir Temur's life`,
			mission:
				'The goal of the project is to make a understanding about our the greatest ancestor Amir Temur.',
			language:
				'NextJs (React), ThreeJs (3d Js library), LeafletJs (Js mapping library), GSAP & Framer-motion (Js animation libraries)',
			images: temur,
			link: 'https://amir-temur-website.vercel.app/',
			github: 'https://github.com/temurbek2310/amir-temur',
		},
	])

	return (
		<section>
			<div className='w-full generall__border py-5'>
				<div className='w-max generall__border mx-auto py-5'>
					<div className='font-museo-moderno font-system mt-0 mb-10 text-center text-[5vw] flex justify-center items-end md:px-36'>
						<p data-cursor-style>My Projects</p>
					</div>

					<div className=' text-center max-w-[500px] m-auto flex justify-center items-end'>
						<p data-cursor-style className='px-3'>
							A brief overview of my projects.
						</p>
					</div>
				</div>
			</div>
			<div className='list mt-14 '>
				{listProjects.map((value, key) => (
					<div
						className=' md:p-5 h-max grid lg:grid-cols-2 grid-cols-1 justify-between  md:mb-56 mb-20 lg:gap-16 md:gap-10 gap-5 '
						key={key}
						data-aos='fade-up'
						data-aos-anchor-placement='top-center'
					>
						<div className='generall__border md:p-4 p-2  flex justify-center items-center'>
							<div className='generall__border rel col-start-2 col-end-3 bg-gradient-to-tr dynamic-style-bg to-[#3600fb68] md:p-10 p- text-center rounded-xl overflow-hidden h-full w-ful '>
								<img
									src={value.images}
									alt='rasm'
									className='w-full h-full rounded-xl hover:scale-105 transition-all object-cover'
								/>
							</div>
						</div>

						<div className='col-start-1 col-end-2 row-start-1'>
							<div className='generall__border p-4'>
								<div className='md:p-5 p-3 generall__border mb-3'>
									<h3 data-cursor-style className='text-5xl m-0 w-max'>
										{value.name}
									</h3>
									<p
										data-cursor-style
										className='text-left w-full text-white mt-5'
									>
										{value.des}
									</p>
								</div>

								<div className='md:p-5 p-2 generall__border'>
									<div className='rel grid grid-cols-[70px,1fr] items-center md:gap-3 gap-1'>
										<div className='bg-[#cccccc54] md:w-14 md:h-14 w-10 h-10 text-xl flex justify-center items-center rounded-md'>
											<FontAwesomeIcon icon={faPersonCircleQuestion} />
										</div>
										<div>
											<h4 data-cursor-style className='w-max'>
												Mission
											</h4>
											<div data-cursor-style className='text-xs'>
												{value.mission}
											</div>
										</div>
									</div>

									<div className='rel grid grid-cols-[70px,1fr] items-center md:gap-3 gap-1 mt-3'>
										<div className='bg-[#cccccc54] md:w-14 md:h-14 w-10 h-10 text-xl flex justify-center items-center rounded-md'>
											<FontAwesomeIcon icon={faEarthAmericas} />
										</div>
										<div>
											<h4 data-cursor-style className='w-max'>
												Languages
											</h4>
											<div data-cursor-style className=''>
												{value.language}
											</div>
										</div>
									</div>
								</div>

								<div className=' mt-10'>
									<div className='flex gap-3 flex-wrap md:justify-start justify-center w-full'>
										<Btnfirst
											text='github'
											link='https://github.com/temurbek2310/'
										/>
										<Btnfirst text='live' link={value.link} />
										<Btnfirst text='view more' link={value.github} />
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
export default Projects
