import ButtonIcon from '@components/Buttons/ButtonIcon';
import BookIconSolid from '@components/Icons/BookIconSolid';
import PlusIconSolid from '@components/Icons/PlusIconSolid';
import { CaretIconSolid } from '../Icons/CaretIconSolid';

export default function Menu() {
    const menuOptions = [
        {
            name: "Inicio"
        },
        {
            name: "Libros"
        },
        {
            name: "Editores"
        },
        {
            name: "Lectores"
        }
    ]


    return (
        <div className='md:w-3/12 lg:w-2/12 p-6 flex flex-col justify-center items-center gap-y-8'>
            {/* Icon Page */}
            <div>
                <ButtonIcon className='bg-primary-o75 p-2'>
                    <BookIconSolid color='white' height={70} width={70} />
                </ButtonIcon>
            </div>

            {/* Menu */}
            <div>
                <ul className='text-center text-white'>
                    {menuOptions.map((option, index) => {
                        return <li key={index} className={`py-1 ${(index == 0 ? 'relative opacity-100' : 'opacity-75')}`}>
                            {(index == 0 && <CaretIconSolid stroke='currentColor' strokeWidth={16} className='absolute top-[15%] right-full' />)}
                            <a className={`${(index == 0 ? 'font-semibold' : 'font-medium')}`}>{option.name}</a>
                        </li>
                    })}
                </ul>
            </div>

            {/* Action */}
            <div>
                <ButtonIcon className='bg-primary-o75 h-10 w-[16rem] md:w-[8rem] text-white'>
                    <span className='font-semibold'>Crear</span>
                    <PlusIconSolid width={25} height={25} strokeWidth={1} className='ml-3' />
                </ButtonIcon>
            </div>
        </div>
    );
}