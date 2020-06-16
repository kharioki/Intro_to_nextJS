import Link from 'next/link';

export default function Index() {
  return (
    <div>
      <h1>Details Page</h1>
      <Link as="/car/samantha" href="/[vehicle]/[person]">
        <a>Navigate to Samantha's car</a>
      </Link>
    </div>
  );
}
