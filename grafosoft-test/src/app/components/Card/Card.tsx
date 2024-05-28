import Image from 'next/image'
import UserIcon from '@components/Buttons/UserIcon'

export default function Card({ srcImg = "", title = "Titulo", content = "Lorem", author = { name: "Author", date: "Jan 1, 2024" } }) {

    return (
        <article className="overflow-hidden rounded-15 border border-gray-100 bg-white shadow-sm m-4 drop-shadow-lg">
            <div className='rounded-15'>
                <Image
                    src={srcImg}
                    width={500}
                    height={500}
                    alt="Picture"
                    className="h-56 w-full object-cover"
                    style={{ borderRadius: '15px' }}
                />
            </div>

            <div className="p-4 sm:p-6">
                <a href="#">
                    <h3 className="text-lg font-medium text-gray-900">
                        {title}
                    </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    {content}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et provident ullam voluptate modi in impedit error earum ab atque voluptates, dicta, sed architecto qui perspiciatis totam magni natus dolor alias.
                </p>
            </div>
            <div className='pb-4 px-4 flex gap-x-4'>
                <UserIcon src="/UserIcon.jpg" width={50} height={50} className='aspect-square object-cover object-top rounded-10' />
                <div className='flex flex-col'>
                    <span className='text-lg'>{author.name}</span>
                    <span className='text-sm font-light opacity-75'>{author.date}</span>
                </div>
            </div>
        </article>
    )
}

