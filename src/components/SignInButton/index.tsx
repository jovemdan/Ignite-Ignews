import { FaGithub } from '../../../node_modules/react-icons/fa/index'
import { FiX } from '../../../node_modules/react-icons/fi/index'

import styles from './styles.module.scss'
export function SignInButton() {
  const isUserLoggedIn = true
  return isUserLoggedIn ? (
    <button
      type="button"
      className={styles.signInButton}
    >
      <FaGithub color="#04d361" />
      Danilo Gonçalves
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button
      type="button"
      className={styles.signInButton}
    >
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  )
}
