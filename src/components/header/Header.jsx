import MenuItem from "../menuItem/MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from 'next/link';
import DarkMoodTheme from "../darkMoodTheme/DarkMoodTheme";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      <div className="flex gap-4">
        <MenuItem title="home" address="/" Icon={AiFillHome} />
        <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex items-center gap-4">
        <DarkMoodTheme/>
        <Link href={'/'} className='flex gap-1 items-center '>
      <span className='text-2xl font-bold text-green-600 bg-amber-300 py-1 px-2 rounded-lg'>
            FilmFlick
          </span>
          <span className='text-xl hidden sm:inline '>Clone</span>
          </Link>
      </div>
    </div>
  );
};

export default Header;
