import Link from 'next/link';
import React from 'react'

const StudentInfo = () => {
    const name = 'Jubril Somide';
    const courseSection = 'CPRG 306 A';
    const githubRepo = 'https://github.com/somidejb/cprg306-assignments';

    return(
        <div>
            <h1>Jubril's Student Information</h1>
            <p>Name: {name}</p>
            <p>Course Section: {courseSection}</p>
            <p>GitHub Repository: {' '}<Link href={githubRepo}>github Repository</Link></p>
        </div>
    )
}

export default StudentInfo