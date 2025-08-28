import {
	skills__databases,
	skills__lang,
	skills__libs,
	skills__libs_functionlaty,
	skills__texnologys,
	skills__vertioncontrol,
} from '../data/skils'
import Card from './Card/3dCard'

function Skils() {
	return (
		<section
			className={` mx-auto flex justify-center items-center min-h-[200-wh] h-max bg-transparent md:generall__border mb-10`}
		>
			<div className='relative w-full md:h-max flex justify-center items-center gap-2 flex-wrap md:generall__boreder overflow-hidden md:p-0 p-5'>
				<div className='generall__border p-12'>
					<div className='text-center text-white flex justify-center items-end'>
						<h1
							data-cursor-style
							className=' lg:text-8xl md:text-6xl text-5xl mb-5 mt-0-lg'
						>
							My Skills
						</h1>
					</div>
					<div className='w-full md:p-20 d-flex justify-center'>
						<div className='generall__border p-5 w-max text-xl'>
							<h3 data-cursor-style>Languages 🥱 </h3>
						</div>
						<div className='flex md:justify-start gap-5 justify-center items-center w-full flex-wrap'>
							<Card data={skills__lang} />
						</div>
						<div className='generall__border p-5 w-max text-xl'>
							<h3 data-cursor-style>Libs 😊</h3>
						</div>
						<div className='flex md:justify-start gap-5 justify-center items-center w-full flex-wrap'>
							<Card data={skills__libs} />
						</div>
						<div className='generall__border p-5 w-max text-xl'>
							<h3 data-cursor-style>Libs functionlaty 👌</h3>
						</div>
						<div className='flex md:justify-start gap-5 justify-center items-center w-full flex-wrap'>
							<Card data={skills__libs_functionlaty} />
						</div>
						<div className='generall__border p-5 w-max text-xl'>
							<h3 data-cursor-style>data base 🔎</h3>
						</div>
						<div className='flex md:justify-start gap-5 justify-center items-center w-full flex-wrap'>
							<Card data={skills__databases} />
						</div>
						<div className='generall__border p-5 w-max text-xl'>
							<h3 data-cursor-style>texnologies ✌️</h3>
						</div>
						<div className='flex md:justify-start gap-5 justify-center items-center w-full flex-wrap'>
							<Card data={skills__texnologys} />
						</div>
						<div className='generall__border p-5 w-max text-xl'>
							<h3 data-cursor-style>Version Control 😎</h3>
						</div>
						<div className='flex md:justify-start gap-5 justify-center items-center w-full flex-wrap'>
							<Card data={skills__vertioncontrol} />
						</div>
						{/* <div className="generall__border p-5 w-max text-xl">
              <h3 data-cursor-style>Mobile ⚡</h3>
            </div>
            <div className="flex md:justify-start gap-5 justify-center items-center w-full flex-wrap">
              <Card data={skills__Mobile} />
            </div> */}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Skils
