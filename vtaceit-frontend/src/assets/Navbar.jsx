import React, {useState} from 'react'
import {BiChevronDown} from "react-icons/bi";
import Guide from "./Guide.jsx";



///const response = fetch(`http://localhost:8080/guides?dept=${dept}&number=${courseNumber}`)
const Navbar = () => {
    const[dept, setDept] = useState('Select department');
    const[openDept, setOpenDept] = useState(false)
    const[courseNumber, setCourseNumber] = useState('')
    const[results, setResults] = useState([])
    const[message, setMessage] = useState('')
    const[showDept, setShowDept] = useState('')
    const[showNumber, setShowNumber] = useState('')
    let isIncomplete = false
    function handleDeptDropdown(value){
        setDept(value);
        setOpenDept(false);
    }
    const handleSearch = async () => {
        isIncomplete = dept === 'Select department' || courseNumber === ''
        console.log(isIncomplete)
        if(!isIncomplete){
        const response = await fetch(`http://localhost:8080/guides?dept=${dept}&number=${courseNumber}`)
        const data = await response.json();
        setResults(data)
        console.log(data)
            setMessage("")
        setShowDept(dept)
        setShowNumber(courseNumber)
        }
        else{
            setMessage("Please input all the search options!")
        }
    }

    return (
        <div>
            <div className = " bg-white drop-shadow-md">
                <div className = " relative w-50 font-medium h-20 rounded-lg  float-left ml-70 mt-5 ">
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
                <input className  = "bg-vtgray w-110 h-12 rounded-lg float-left ml-10 mt-5" type="text" value = {courseNumber} onChange = {(e) => setCourseNumber(e.target.value)}></input>
                <button className = "float-left ml-9 mt-5  w-30 h-12 text-white text-xs hover:bg-vtgray bg-vtorange rounded-xl" onClick={handleSearch} >Submit Guide</button>
            </div>
            <h1 className = "float-right mr-150 mt-2 text-white text-xs ">{message}</h1>
            <h1 className = "float-right mr-120 mt-10 text-white text-5xl ">Showing results for:</h1>:
            <h1 className = "float-right mr-150 mt-6 text-white text-5xl ">{showDept}{showNumber}</h1>:



            <ul className = "ml-50 mt-50 flex flex-col justify-center inline-block space-y-20">
                {results.map((result)=>(
                    <Guide guide = {result} />
                ))}
                <br />
            </ul>

        </div>
    )
}
export default Navbar
