import { Question } from '../../lib/types'
import { client } from '../../api/apiClient'

export const fetchQuestionList = async () => await client.get<Question[]>('')
