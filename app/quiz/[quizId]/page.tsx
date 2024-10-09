'use client'
import { findQuiz, correctQuizIdsAtom } from '@/app/quizInfo'
import type { Quiz } from '@/app/quizInfo'
import { useState, useEffect, useRef } from 'react'
import CorrectModal from '@/app/_components/CorrectModal'
import { useAtom } from 'jotai'
import { useRouter } from 'next/navigation' // next/router가 아니라 navigation에서 가져와야하니 주의
import { motion, AnimatePresence } from 'framer-motion'

type Props = {
  params: { quizId: number }
}

export default function Quiz({ params }: Props) {
  const [isCorrected, setIsCorrected] = useState<boolean | null>(null)
  const [correctQuizIds, setCorrectQuizIds] =
    useAtom<Set<number>>(correctQuizIdsAtom)
  const router = useRouter()
  const quiz: Quiz = findQuiz(Number(params.quizId))

  const saveAnswer = (userAnswer: boolean) => {
    if (quiz.answer === userAnswer) {
      setIsCorrected(true)
    } else {
      setIsCorrected(false)
    }
  }

  useEffect(() => {
    if (isCorrected == true) {
      setCorrectQuizIds(correctQuizIds.add(Number(params.quizId)))
      console.log('맞췄어요!' + correctQuizIds)
    } else if (isCorrected == false) {
      console.log('틀렸어요!')
      router.push('/end')
    }
  }, [isCorrected])

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="text-2xl my-3">#{params.quizId} QUIZ</div>
        <div className="text-3xl my-3 px-10">{quiz.question}</div>
      </div>
      <div className="my-10 flex justify-center items-center space-x-4">
        <button
          className="text-9xl py-5 px-12 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700"
          onClick={() => saveAnswer(true)}
        >
          O
        </button>
        <button
          className="text-9xl py-5 px-12 font-semibold rounded-lg shadow-md text-white bg-red-500 hover:bg-red-700"
          onClick={() => saveAnswer(false)}
        >
          X
        </button>
      </div>
      {isCorrected && (
        <CorrectModal open={isCorrected} currentQuizId={params.quizId} />
      )}
      {/* <AnimatePresence> 여기다 모달 애니메이션을 주고 싶은데 잘 안 된다...
        {isCorrected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <CorrectModal open={isCorrected} currentQuizId={params.quizId} />
          </motion.div>
        )}
      </AnimatePresence> */}
    </>
  )
}
