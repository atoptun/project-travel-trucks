import CamperList from '@/components/CamperList/CamperList';
import FilterForm from '@/components/FilterForm/FilterForm';
import { useFilters } from '@/hooks';
import { useGetCampersQuery } from '@/redux/campers/apis';

function CampersPage() {
  const { filters, loadMore, setFilters, searchParams } = useFilters();

  const { campers, hasMore, isFetching, isError } = useGetCampersQuery(
    filters,
    {
      selectFromResult: ({ data, isFetching, isError, error }) => ({
        campers: data?.items ?? [],
        hasMore: (data?.total ?? 0) > (data?.items ?? []).length,
        isFetching,
        isError,
        error,
      }),
    },
  );

  // console.info('CampersPage filters', filters);
  // console.info('CampersPage', campers);

  const isNotFound = campers.length === 0;

  const handleMoreClick = () => {
    loadMore();
  };

  return (
    <>
      <div>CampersPage</div>
      <FilterForm setFilters={setFilters} searchParams={searchParams} />
      {isNotFound && <p>Nothing found</p>}
      {isFetching && <p>Fetching ...</p>}
      {isError && <p>Something went wrong... Try later</p>}
      {campers.length > 0 ? <CamperList campers={campers} /> : <p>Empty</p>}
      {hasMore && (
        <button type="button" onClick={handleMoreClick}>
          Load more
        </button>
      )}
    </>
  );
}
export default CampersPage;
