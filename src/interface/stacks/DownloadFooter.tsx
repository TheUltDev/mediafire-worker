import {jsx} from 'hono/jsx';
import {css} from 'interface/theme';

export function DownloadFooter() {
  return (
    <footer class={styles.root}>
      <ul class={styles.top}>
        <li class={styles.build}>
          &copy; 2022 MediaFire<span> Build 20000</span>
        </li>
        <li><a class={styles.link} href="/advertising/">Advertising</a></li>
        <li><a class={styles.link} href="/policies/terms_of_service.php">Terms</a></li>
        <li><a class={styles.link} href="/policies/privacy_policy.php">Privacy Policy</a></li>
        <li><a class={styles.link} href="/policy_violation/copyright.php">Copyright</a></li>
        <li><a class={styles.link} href="/policy_violation/terms_of_service.php">Abuse</a></li>
        <li><a class={styles.link} href="/credits/">Credits</a></li>
        <li><a class={styles.link} href="/about/">More...</a></li>
      </ul>
    </footer>
  );
}

const styles = {
  root: css({
    paddingX: 20,
    paddingY: 10,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '$gray11',
    borderTop: '1px solid $gray10',
  }),
  top: css({
    height: 46,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    listStyle: 'none',
  }),
  link: css({
    marginLeft: 10,
    display: 'flex',
    textDecoration: 'none',
    fontSize: '',
    color: '$gray4',
    '&:hover': {
      textDecoration: 'underline',
    },
  }),
  build: css({
    fontSize: '$2',
    color: '$gray4',
  }),
};
