import Image from 'next/image'
import Link from 'next/link'
import StudentInfo from './StudentInfo'

export default function Home() {
  return (
    <div>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo />
      <Link href = '/week2/page'>Week 2</Link>
    </div>
  
  )
}
