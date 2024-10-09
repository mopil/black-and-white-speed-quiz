'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <div className="text-9xl">흑백요리사 스피드퀴즈</div>
      <div>
        <motion.button
          initial={{ scale: 1 }}
          whileTap={{ scale: 0.9 }}
          className="text-5xl my-10 py-6 px-14 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700"
        >
          <Link href={`/quiz/1`}>GO!</Link>
        </motion.button>
      </div>
    </div>
  )
}
