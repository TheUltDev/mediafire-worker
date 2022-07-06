import {Hono} from 'hono';
import {jsx} from 'hono/jsx';
import {serveStatic} from 'hono/serve-static';
import {fetchDownload, getDownloadPage} from 'modules/download';
import {isQuickkey, isCollectionKey} from 'utils/mediafire';

const app = new Hono({strict: false});

app.use('/static/*', serveStatic({root: './ui/assets'}));

app.all('/file/:key', async (c) => {
  const {key} = c.req.param();
  if (!isQuickkey(key) && !isCollectionKey(key))
    return c.redirect('/error');
  const download = await fetchDownload({resourceKey: key});
  if (download.isDirect && download.directURL)
    return c.redirect(download.directURL);
  const DownloadPage = getDownloadPage(download);
  return c.html(<DownloadPage {...download}/>);
});

app.fire();
