import {html} from 'hono/html';
import {getCssText} from 'interface/theme';

interface Props {
  title: string;
  url?: string;
  image?: string;
  children?: any;
}

export const DefaultLayout = (props: Props) => html`<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>${props.title}</title>
      <meta http-equiv="x-ua-compatible" content="ie=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <meta name="keywords" content="online storage, free storage, cloud Storage, collaboration, backup file Sharing, share Files, photo backup, photo sharing, ftp replacement, cross platform, remote access, mobile access, send large files, recover files, file versioning, undelete, Windows, PC, Mac, OS X, Linux, iPhone, iPad, Android">
      <meta name="description" content="MediaFire is a simple to use free service that lets you put all your photos, documents, music, and video in a single place so you can access them anywhere and share them everywhere.">
      <meta name="slurp" content="noindex,nofollow">
      <meta name="robots" content="noindex,nofollow">
      <meta name="googlebot" content="noindex,nofollow">
      <meta itemprop="name" content="${props.title}">
      <meta itemprop="image" content="${props.image}">
      <meta itemprop="description" content="">
      <meta property="fb:app_id" content="124578887583575">
      <meta property="og:site_name" content="MediaFire">
      <meta property="og:locale" content="en_US">
      <meta property="og:type" content="website">
      <meta property="og:description" content="">
      <meta property="og:url" content="${props.url}">
      <meta property="og:title" content="${props.title}">
      <meta property="og:image" content="${props.image}">
      <meta name="twitter:card" content="summary_large_image">
      <meta name="twitter:site" content="@MediaFire">
      <meta name="twitter:description" content="">
      <meta name="twitter:url" content="${props.url}">
      <meta name="twitter:title" content="${props.title}">
      <meta name="twitter:image" content="${props.image}">
      <style>${getCssText()}</style>
    </head>
    <body>
      ${props.children}
    </body>
  </html>
`;
