import React, { useState } from 'react';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import '../css/style.css';
import Ingredient from '../components/Ingredient';
import IngredientBenefit from "../components/IngredientBenefit";
import IngredientProperties from "../components/IngredientProperties";
import IngOther from "../components/IngOther";
import IngOverview from "../components/IngOverview";

import dashboardIcon from '../assets/dash.png';
import doctorsIcon from '../assets/doctor.png';
import patientsIcon from '../assets/patients.png';
import appointmentsIcon from '../assets/appoint.png';
import specialtiesIcon from '../assets/special.png';
import ingredientsIcon from '../assets/special.png';
import couponsIcon from '../assets/special.png';
import concernsIcon from '../assets/appoint.png';
import referralIcon from '../assets/appoint.png';
import customizationIcon from '../assets/appoint.png';
import walletIcon from '../assets/appoint.png';
import refundIcon from '../assets/appoint.png';

export default function Sidebar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const handleDropdownToggle = (name) => {
    setActiveDropdown(prev => (prev === name ? null : name));
  };

  const menuItems = [
    { name: 'Dashboard', icon: dashboardIcon },
    { name: 'Doctors', icon: doctorsIcon },
    { name: 'Patients', icon: patientsIcon },
    { name: 'Appointments', icon: appointmentsIcon },
    { name: 'Specialities', icon: specialtiesIcon },
    {
      name: 'Ingredients',
      icon: ingredientsIcon,
      subItems: [
        { name: 'Ingredient List', path: '/ingredients/list' },
        { name: 'Add Ingredient', path: '/ingredients/add' }
      ]
    },
    { name: 'Coupons', icon: couponsIcon },
    { name: 'Concerns', icon: concernsIcon },
    { name: 'Referral', icon: referralIcon },
    { name: 'Customization', icon: customizationIcon },
    { name: 'Wallet', icon: walletIcon },
    { name: 'Refund', icon: refundIcon }
  ];

  return (
    <div className="d-flex">
      <div className="sidebar px-1 bg-light  shadow-sm rounded-r-lg ">
        <div className="text-start px-2">
          <p>Menu</p>
        </div>
        <ul className="list-unstyled font-normal text-xs">
          {menuItems.map((item, index) => (
            <li key={index} className="">
              {item.subItems ? (
                <>
                  <div
                    className="text-decoration-none text-dark fw-semibold d-block  px-3 py-2 rounded d-flex align-items-center"
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleDropdownToggle(item.name)}
                  >
                    <div className="icon-card d-flex justify-content-between align-items-center pl-1">
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="me-3"
                        style={{ width: '20px', height: '20px' }}
                      />
                    </div>
                    &nbsp;&nbsp;
                    {item.name}
                  </div>
                  {activeDropdown === item.name && (
                    <ul className="ms-4">
                      {item.subItems.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            to={subItem.path}
                            className="text-decoration-none dropdown-item text-secondary d-block py-1 px-2 rounded"
                          >
                            - {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  to={`/${item.name.toLowerCase()}`}
                  className="text-decoration-none text-dark fw-semibold d-block px-3 py-2 rounded d-flex align-items-center"
                >
                  <div className="icon-card d-flex justify-content-between align-items-center pl-1">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="me-3"
                      style={{ width: '20px', height: '20px' }}
                    />
                  </div>
                  &nbsp;&nbsp;
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Render routes next to sidebar */}
      <div className=" main-content ">
      <Routes>
        <Route path="/ingredients/add" element={<Ingredient />} />
        <Route path="/ingredients/benefit" element={<IngredientBenefit/>} />
        <Route path="/ingredients/properties" element={<IngredientProperties/>} />
        <Route path="/ingredients/other" element={<IngOther />} />
        <Route path="/ingredients/overview" element={<IngOverview/>} />
     </Routes>
      </div>
    </div>
  );
}
