import { AppWrapper } from '@/components/app-wrapper';
//fetchnig data from API
const getData = async () => {
  try {
    const response = await fetch(
      'https://dujour.squiz.cloud/developer-challenge/data'
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log({ error: error.message });
    return {};
  }
};

//async function to get data from API and provide it to application
export default async function Home() {
  const data = await getData();

  return <AppWrapper data={data} />;
}
