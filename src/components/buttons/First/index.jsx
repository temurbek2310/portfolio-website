import './style.css'

function Btnfirst({ text = 'btn', link = '#' }) {
	return (
		<a
			href={link}
			target='_blank'
			rel='noreferrer'
			download={'temurbek_samatov_frontend_developer.pdf'}
		>
			<button class='btn rel '>
				<span class='text'>Text</span>
				<span class='flip-front'>{text}</span>
				<span class='flip-back'>
					<svg
						fill='#000000'
						height='44px'
						width='64px'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<polygon
							points='12,7 13,7 13,9 15,9 15,11 3,11 3,13 15,13 15,15 13,15 13,17 12,17 12,19 15,19 15,17 17,17 17,15 19,15 19,14 
    20,14 20,13 21,13 21,11 20,11 20,10 19,10 19,9 17,9 17,7 15,7 15,5 12,5'
						/>
					</svg>
				</span>
			</button>
		</a>
	)
}

export default Btnfirst
