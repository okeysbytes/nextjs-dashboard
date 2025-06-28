import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
export default function Page() {
    return (
            <main className="flex min-h-screen flex-col p-6">
      
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`${lusitana.className} text-xl text-gray-
          800 md:text-3xl md:leading-normal`}>
            <strong>This site is under construction</strong></p>
            <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>Please bear with us!</p>
       </div>
       </div>
       </main>
    );
  }