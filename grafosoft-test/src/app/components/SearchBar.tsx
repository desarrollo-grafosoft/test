import SearchIconSolid from './icons/SearchIconSolid';
export default function SearchBar() {
    return (
        <div className="px-4 relative">
            <input
                type="text"
                className="bg-[#F2F2F2] rounded-10 p-3 pl-12 outline-none w-full"
                placeholder="Buscar por libros, personas ó articulos"
            />
            <SearchIconSolid className="h-6 w-6 absolute top-1/2 left-7 transform -translate-y-1/2 opacity-50" strokeWidth={1} stroke='currentColor' />
        </div>
    )
}