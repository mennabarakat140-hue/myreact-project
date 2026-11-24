import './Sidebar.css'
import { GraduationCap, BookOpen, ContactRound, UserRound, Bell, LogOut, WrenchOff } from 'lucide-react'

function Sidebar() {
    return (
        <div className='container'>
            <div className='logo'>
                <GraduationCap className='gradicon'/>
                <h1>CampusHup</h1>
            </div>
            <div className='sections'>
                <ul>
                    <li className="active"><a href='google.com'><BookOpen size={18}/> Courses</a></li>
                    <li><a href='google.com'><ContactRound size={18}/> Attendance</a></li>
                    <li><a href='google.com'><WrenchOff size={18}/> Maintenance</a></li>
                    <li><a href='google.com'><Bell size={18}/> Notification</a></li>
                    <li><a href='google.com'><UserRound size={18}/> Profile</a></li>
                    <li><a href='google.com'><LogOut size={18}/> Log Out</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
