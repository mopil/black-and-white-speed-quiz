"use client"
import { useAtom } from "jotai";
import { quizList, correctCountAtom } from "@/app/quizInfo";
import Image from "next/image";

const getEndImage = (correctCount: number): string => {
    if (correctCount < 3) {
        return "/end_low.jpeg"
    } else if (correctCount >= 3 && correctCount < 7) {
        return "/end_middle.png"
    } else {
        return "/end_high.png"
    }
}

export default function End() {
    const [correctCount, setCorrectCount] = useAtom<number>(correctCountAtom);
    const image = getEndImage(correctCount);
    return (
        <div className="grid place-items-center">
            <div className="text-2xl">
                종료! 총 {correctCount}/{quizList.length}개의 문제를 맞췄어요!
            </div>
            <Image src={image} alt="end"
                width={500} height={350} priority />
            <div>
                <button className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">
                    공유하기
                </button>
            </div>
        </div>
    );
}