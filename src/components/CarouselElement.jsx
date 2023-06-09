import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Box,  Heading, Image,  } from '@chakra-ui/react';

import pic1 from '../assets/pic1.jpg';
import pic3 from '../assets/pic3.jpg';
import pic5 from '../assets/pic5.jpg';
import pic8 from '../assets/pic8.jpg';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

export default function CarouselElement() {
  return (
    <Carousel
      // autoPlay
      infiniteLoop
      showStatus={false}
      // showThumbs={false}
      // showArrows={false}
    >
     
      <Box w="full" h={'90vh'}>
        <Image src={pic8} h="full" w={'full'} objectFit={'cover'} />
        <Heading bgColor={'whiteAlpha.800'} color={'black'} {...headingOptions}>
          Watch The Future
        </Heading>
      </Box>
      <Box w="full" h={'90vh'}>
        <Image src={pic3} h="full" w={'full'} objectFit={'cover'} />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
          Gaming on Console
        </Heading>
      </Box>

      <Box w="full" h={'90vh'}>
        <Image src={pic5} h="full" w={'full'} objectFit={'cover'} />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
          Night life is cool
        </Heading>
      </Box>
      
      <Box w="full" h={'90vh'}>
        <Image src={pic1} h="full" w={'full'} objectFit={'cover'} />
        <Heading bgColor={'whiteAlpha.700'} color={'black'} {...headingOptions}>
          Future is Gaming
        </Heading>
      </Box>

    </Carousel>
  );
}
