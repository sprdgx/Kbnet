"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"


import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,

} from "@/components/ui/carousel"

import reseau from "../../public/Services-images/reseau.png"
import dev from "../../public/Services-images/dev.png"
import electricite from "../../public/Services-images/electricite.png"
import genieCivil from "../../public/Services-images/genie-civil.png"
import telephonie from "../../public/Services-images/telephonie.png"
import champMetal from "../../public/Services-images/champ-metal.png"
import about from "../../public/Services-images/about.png"
import energieSolar from "../../public/Services-images/energie-solaire.png"



const slidesContent = [
    {
        title: "A propos de nos services",
        body: "pilote votre transformation digitale et vous accompagne dans la réalisation de vos objectifs. Nous mettons à votre service notre expertise en stratégie et création digitales pour vous permettre de développer votre business.",
        backgroundImage: about
    },
    {
        title: "Reseaux",
        body: "KBNET vous assure l'installation, la configuration et la résolution des problèmes liés aux différents réseaux informatiques.",
        backgroundImage: reseau
    },
    {
        title: "Telephonie",
        body: "assure l'installation et la maintenance de la téléphonie analogique et IP.",
        backgroundImage: telephonie
    },
    {
        title: "Developement",
        body: "se spécialise dans le développement de solutions personnalisées, y compris le développement web, le développement mobile, et d'autres solutions informatiques sur mesure.",
        backgroundImage: dev
    },
    {
        title: "Electricité",
        body: "assure l'alimentation fiable des équipements et met en place des solutions de redondance.",
        backgroundImage: electricite
    },
    {
        title: "Genie civil",
        body: "s'occupe de la construction de structures génie civil, tels que les mats, pylônes, panneaux autoroute et shelters.",
        backgroundImage: genieCivil
    },
    {
        title: "Champ metal",
        body: "propose des solutions dans le domaine du métal, notamment la construction de structures adaptées à vos besoins.",
        backgroundImage: champMetal
    },
    {
        title: "Energie solaire",
        body: "offre des solutions d'énergie solaire, incluant la construction de mats, pylônes, panneaux autoroute et shelters.",
        backgroundImage: energieSolar
    }
];

export function Slider() {
    const plugin = React.useRef(
        Autoplay({ delay: 4000, stopOnInteraction: false, loop: true, })
    )

    return (
        <Carousel
            plugins={[plugin.current]}
            className="h-full w-full"

        >
            <CarouselContent >
                {slidesContent.map((slide, index) => (
                    <CarouselItem key={index}>
                        <div className="grid grid-cols-17 lg:grid-cols-16 content-center">
                            <Card className="bg-transparent border-none shadow-none">
                                <CardContent className="flex aspect-square items-center justify-center cursor-grab">
                                    <Image alt={slide.title} src={slide.backgroundImage} className="border-none aspect-[3/2] w-full object-contain" />
                                </CardContent>
                            </Card>
                            <div className="flex justify-center items-center">
                                <div className="flex flex-col h-auto gap-8 w-[20rem] lg:w-[35rem]">
                                    <h2 className="font-bold text-4xl">{slide.title}</h2>
                                    <p><span className="font-semibold">KBNET</span> {slide.body}</p>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}
