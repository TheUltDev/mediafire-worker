import {jsx} from 'hono/jsx';
import {DefaultLayout} from 'interface/layouts/DefaultLayout';
import {getDownloadTitle} from 'modules/download';
import {DownloadInfo} from 'types';

export function ErrorFileNotFoundPage(props: DownloadInfo) {
  return (
    <DefaultLayout title={getDownloadTitle(props.files)}>
      <h1>File Not Found</h1>
    </DefaultLayout>
  );
}
