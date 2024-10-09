import React, { ReactElement } from 'react'
import Link from 'next/link'
import { findQuiz, correctQuizIdsAtom, quizList } from '@/app/quizInfo'
import type { Quiz } from '@/app/quizInfo'
import Image from 'next/image'

interface props {
  open: boolean
  currentQuizId: number
}

const CorrectModal = (props: props): ReactElement => {
  const { open, currentQuizId } = props
  const nextQuizId = Number(currentQuizId) + 1
  const currentQuiz: Quiz = findQuiz(currentQuizId)

  const lastQuiz: Quiz = quizList.reduce((prev, current) => {
    return current.id > prev.id ? current : prev
  })

  const getNextQuiz = () => {
    if (lastQuiz.id == currentQuizId) {
      return <Link href={`/end`}>다음 문제</Link>
    } else {
      ;<Link href={`/quiz/${nextQuizId}`}>다음 문제</Link>
    }
  }

  return (
    <div className="h-screen fixed justify-center flex bg-white items-center top-0 w-full text-center bg-opacity-10">
      <div className={open ? 'bg' : ''} />
      <div className={open ? 'modal active' : 'modal'}>
        <div className="px-4 py-2 justify-center items-center">
          <Image
            src="/correct.png"
            alt="correct"
            width={300}
            height={40}
            className="rounded-lg"
          />
          <div>{currentQuiz.reasons}</div>
          <button className="my-10 py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">
            {getNextQuiz()}
          </button>
        </div>
      </div>
    </div>
  )
}

export default CorrectModal
