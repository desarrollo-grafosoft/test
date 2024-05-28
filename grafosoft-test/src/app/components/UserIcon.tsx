import Image from 'next/image';


export default function UserIcon({ src, width = 50, height = 50, ...props }) {
    return (
        <Image
            src={src}
            width={width}
            height={height}
            alt="User Icon"
            {...props}
        />
    );
}