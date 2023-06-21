import Image from 'next/image'
import HeaderAvatar from './Avatar'
import SearchBox from './SearchBox';
import Suggestion from './Suggestion';

function Header() {

    return (
        <header>
            <div className='flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl'>
                <div className="absolute top-0 left-0 right-0 w-full h-96 bg-gradient-to-b from-pink-400 to-[#0055D1] rounded-md filter blur-3xl opacity-50 -z-50"></div>
                <Image
                    src="https://links.papareact.com/c2cdd5"
                    alt="Trello Logo"
                    width={300}
                    height={100}
                    className='w-44 md:w-56 pb-10 md:pb-0 object-contain'
                />
                <div className='flex items-center space-x-5 flex-1 justify-end w-full'>
                    {/* search box */}
                    <SearchBox />
                    <HeaderAvatar />
                </div>
            </div>
            <div className='flex items-center justify-center px-5 py-2 md:py-5'>
                <Suggestion />
            </div>
        </header>
    )
}

export default Header