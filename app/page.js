import { AppWrapper } from '@/components/app-wrapper';

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

export default async function Home() {
  const data = await getData();

  return <AppWrapper data={data} />;
}
