import './styles/index.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { AppLayout } from './layouts'

const App = () => {
  return (
    <AppLayout>
      <section>
        <header>
          <h1 className="font-bold">Hello World</h1>
        </header>
      </section>
    </AppLayout>
  )
}

export default App
