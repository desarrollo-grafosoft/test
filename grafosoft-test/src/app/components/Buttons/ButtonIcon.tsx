interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

export default function ButtonIcon({ children = <></>, className, ...props }: Props) {
    return (
        <>
            <button
                className={`drop-shadow-md rounded-10 flex items-center justify-center ${className}`} {...props}
            >
                {children}
            </button >
        </>
    );
}