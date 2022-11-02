import Layout from './components/Layout'
import { QuestionList } from './features/poll/QuestionList'

function App() {
  return (
    <div className="App">
      <Layout>
        <QuestionList />
      </Layout>
    </div>
  )
}

export default App
