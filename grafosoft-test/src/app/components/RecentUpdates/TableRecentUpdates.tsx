export default function TableRecentUpdates() {
    const data = [
        {
            from: "Victoria Evans",
            action: "ha comentado en \"La Ciudadela\"",
            date: "May 7"
        },
        {
            from: "Ethan Williams",
            action: "ha comenzado a seguirte'",
            date: "May 5"
        },
        {
            from: "Nathan Fox",
            action: "le ha dado gustado \"Inolvidable\"",
            date: "May 1"
        },
        {
            from: "Megan Walsh",
            action: "ha comenzado a seguirte",
            date: "April 29"
        }
    ]

    return (
        <div className="min-w-full mt-5">
            <ul className="divide-y divide-gray-300">
                {data && data.map(({ from, action, date }, index) => (
                    <li key={index} className="grid grid-cols-4">
                        {/* Left Side */}
                        <div className="flex col-span-3 md:col-span-2">
                            <div className="col-span-1 px-2 py-2">
                                <span className="font-semibold text-lg text-gray-700">{from}</span>
                                <span className="font-light text-gray-500"> {action}</span>
                            </div>
                        </div>
                        {/* Right Side */}
                        <div className="flex flex-col justify-center col-start-4 col-end-5 text-end">
                            <span className="font-light text-gray-500 md:mr-4">{date}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
