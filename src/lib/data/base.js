const navItems = [
	{ label: 'Home', href: '/', icon: 'Home' },
	{ label: 'About', href: '#about' },
	{ label: 'Projects', href: '#projects' },
	{ label: 'Contact me', href: '#contact' }
];

const marqueeItems = [
	{ label: 'JavaScript', href: '#' },
	{ label: 'Svelte', href: '#' },
	{ label: 'Node.js', href: '#' },
	{ label: 'Tailwind', href: '#' }
];

export const getAllNavItems = () => navItems;

export const getAllMarqueeItems = () => marqueeItems;
