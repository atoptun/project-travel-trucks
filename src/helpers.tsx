import { type ComponentType, Suspense } from 'react';

export const withSuspense = <P extends object>(Component: ComponentType<P>) => {
  return (props: P) => (
    <Suspense fallback={<p>loading...</p>}>
      <Component {...props} />
    </Suspense>
  );
};

export const withSuspenseWithoutProps = (Component: ComponentType) => {
  return (
    <Suspense fallback={<p>loading...</p>}>
      <Component />
    </Suspense>
  );
};
