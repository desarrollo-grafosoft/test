import ButtonIcon from './ButtonIcon';
import BookIconSolid from './icons/BookIconSolid';
import PlusIconSolid from './icons/PlusIconSolid';

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
        <div className='md:w-3/12 lg:w-2/12 flex flex-col justify-center items-center'>
            <ButtonIcon className='p-2'>
                <BookIconSolid color='white' height={70} width={70} />
            </ButtonIcon>
            <ul className='text-center text-white'>
                {menuOptions.map((option, index) => {
                    return <li key={index} className={`${(index == 0 ? 'caret-icon-before opacity-100' : 'opacity-75')}`}>
                        <a className={`${(index == 0 ? 'font-semibold' : 'font-medium')}`}>{option.name}</a>
                    </li>
                })}
            </ul>
            <ButtonIcon className='py-2 w-36 text-white'>
                <span>Crear</span>
                <PlusIconSolid width={25} height={25} strokeWidth={1} />
            </ButtonIcon>
        </div>
    );
}