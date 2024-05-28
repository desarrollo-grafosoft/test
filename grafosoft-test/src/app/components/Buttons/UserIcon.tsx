import Image from 'next/image';


export default function UserIcon({ src = '', width = 50, height = 50, className = '', ...props }) {
    return (
        <Image
            src={src}
            width={width}
            height={height}
            alt="User Icon"
            className={`aspect-square object-cover object-top rounded-10 ${className}`}
            {...props}
        />
    );
}