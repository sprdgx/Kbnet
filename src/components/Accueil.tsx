import Image from "next/image"
import rightImage from "../../public/network-image2.jpg"
function Accueille() {
    return (
        <section className="h-screen grid grid-cols-1 lg:grid-cols-16">
            <div className="flex justify-center items-center px-10">
                <div className="flex flex-col gap-[4rem] justify-center items-center h-[20rem] ">
                    <h2 className="font-bold text-4xl">Des réseaux qui assurent la productivité et la perfection</h2>
                    <p>Avec KBNET, garantissez la continuité des activités de votre entreprise via des solutions réseau simples, intelligentes et sécurisées ...</p>
                </div>
            </div>
            <div className="lg:flex justify-center items-center px-10 hidden">
                <div>
                    <Image layout="intrinsic" width={550} alt="Energie Solar" src={rightImage} className="border-solid rounded-md" />
                </div>
            </div>
        </section >
    )
}

export default Accueille