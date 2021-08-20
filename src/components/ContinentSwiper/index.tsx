import { Flex, Heading, Text, useBreakpointValue } from '@chakra-ui/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import SwiperCore, {
  Autoplay,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
// Import Swiper styles
import 'swiper/swiper.min.css';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard, Autoplay]);

type Continent = {
  id: string;
  name: string;
  description: string;
  image: string;
};

export function ContinentSwiper() {
  const [continents, setContinents] = useState<Continent[]>([]);
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  useEffect(() => {
    fetch('/api/continents')
      .then((res) => res.json())
      .then((json) => setContinents(json.continents));
  }, []);

  return (
    <Flex h='450px' align='center' justify='center' mb='6'>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        keyboard={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        style={{ width: isWideVersion ? '80%' : '100%' }}
      >
        {continents.map((continent, index) => (
          <SwiperSlide key={index}>
            <Flex
              w='100%'
              h='100%'
              bgImage={continent.image}
              bgRepeat='no-repeat'
              bgSize='cover'
              align='center'
              justify='center'
              flexDirection='column'
            >
              <Link href={`/continents/${continent.id}`} passHref>
                <a>
                  <Heading fontWeight='700' color='gray.100' textAlign='center'>
                    {continent.name}
                  </Heading>
                  <Text
                    fontWeight='bold'
                    color='gray.200'
                    mt='4'
                    textAlign='center'
                  >
                    {continent.description}
                  </Text>
                </a>
              </Link>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
}
