import { House, Mail, AtSign, ChartNoAxesGantt, Github, Instagram, Linkedin } from 'lucide-svelte';

const items = [
	{ icon: House, label: 'Home' },
	{ icon: Mail, label: 'Mail' },
	{ icon: AtSign, label: 'AtSign' },
	{ icon: ChartNoAxesGantt, label: 'Menu' },
	{ icon: Github, label: 'Github' },
	{ icon: Instagram, label: 'Instagram' },
	{ icon: Linkedin, label: 'Linkedin' }
];

export const getIcon = (label) => items.find((item) => item.label === label)?.icon;
