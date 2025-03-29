import './RegistrationForm.css'
import { StoreContext } from '../../Contexts/StoreContext';
import { useContext } from 'react';

const RegistrationForm = () => {
    const collegeNames = [
        "ACS College of Engineering, Bangalore",
        "A J Institute of Engineering and Technology, Mangalore",
        "Alva's Institute of Engineering and Technology, Moodbidri",
        "Bearys Institute of Technology, Mangalore",
        "B L D E A's V P Dr P G Halakatti College of Engineering and Technology, Bijapur",
        "BMS Institute of Technology and Management, Bangalore",
        "Cambridge Institute of Technology, Bangalore",
        "Canara Engineering College (CE), Mangalore",
        "City College, Mangalore",
        "Dayananda Sagar College of Engineering, Bangalore",
        "Dr Ambedkar Institute of Technology",
        "Dr M V Shetty Institute of Technology",
        "Dr Sri Sri Sri Shivakumara Mahaswamy College of Engineering",
        "Dr T M A Pai Polytechnic (TMAP Polytechnic), Manipal",
        "East West Institute of Technology, Bangalore",
        "Ghousia College of Engineering, Ramanagaram",
        "Global Academy of Technology, Bangalore",
        "Government Polytechnic for Women, Karkala (GPFW, Karkala)",
        "Government Polytechnic, Bajpe (GP, Bajpe)",
        "Government Polytechnic, Bantwal (GP, Bantwal)",
        "Government Polytechnic, Ujire (GP, Ujire)",
        "Government Polytechnic, Udipi (GP, Udipi)",
        "Guru Nanak Dev Engineering College, Bidar",
        "HKBK College of Engineering, Bangalore",
        "Impact Polytechnic, Udupi",
        "Indira Shiva Rao Polytechnic, Udupi",
        "JSS Academy of Technical Education",
        "Jawaharlal Nehru National College of Engineering",
        "K L E Society's College of Engineering and Technology",
        "K L S Gogte Institute of Technology",
        "Karavali Institute of Technology, Mangalore",
        "KVG Engineering College",
        "K V Gowda Polytechnic (KVG Polytechnic), Sullia",
        "K P T, Mangalore",
        "Manglore Marine College and Technology",
        "Mangalore Institute of Technology and Engineering (MITE), Moodbidri",
        "Manipal Institute of Technology (MIT), Manipal",
        "M S Ramaiah Institute of Technology",
        "National Institute of Technology Karnataka (NITK), Surathkal",
        "N A M Institute of Technology, Nitte",
        "N M A M Institute of Technology, Nitte",
        "Nitte Meenakshi Institute of Technology, Bangalore",
        "N R A M Polytechnic, Nitte",
        "Oxford Business School",
        "P A College of Engineering, (PACE)",
        "R L Jalappa Institute of Technology",
        "Rajarajeswari College of Engineering",
        "Rajeev Institute of Technology",
        "Reva Institute of Science and Management",
        "Reva Institute of Technology and Management",
        "RNS Institute of Technology",
        "Rural Engineering College",
        "Sahyadri College of Engineering and Management (SCE)",
        "SBRR Mahajana First Grade College",
        "SDM College of Engineering and Technology (SDMC)",
        "SDM Polytechnic, Ujire",
        "Shri Madhwa Vadiraja Institute of Technology and Management (SMVIT), Bantakal",
        "Shree Devi Institute of Engineering and Technology",
        "Siddaganga Institute of Technology",
        "SJEC - St Joseph Engineering College",
        "SJB Institute of Technology",
        "S N M Polytechnic, Moodbidri",
        "S N S Polytechnic, Bajpe",
        "Sri Dharmasthala Manjunatheshwara Polytechnic (SDMP, Ujire)",
        "Sri Revana Siddeshwara Institute of Technology",
        "Srinivas Institute of Technology (SIT), valachil",
        "Srinivas Institute of Technology (SIT), Mukka",
        "Sri Krishna School of Engineering and Management",
        "Sri Taralabalu Jagadguru Institute of Technology",
        "St Aloysius College, Beeri",
        "St Joseph Engineering College, Vamanjoor",
        "Vemana Institute of Technology",
        "Vivekananda College of Engineering and Technology, Puttur",
        "Vivekananda Polytechnic (VC Polytechnic), Puttur",
        "Yenepoya Institute of Arts, Science and Commerce, Mangalore",
        "Yenepoya Institute of Technology (YIT), Moodbidri",
        "Other",
    ];


    const { data, setData } = useContext(StoreContext)
    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }))
    }


    return (
        <div className="registration-form-div">

            <form action="" className='registration-form'>

                <h2>ENTER YOUR DETAILS</h2>
                <p className='team-event-warning'><i className="fa-solid fa-circle-exclamation">&nbsp;&nbsp;</i>For team events, all team members must register individually.</p>
                <input
                    type="text"
                    placeholder="Enter Your Name"
                    name="name"
                    onChange={onChangeHandler}
                    value={data.name}
                    required
                />
                <input
                    type="text"
                    placeholder="Enter USN"
                    name="usn"
                    onChange={onChangeHandler}
                    value={data.usn}
                    required
                />
                <select
                    name="college"
                    onChange={onChangeHandler}
                    value={data.college}
                    required
                >
                    <option value="" disabled>Select College</option>
                    {collegeNames.map((college, index) => (
                        <option key={index} value={college}>{college}</option>
                    ))}
                </select>
                {
                    data.college == "Other" ? <input
                        type="text"
                        placeholder="Enter College Name"
                        name="Othercollege"
                        onChange={onChangeHandler}
                        value={data.Othercollege}
                        required
                    /> : <>
                    </>
                }

                <input
                    type="number"
                    placeholder="Enter Your Mobile Number"
                    name="mobile"
                    onChange={onChangeHandler}
                    value={data.mobile}
                    required
                />
            </form>


        </div>
    )


}

export default RegistrationForm;