import ButtonIcon from "@components/Buttons/ButtonIcon";

export default function Section({ title = "Section Name", children = <></> }) {

    return (
        <section className="bg-light-gray rounded-15 p-4 shadow-lg">
            <div className="flex flex-row justify-between items-center">
                <h1 className="text-2xl md:text-3xl font-medium">
                    {title}
                </h1>
                <ButtonIcon className="bg-primary-o25 text-primary rounded-25 px-4 py-2">
                    <p>Ver Todo</p>
                </ButtonIcon>
            </div>
            <div className="mt-2">
                {children}
            </div>
        </section>
    );
}