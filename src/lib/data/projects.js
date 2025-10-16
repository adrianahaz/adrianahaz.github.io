const items = [
	{
		name: 'Daily Dua',
		description:
			'A website that contains a collection of daily prayers based on the sunnah taught by the Prophet Muhammad (peace be upon him).',
		technologies: ['HTML', 'CSS', 'JavaScript', 'SCSS'],
		repository: 'https://github.com/myynxlazz/daily-dua',
		demo: 'https://daily-dua-omega.vercel.app/'
	},
	{
		name: 'MakanKuy Restaurant App',
		description: 'A web application for searching restaurants and viewing their details.',
		technologies: ['HTML', 'CSS', 'JavaScript', 'SCSS', 'API', 'PWA'],
		repository: 'https://github.com/myynxlazz/restaurant-app-dicoding',
		demo: 'https://makankuy-restaurant-app.netlify.app/'
	},
	{
		name: 'Bookshelf API',
		description:
			'A RESTful API for managing a collection of books, allowing users to add, update, delete, and retrieve book information.',
		technologies: ['Node.js', 'Hapi', 'Nodemon'],
		repository: 'https://github.com/myynxlazz/nodejs-bookshelf-api',
		demo: null
	}
];

export const getAllProjects = () => items;
