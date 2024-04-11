'use client'
import { useContext } from 'react'
import InvalidConfigurationError from '../invalid-configuration-error'
import Loading from '../loading'
import { ExperimentContext } from '../layout'
import Link from "next/link";

const FinishPage = ({ params }: { params: { name: string } }): JSX.Element => {
  const context = useContext(ExperimentContext)
  const data = context?.data

  if (context?.error === true) return <InvalidConfigurationError />
  if (data == null) return <Loading />

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="bg-slate-800 rounded-md p-lg flex flex-col items-center text-white">
        <div className="text-lg">
          {data.endText ??
            'Thank you for participating in this test.\n Your results have been submitted.'}
        </div>
        <Link href={`/`} className="mt-md">
          <button className="bg-blue-500 p-xs rounded-lg text-white font-bold">
          Go back to homepage
          </button>
        </Link>
        <div
          className="relative before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:-translate-y-1/2 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]
        text-center mt-auto"
        >
      
        </div>
      </div>

    </main>
  )
}

export default FinishPage
