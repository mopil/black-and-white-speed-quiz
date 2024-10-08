import { atom } from "jotai";

export type Quiz = {
    id: number;
    question: string;
    answer: boolean;
    reasons: string | null;
    evidenceImageUrls: string[] | null;
}

export const correctCountAtom = atom(0);

export const findQuiz = (quizId: number): Quiz => {
    const quiz: Quiz | undefined = quizList.find((quiz: Quiz) => {
        console.log(`quiz.id 타입 = ${typeof(quiz.id)}`)
        console.log(`quizId 타입 = ${typeof(quizId)}`)
        return quiz.id === quizId
    });
    if (quiz) {
        return quiz
    } else {
        throw new Error(`${quizId} 존재하지 않는 퀴즈 id 입니다.`)
    }
}

export const quizList: Quiz[] = [
    {
        id: 1,
        question: "질문1",
        answer: true,
        reasons: null,
        evidenceImageUrls: null
    }
]
