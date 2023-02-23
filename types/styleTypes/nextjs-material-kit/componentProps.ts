import { CSSProperties, ReactNode } from 'react'

export interface BasicComponentProps {
  styleProps?: CSSProperties
  className?: string
  children?: ReactNode
}
