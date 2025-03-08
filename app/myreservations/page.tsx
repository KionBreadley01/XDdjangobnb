
import Image from 'next/image'

const MyReservationsPage = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6 py-8 pb-6">
            <h1 className='mt-6 text-2xl'> My reservation</h1>

            <div className='space-y-4'>
                <div className='p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300'>
                    <div className='col-span-1'>
                        <div className='relative overflow-hidden aspect-square rounded-xl'>
                            <Image
                                fill
                                src={"/beach_1.jpg"}
                                className='hover:scale-110 object-cover transition h-full w-full'
                                alt='beach house'
                            />
                        </div>
                    </div>
                    <div className='col-span-1 space-x-3'>
                        <h2 className='mb-4 text-xl'>Property name</h2>
                        <p className='mb-2'><strong>Check in date:</strong>
                            14/2/2024
                        </p>
                        <p className='mb-2'><strong>Check in date:</strong>
                            16/2/2024
                        </p>
                        <p className='mb-2'><strong>Numbres of nigths:</strong>
                         2
                         </p>
                        <p className='mb-2'><strong>Total price:</strong>
                        $200 
                        </p>

                        <div className="mt-6inline-block cursor-pointer py-4 px-6 bg-airbnb text-white rounded-xl hover:bg-airbnbDark transition">
                            Go To Property
                        </div>
                    </div>
                </div>

                <div className='p-5 grid grid-cols-4 gap-4 shadow-md border border-gray-300'>
                    <div className='col-span-1'>
                        <div className='relative overflow-hidden aspect-square rounded-xl'>
                            <Image
                                fill
                                src={"/beach_1.jpg"}
                                className='hover:scale-110 object-cover transition h-full w-full'
                                alt='beach house'
                            />
                        </div>
                    </div>
                    <div className='col-span-1 space-x-3'>
                        <h2 className='mb-4 text-xl'>Property name</h2>
                        <p className='mb-2'><strong>Check in date:</strong>
                            14/2/2024
                        </p>
                        <p className='mb-2'><strong>Check in date:</strong>
                            16/2/2024
                        </p>
                        <p className='mb-2'><strong>Numbres of nigths:</strong>
                         2
                         </p>
                        <p className='mb-2'><strong>Total price:</strong>
                        $200 
                        </p>

                        <div className="mt-6inline-block cursor-pointer py-4 px-6 bg-airbnb text-white rounded-xl hover:bg-airbnbDark transition">
                            Go To Property
                        </div>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default MyReservationsPage