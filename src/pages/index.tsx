import { Box, Divider, HStack, Text, SimpleGrid } from '@chakra-ui/react';

import { Banner } from '../components/Banner/Home';
import { ContinentSwiper } from '../components/ContinentSwiper';
import { Header } from '../components/Header';
import { TravelCategory } from '../components/TravelCategory';

export default function Home() {
  return (
    <Box w='100%' minWidth='450px'>
      <Header />
      <Banner />
      <SimpleGrid minChildWidth='80px' gridGap={4} my='16' mx='16'>
        <TravelCategory title='vida noturna' img='/cocktail.svg' />
        <TravelCategory title='praia' img='/surf.svg' />
        <TravelCategory title='moderno' img='/building.svg' />
        <TravelCategory title='clássico' img='/museum.svg' />
        <TravelCategory title='e mais...' img='/earth.svg' />
      </SimpleGrid>
      <Divider border='2px' width='16' margin='auto' borderColor='gray.500' />
      <Text textAlign='center' my='8' fontSize='28' fontWeight='500'>
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Text>
      <ContinentSwiper />
    </Box>
  );
}
