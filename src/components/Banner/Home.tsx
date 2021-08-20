import {
  Box,
  Flex,
  HStack,
  Image,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      bgImage='/Background.svg'
      bgRepeat='no-repeat'
      bgSize='cover'
      py={[8, 16]}
      maxHeight='335'
    >
      <HStack w='100%' mx={[8, 24]} justify='space-between' flexDirection='row'>
        <VStack color='gray.50' align='flex-start'>
          <Text fontWeight='bold' fontSize={[24, 30]}>
            5 Continentes, <br />
            infinitas possibilidades.
          </Text>
          <Text fontSize='16'>
            Chegou a hora de tirar do papel a viagem que você
            {isWideVersion && <br />} sempre sonhou.
          </Text>
        </VStack>
        {isWideVersion && (
          <Image
            src='/Airplane.svg'
            fit='contain'
            alt='avião'
            w=''
            marginTop='auto !important'
          />
        )}
      </HStack>
    </Flex>
  );
}
