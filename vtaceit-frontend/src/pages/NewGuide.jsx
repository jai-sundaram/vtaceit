import React, {useState} from 'react'
import {BiChevronDown} from 'react-icons/bi'
import Navbar from "../components/Navbar.jsx";
const NewGuide = () => {
    const [courseName, setCourseName] = useState('');
    const [dept, setDept] = useState('Select course department');
    const [openDept, setOpenDept] = useState(false);
    const[courseNumber, setCourseNumber] = useState('');
    const[profName, setProfName] = useState('');
    const[grade, setGrade] = useState('Select grade');
    const[gradeOpen, setGradeOpen] = useState(false);
    const[term, setTerm] = useState('Select term');
    const[openTerm, setOpenTerm] = useState(false);
    const[yearTaken, setYearTaken] = useState('')
    const[attendanceReq, setAttendanceReq] = useState('Select attendance requirement');
    const[openAttendanceReq, setOpenAttendanceReq] = useState(false)
    const[difficulty, setDifficulty] = useState('')
    const[comments, setComments] = useState('')
    const[wordLimit, setWordLimit] = useState()
    const[message, setMessage] = useState('')
    const today = new Date();
    const semesterTaken = `${term} ${yearTaken}`;
    let realDifficulty = 0;
    let isIncomplete = true;
    function handleDeptDropdown(value){
        setDept(value);
        setOpenDept(false);
    }
    function handleGradeDropdown(value){
        setGrade(value);
        setGradeOpen(false);
    }
    function handleTermDropdown(value){
        setTerm(value);
        setOpenTerm(false);
    }
    function handleAttendanceDropdown(value){
        setAttendanceReq(value);
        setOpenAttendanceReq(false);
    }
    const handleWordLimit = (e) => {
        const input = e.target.value.split(' ');
        if(input.length<150){
            setComments(e.target.value);
            setWordLimit(input.length);
        }
        else{
            alert("You may only type 150 words!")
        }

    }
    const handleSubmit = () => {
        realDifficulty = parseInt(difficulty);
        isIncomplete = courseName==="" || dept === "Select course department" || courseNumber===""
            || profName === "" || grade === "Select grade" || term === "Select term" || yearTaken === "" ||
            attendanceReq === "Select attendance requirement" || difficulty === "" || comments === ""
        console.log(isIncomplete)
        if(isIncomplete===false){
            console.log('adding')
            setMessage("Guide complete!")
            setCourseName('')
            setDept('Select course department')
            setCourseNumber('')
            setProfName('')
            setGrade('Select grade')
            setTerm('Select term')
            setYearTaken('')
            setAttendanceReq('Select attendance requirement')
            setDifficulty('0')
            setComments('')
            const body =
                {
                    "courseName": courseName,
                    "courseDept": dept,
                    "courseNumber": courseNumber,
                    "profName": profName,
                    "grade": grade,
                    "difficulty": realDifficulty,
                    "attendanceReq": attendanceReq,
                    "comments": comments,
                    "date": `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`,
                    "semTaken": semesterTaken,

                }
            fetch('http://localhost:8080/newGuide', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            }).then(response => {
                //this if statement portion is pretty much chatgpt
                //get rid of it once ur done debugging
                if (!response.ok) {
                    console.log(body)
                    console.log("didnt work")
                } else {
                    console.log(body)
                    console.log("it worked")
                }
            })
        }
        else{
            setMessage("Guide incomplete!")
        }
    }



    return (
        <div className = "overflow-x-clip">
            <Navbar/>
            <h1 className = "relative top-25 left-133 text-3xl text-white">Select the course name: </h1>
            <form className = "relative left-120 top-30">
                <input className = "bg-vtgray w-110 h-10  rounded-lg" placeholder = "Enter course name" type="text" value = {courseName} onChange = {(e) => setCourseName(e.target.value)}/>
            </form>
            <h1 className = "relative top-35 left-125 text-3xl text-white">Select the course department: </h1>

            <div className = " relative top-40 left-115 w-120 font-medium h-80">
                <div
                    onClick={()=>setOpenDept(!openDept)}
                    className = "bg-vtorange border-4 border-vtorange text-white  w-full p-2 flex items-center justify-between rounded">
                    {dept}
                    <BiChevronDown />
                </div>
                <ul className = {`bg-black   mt-2 overflow-y-auto ${openDept? "max-h-80": "max-h-0"}`}>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("ADV")}>Advertising</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("ACIS")}>Accounting & Information Systems</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("AOE")}>Aerospace and Ocean Engineering</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("AFST")}>Africana Studies</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("ALCE")}>Agr, Leadership, & Comm. Ed.</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("AAEC")}>Agricultural and Applied Econo</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("ALS")}>Agriculture and Life Sciences</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("AT")}>Agriculutral Technology</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("AINS")}>American Indian Studies</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("APSC")}>Animal and Poultry Sciences</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("APS")}>Appalachian Studies</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("AHRM")}>Apparel, Housing, & Resour Mgt</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("ARBC")}>Arabic</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("ARCH")}>Architecture</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("AAD")}>Architecture, Arts, and Design</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("ART")}>Art and Art History</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("BDS")}>Behavioral Decision Science</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("BCHM")}>Biochemistry</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("BIOL")}>Biological Sciences</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("BSE")}>Biological Systems Engineering</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("BMVS")}>Biomed & Veterinary Sciences</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("BMSP")}>Biomed Sci & Pathobiology</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("BMES")}>Biomedical Engr & Sciences</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("BC")}>Building Construction</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("BUS")}>Business</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("BIT")}>Business Information Tech</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("EDCT")}>Career and Technical Education</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("CHE")}>Chemical Engineering</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("CHEM")}>Chemistry</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("CHN")}>Chinese</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("CINE")}>Cinema</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("CEE")}>Civil and Environmental Engineering</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("CLA")}>Classics</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("COS")}>College of Science</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("COMM")}>Communication</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("CMST")}>Communication Studies</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("CMDA")}>Comp Modeling & Data Analytics</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("CS")}>Computer Science</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("CEM")}>Construction Engineering & Mgt</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("CONS")}>Consumer Studies</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("CEP")}>Cooperative Education Program</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("CRIM")}>Criminology</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("CSES")}>Crop and Soil Environmental Science</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("DASC")}>Dairy Science</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("DANC")}>Dance</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("ECON")}>Economics</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("EDCO")}>Education, Counseling</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("EDCI")}>Education, Curriculum and Instruction</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("EDEP")}>Educational Psychology</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("ECE")}>Electrical & Computer Engineering</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("ENGR")}>Engineering</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("ENGE")}>Engineering Education</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("ESM")}>Engineering Science and Mechanics</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("ENGL")}>English</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("ENT")}>Entomology</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("ENSC")}>Environmental Science</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("FCS")}>Family and Consumer Science</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("FMD")}>Fashion Merchandising & Design</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("FIN")}>Finance, Insurance, and Business</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("FNAD")}>Financial Aid</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("FA")}>Fine Arts</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("FIW")}>Fish and Wildlife Sciences</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("FST")}>Food Science and Technology</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("FL")}>Foreign Language</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("FREC")}>Forest Resources & Eviron Conservation</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("VT")}>Free Elective</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("FR")}>French</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("GEOG")}>Geography</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("GEOS")}>Geosciences</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("GER")}>German</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("GR")}>Greek</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("HEB")}>Hebrew</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("HIST")}>History</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("HORT")}>Horticulture</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("HTM")}>Hospitality and Tourism Management</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("HD")}>Human Development</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("HNFE")}>Human Nutrition, Foods, and Exercise</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("HUM")}>Humanities</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("ISE")}>Industrial and Systems Engineering</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("IDS")}>Industrial Design</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("EDIT")}>Instructional Design & Tech</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("ISC")}>Integrated Science</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("ITDS")}>Interior Design</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("IS")}>International Studies</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("ITAL")}>Italian</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("JPN")}>Japanese</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("JMC")}>Journalism and Mass Communication</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("JUD")}>Judaic Studies</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("KOR")}>Korean</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("LAR")}>Landscape Architecture</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("LAT")}>Latin</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("LDRS")}>Leadership Studies</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("LAHS")}>Liberal Arts and Human Science</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("MGT")}>Management</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("MKTG")}>Marketing</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("MSE")}>Materials Science and Engineering</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("MATH")}>Mathematics</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("ME")}>Mechanical Engineering</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("MTRG")}>Meteorology</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("MN")}>Military Navy</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("MS")}>Military Sciences (AROTC)</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("AS")}>Military, Aerospace Studies</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("MINE")}>Mining and Minerals Engineering</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("MUS")}>Music</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("NANO")}>Nanoscience</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("NR")}>Natural Resources</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("NEUR")}>Neuroscience</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("NSEG")}>Nuclear Science & Engineering</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("PSVP")}>Peace Studies</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("PHIL")}>Philosophy</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("PPE")}>Philosophy, Politics, and Econ</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("PHYS")}>Physics</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("PPWS")}>Plant Pathology, Physiology, and Weed Science</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("PSCI")}>Political Science</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("PHS")}>Population Health Sciences</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("PORT")}>Portuguese</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("PM")}>Property Management</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("PSYC")}>Psychology</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("PR")}>Public Relations</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("REAL")}>Real Estate</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("RLCL")}>Religion and Culture</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("RED")}>Residential Environment & Design</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("RUS")}>Russian</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("SPES")}>School of Plant & Environmental Science</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("SPIA")}>School of Pub & International Affairs</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("STS")}>Science Technology Studies</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("STL")}>Science, Technology, & Law</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("SOC")}>Sociology</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("SPAN")}>Spanish</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("STAT")}>Statistics</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("SUMA")}>Summer Academy</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("SBIO")}>Sustainable Biomaterials</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("SYSB")}>Systems Biology</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("EDTE")}>Technology Education</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("TA")}>Theatre and Cinema</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("TBMH")}>Trans Biol Medicine & Health</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("UNIV")}>University Course Series</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("UH")}>University Honors Program</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("REG")}>University Registrar</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("UAP")}>Urban Affairs and Planning</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("WATR")}>Water</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleDeptDropdown("WGS")}>Women's and Gender Studies</li>
                </ul>
            </div>
            <h1 className = "relative left-130 top-60 text-white text-3xl">Enter the course number:</h1>
            <form className = "relative left-119 top-62">
                    <input className = "bg-vtgray w-110 h-10  rounded-lg" type="text" placeholder = "Enter number" value = {courseNumber} onChange = {(e) => setCourseNumber(e.target.value)}/>
            </form>
            <h1 className = "relative left-120 top-70 text-white text-3xl">Enter the professor's last name:</h1>
            <form className = "relative left-119 top-72">
                <input className = "bg-vtgray w-110 h-10  rounded-lg" placeholder = "Enter name" type="text" value = {profName} onChange = {(e) => {
                    const formattedName = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
                    setProfName(formattedName)} }/>
            </form>
            <h1 className = "relative left-131 top-90 text-white text-3xl">Select the grade received: </h1>
            <div className = " relative top-95 left-115 w-120 font-medium h-80">
                <div
                    onClick={()=>setGradeOpen(!gradeOpen)}
                    className = "bg-vtorange border-4 border-vtorange text-white  w-full p-2 flex items-center justify-between rounded">
                    {grade}
                    <BiChevronDown />
                </div>
                <ul className = {`bg-black   mt-2 overflow-y-auto ${gradeOpen? "max-h-80": "max-h-0"}`}>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleGradeDropdown("A")}>A</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleGradeDropdown("A-")}>A-</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleGradeDropdown("B+")}>B+</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleGradeDropdown("B")}>B</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleGradeDropdown("B-")}>B-</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleGradeDropdown("C+")}>C+</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleGradeDropdown("C")}>C</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleGradeDropdown("C-")}>C-</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleGradeDropdown("D+")}>D+</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleGradeDropdown("D")}>D</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleGradeDropdown("D-")}>D-</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleGradeDropdown("F")}>F</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleGradeDropdown("I")}>I</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleGradeDropdown("P")}>P</li>
                </ul>
            </div>
            <h1 className = "relative left-100 top-120 text-white text-3xl">Select the term in which you took the class:</h1>
            <div className = " relative top-125 left-115 w-120 font-medium h-80">
                <div
                    onClick={()=>setOpenTerm(!openTerm)}
                    className = "bg-vtorange border-4 border-vtorange text-white  w-full p-2 flex items-center justify-between rounded">
                    {term}
                    <BiChevronDown />
                </div>
                <ul className = {`bg-black   mt-2 overflow-y-auto ${openTerm? "max-h-80": "max-h-0"}`}>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleTermDropdown("Fall")}>Fall</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleTermDropdown("Winter")}>Winter</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleTermDropdown("Spring")}>Spring</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleTermDropdown("Summer")}>Summer</li>
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
                    {attendanceReq}
                    <BiChevronDown />
                </div>
                <ul className = {`bg-black   mt-2 overflow-y-auto ${openAttendanceReq? "max-h-80": "max-h-0"}`}>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleAttendanceDropdown("Mandatory")}>Mandatory</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleAttendanceDropdown("Optional")}>Optional</li>
                    <li className="p-2 text-sm hover:bg-vtgray text-white" onClick={() => handleAttendanceDropdown("Asynchronous")}>Asynchronous</li>
                </ul>
            </div>
            <h1 className = "relative left-138 top-90 text-white text-3xl">Rate the difficulty (1-5): </h1>
            <form className = "relative left-123 top-95">
                <input className = "bg-vtgray w-110 h-10 rounded-lg"  id ="diff" value = {difficulty} placeholder = "Enter difficulty (1-5)" onChange = {(e) => setDifficulty(e.target.value)}></input>
            </form>
            <h1 className = "relative left-95 top-105 text-white text-3xl">Provide any guidance you might have (150 words max): </h1>
            <form className = "relative left-123 top-110">
                <textarea className = "bg-vtgray w-110 rounded-lg" cols = "30" rows = "10" placeholder = "Enter any comments" value = {comments} onChange = {(e) => {setComments(e.target.value);  handleWordLimit(e)}}></textarea>
            </form>
            <h1 className = "relative left-165 top-112 text-white text-sm">Words used: {wordLimit}</h1>
                <h1 className = "relative left-159 top-119 text-white text-lg">{message}</h1>
            <button className = "relative left-141 top-125 w-75 h-15 text-white text-2xl hover:bg-vtgray bg-vtorange rounded-lg" onClick={handleSubmit}>Submit Guide</button>

        </div>
    )
}
export default NewGuide
