import Image from 'next/image'

export default function Banner({ srcImg = "", children = <></> }) {
    return (
        <article className="flex shadow-md bg-secondary rounded-15 m-4">
            <div className="flex flex-1 flex-col justify-between">
                <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                    <div>
                        {children}
                    </div>
                </div>
            </div>

            <div className="hidden sm:block sm:basis-56 mx-auto">
                <Image
                    src={srcImg}
                    width={500}
                    height={500}
                    alt="Picture"
                    className="h-56 w-full object-cover"
                />
            </div>
        </article>
    )
}