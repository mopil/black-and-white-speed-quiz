import { atom } from 'jotai'

export type Quiz = {
  id: number
  question: string
  answer: boolean
  reasons: string | null
  evidenceImageUrls: string[] | null
}

export const correctQuizIdsAtom = atom<Set<number>>(new Set([]))

export const findQuiz = (quizId: number): Quiz => {
  const quiz: Quiz | undefined = quizList.find((quiz: Quiz) => {
    return quiz.id === Number(quizId)
  })
  if (quiz) {
    return quiz
  } else {
    throw new Error(`${quizId} 존재하지 않는 퀴즈 id 입니다.`)
  }
}

export const quizList: Quiz[] = [
  {
    id: 1,
    question: '흑백요리사는 총 12회이다.',
    answer: true,
    reasons: null,
    evidenceImageUrls: null,
  },
  {
    id: 2,
    question: '백수저 계급 참가자는 총 20명이다.',
    answer: true,
    reasons: null,
    evidenceImageUrls: null,
  },
  {
    id: 3,
    question: '흑백요리사의 첫 방영일은 9월 18일이다.',
    answer: false,
    reasons: '9월 17일이다.',
    evidenceImageUrls: null,
  },
  {
    id: 4,
    question:
      '백수저 참가자 최현석 셰프가 운영하는 레스토랑은 `쵸이닷` 하나 뿐이다.',
    answer: false,
    reasons: '`중앙감속기`등 다른 레스토랑도 운영한다.',
    evidenceImageUrls: null,
  },
  {
    id: 5,
    question:
      '백수저 참가자 최현석 셰프가 운영하는 레스토랑은 `쵸이닷` 하나 뿐이다.',
    answer: false,
    reasons: '`중앙감속기`등 다른 레스토랑도 운영한다.',
    evidenceImageUrls: null,
  },
]
