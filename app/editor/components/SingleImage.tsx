import { Image } from '@nextui-org/react';
import NextImage from 'next/image';
import { getGDriveFileID, getGDriveImageLink } from '@/lib/services';

type SingleImageProps = {
  image: string;
  alt: string;
};

export const SingleImage: React.FC<SingleImageProps> = ({ image, alt}) => {
    return (
        <div className='p-2 w-fit border-[1px] border-themecolor/[0.5]'>
          <Image
            as={NextImage}
            layout='responsive'
            width={250}
            height={200}
            src={getGDriveImageLink(getGDriveFileID(image))}
            alt={alt}
            className='relative w-60 h-60'
          />
        </div>
    )
}
