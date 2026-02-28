import Image from "next/image";
import Link from "next/link";

interface TechTileProps {
    name: string;
    description: string;
    link: string;
    image: string;
}

export default function TechTiles({ name, description, link, image }: TechTileProps) {
    return (
        <div className="flex flex-col justify-center min-h-[280px] items-start relative group">
            <div className="m-5">
                <div className="w-12 h-12 flex items-center justify-center absolute inset-x-0 top-0 ml-6 mt-6">
                    <Image src={image} alt={name} fill className="object-contain" />
                </div>
                <div className="mt-4 text-left w-full mb-3">
                    <h2 className="text-2xl roboto-mono-500 text-gray-800 dark:text-white">
                        {name}
                    </h2>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                        {description}
                    </p>
                </div>
                <Link href={link} target="_blank">
                    <div className="bg-gray-300 dark:bg-gray-700 w-10 h-10 rounded-full absolute bottom-0 left-0 m-4 flex justify-center items-center hover:ring-4 ring-gray-200 dark:ring-gray-400 hover:transition duration-700 ease-in-out">
                        <Image src="/arrow.svg" alt="View Project" width={20} height={20} />
                    </div>
                </Link>
            </div>
        </div>
    );
}
