import {ErrorFileNotFoundPage} from 'interface/pages/ErrorFileNotFoundPage';
import {DownloadProDefaultPage} from 'interface/pages/DownloadProDefaultPage';
import {DownloadFreeDefaultPage} from 'interface/pages/DownloadFreeDefaultPage';
import {DownloadWallpaperWinZipPage} from 'interface/pages/DownloadWallpaperWinZipPage';
import {DownloadLayouts, DownloadGates, DownloadRequest, DownloadInfo, DownloadFiles} from 'types';
import {byteSize} from 'utils/common';

export async function fetchDownload(req: DownloadRequest): Promise<DownloadInfo> {
  // TODO: contact server with user info and quickkeys get layout, gate, and file info back
  /*const _info = await fetch('/downloadinfo', {
    body: JSON.stringify(req),
    method: 'POST',
  });*/
  return {
    files: [{quickkey: req.resourceKey}],
    layout: DownloadLayouts.FreeDefault,
    gate: DownloadGates.Public,
    directURL: 'https://google.com',
    isDirect: false,
  };
}

export function getDownloadPage(download: DownloadInfo) {
  // User does not have access, show gate page
  if (download.gate !== DownloadGates.Public) {
    switch (download.gate) {
      case DownloadGates.Password:
        return ErrorFileNotFoundPage;
      case DownloadGates.Captcha:
        return ErrorFileNotFoundPage;
      case DownloadGates.Domain:
        return ErrorFileNotFoundPage;
    }
  }

  // User has access, show them a download page (or direct download)
  switch (download.layout) {
    case DownloadLayouts.ProDefault:
      return DownloadProDefaultPage;
    case DownloadLayouts.FreeDefault:
      return DownloadFreeDefaultPage;
    case DownloadLayouts.WallpaperWinZip:
      return DownloadWallpaperWinZipPage;
  }
}

export function getDownloadSize(files: DownloadFiles[]) {
  let totalSize = 0;
  files.forEach(file => totalSize += file.size || 0);
  return byteSize(totalSize);
}

export function getDownloadTitle(files: DownloadFiles[]) {
  return files.length === 1
    && files[0].name || 'Download files';
}
