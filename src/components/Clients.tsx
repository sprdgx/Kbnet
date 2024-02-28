import Image from "next/image"
import Atropos from "atropos/react";
import "atropos/css";
import ooredoo from "../../public/Client-Logos/ooredoo.png"
import djezzy from "../../public/Client-Logos/djezzy.png"
import zte from "../../public/Client-Logos/zte.png"
import huawei from "../../public/Client-Logos/huawei.png"
import mobilis from "../../public/Client-Logos/mobilis.png"
import algerieTelecom from "../../public/Client-Logos/algerieTelecom.png"

function Clients() {
    const clientGrid = [
        {
            alt: "algerie telecom",
            logoPath: algerieTelecom
        },

        {
            alt: "djezzy",
            logoPath: djezzy
        },

        {
            alt: "mobilis",
            logoPath: mobilis
        },
        {
            alt: "ooredoo",
            logoPath: ooredoo
        },
        {
            alt: "zte",
            logoPath: zte
        },
        {
            alt: "huawei",
            logoPath: huawei
        },

    ]
    return (
        <section id="clients" className="h-auto lg:h-screen grid grid-cols-17 lg:grid-cols-16 text-center lg:text-start justify-center items-center bg-gray-100">
            <div className="flex justify-center items-center px-10">
                <div className="flex flex-col justify-around h-[22rem] py-10">
                    <h2 className="font-bold text-4xl">Nos clients</h2>
                    <p>Chez <span className="font-bold">KBNET</span>, nous sommes fiers de collaborer avec divers clients provenant de différents secteurs d'activité. Nous travaillons avec des entreprises de toutes tailles, des startups aux grandes entreprises internationales.</p>
                </div>
            </div>
            <div className="flex justify-center items-center h-full">
                <div className="grid grid-cols-2 h-full w-full p-4 gap-3 place-items-center">
                    {
                        clientGrid.map((client, index) => (
                            <Atropos className="w-[12rem] h-[8rem]">
                                <div key={index} className="rounded-md flex justify-center items-center w-full h-full bg-gray-100 p-4">
                                    <Image src={client.logoPath} alt={client.alt} data-atropos-offset="2" className="aspect-[3/2] w-full object-contain" />
                                </div>
                            </Atropos>
                        ))
                    }
                </div>

            </div>
        </section >
    )
}

export default Clients