import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-10 shrink-0 items-end bg-red-500 p-4 md:h-26">
      </div>
      
      <div className="flex h-10 shrink-0 items-end bg-blue-500 md:h-26">
      </div>
      
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`${lusitana.className} text-xl text-gray-
          800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to <i>pretaught.com</i></strong></p>
            <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>We will help you read and <strong><i>understand</i></strong> your <br/>first Java textbook</p>
            <Link
            href="/explanations"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Find out more</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
        </div>
      </div>
    </main>
  );
}