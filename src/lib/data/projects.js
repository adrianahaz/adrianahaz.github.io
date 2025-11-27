const projects = [
	{
		id: 'pr-1',
		name: 'Daily Dua',
		img: '/img/daily-dua.jpg',
		description:
			'A website that contains a collection of daily prayers based on the sunnah taught by the Prophet Muhammad (peace be upon him).',
		taglines: ['JS', 'AJAX', 'SCSS'],
		repository: 'https://github.com/myynxlazz/daily-dua',
		demo: 'https://daily-dua-omega.vercel.app/'
	},
	{
		id: 'pr-2',
		name: 'MakanKuy Restaurant App',
		img: '/img/makan-kuy.jpg',
		description:
			'A web application for searching restaurants and viewing their details, such as menu, reviews, address.',
		taglines: ['AJAX', 'PWA', 'SCSS'],
		repository: 'https://github.com/myynxlazz/restaurant-app-dicoding',
		demo: 'https://makankuy-restaurant-app.netlify.app/'
	},
	{
		id: 'pr-3',
		name: 'Bookshelf API',
		img: '/img/bookshelf-api.jpg',
		description:
			'A RESTful API for managing a collection of books, allowing users to add, update, delete, and retrieve book information.',
		taglines: ['Node.js', 'Hapi'],
		repository: 'https://github.com/myynxlazz/nodejs-bookshelf-api',
		demo: '#'
	}
];

export const getAllProjects = () => projects;
