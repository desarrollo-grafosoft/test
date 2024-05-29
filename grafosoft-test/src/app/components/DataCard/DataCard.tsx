import { formatNumber } from "@/app/utils/formatNumber";

export default function DataCard({ data = { name: "Data Name", value: 0 } }) {
    return (
        <>
            <div className="border-2 border-black/15 rounded-15 p-4 shadow-xl min-w-[120px]">
                <div className="text-start">
                    <h2 className="text-lg font-medium opacity-50">
                        {data.name}
                    </h2>
                    <p className="mt-2 text-2xl md:text-3xl">
                        {formatNumber(data.value)}
                    </p>
                </div>
            </div>
        </>
    )
}