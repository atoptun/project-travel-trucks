import { useParams } from 'react-router-dom';

// import { useAppDispatch, useAppSelector } from '@/hooks';
import { useGetCamperByIdQuery } from '@/redux/campers/apis';

import NotFoundPage from '../NotFoundPage/NotFoundPage';

function CamperDetailsPage() {
  // const dispatch = useAppDispatch();
  // const useAppSelector()

  const { id } = useParams<{ id: string }>();
  const { data, isError, isLoading, error } = useGetCamperByIdQuery(id || '', {
    skip: !id,
  });

  console.info(id, data, isLoading, isError, error);

  if (isError && error?.status === 404) return <NotFoundPage />;

  console.info(data);

  return (
    <>
      <div>CamperDetailsPage</div>
      {isError && <p>Error</p>}
      {isLoading && <p>Loading...</p>}
      {data && (
        <p>
          {data.id} - {data.name}
        </p>
      )}
    </>
  );
}
export default CamperDetailsPage;
