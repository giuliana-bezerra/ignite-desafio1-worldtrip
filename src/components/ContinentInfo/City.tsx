import { Box, HStack, Image, Text, VStack } from '@chakra-ui/react';

interface CityProps {
  image: string;
  city: string;
  state: string;
  flag: string;
}

export function City({ image, city, state, flag }: CityProps) {
  return (
    <Box my={['2', '8']} display='flex' flexDir='column'>
      <Image src={image} h='173px' w='256px' alt='Ásia' borderTopRadius={4} />
      <HStack
        p='4'
        borderX='1px'
        borderBottom='1px'
        borderColor='rgba(255, 186, 8, 0.5)'
        borderBottomRadius={4}
        justify='space-between'
        width='256px'
      >
        <VStack spacing={[2, 4]} align='flex-start'>
          <Text fontWeight='600' fontSize='20'>
            {city}
          </Text>
          <Text fontSize='16'>{state}</Text>
        </VStack>
        <VStack>
          <Image src={flag} w='39' h='39' alt='Reino Unido' />
        </VStack>
      </HStack>
    </Box>
  );
}
