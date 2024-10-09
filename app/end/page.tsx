'use client'
import { useAtom } from 'jotai'
import { quizList, correctQuizIdsAtom } from '@/app/quizInfo'
import Image from 'next/image'

const getEndImage = (correctCount: number): string => {
  if (correctCount < 3) {
    return '/end_low.jpeg'
  } else if (correctCount >= 3 && correctCount < 7) {
    return '/end_middle.png'
  } else {
    return '/end_high.png'
  }
}

export default function End() {
  const [correctQuizIds, setCorrectQuizIds] =
    useAtom<Set<number>>(correctQuizIdsAtom)
  const image = getEndImage(correctQuizIds.size)
  const isAllCorrect = correctQuizIds.size == quizList.length

  return (
    <div className="grid place-items-center">
      <div className="text-2xl">
        {isAllCorrect
          ? `모두 맞췄어요!`
          : `땡! 지금까지 총 ${correctQuizIds.size}/${quizList.length}개의 문제를 맞췄어요!`}
      </div>
      <Image src={image} alt="end" width={500} height={350} priority />
      <div>
        <button className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">
          공유하기
        </button>
      </div>
    </div>
  )
}
