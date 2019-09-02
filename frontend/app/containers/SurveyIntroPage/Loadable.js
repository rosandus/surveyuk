/**
 * Asynchronously loads the component for FeaturePage
 */
import Loadable from 'react-loadable';

// eslint-disable-next-line import/no-unresolved
import LoadingIndicator from 'components/LoadingIndicator';

export default Loadable({
  loader: () => import('./index'),
  loading: LoadingIndicator
});
