import DataCard from "./DataCard";

export default function ListDataCards() {
    const dataCards = [
        { name: "Librería", value: 124 },
        { name: "Me Gusta", value: 155000 },
        { name: "Lectores", value: 8000 },
        { name: "Opiniones", value: 163000 }
    ]

    return (
        <>
            {dataCards.map((data, index) => <DataCard key={index} data={data} />)}
        </>
    );
}