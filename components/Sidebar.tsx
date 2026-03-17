import { getAllGenres } from '@/lib/api';
import SidebarClient from './SidebarClient';

async function Sidebar() {
	const genres = await getAllGenres();

	return <SidebarClient genres={genres} />;
}

export default Sidebar;
