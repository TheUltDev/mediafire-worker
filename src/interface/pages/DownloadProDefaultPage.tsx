import {jsx} from 'hono/jsx';
import {DefaultLayout} from 'interface/layouts/DefaultLayout';
import {DownloadButton} from 'interface/stacks/DownloadButton';
import {getDownloadSize, getDownloadTitle} from 'modules/download';
import {DownloadInfo} from 'types';

export function DownloadProDefaultPage(props: DownloadInfo) {
  return (
    <DefaultLayout title={getDownloadTitle(props.files)}>
      <DownloadButton url={props.directURL}>
        {`DOWNLOAD (${getDownloadSize(props.files)})`}
      </DownloadButton>
    </DefaultLayout>
  );
}
