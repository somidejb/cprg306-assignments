import Link from 'next/link';
import React from 'react'

const StudentInfo = () => {
    return(
        <div>
            <h1 className='italic hover:not-italic text-blue-400'>Student Information</h1>
            <p>Name: Jubril Somide</p>
            <p>Course Section: CPRG 306 A</p>
            <p>GitHub Repository: <Link href='https://github.com/somidejb/cprg306-assignments'><span className='cursor-pointer'>github Repository</span></Link></p>
        </div>
    )
}

export default StudentInfo