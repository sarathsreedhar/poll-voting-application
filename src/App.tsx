import { Routes, Route } from 'react-router-dom'
import ErrorPage from './components/errorPage'
import Layout from './components/Layout'
import { QuestionDetailsPage } from './features/poll/QuestionDetailsPage'
import { QuestionListPage } from './features/poll/QuestionList/QuestionListPage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <QuestionListPage />
            </Layout>
          }
        />
        <Route path="questions/:id" element={<QuestionDetailsPage />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App
