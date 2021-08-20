import { Image, Text, VStack } from '@chakra-ui/react';

interface TravelCategoryProps {
  title: string;
  img: string;
}

export function TravelCategory({ title, img }: TravelCategoryProps) {
  return (
    <VStack>
      <Image src={img} alt='vida noturna' boxSize={['12', '16']} mb='4' />
      <Text fontWeight='600' fontSize='16'>
        {title}
      </Text>
    </VStack>
  );
}
