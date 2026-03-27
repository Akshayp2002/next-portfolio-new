import Image from "next/image";
// components/tiles/home/IntroTile.tsx
export default function aboutTile() {
    return (
        <div className="flex flex-col justify-center h-full px-10 lg:px-16 dark:bg-[#0d1117] group">
            <div className="flex items-center gap-6 mb-2">
                {/* Placeholder for 3D Avatar Image */}
                <div className="relative w-24 h-24">
                    <Image 
                        src="/me-laptop.png" 
                        alt="Akshay's Avatar Laptop" 
                        width={100} 
                        height={100} 
                        className="absolute inset-0 transition-opacity duration-500 opacity-100 group-hover:opacity-0" 
                    />
                    <Image 
                        src="/mecloud.png" 
                        alt="Akshay's Avatar Cloud" 
                        width={100} 
                        height={100} 
                        className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100" 
                    />
                </div>
                {/* <div className="bg-orange-600 text-white px-5 py-2 rounded-full font-bold text-sm tracking-tight">
                    Good Afternoon!
                </div> */}
            </div>
            <p className="text-gray-500 text-base leading-relaxed max-w-[500px]">
                I actively use a diverse set of cutting-edge technologies and tools in my daily work. From
                modern frameworks and
                languages to powerful platforms, my toolkit ensures high-quality and efficient development. 🚀 🌟
            </p>
        </div>
    );
}