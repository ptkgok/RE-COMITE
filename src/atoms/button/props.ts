export interface Props {
  title?: string
  icon?: any
  width?: string | number
  height?: string | number
  bgcolor?: string

  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}
