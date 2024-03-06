import { createId } from '../lib'
import { INoteInfo } from '../types/models.type'

export const NOTES_MOCK: INoteInfo[] = [
  {
    id: createId(),
    title: 'First note',
    lastEditTime: new Date().getTime()
  },
  {
    id: createId(),
    title: 'Second note',
    lastEditTime: new Date().getTime()
  },
  {
    id: createId(),
    title: 'Third note',
    lastEditTime: new Date().getTime()
  }
]
