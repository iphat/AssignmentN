import amrutam from '../assets/amrutam.png'; 
import logo from '../assets/logo.png';
import admin from '../assets/admin.jpg';
import "../css/style.css";
import "tailwindcss";
import Typography from '@mui/material/Typography';


export default function Head() {
  return (
    <div>
      <nav className="navbar fixed-top bg-body-tertiary">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          
          {/* Left side */}
          <div className="d-flex align-items-center ">
            <img className="logo" src={logo} alt="logo" />
            <img className="amrutam" src={amrutam} alt="Amrutam" />
          </div>

          {/* Right side */}
          <div className="d-flex align-items-center">
            <div className="text-end mr-2">
              <Typography variant="subtitle1" >Liam Michael</Typography>
              <Typography variant="body2" className=" admin">Admin</Typography>
            </div>
            <img className="adminImage" src={admin} alt="Admin" />
          </div>

        </div>
      </nav>
   </div>
  );
}
