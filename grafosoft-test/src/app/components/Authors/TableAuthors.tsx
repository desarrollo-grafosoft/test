'use client';
import { findSourceMap } from "module";
import { useEffect, useState } from "react";
import UserIcon from '../Buttons/UserIcon';
import { formatNumber } from "@/app/utils/formatNumber";

export default function TableAuthors() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const apiData = async () => {
            try {
                const url = 'https://rickandmortyapi.com/api/character/1,2,3';
                const data = await (await fetch(url)).json();
                setData(data);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        }
        apiData();
    }, [])

    console.log(data);
    if (loading) return <p>Loading...</p>;

    return (
        <div className="min-w-full divide-y-2 divide-gray-200 mt-5">
            <ul className="divide-y divide-gray-200">
                {data && data.map((item: any) => (
                    <li key={item.id} className="grid grid-cols-4">
                        {/* Left Side */}
                        <div className="flex col-span-3 md:col-span-2">
                            <div className="px-2 py-2">
                                <UserIcon src={item.image} className="shadow-lg" />
                            </div>
                            <div className="col-span-1 whitespace-nowrap px-2 py-2 flex flex-col flex-1">
                                <span className="font-semibold text-lg text-gray-700">{item.name}</span>
                                <span className="font-light text-gray-500">{item.species}</span>
                            </div>
                        </div>
                        {/* Right Side */}
                        <div className="flex flex-col items-end gap-x-5 md:flex-row md:justify-center md:items-center md:col-start-4 md:col-end-5">
                            <span className="font-light text-gray-500">Lectores</span>
                            <span className="text-2xl">{formatNumber(Math.random() * 100000)}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
