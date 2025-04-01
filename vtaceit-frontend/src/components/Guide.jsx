import React from 'react'

const Guide = ({guide}) => {

    return (
        <div className="border-2 w-250 h-100 bg-vtorange ">
            <h1 className = "mt-5 ml-5 mt-">DIFFICULTY</h1>

            <div className="mt-1">
                <h2 className = "text-white float-left ml-35  text-lg">Course: {guide.courseDept}{guide.courseNumber}</h2>
                <h2 className = "text-white float-left ml-45  text-lg">Professor: {guide.profName}</h2>
                <h2 className= "text-white float-right pr-5 text-lg "> Date Posted: {guide.date[1]}/{guide.date[2]}/{guide.date[0]}</h2>
            </div>
            <div className="text-5xl text-center ml-5 border-1 border-black w-20 h-20 bg-gray-500 ">{guide.difficulty}</div>
            <div className = "">
                <h2 className = "text-white float-left ml-35 mt-1">Grade: {guide.grade}</h2>
                <h2 className = "text-white float-left ml-60 mt-1">Semester: {guide.semTaken}</h2>
                <h2 className = "text-white float-left ml-49 mt-1">Attendance: {guide.attendanceReq}</h2>
            </div>
            <h2 className = "text-white  ml-10 mt-20 ">
                Comments: {guide.comments}

            </h2>


        </div>


    )
 }
export default Guide;