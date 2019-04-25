import { useEffect } from 'react'
import { useAlert } from 'react-alert'

function Alerts() {
  const alert = useAlert()
  useEffect(() => {
    alert.show('It Works!')
  }, [])
  return null
}

export default Alerts
