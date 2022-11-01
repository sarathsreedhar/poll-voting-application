export interface Choice {
  choice: string
  url: string
  votes: number
}

export interface Question {
  question: string
  published_at: string
  url: string
  choices: Choice[]
}

export interface QuestionListState {
  questionList: Question[]
  isLoading: boolean
  isError: boolean
}
