import {jsx} from 'hono/jsx';
import {css} from 'interface/theme';

interface Props {
  url: string,
  children?: string,
}

export function DownloadButton(props: Props) {
  return (
    <a class={styles.root} href={props.url}>
      {props.children}
    </a>
  );
}

const styles = {
  root: css({
    height: 60,
    width: 250,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '$blue4',
    borderRadius: '$1',
    color: '$white',
    fontSize: '$1',
    fontWeight: 'bold',
    textDecoration: 'none',
    '&:hover': {
      background: '$blue3',
    },
  }),
};
