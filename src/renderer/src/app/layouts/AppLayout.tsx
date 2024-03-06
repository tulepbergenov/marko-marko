import { ILayout } from '@renderer/shared/types'
import { Sidebar } from '@renderer/widgets'

export const AppLayout = ({ children }: ILayout) => {
  return (
    <div className="flex-auto grid grid-cols-[250px_1fr]">
      <Sidebar />
      <main className="pt-10 px-4">{children}</main>
    </div>
  )
}
