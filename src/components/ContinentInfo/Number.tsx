import { Text, VStack } from '@chakra-ui/react';

interface NumberProps {
  number: number;
  title: string;
}

export function Number({ number, title }: NumberProps) {
  return (
    <VStack fontWeight={600}>
      <Text fontSize={['2rem', '2.5rem', '3rem']} color='yellow.500'>
        {number}
      </Text>
      <Text fontSize={['1rem', '1.25rem', '1.25rem', '1.25rem', '1.5rem']}>
        {title}
      </Text>
    </VStack>
  );
}
