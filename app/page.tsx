import Link from "next/link";

export default function Home() {
  return (
    <div className="grid place-items-center">
      <div className="text-2xl">
        흑백요리사 스피드퀴즈
      </div>
      <div>
        <button className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">
          <Link href={`/quiz/1`}>
            START!
          </Link>
        </button>
      </div>
    </div>
  );
}
