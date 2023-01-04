import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react';
import { FLIGHT_MANIFEST } from 'next/dist/shared/lib/constants';
import { baseUrl, fetchApi } from '../utils/fetchApi';
import Property from '../components/Property';

const Banner = ({ purpose, title1, desc1, buttonText, linkName, imageUrl }) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10" >
    <Box p="5" >
      <Text color="gray.500" fontSize="sm" fontWeight="medium" >{purpose}</Text>
      <Text fontSize="3xl" fontWeight="bold" >{title1}</Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700" >{desc1}</Text>
      <Button fontSize="xl"  >
        <Link href={linkName} >{buttonText}</Link>
      </Button>
    </Box>
    <Box>
      <Image src={imageUrl} width={500} height={300} alt="banner" />
    </Box>
  </Flex>
)


export default function Home({ propertiesForRent, propertiesForSale }) {
  return (
    <Box>
      <Banner
        purpose="RENT A HOME"
        title1="Find Your Dream Home"
        desc1="The Most Comprehensive Real Estate Search"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl="/apartment.jpg"
      />
    </Box>
  )
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    }
  }
}