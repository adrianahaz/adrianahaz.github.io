import { House, Mail, AtSign, ChartNoAxesGantt } from 'lucide-svelte';

const items = [
	{ icon: House, label: 'Home' },
	{ icon: Mail, label: 'Contact' },
	{ icon: AtSign, label: 'AtSign' },
	{ icon: ChartNoAxesGantt, label: 'Menu' }
];

export const getIcon = (label) => items.find((item) => item.label === label)?.icon;
