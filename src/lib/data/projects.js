const projects = [
	{
		name: 'Daily Dua',
		img: '/img/daily-dua.jpg',
		description:
			'A website that contains a collection of daily prayers based on the sunnah taught by the Prophet Muhammad (peace be upon him).',
		taglines: ['HTML', 'CSS', 'JavaScript', 'SCSS'],
		repository: 'https://github.com/myynxlazz/daily-dua',
		demo: 'https://daily-dua-omega.vercel.app/'
	},
	{
		name: 'MakanKuy Restaurant App',
		img: '/img/makan-kuy.jpg',
		description:
			'A web application for searching restaurants and viewing their details, such as menu, reviews, address.',
		taglines: ['HTML', 'CSS', 'JavaScript', 'SCSS', 'API', 'PWA'],
		repository: 'https://github.com/myynxlazz/restaurant-app-dicoding',
		demo: 'https://makankuy-restaurant-app.netlify.app/'
	},
	{
		name: 'Bookshelf API',
		img: '/img/bookshelf-api.jpg',
		description:
			'A RESTful API for managing a collection of books, allowing users to add, update, delete, and retrieve book information.',
		taglines: ['Node.js', 'Hapi'],
		repository: 'https://github.com/myynxlazz/nodejs-bookshelf-api',
		demo: '#'
	}
];

const assignment = [
	{
		name: 'Tugas Pertemuan 3',
		img: '/img/pertemuan-3.jpg',
		description: 'Membuat halaman web dan mempelajari tentang dasar format text sederhana.',
		taglines: ['HTML'],
		repository: 'https://github.com/adrianahaz/pemrograman-web-1/tree/main/pertemuan-3',
		demo: 'https://adrianahaz.github.io/pemrograman-web-1/pertemuan-3/'
	},
	{
		name: 'Tugas Pertemuan 6',
		img: '/img/pertemuan-6.jpg',
		description:
			'Membuat halaman web dan mempelajari tentang dasar unordered list dan ordered list.',
		taglines: ['HTML', 'List'],
		repository: 'https://github.com/adrianahaz/pemrograman-web-1/tree/main/pertemuan-6',
		demo: 'https://adrianahaz.github.io/pemrograman-web-1/pertemuan-6/'
	},
	{
		name: 'Tugas Pertemuan 9',
		img: '/img/pertemuan-9.jpg',
		description: 'Membuat halaman web portfolio menggunakan frame.',
		taglines: ['HTML', 'Frame'],
		repository: 'https://github.com/adrianahaz/pemrograman-web-1/tree/main/pertemuan-9',
		demo: 'https://adrianahaz.github.io/pemrograman-web-1/pertemuan-9/'
	}
];

export const getAllProjects = () => projects;
export const getAllAssignments = () => assignment;
