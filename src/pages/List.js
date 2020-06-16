import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function List() {
  const [owners, setOwners] = useState([]);

  useEffect(() => {
    async function loadData() {
      const response = await fetch('http://localhost:4001/vehicles');
      const ownersList = await response.json();
      setOwners(ownersList);
    }

    loadData();
  }, []);

  return (
    <div>
      {owners.map((el, index) => (
        <div key={index}>
          <Link
            as={`/${el.vehicle}/${el.ownerName}`}
            href="/[vehicle]/[person]"
          >
            <a>
              Navigate to {el.ownerName}'s {el.vehicle}
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
