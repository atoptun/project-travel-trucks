import type { CamperIntf } from '@/types/common';

import CamperCard from '../CamperCard/CamperCard';
// import styles from './CamperList.styles'

interface CamperListProps {
  campers: CamperIntf[];
}

function CamperList({ campers }: CamperListProps) {
  return (
    <ul>
      {campers.map(item => (
        <li key={item.id}>
          <CamperCard camper={item} />
        </li>
      ))}
    </ul>
  );
}
export default CamperList;
