import ContactButton from '@/app/components/ContactButton'
import PropertyList from '@/app/components/properties/PropertyList'
import Image from 'next/image'

const PropertyDetailsPage = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6 py-8 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <aside className="col-span-1 mb-4">
                    <div className="flex flex-col items-center p-6 rounded-xl border border-gray-300 shadow-xl">
                        <Image
                            src={"/profile_pic_1.jpg"}
                            width={200}
                            height={200}
                            alt="landlord name"
                            className="rounded-full"
                        />
                        <h1 className='mt-6 text-2xl'> Landlord name</h1>

                        <ContactButton />

                    </div>

                </aside>
                <div className="col-span-1 md:col-span-3 ol-9 mb:pl-6">
                    <div className='mt-4 grid grid-cols-1 md:grid-cols-3  gap-6'>
                <PropertyList />
                </div>
                </div>
            </div>
        </main>

    )
}

export default PropertyDetailsPage