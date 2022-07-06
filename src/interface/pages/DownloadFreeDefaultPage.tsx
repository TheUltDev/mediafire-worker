import {jsx} from 'hono/jsx';
import {css} from 'interface/theme';
import {DefaultLayout} from 'interface/layouts/DefaultLayout';
import {DownloadHeader} from 'interface/stacks/DownloadHeader';
import {DownloadFooter} from 'interface/stacks/DownloadFooter';
import {DownloadButton} from 'interface/stacks/DownloadButton';
import {getDownloadSize, getDownloadTitle} from 'modules/download';
import {DownloadInfo} from 'types';


export function DownloadFreeDefaultPage(props: DownloadInfo) {
  return (
    <DefaultLayout title={getDownloadTitle(props.files)}>
      <DownloadHeader/>
      <main class={styles.root}>
        <DownloadButton url={props.directURL}>
          {`DOWNLOAD (${getDownloadSize(props.files)})`}
        </DownloadButton>
      </main>
      <DownloadFooter/>
    </DefaultLayout>
  );
}

const styles = {
  root: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  }),
};
