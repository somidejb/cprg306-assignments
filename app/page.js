import Image from 'next/image'
import Link from 'next/link'
import StudentInfo from './StudentInfo'

export default function Home() {
  return (
    <>
      <div>
        <h1>CPRG 306: Web Development 2 - Assignments</h1>
        <StudentInfo />
        <ul>
          <li>
            <Link href = '\week2'>Week 2</Link>
          </li>
          <li>
            <Link href = '\week3'>Week 3</Link>
          </li>
        </ul>
      </div>
  
    </>
  
  )
}
