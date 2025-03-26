import React, {useState} from 'react'
import {BiChevronDown} from 'react-icons/bi'
const NewGuide = () => {
    const [courseName, setCourseName] = useState('');
    const [dept, setDept] = useState('');
    const [openDept, setOpenDept] = useState(false);
    const[courseNumber, setCourseNumber] = useState('');
    const[profName, setProfName] = useState('');
    const[grade, setGrade] = useState('');
    const[gradeOpen, setGradeOpen] = useState(false);
    const[term, setTerm] = useState('');
    const[openTerm, setOpenTerm] = useState(false);
    const[yearTaken, setYearTaken] = useState('')
    const[attendanceReq, setAttendanceReq] = useState('')
    const[openAttendanceReq, setOpenAttendanceReq] = useState(false)
    const[difficulty, setDifficulty] = useState('')
    const[comments, setComments] = useState('')
    const today = new Date();
    const month = today.getMonth();
    const day = today.getDate();
    const year = today.getFullYear();
    const theDate = `${year}-${month}-${day}`;
    const semesterTaken = `${term} ${year}`;
    function handleDeptDropdowwn(value){
        setDept(value);
        setOpenDept(false);
        console.log(value);
    }
    function handleGradeDropdown(value){
        setGrade(value);
        setGradeOpen(false);
        console.log(value);
    }
    function handleTermDropdown(value){
        setTerm(value);
        setOpenTerm(false);
        console.log(value);
    }
    function handleAttendanceDropdown(value){
        setAttendanceReq(value);
        setOpenAttendanceReq(false);
        console.log(value);
    }
    const handleSubmit = () => {
        const body = {
            "courseName": courseName,
            "dept": dept,
            "courseNumber": courseNumber,
            "profName": profName,
            "grade": grade,
            "difficulty": difficulty,
            "attendanceReq": attendanceReq,
            "comments": comments,
            "date": theDate,
            "semTaken": semesterTaken
        };
        fetch('http://localhost:8080/newGuide', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        }).then(response=>{
            //this if statement portion is pretty much chatgpt
            //get rid of it once ur done debugging
            if (!response.ok) {
                console.log(response.json())
            }
            return response.json();
        })
            }



    return (
        <div className = "overflow-x-clip">
            <h1 className = "relative top-25 left-133 text-3xl text-white">Select the course name: </h1>
            <form className = "relative left-120 top-30">
                <input className = "bg-vtgray w-110 h-10  rounded-lg" placeholder = "Enter course name" type="text" value = {courseName} onChange = {(e) => setCourseName(e.target.value)}/>
            </form>
            <h1 className = "relative top-35 left-125 text-3xl text-white">Select the course department: </h1>

            <div className = " relative top-40 left-115 w-120 font-medium h-80">
                <div
                    onClick={()=>setOpenDept(!openDept)}
                    className = "bg-vtorange border-4 border-vtorange text-white  w-full p-2 flex items-center justify-between rounded">
                    Select Department
                    <BiChevronDown />
                </div>
                <ul className = {`bg-black   mt-2 overflow-y-auto ${openDept? "max-h-80": "max-h-0"}`}>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("ADV")}>Advertising</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("ACIS")}>Accounting & Information Systems</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("AOE")}>Aerospace and Ocean Engineering</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("AFST")}>Africana Studies</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("ALCE")}>Agr, Leadership, & Comm. Ed.</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("AAEC")}>Agricultural and Applied Econo</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("ALS")}>Agriculture and Life Sciences</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("AT")}>Agriculutral Technology</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("AINS")}>American Indian Studies</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("APSC")}>Animal and Poultry Sciences</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("APS")}>Appalachian Studies</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("AHRM")}>Apparel, Housing, & Resour Mgt</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("ARBC")}>Arabic</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("ARCH")}>Architecture</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("AAD")}>Architecture, Arts, and Design</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("ART")}>Art and Art History</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("BDS")}>Behavioral Decision Science</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("BCHM")}>Biochemistry</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("BIOL")}>Biological Sciences</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("BSE")}>Biological Systems Engineering</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("BMVS")}>Biomed & Veterinary Sciences</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("BMSP")}>Biomed Sci & Pathobiology</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("BMES")}>Biomedical Engr & Sciences</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("BC")}>Building Construction</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("BUS")}>Business</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("BIT")}>Business Information Tech</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("EDCT")}>Career and Technical Education</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("CHE")}>Chemical Engineering</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("CHEM")}>Chemistry</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("CHN")}>Chinese</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("CINE")}>Cinema</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("CEE")}>Civil and Environmental Engineering</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("CLA")}>Classics</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("COS")}>College of Science</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("COMM")}>Communication</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("CMST")}>Communication Studies</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("CMDA")}>Comp Modeling & Data Analytics</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("CS")}>Computer Science</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("CEM")}>Construction Engineering & Mgt</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("CONS")}>Consumer Studies</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("CEP")}>Cooperative Education Program</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("CRIM")}>Criminology</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("CSES")}>Crop and Soil Environmental Science</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("DASC")}>Dairy Science</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("DANC")}>Dance</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("ECON")}>Economics</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("EDCO")}>Education, Counseling</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("EDCI")}>Education, Curriculum and Instruction</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("EDEP")}>Educational Psychology</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("ECE")}>Electrical & Computer Engineering</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("ENGR")}>Engineering</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("ENGE")}>Engineering Education</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("ESM")}>Engineering Science and Mechanics</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("ENGL")}>English</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("ENT")}>Entomology</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("ENSC")}>Environmental Science</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("FCS")}>Family and Consumer Science</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("FMD")}>Fashion Merchandising & Design</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("FIN")}>Finance, Insurance, and Business</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("FNAD")}>Financial Aid</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("FA")}>Fine Arts</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("FIW")}>Fish and Wildlife Sciences</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("FST")}>Food Science and Technology</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("FL")}>Foreign Language</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("FREC")}>Forest Resources & Eviron Conservation</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("VT")}>Free Elective</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("FR")}>French</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("GEOG")}>Geography</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("GEOS")}>Geosciences</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("GER")}>German</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("GR")}>Greek</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("HEB")}>Hebrew</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("HIST")}>History</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("HORT")}>Horticulture</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("HTM")}>Hospitality and Tourism Management</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("HD")}>Human Development</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("HNFE")}>Human Nutrition, Foods, and Exercise</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("HUM")}>Humanities</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("ISE")}>Industrial and Systems Engineering</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("IDS")}>Industrial Design</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("EDIT")}>Instructional Design & Tech</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("ISC")}>Integrated Science</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("ITDS")}>Interior Design</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("IS")}>International Studies</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("ITAL")}>Italian</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("JPN")}>Japanese</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("JMC")}>Journalism and Mass Communication</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("JUD")}>Judaic Studies</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("KOR")}>Korean</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("LAR")}>Landscape Architecture</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("LAT")}>Latin</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("LDRS")}>Leadership Studies</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("LAHS")}>Liberal Arts and Human Science</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("MGT")}>Management</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("MKTG")}>Marketing</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("MSE")}>Materials Science and Engineering</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("MATH")}>Mathematics</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("ME")}>Mechanical Engineering</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("MTRG")}>Meteorology</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("MN")}>Military Navy</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("MS")}>Military Sciences (AROTC)</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("AS")}>Military, Aerospace Studies</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("MINE")}>Mining and Minerals Engineering</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("MUS")}>Music</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("NANO")}>Nanoscience</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("NR")}>Natural Resources</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("NEUR")}>Neuroscience</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("NSEG")}>Nuclear Science & Engineering</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("PSVP")}>Peace Studies</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("PHIL")}>Philosophy</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("PPE")}>Philosophy, Politics, and Econ</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("PHYS")}>Physics</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("PPWS")}>Plant Pathology, Physiology, and Weed Science</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("PSCI")}>Political Science</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("PHS")}>Population Health Sciences</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("PORT")}>Portuguese</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("PM")}>Property Management</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("PSYC")}>Psychology</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("PR")}>Public Relations</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("REAL")}>Real Estate</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("RLCL")}>Religion and Culture</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("RED")}>Residential Environment & Design</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("RUS")}>Russian</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("SPES")}>School of Plant & Environmental Science</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("SPIA")}>School of Pub & International Affairs</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("STS")}>Science Technology Studies</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("STL")}>Science, Technology, & Law</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("SOC")}>Sociology</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("SPAN")}>Spanish</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("STAT")}>Statistics</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("SUMA")}>Summer Academy</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("SBIO")}>Sustainable Biomaterials</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("SYSB")}>Systems Biology</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("EDTE")}>Technology Education</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("TA")}>Theatre and Cinema</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("TBMH")}>Trans Biol Medicine & Health</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("UNIV")}>University Course Series</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("UH")}>University Honors Program</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("REG")}>University Registrar</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("UAP")}>Urban Affairs and Planning</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("WATR")}>Water</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdowwn("WGS")}>Women's and Gender Studies</li>
                </ul>
            </div>
            <h1 className = "relative left-130 top-60 text-white text-3xl">Enter the course number:</h1>
            <form className = "relative left-119 top-62">
                    <input className = "bg-vtgray w-110 h-10  rounded-lg" type="text" placeholder = "Enter number" value = {courseNumber} onChange = {(e) => setCourseNumber(e.target.value)}/>
            </form>
            <h1 className = "relative left-120 top-70 text-white text-3xl">Enter the professor's last name:</h1>
            <form className = "relative left-119 top-72">
                <input className = "bg-vtgray w-110 h-10  rounded-lg" placeholder = "Enter name" type="text" value = {profName} onChange = {(e) => setProfName(e.target.value)}/>
            </form>
            <h1 className = "relative left-131 top-90 text-white text-3xl">Select the grade received: </h1>
            <div className = " relative top-95 left-115 w-120 font-medium h-80">
                <div
                    onClick={()=>setGradeOpen(!gradeOpen)}
                    className = "bg-vtorange border-4 border-vtorange text-white  w-full p-2 flex items-center justify-between rounded">
                    Select Grade
                    <BiChevronDown />
                </div>
                <ul className = {`bg-black   mt-2 overflow-y-auto ${gradeOpen? "max-h-80": "max-h-0"}`}>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleGradeDropdown("A")}>A</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleGradeDropdown("A-")}>A-</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleGradeDropdown("B+")}>B+</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleGradeDropdown("B")}>B</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleGradeDropdown("B-")}>B</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleGradeDropdown("A")}>C+</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleGradeDropdown("A")}>C</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleGradeDropdown("A")}>C-</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleGradeDropdown("A")}>D+</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleGradeDropdown("A")}>D</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleGradeDropdown("A")}>D-</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleGradeDropdown("A")}>F</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleGradeDropdown("I")}>I</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleGradeDropdown("P")}>P</li>
                </ul>
            </div>
            <h1 className = "relative left-100 top-120 text-white text-3xl">Select the term in which you took the class:</h1>
            <div className = " relative top-125 left-115 w-120 font-medium h-80">
                <div
                    onClick={()=>setOpenTerm(!openTerm)}
                    className = "bg-vtorange border-4 border-vtorange text-white  w-full p-2 flex items-center justify-between rounded">
                    Select Semester
                    <BiChevronDown />
                </div>
                <ul className = {`bg-black   mt-2 overflow-y-auto ${openTerm? "max-h-80": "max-h-0"}`}>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleTermDropdown("Fall")}>Fall</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleTermDropdown("Fall")}>Winter</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleTermDropdown("Spring")}>Spring</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleTermDropdown("Spring")}>Summer</li>
                </ul>
            </div>
            <h1 className = "relative left-100 top-105 text-white text-3xl">Enter the year in which you took the class:</h1>
            <form className = "relative left-119 top-110">
                <input className = "bg-vtgray w-110 h-10  rounded-lg" type="text" placeholder = "Enter year" value = {yearTaken} onChange = {(e) => setYearTaken(e.target.value)}/>
            </form>
            <h1 className = "relative left-130 top-125 text-white text-3xl">Select the attendance policy: </h1>
            <div className = " relative top-130 left-118 w-120 font-medium h-80">
                <div
                    onClick={()=>setOpenAttendanceReq(!openAttendanceReq)}
                    className = "bg-vtorange border-4 border-vtorange text-white  w-full p-2 flex items-center justify-between rounded">
                    Select Attendance Policy
                    <BiChevronDown />
                </div>
                <ul className = {`bg-black   mt-2 overflow-y-auto ${openAttendanceReq? "max-h-80": "max-h-0"}`}>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleAttendanceDropdown("Mandatory")}>Mandatory</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleAttendanceDropdown("Optional")}>Optional</li>
                </ul>
            </div>
            <h1 className = "relative left-138 top-90 text-white text-3xl">Rate the difficulty (1-5): </h1>
            <form className = "relative left-123 top-95">
                <input className = "bg-vtgray w-110 h-10 rounded-lg"  placeholder = "Enter difficulty" value = {difficulty} onChange = {(e) => setDifficulty(e.target.value)}></input>
            </form>
            <h1 className = "relative left-115 top-105 text-white text-3xl">Provide any guidance you might have: </h1>
            <form className = "relative left-123 top-110">
                <textarea className = "bg-vtgray w-110 rounded-lg" cols = "30" rows = "10" placeholder = "Enter guidance" value = {comments} onChange = {(e) => setComments(e.target.value)}></textarea>
            </form>
            <button className = "relative left-141 top-115 w-75 h-15 text-white text-2xl hover:bg-vtgray bg-vtorange rounded-lg" onClick={handleSubmit}>Submit Guide</button>

        </div>
    )
}
export default NewGuide
