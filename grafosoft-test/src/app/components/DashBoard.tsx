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
import { CaretIconSolid } from './Icons/CaretIconSolid';
import ListCards from './Card/ListCards';
import TableRecentUpdates from './RecentUpdates/TableRecentUpdates';

export default function Module({ className = "" }) {

    return (
        <div className={`bg-white rounded-t-25 md:rounded-tr-none md:rounded-l-25 ${className}`}>
            {/* User Menu Options */}
            <div className='m-4 grid grid-cols-2 lg:grid-cols-4' >
                <div className='place-content-center justify-self-start lg:col-span-1 lg:justify-self-center xl:justify-self-end'>
                    <div className='flex justify-center items-center gap-x-3'>
                        <ButtonIcon className='bg-secondary-o25'>
                            <NotificationIconOutline className='text-secondary' height={35} width={35} />
                        </ButtonIcon>
                        <ButtonIcon className='bg-primary-o25'>
                            <MessageIconOutline className='text-primary' height={35} width={35} />
                        </ButtonIcon>
                    </div>
                </div>

                <div className='place-content-center justify-self-end lg:col-span1'>
                    <div className='flex justify-center items-center gap-x-3'>
                        <span className='font-semibold text-lg text-gray-700 text-end'>Jaider Mendoza</span>
                        <UserIcon src="/UserIcon.jpg" width={50} height={50} />
                    </div>
                </div>

                <div className='mt-4 col-span-2 lg:col-span-2 lg:order-first'>
                    <SearchBar />
                </div>
            </div>

            {/* Main Content Page */}
            <div>
                <div className='m-4 grid grid-cols-1 auto-rows-min lg:grid-cols-3 lg:mr-0 xl:grid-cols-4 gap-4'>
                    {/* First Banner Section */}
                    <div className='mb-4 col-span-1 lg:col-span-2 xl:col-span-3'>
                        <Banner srcImg='/Reading-banner2.png'>
                            <div className='mt-2 text-center md:text-left'>
                                <h3 className="text-white line-clamp-3 leading-1 text-2xl font-medium">
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
                                    <ButtonIcon className='bg-gray-700 py-2 w-full text-white md:w-52'>
                                        <span className='font-semibold'>Crear Borrador</span>
                                        <PlusIconSolid width={25} height={25} strokeWidth={1} className='ml-3' />
                                    </ButtonIcon>
                                </div>
                            </div>
                        </Banner>
                    </div>

                    {/* Data Cards */}
                    <div className='mb-4 col-span-1 lg:col-span-2'>
                        <div className='xl:col-start-1 xl:col-end-3'>
                            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 lg:gap-5'>
                                <ListDataCards />
                            </div>
                        </div>
                    </div>


                    {/* Authors Section */}
                    <div className='mb-4 col-span-1 lg:col-span-2 xl:mb-0'>
                        <Section title='Autores'>
                            <TableAuthors />
                        </Section>
                    </div>

                    {/* Second Banner Section */}
                    <div className='mb-4 col-span-1 lg:col-span-2 xl:col-span-3 xl:mb-0'>
                        <Banner srcImg='/Reading-banner1.svg' className='bg-tertiary'>
                            <div className='mt-2'>
                                <h3 className="text-white text-center md:text-left line-clamp-3 leading-1 text-2xl font-medium">
                                    Jaider, nos gusta tu contenido y queremos darte los siguientes tips:
                                </h3>
                                <div className='my-8'>
                                    <ol className='text-white flex flex-col justify-center md:text-left'>
                                        <li className='list-decimal ml-5'>Lee los comentarios de tus lectores</li>
                                        <li className='list-decimal ml-5 mt-1'>Elije el género que quieres para tu público</li>
                                        <li className='list-decimal ml-5 mt-1'>Busca siempre a un editor de confianza!</li>
                                    </ol>
                                </div>
                            </div>
                        </Banner>
                    </div>

                    {/* Recently Section */}
                    <div className='mb-4 col-span-1 lg:col-span-2 xl:col-start-3 xl:col-end-4 lg:row-start-2 lg:row-end-4'>
                        <div className='xl:m-0'>
                            <Section title='Reciente'>
                                <TableRecentUpdates />
                            </Section>
                        </div>
                    </div>

                    {/* Latest Section */}
                    <div className='mb-4 col-span-1 lg:col-span-1 lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-6 xl:col-start-4 xl:col-end-5'>
                        <Section title='Lo último'>
                            <div className='mt-4'>
                                <ul className='ml-4 flex flex-row flex-wrap'>
                                    <li className='relative'>
                                        <CaretIconSolid stroke='currentColor' strokeWidth={2} className='absolute top-[15%] right-full' />
                                        <a href="" className='text-lg'>Reciente</a>
                                    </li>
                                    <li className='ml-4'>
                                        <a className='text-lg text-gray-500' href="">Popular</a>
                                    </li>
                                </ul>
                                <ListCards />
                            </div>
                        </Section>
                    </div>

                </div>


            </div >
        </div >
    )
}

