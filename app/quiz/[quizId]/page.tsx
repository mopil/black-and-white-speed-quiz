"use client"
import { findQuiz, correctCountAtom } from "@/app/quizInfo";
import type { Quiz } from "@/app/quizInfo";
import { useState, useEffect, useRef } from "react";
import CorrectModal from "@/app/_components/CorrectModal";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation"; // next/router가 아니라 navigation에서 가져와야하니 주의

type Props = {
  params: { quizId: number; }
}


export default function Quiz({ params }: Props) {
  const [isCorrected, setIsCorrected] = useState<boolean | null>(null);
  const [correctCount, setCorrectCount] = useAtom<number>(correctCountAtom);
  const router = useRouter();

  const saveAnswer = (quizId: number, userAnswer: boolean) => {
    const quiz: Quiz = findQuiz(quizId);

    if (quiz.answer === userAnswer) {
      setIsCorrected(true);

    } else {
      setIsCorrected(false);
    }
  }

  useEffect(() => {
    if (isCorrected == true) {
      setCorrectCount(correctCount + 1);
      console.log("맞췄어요!" + correctCount); // 여기서 왜 0이 찍히는가? 
    } else if (isCorrected == false) {
      console.log("틀렸어요!");
      router.push("/end");
    }
  }, [isCorrected]);

  return (
    <>
      <div>
        {params.quizId}번째 퀴즈 입니다.
      </div>
      <div>
        질문입니다.
      </div>
      <button className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700"
        onClick={() => saveAnswer(params.quizId, true)}>
        O
      </button>
      <button className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-red-500 hover:bg-red-700"
        onClick={() => saveAnswer(params.quizId, false)}>
        X
      </button>
      {isCorrected &&
        <CorrectModal open={isCorrected} currentQuizId={params.quizId} />
      }
    </>
  );
}
