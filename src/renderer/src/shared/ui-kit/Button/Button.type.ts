import { IButtonElement } from '@renderer/shared/types'
import { ReactNode } from 'react'

export interface IButton extends IButtonElement {
  children: ReactNode
}
