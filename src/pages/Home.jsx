import { Container, Heading, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from 'service/countryApi';
import { Loader } from 'components';
import { CountryList } from 'components';
const Home = () => {
  const [countries, setCountries] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    async function asyncWrapper() {
      try {
        setLoader(true);
        const data = await getCountries();
        setCountries(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    }
    asyncWrapper();
  }, []);
  return (
    <Section>
      <Container>
        <Heading title="Home" bottom />
        {loader && <Loader />}
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};

export default Home;
