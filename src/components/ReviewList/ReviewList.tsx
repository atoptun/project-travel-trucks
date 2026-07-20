import type { ReviewIntf } from '@/types/common';

interface ReviewListProps {
  reviews: ReviewIntf[];
}

function ReviewList({ reviews }: ReviewListProps) {
  {
    /* Список відгуків, де кожен відгук всередині — це <article> */
  }
  return <div>ReviewList {reviews?.length}</div>;
}
export default ReviewList;
