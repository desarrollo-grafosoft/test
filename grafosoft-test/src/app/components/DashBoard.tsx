import ButtonIcon from './Buttons/ButtonIcon';
import MessageIconOutline from './Icons/MessageIconOutline';
import NotificationIconOutline from './Icons/NotificationIconOutline';
import UserIcon from './Buttons/UserIcon';
import SearchBar from './SearchBar/SearchBar';
import Banner from './Banner/Banner';
import PlusIconSolid from './Icons/PlusIconSolid';
import ListDataCards from './DataCard/ListDataCards';
import Section from './Section/Section';
import TableAuthors from './Authors/TableAuthors';

export default function Module() {
    return (
        <div className="bg-white md:w-9/12 lg:w-10/12 rounded-t-25 md:rounded-tr-none md:rounded-l-25">
            {/* User Menu Options */}
            <div className='flex justify-between p-4'>
                <div className='flex justify-center items-center gap-x-3'>
                    <ButtonIcon className='bg-secondary-o25'>
                        <NotificationIconOutline className='text-secondary' height={35} width={35} />
                    </ButtonIcon>
                    <ButtonIcon className='bg-primary-o25'>
                        <MessageIconOutline className='text-primary' height={35} width={35} />
                    </ButtonIcon>
                </div>
                <div className='flex justify-center items-center gap-x-3'>
                    <span className='font-semibold'>Jaider Mendoza</span>
                    <UserIcon src="/UserIcon.jpg" width={50} height={50} />
                </div>
            </div>
            <div>
                <SearchBar />
            </div>
            {/* Main Content Page */}
            <div>
                <Banner srcImg='/reading-banner2.png'>
                    <div className='mt-2 text-center md:text-left'>
                        <h3 className="text-white line-clamp-2 leading-1 text-2xl lg:text-3xl">
                            Hola, Jaider! Tienes ideas sobre un nuevo libro?
                        </h3>
                        <div className='mt-2'>
                            <p className="text-white lg:text-lg">
                                Vuelve tus libros tendencia mundial!
                            </p>
                            <p className="text-white lg:text-lg">
                                Quieres empezar a escribir una vez más?
                            </p>
                        </div>
                        <div className='mt-4'>
                            <ButtonIcon className='bg-gray-700 py-2 w-full text-white sm:w-52 md:mx-auto'>
                                <span className='font-semibold'>Crear Borrador</span>
                                <PlusIconSolid width={25} height={25} strokeWidth={1} className='ml-3' />
                            </ButtonIcon>
                        </div>
                    </div>
                </Banner>

                <div className='m-4 grid grid-cols-1 lg:grid-cols-2'>
                    <div className='mb-4'>
                        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 lg:gap-5'>
                            <ListDataCards />
                        </div>
                        <div className='mt-4'>
                            <Section title='Autores'>
                                <TableAuthors />
                            </Section>
                        </div>
                    </div>
                    <div>
                        <Section title='Reciente'>
                        </Section>
                    </div>

                </div>

            </div>
        </div>
    )
}

