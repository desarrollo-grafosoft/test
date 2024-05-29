import Image from 'next/image'
import UserIcon from '@components/Buttons/UserIcon'

export default function Card({ srcImg = "", title = "Titulo", author = { name: "Author", date: "Jan 1, 2024", srcImg: "" }, children = <></> }) {
    return (
        <article className="overflow-hidden rounded-15 border border-gray-100 bg-white shadow-sm drop-shadow-lg mt-4 mb-8">
            <div className='rounded-15'>
                <Image
                    priority={true}
                    src={srcImg}
                    width={500}
                    height={500}
                    alt="Picture"
                    className="h-56 w-full object-cover"
                    style={{ borderRadius: '15px' }}
                />
            </div>

            <div className="p-4 xl:p-6">
                <a href="#">
                    <h3 className="text-lg font-medium text-gray-900">
                        {title}
                    </h3>
                </a>

                <div className="mt-2">
                    {children}
                </div>

                <div className='mt-4 flex gap-x-4'>
                    <UserIcon src={author.srcImg} width={50} height={50} className='aspect-square object-cover object-top rounded-10' />
                    <div className='flex flex-col'>
                        <span className='font-semibold text-lg text-gray-700'>{author.name}</span>
                        <span className='font-light text-sm text-gray-500'>{author.date}</span>
                    </div>
                </div>
            </div>
        </article>
    )
}

