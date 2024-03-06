import { cn, dateFormatter } from '@renderer/shared/lib'
import { ISidebar } from './Sidebar.type'
import { Button } from '@renderer/shared/ui-kit'
import { BiEditAlt } from 'react-icons/bi'
import { FaRegTrashCan } from 'react-icons/fa6'
import { NOTES_MOCK } from '@renderer/shared/mocks'

export const Sidebar = ({ className, ...props }: ISidebar) => {
  return (
    <aside className={cn('px-4 pt-10 bg-white/5 border-r border-r-white/20', className)} {...props}>
      <div className="flex items-center justify-between">
        <Button type="button" aria-label="Create note" title="Create note">
          <BiEditAlt className="w-4 h-auto" />
        </Button>
        <Button type="button" aria-label="Delete note" title="Delete note">
          <FaRegTrashCan className="w-3 h-auto" />
        </Button>
      </div>
      <ul className="flex flex-col gap-y-4 mt-4">
        {NOTES_MOCK.map((note) => (
          <li key={note.id} className="flex">
            <button
              type="button"
              className="flex flex-col transition-colors ease-in-out duration-200 gap-y-3 px-3 py-2 rounded w-full md:hover:bg-white/20 active:hover:bg-white/20"
            >
              <span className="font-medium">{note.title}</span>
              <span className="text-xs">{dateFormatter(note.lastEditTime)}</span>
            </button>
          </li>
        ))}
      </ul>
    </aside>
  )
}
