export interface Props {
  title?: string
  icon?: any
  width?: string | number
  height?: string | number
  bgcolor?: string
  type?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}
