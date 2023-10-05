import Link from 'next/link';
import React from 'react'

const StudentInfo = (props) => {
    return(
        <div>
            <h1 className='italic hover:not-italic text-blue-400'>Student Information</h1>
            <p>Name: {props.name}</p>
            <p>Course Section: {props.courseSection}</p>
            <p>GitHub Repository: {' '}<Link href={props.githubRepo}><span className='cursor-pointer'>github Repository</span></Link></p>
        </div>
    )
}

export default StudentInfo