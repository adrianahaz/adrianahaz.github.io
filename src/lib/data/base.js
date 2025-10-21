const navItems = [
	{ label: 'Home', href: './', icon: 'Home' },
	{ label: 'Blog', href: './blog' },
	{ label: 'Gallery', href: './gallery' },
	{ label: 'Contact me', href: '#contact' }
];

const identityItems = [{ label: 'Tech Enthusiast' }, { label: 'Informatics Engineering Student' }];

const heroContent = {
	heading: `Hello, I'm Adrian 👋`,
	description:
		'Tech enthusiast, creative soul, and constant learner. I love discovering new tech and making something fun out of it.'
};

const socialMedia = [
	{ label: 'Github', href: 'https://github.com/adrianahaz', icon: 'Github' },
	{ label: 'Instagram', href: 'https://www.instagram.com/adrhmdlz', icon: 'Instagram' },
	{ label: 'Mail', href: 'mailto:adrianalzidan35@gmail.com', icon: 'Mail' },
	{ label: 'Linkedin', href: 'https://www.linkedin.com/in/adrhmdlz/', icon: 'Linkedin' }
];

export const getAllNavItems = () => navItems;
export const getAllHeroContent = () => [heroContent, identityItems];
export const getAllSocialMedia = () => socialMedia;
