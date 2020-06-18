import Link from 'next/link';
import { VehiclePerson } from '../../api/VehiclePerson';

export interface ListProps {
  ownersList?: VehiclePerson[];
}

export default function List({ ownersList }: ListProps) {
  return (
    <div>
      {ownersList &&
        ownersList.map((el, index) => (
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

List.getInitialProps = async () => {
  const response = await fetch('http://localhost:4001/vehicles');
  const ownersList: VehiclePerson[] | undefined = await response.json();
  return { ownersList };
};
