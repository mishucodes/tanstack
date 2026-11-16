import {createRouter as createTanStackRouter} from '@tanstack/react-router';
import {routeTree} from './routeTree.gen';
import {SimpleNotFoundPage} from './components/not-found-pages/simple-not-found';
import {SimpleErrorPage} from './components/error-pages/simple-error';

export function getRouter()
{
  const router = createTanStackRouter(
    {
      routeTree,
      scrollRestoration: true,
      defaultPreload: 'intent',
      defaultPreloadStaleTime: 0,
      defaultNotFoundComponent: SimpleNotFoundPage,
      defaultErrorComponent: SimpleErrorPage
    });
  return router;
}

declare module '@tanstack/react-router'
{
  interface Register {router: ReturnType<typeof getRouter>}
}