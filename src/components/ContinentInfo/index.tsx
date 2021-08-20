import {
  Box,
  Flex,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

import { City } from './City';
import { Number } from './Number';

interface ContinentInfoProps {
  text: string;
  countries: number;
  spokenLanguages: number;
  cities100: number;
  cities: [
    {
      image: string;
      city: string;
      state: string;
      flag: string;
    }
  ];
}

export function ContinentInfo({
  text,
  countries,
  spokenLanguages,
  cities100,
  cities,
}: ContinentInfoProps) {
  return (
    <VStack justify='flex-start' mx={[2, 18, 36]}>
      <SimpleGrid
        heigth={300}
        columns={2}
        my={[6, 20]}
        gridGap={8}
        minChildWidth='430px'
      >
        <Text textAlign='justify' mx={2}>
          {text}
        </Text>
        <HStack
          spacing={[4, 4, 8, 8, 12]}
          justify={[
            'space-between',
            'space-between',
            'space-between',
            'space-between',
            'flex-end',
          ]}
          mx={2}
        >
          <Number number={countries} title='países' />
          <Number number={spokenLanguages} title='línguas' />
          <Number number={cities100} title='cidades +100' />
        </HStack>
      </SimpleGrid>
      {cities && (
        <Flex w='100%' flexDir='column'>
          <Text
            fontWeight='500'
            fontSize={['28', '32']}
            alignSelf='flex-start'
            minWidth='256px'
          >
            Cidades +100
          </Text>
          <SimpleGrid
            minChildWidth='256px'
            spacing={2}
            justifyItems={['center', 'center', 'flex-start']}
          >
            {cities.map((city, index) => (
              <City key={index} {...city} />
            ))}
          </SimpleGrid>
        </Flex>
      )}
    </VStack>
  );
}
