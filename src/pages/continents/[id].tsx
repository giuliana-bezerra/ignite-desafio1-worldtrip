import { Box, Stack } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';

import { Banner } from '../../components/Banner/Continent';
import { ContinentInfo } from '../../components/ContinentInfo';
import { Header } from '../../components/Header';

interface Continent {
  id: number;
  name: string;
  description: string;
  image: string;
  info: {
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
  };
}
export default function Continent() {
  const [continent, setContinent] = useState<Continent>({} as Continent);
  const { query } = useRouter();

  useEffect(() => {
    fetch(`/api/continents/${query.id}`)
      .then((res) => res.json())
      .then((json) => setContinent(json.continent));
  }, [query.id]);

  return (
    <Box minWidth='450px' width='100%'>
      <Header />
      <Banner image={continent?.image} title={continent?.name} />
      <ContinentInfo {...continent?.info} />
    </Box>
  );
}
