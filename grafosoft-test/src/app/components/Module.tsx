import ButtonIcon from './ButtonIcon';
import MessageIconOutline from './icons/MessageIconOutline';
import NotificationIconOutline from './icons/NotificationIconOutline';
import UserIcon from './UserIcon';
import SearchBar from './SearchBar';
export default function Module() {
    return (
        <div className="bg-white md:w-9/12 lg:w-10/12 rounded-t-25 md:rounded-t-none md:rounded-l-25">
            <div className='flex justify-between p-4'>
                <div className='flex justify-center items-center gap-x-3'>
                    <ButtonIcon className='bg-secondary-25'>
                        <NotificationIconOutline className='text-secondary' height={40} width={40} />
                    </ButtonIcon>
                    <ButtonIcon className='bg-primary-25'>
                        <MessageIconOutline className='text-primary' height={40} width={40} />
                    </ButtonIcon>
                </div>
                <div className='flex justify-center items-center gap-x-3'>
                    <span className='font-semibold'>Jaider Mendoza</span>
                    <UserIcon src="/UserIcon.jpg" width={60} height={60} className='aspect-square object-cover object-top rounded-10' />
                </div>
            </div>
            <div>
                <SearchBar />
            </div>
        </div>
    )
}