import { useState } from 'react'

function Contacts() {
	const [listContacts] = useState([
		{
			title: 'Phone Number',
			value: '+998 99 388 40 85',
		},
		{
			title: 'Email',
			value: 'ghostwire2010@gmail.com',
		},
	])

	return (
		<section className=' flex flex-col items-center py-36'>
			<div className='generall__border px-20 py-10 text-center text-5xl font-museo-moderno font-sans flex justify-center items-end mb-7'>
				<h1 data-cursor-style>My Contacts</h1>
			</div>
			<div className=' flex py-10 gap-10 flex-col sm:flex-row'>
				{listContacts.map((value, key) => (
					<div
						data-cursor-style
						className='generall__border p-5 md:w-max w-full'
						key={key}
					>
						<h3 className='text-4xl'>{value.title}</h3>
						<h5>{value.value}</h5>
					</div>
				))}
			</div>
		</section>
	)
}
export default Contacts
