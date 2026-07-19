import { type ComponentType, Suspense } from 'react';

export const withSuspense = <P extends object>(Component: ComponentType<P>) => {
  return (props: P) => (
    // TODO: need normal loader
    <Suspense fallback={<p>loading...</p>}>
      <Component {...props} />
    </Suspense>
  );
};
