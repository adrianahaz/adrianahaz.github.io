const navItems = [
	{ label: 'Home', href: '/', icon: 'Home' },
	{ label: 'About', href: '#' },
	{ label: 'Projects', href: '#' },
	{ label: 'Contact me', href: '#' }
];

const marqueeItems = [
	{ label: 'JavaScript', href: '#' },
	{ label: 'Svelte', href: '#' },
	{ label: 'Node.js', href: '#' },
	{ label: 'Tailwind', href: '#' }
];

export const getAllNavItems = () => navItems;

export const getAllMarqueeItems = () => marqueeItems;
