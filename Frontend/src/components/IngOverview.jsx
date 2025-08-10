import React from "react";
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

export default function IngOther() {

  const currencies = [
    { value: 'USD', label: 'Select' },
    { value: 'EUR', label: 'Select' },
    { value: 'BTC', label: 'Select' },
    { value: 'JPY', label: 'Select' },
  ];

  const navigate = useNavigate();
  const steps = ['General Information', 'Benefits', 'Properties', 'Other', 'Overview'];

  const handleNext = () => {
    navigate('/ingredients/overview');
  };

  return (
    <div className="benefit ">
      <div className="text-gray-500 ">
        <span className="text-green-700 font-semibold">Ingredient</span> &gt;
        <span className="text-green-700 font-semibold"> Add Ingredient</span>
      </div>

      {/* Stepper */}
      <div className="mt-2 pt-2 ">
        <Box sx={{ width: '100%', mb:2 }}>
          <Stepper activeStep={4} alternativeLabel sx={{
    '& .MuiStepIcon-root': {
      color: '#464a4661', 
      border: '2px solid #3A643B',
      borderRadius: '50%',
      backgroundColor: 'transparent',
    },
    '& .MuiStepIcon-root.Mui-active': {
        color: '#464a4661',
      border: '2px solid #3A643B',
      borderRadius: '50%',
      backgroundColor: 'transparent',
    },
        '& .MuiStepIcon-root.Mui-completed': {
      color: '#3A643B', 
    },

  }} >
            {steps.map((label) => (
              <Step key={label} >
                <StepLabel className=''>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </div>
{/* Form */}
<Box
    className=" bg-white p-4 rounded shadow " 
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1 , width: '42ch'} }}
      noValidate
      autoComplete="off"
    >                        
          
    <h6 className="">Plant Parts And Its Purpose</h6>
      <div>

        <TextField
          size="small"
          id="outlined-select-currency-native"
          label="Rasa"
          defaultValue="Type here.."
          slotProps={{
            select: {
              native: true,
            },
          }}
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField
          size="small"
          id="outlined-select-currency"
          select
          label="Vata"
          defaultValue="EUR"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
     </div>
     <div className="">
          <button type="button" className="btn btn-success" style={{backgroundColor:"#3A643B"}}  >
            + Add
          </button>
          <button type="button" className="m-1 btn btn-light">
           <i className="fa-solid fa-xmark " style={{ cursor: 'pointer', fontSize: '1.5rem', color: 'grey'}}></i> 
          </button>
        </div>
</Box>        

      {/* Form Section */}     
        <div className="d-flex justify-content-center">
          <button type="submit" className="m-4 px-4 btn1 btn btn-success" style={{backgroundColor:"#3A643B"}}>
            Save
          </button>
          <button type="button" className="m-4 px-4 btn1 btn btn-light" onClick={handleNext}>
            Next
          </button>
        </div>

    </div>
  );
}

