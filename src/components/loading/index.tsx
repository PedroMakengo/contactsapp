import { ActivityIndicator } from 'react-native'
import { styles } from './styles'

export function Loading() {
  return <ActivityIndicator size="large" style={styles.loading} />
}
