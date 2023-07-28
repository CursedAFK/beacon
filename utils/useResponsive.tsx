import { useMediaQuery } from 'react-responsive'

const useResponsive = () => useMediaQuery({ query: '(max-width: 768px)' })

export default useResponsive
