import { FaChartLine,  FaUsers, FaCog, FaQuestion } from "react-icons/fa";

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <FaChartLine />
		},
	{
		key: 'clients',
		label: 'Clients',
		path: '/clients',
		icon: <FaUsers />
	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
        icon: <FaCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
        icon: <FaQuestion/>
	}
]