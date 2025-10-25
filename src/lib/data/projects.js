const projects = [
	{
		name: 'Daily Dua',
		img: '/img/daily-dua.jpg',
		description:
			'A website that contains a collection of daily prayers based on the sunnah taught by the Prophet Muhammad (peace be upon him).',
		taglines: ['JS', 'AJAX', 'SCSS'],
		repository: 'https://github.com/myynxlazz/daily-dua',
		demo: 'https://daily-dua-omega.vercel.app/'
	},
	{
		name: 'MakanKuy Restaurant App',
		img: '/img/makan-kuy.jpg',
		description:
			'A web application for searching restaurants and viewing their details, such as menu, reviews, address.',
		taglines: ['AJAX', 'PWA', 'SCSS'],
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
		name: 'Tugas Pertemuan 2',
		img: '/img/pertemuan-2.jpg',
		description: 'Membuat halaman web dasar dan mengenal tag HTML.',
		taglines: ['HTML'],
		repository: 'https://github.com/adrianahaz/pemrograman-web-1/tree/main/pertemuan-2',
		demo: 'https://adrianahaz.github.io/pemrograman-web-1/pertemuan-2/'
	},
	{
		name: 'Tugas Pertemuan 3',
		img: '/img/pertemuan-3.jpg',
		description: 'Mempelajari dasar format teks pada HTML.',
		taglines: ['HTML'],
		repository: 'https://github.com/adrianahaz/pemrograman-web-1/tree/main/pertemuan-3',
		demo: 'https://adrianahaz.github.io/pemrograman-web-1/pertemuan-3/'
	},
	{
		name: 'Tugas Pertemuan 4',
		img: '/img/pertemuan-4.jpg',
		description: 'Menampilkan gambar dan video di halaman web.',
		taglines: ['HTML', 'Media'],
		repository: 'https://github.com/adrianahaz/pemrograman-web-1/tree/main/pertemuan-4',
		demo: 'https://adrianahaz.github.io/pemrograman-web-1/pertemuan-4/'
	},
	{
		name: 'Tugas Pertemuan 5',
		img: '/img/pertemuan-5.jpg',
		description: 'Mempelajari hyperlink dan membuat halaman portofolio sederhana.',
		taglines: ['HTML', 'Hyperlink'],
		repository: 'https://github.com/adrianahaz/portfolio',
		demo: 'https://adrianahaz.github.io/portfolio'
	},
	{
		name: 'Tugas Pertemuan 6',
		img: '/img/pertemuan-6.jpg',
		description: 'Mengenal dan membuat ordered list serta unordered list.',
		taglines: ['HTML', 'List'],
		repository: 'https://github.com/adrianahaz/pemrograman-web-1/tree/main/pertemuan-6',
		demo: 'https://adrianahaz.github.io/pemrograman-web-1/pertemuan-6/'
	},
	{
		name: 'Tugas Pertemuan 7',
		img: '/img/pertemuan-7.jpg',
		description: 'Membuat tabel untuk menampilkan informasi tempat wisata.',
		taglines: ['HTML', 'Table'],
		repository: 'https://github.com/adrianahaz/pemrograman-web-1/tree/main/pertemuan-7',
		demo: 'https://adrianahaz.github.io/pemrograman-web-1/pertemuan-7/'
	},
	{
		name: 'Tugas Pertemuan 8',
		img: '/img/pertemuan-8.jpg',
		description: 'Mempelajari dasar tag form dan fungsinya.',
		taglines: ['HTML', 'Form'],
		repository: 'https://github.com/adrianahaz/pemrograman-web-1/tree/main/pertemuan-8',
		demo: 'https://adrianahaz.github.io/pemrograman-web-1/pertemuan-8/'
	},
	{
		name: 'Tugas Pertemuan 9',
		img: '/img/pertemuan-9.jpg',
		description: 'Membuat halaman portofolio menggunakan frame.',
		taglines: ['HTML', 'Frame'],
		repository: 'https://github.com/adrianahaz/pemrograman-web-1/tree/main/pertemuan-9',
		demo: 'https://adrianahaz.github.io/pemrograman-web-1/pertemuan-9/'
	},
	{
		name: 'Tugas Pertemuan 10',
		img: '/img/pertemuan-10.jpg',
		description: 'Menampilkan halaman web lain menggunakan iframe.',
		taglines: ['HTML', 'Frame'],
		repository: 'https://github.com/adrianahaz/pemrograman-web-1/tree/main/pertemuan-10',
		demo: 'https://adrianahaz.github.io/pemrograman-web-1/pertemuan-10/'
	}
];

export const getAllProjects = () => projects;
export const getAllAssignments = () => assignment;
