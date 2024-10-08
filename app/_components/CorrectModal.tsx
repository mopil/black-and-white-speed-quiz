import React, { ReactElement } from "react";
import Link from "next/link";
import { quizList, findQuiz } from "@/app/quizInfo";
import type { Quiz } from "@/app/quizInfo";


interface props {
    open: boolean;
    currentQuizId: number;
}

const CorrectModal = (props: props): ReactElement => {
    const { open, currentQuizId } = props;
    console.log(`currentQuizId = ${typeof(currentQuizId)}`)
    const nextQuizId = currentQuizId + 1;
    console.log("nextQuizId = " + nextQuizId)
    const currentQuiz: Quiz = findQuiz(currentQuizId);

    return (
        <div className="modal-wrap">
            <div className={open ? 'bg' : ''} />
            <div className={open ? 'modal active' : 'modal'}>
                <div className="area">
                    <button className="close">
                        <Link href={`/quiz/${nextQuizId}`}>
                            다음 문제
                        </Link>
                    </button>
                    <p>생존하셨습니다</p>
                    <div>
                        {currentQuiz.reasons}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CorrectModal;