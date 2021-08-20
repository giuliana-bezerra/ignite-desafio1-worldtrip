import { Box, Flex, Grid, Icon, Image, Link, Spacer } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import { FaChevronLeft } from 'react-icons/fa';

export function Header() {
  const router = useRouter();
  const isContinentPath = router.asPath.includes('continents');

  return (
    <Flex as='header' justify='space-around' py='4' minWidth='450px'>
      {isContinentPath && (
        <Link href='/'>
          <a>
            <Icon as={FaChevronLeft} justifySelf='start' my={4} />
          </a>
        </Link>
      )}
      <Image src='/logo.svg' alt='worldtrip' />
      {isContinentPath && <div />}
    </Flex>
  );
}
