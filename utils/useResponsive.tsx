import { useMediaQuery } from 'react-responsive'

export default function useResponsive() {
  return useMediaQuery({ query: '(max-width: 768px)' })
}
