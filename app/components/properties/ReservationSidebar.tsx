const ReservationSidebar = () => {
    return (
        <aside className="mt-6 p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl">
            <h2 className="mb-5 text-2xl">20$ per night</h2>

            <div className="mb-6 p-3 border border-gray-400 rounded-xl">
                <label className="mb-2 block font-bold text-xs">Guests</label>

                <select 
                    className="w-full -ml-1 text-xm"
                >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
            </div>

            <div 
                className="w-full mb-6 py-6 text-center text-white bg-locare hover:bg-locare-dark rounded-xl"
            >
                Book
            </div>

            <div className="mb-4 flex justify-between align-center">
                <p>2$ * 4nights</p>

                <p>8$</p>
            </div>

            <div className="mb-4 flex justify-between align-center">
                <p>Locare fee</p>

                <p>$80</p>
            </div>

            <hr />

            <div className="mt-4 flex justify-between align-center font-bold">
                <p>Total</p>

                <p>$80</p>
            </div>
        </aside>
    );
}

export default ReservationSidebar;