import {Inter} from 'next/font/google'
import {HomePage} from "@/app";

const inter = Inter({subsets: ['latin']})

export default function Home() {
  return <main>
    <HomePage/>
  </main>
}
