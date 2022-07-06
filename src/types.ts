export interface DownloadRequest {
  resourceKey: string,
  accessToken?: string,
}

export interface DownloadInfo {
  files: DownloadFiles[],
  gate: DownloadGates,
  layout: DownloadLayouts,
  directURL: string,
  isDirect: boolean,
}

export interface DownloadFiles {
  quickkey: string,
  name?: string,
  type?: string,
  size?: number,
}

export const enum DownloadGates {
  Public = 0,
  Captcha = 1,
  Password = 2,
  Domain = 3,
};

export const enum DownloadLayouts {
  ProDefault = 0,
  FreeDefault = 1,
  WallpaperWinZip = 2,
}
