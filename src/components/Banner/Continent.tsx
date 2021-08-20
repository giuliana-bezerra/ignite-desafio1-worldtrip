import { Box, Flex, HStack, Image, Text, VStack } from '@chakra-ui/react';

interface BannerProps {
  image: string;
  title: string;
}

export function Banner({ image, title }: BannerProps) {
  return (
    <Flex
      bgImage={image}
      bgRepeat='no-repeat'
      bgSize='cover'
      height={['200', '400']}
      justify={['center', 'flex-start']}
      align={['center', 'flex-end']}
    >
      <Text fontWeight='bold' fontSize='30' color='gray.50' m={[8, 36]}>
        {title}
      </Text>
    </Flex>
  );
}
