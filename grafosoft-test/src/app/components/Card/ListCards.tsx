"use client";
import { useState, useEffect } from "react";
import Card from "./Card";

export default function ListCards() {
    const [dataCards, setDataCards] = useState([
        {
            srcImg: "/Spruce.jpg",
            title: "La Ciudadela",
            content: "Descubre las maravillas escondidas en los bosques de Estados Unidos.",
            author: {
                name: "David Jones",
                date: "May 6, 2020",
                srcImg: ""
            }
        },
        {
            srcImg: "/Hurricane.jpg",
            title: "Space X",
            content: "Elon Musk, un emprendedor con otra visión multimillonaria.",
            author: {
                name: "Lauren Murphy",
                date: "May 3, 2020",
                srcImg: ""
            }
        }
    ]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const apiData = async () => {
            try {
                const url = 'https://rickandmortyapi.com/api/character/4,5';
                const result = await (await fetch(url)).json();
                setDataCards((item) => item.map((card, index) => ({
                    ...card,
                    author: {
                        ...card.author,
                        srcImg: result[index].image
                    }
                })));
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        }
        apiData();
    }, []);

    if (loading) return <p className="text-gray-500 mt-4">Cargando Informacion...</p>;

    return (
        <>
            {dataCards && dataCards.map(({ srcImg, title, content, author }, index) => (
                <Card key={index} srcImg={srcImg} title={title} author={author}>
                    <p className='line-clamp-3 text-sm/relaxed text-gray-500'>
                        {content}
                    </p>
                </Card>
            ))}
        </>
    );
}