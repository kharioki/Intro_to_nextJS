import { useRouter } from 'next/router';

export default function Person({ ownersList }) {
  const router = useRouter();

  return <pre>{JSON.stringify(ownersList, null, 4)}</pre>;
}

Person.getInitialProps = async ctx => {
  const { query } = ctx;
  const response = await fetch(
    'http://localhost:4001/vehicles?ownerName=' + query.person
  );
  const ownersList = await response.json();
  return { ownersList };
};
