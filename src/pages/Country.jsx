import { Container, CountryInfo, GoBackBtn, Loader, Section } from 'components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCountry } from 'service/countryApi';

const Country = () => {
  const { countryId } = useParams();
  const [countryInfo, setCountryInfo] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    async function asyncWrapper() {
      try {
        setLoader(true);
        const data = await fetchCountry(countryId);
        setCountryInfo(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    }
    asyncWrapper();
  }, [countryId]);
  return (
    <Section>
      <Container>
        <GoBackBtn />
        {loader && <Loader />}
        {countryInfo && <CountryInfo country={countryInfo} />}
      </Container>
    </Section>
  );
};

export default Country;
