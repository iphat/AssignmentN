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
          <Stepper activeStep={3} alternativeLabel sx={{
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
      sx={{ '& .MuiTextField-root': { m: 1 ,width: '42ch' } }}
      noValidate
      autoComplete="off"
    >                        
          
    <h6 style={{weight:'600',fontSize:'18px'}}>Plant Parts And Its Purpose</h6>
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
          <button type="button" className="btn btn-success" style={{backgroundColor:"#3A643B",margin:'15px'}}  >
            + Add
          </button>
          <button type="button" className="m-1 btn btn-light" style={{border:'1px solid #c6c1c1'}}>
           <i className="fa-solid fa-xmark " style={{ cursor: 'pointer', fontSize: '18px', color: 'grey'}}></i> 
          </button>
        </div>
        <div className="type">
           <span style={{marginRight:'5rem', fontWeight:'500', fontSize:'1.1rem'}}> Type </span>
           <span style={{marginRight:'5rem', fontWeight:'500', fontSize:'1.1rem'}}>Description</span>
           <hr></hr>
           <div>
            <span style={{marginRight:'5rem'}}>Leave </span><span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem I</span>
           </div>
            <div>
            <span style={{marginRight:'5.5rem'}}>Bark </span><span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem I</span>
           </div>
            <div>
            <span style={{marginRight:'5.4rem'}}>Root </span><span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem I</span>
           </div>           
        </div>

        <div className="best">
         <TextField
          size="small"
          id="outlined-select-currency-native"
          label="Best Combined With"
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
        </div>

        <div className="geo">
             <TextField
          size="small"
          id="outlined-select-currency-native"
          label="Geographical Locations"
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

