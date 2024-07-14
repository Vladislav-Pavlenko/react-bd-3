import { Container, CountryList, Loader, Section } from 'components';
import { SearchForm } from 'components';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/countryApi';

const SearchCountry = () => {
  const [countries, setCountries] = useState([]);
  const [loader, setLoader] = useState(false);
  const [params, setParams] = useSearchParams();

  const handleSubmit = query => {
    // params.set("region", query)
    // setParams(params)
    setParams({ region: query });
  };

  useEffect(() => {
    const region = params.get('region');

    if (region === null) return;
    async function asyncWrapper() {
      try {
        setLoader(true);
        const data = await fetchByRegion(region);
        setCountries(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    }
    asyncWrapper();
  }, [params]);
  return (
    <Section>
      <Container>
        {loader && <Loader />}
        <SearchForm onSubmit={handleSubmit} />
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};

export default SearchCountry;
