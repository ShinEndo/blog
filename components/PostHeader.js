import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faClock} from '@fortawesome/free-regular-svg-icons'
import styles from 'styles/postHeader.module.css'
import ConvertDate from './ConvertDate'

const PostHeader = ({title,subtitle,publish}) => {
  return (
	<div className={styles.stack}>
		<p className={styles.subtitle}>{subtitle}</p>
		<h1 className={title}>{title}</h1>
		{publish && <div className={styles.publish}>
			<FontAwesomeIcon icon={faClock} size="lg" color="var(--gray-25)" />
			<ConvertDate dateISO={publish} />
			</div>}
	</div>
  )
}

export default PostHeader