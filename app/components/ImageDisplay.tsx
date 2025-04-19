'use client';
import { motion, AnimatePresence } from 'framer-motion';
import NextImage, { StaticImageData } from 'next/image';
import { Image } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { getGDriveImageLink } from '@/lib/services';

export const ImageDisplay = ({ id, title, isExpanded }: { id: string, title: string, isExpanded: boolean }) => {
    return(
        <div className={`relative p-1 mx-2 w-fit ${isExpanded ? 'min-w-[400px]' : 'min-w-[200px]'
                    } h-full border-[1px] border-themecolor/[0.5] rounded-md overflow-hidden`}>
            <div className='relative w-full h-full'>
                <Image
                    removeWrapper
                    as={NextImage}
                    fill
                    src={getGDriveImageLink(id)}
                    alt={title}
                    className="object-cover rounded-sm"
                />
            </div>
        </div>
    );
}

export const ImageCarousel = ({ images, title, isExpanded }: { images: string[], title: string, isExpanded: boolean }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 6000); 
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="w-auto h-full flex flex-col justify-between">
            <div
                className={`relative p-1 mx-2 w-fit ${isExpanded ? 'min-w-[400px]' : 'min-w-[200px]'
                    } h-full border-[1px] border-themecolor/[0.5] rounded-md overflow-hidden`}
            >
                <div className="relative w-full h-full">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            className="absolute inset-0"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                        >
                            <Image
                                removeWrapper
                                as={NextImage}
                                fill
                                src={getGDriveImageLink(images[index])}
                                alt={`${title} - ${index}`}
                                className="object-cover rounded-sm"
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}

export const MemojiDisplay: React.FC<{
    setIsHighlight: React.Dispatch<React.SetStateAction<boolean>>,
    memoji: StaticImageData,
}> = ({ setIsHighlight, memoji }) => {
    return (
        <motion.div
            className='m-3 p-3 right-4'
            onHoverStart={() => setIsHighlight(true)}
            onHoverEnd={() => setIsHighlight(false)}
            whileHover={{
                scale: 1.1,
                transition: { delay: 0.1 }
            }}
        >
            <Image
                as={NextImage}
                layout='responsive'
                width={250}
                height={250}
                src={memoji.src}
                alt="My Photo"
                className='relative w-60 h-60'
            />
        </motion.div>

    )
}

export const MemojiCarousel: React.FC<{
    setIsHighlight: React.Dispatch<React.SetStateAction<boolean>>,
    memojis: StaticImageData[] | any,
    duration?: number
}> = ({ setIsHighlight, memojis, duration }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % memojis.length);
        }, (duration && duration * 1000) || 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            onHoverStart={() => setIsHighlight(true)}
            onHoverEnd={() => setIsHighlight(false)}
            whileHover={{
                scale: 1.1,
                transition: { delay: 0.1 }
            }}
            className="m-3 p-3  overflow-hidden">
            <div className='relative w-60 h-60'>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        className="absolute inset-0"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                            opacity: 1,
                            y: [0, -5, 0],
                        }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.6, ease: 'easeInOut' }}
                    >
                        <Image
                            as={NextImage}
                            layout="responsive"
                            width={250}
                            height={250}
                            src={memojis[index].src}
                            alt={`Memoji ${index}`}
                            className="relative w-60 h-60"
                        />
                        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-bboard/90 to-transparent pointer-events-none z-10" />
                    </motion.div>
                </AnimatePresence>
            </div>
        </motion.div>
    );
}