import Link from 'next/link';

const people = [
  { v: 'car', name: 'June' },
  { v: 'bike', name: 'Tess' },
  { v: 'airplane', name: 'Tony' }
];

export default function Index() {
  return (
    <div>
      <h1>Details Page</h1>
      {people.map((x, index) => (
        <Link as={`/${x.v}/${x.name}`} href="/[vehicle]/[person]" key={index}>
          <a>
            Navigate to {x.name}'s {x.v}
          </a>
        </Link>
      ))}
    </div>
  );
}
