import {jsx} from 'hono/jsx';
import {css} from 'interface/theme';

export function DownloadHeader() {
  return (
    <header class={styles.root}>
      <a class={styles.logo} href="/">
        <img
          alt="MediaFire"
          src="https://static.mediafire.com/images/backgrounds/header/mf_logo_full_color.svg"
          width={190}
          height={35}
        />
      </a>
    </header>
  );
}

const styles = {
  root: css({
    height: 60,
    paddingX: 10,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '$white',
    border: '1px solid $gray9',
  }),
  logo: css({
    color: '$blue4',
    fontSize: '$4',
    textDecoration: 'none',
  }),
};
