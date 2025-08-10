import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

export default function IngredientProperties() {

  const currencies = [
    { value: 'USD', label: 'Select' },
    { value: 'EUR', label: 'Select' },
    { value: 'BTC', label: 'Select' },
    { value: 'JPY', label: 'Select' },
  ];

  const navigate = useNavigate();
  const steps = ['General Information', 'Benefits', 'Properties', 'Other', 'Overview'];

  const handleNext = () => {
    navigate('/ingredients/other');
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
                <Stepper activeStep={2} alternativeLabel sx={{
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
      sx={{ '& .MuiTextField-root': { m: 1 , width: '35ch'} }}
      noValidate
      autoComplete="off"
    >                        
          

    <h6 className="">Ayurvedic Properties</h6>
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
          id="outlined-select-currency-native"
          label="Veerya"
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
          id="outlined-select-currency-native"
          label="Guna"
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
          id="outlined-select-currency-native"
          label="Vipaka"
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
{/*  */}
           <h6 className="m-0">Important Formulations</h6>
          <div className='d-flex align-items-center gap-2'>
               <label className="border-2 border-dashed border-gray-300  bg-green-300/10 cursor-pointer w-40 h-10 d-flex items-center justify-content-center rounded-lg text-gray-400 ">
                 <input type="file" name="image" accept="image/*" className="hidden" />
                    <i class="fa-regular fa-image"></i>Add Emoji
               </label>
               <TextField className='mb-1 w-100' size="small" label="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been." id="field1" />
               <i className="fa-solid fa-xmark " style={{ cursor: 'pointer', fontSize: '1.5rem', color: 'grey'}}></i> 
          </div>
          <div className='d-flex align-items-center gap-2'>
               <label className="border-2 border-dashed border-gray-300  bg-green-300/10 cursor-pointer w-40 h-10 d-flex items-center justify-content-center rounded-lg text-gray-400 ">
                 <input type="file" name="image" accept="image/*" className="hidden" />
                    <i class="fa-regular fa-image"></i>Add Emoji
               </label>
               <TextField className='mb-1 w-100' size="small" label="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been." id="field1" />
               <i className="fa-solid fa-xmark " style={{ cursor: 'pointer', fontSize: '1.5rem', color: 'grey'}}></i> 
          </div>
          <div className='d-flex align-items-center gap-2'>
               <label className="border-2 border-dashed border-gray-300  bg-green-300/10 cursor-pointer w-40 h-10 d-flex items-center justify-content-center rounded-lg text-gray-400 ">
                 <input type="file" name="image" accept="image/*" className="hidden" />
                    <i class="fa-regular fa-image"></i>Add Emoji
               </label>
               <TextField className='mb-1 w-100' size="small" label="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been." id="field1" />
               <i className="fa-solid fa-xmark " style={{ cursor: 'pointer', fontSize: '1.5rem', color: 'grey'}}></i> 
          </div>
                    <div className='d-flex align-items-center gap-2'>
               <label className="border-2 border-dashed border-gray-300  bg-green-300/10 cursor-pointer w-40 h-10 d-flex items-center justify-content-center rounded-lg text-gray-400 ">
                 <input type="file" name="image" accept="image/*" className="hidden" />
                    <i class="fa-regular fa-image"></i>Add Emoji
               </label>
               <TextField className='mb-1 w-100' size="small" label="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been." id="field1" />
               <i className="fa-solid fa-xmark " style={{ cursor: 'pointer', fontSize: '1.5rem', color: 'grey'}}></i> 
          </div>
      </div>
               <h6 className="m-0">Therapeutic Uses</h6>
          <div className='d-flex align-items-center gap-1'>
            <TextField className='mb-1 w-100' size="small" label="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been." id="field1" />
            <i className="fa-solid fa-xmark " style={{ cursor: 'pointer', fontSize: '1.5rem', color: 'grey'}}></i> 
          </div>
          <div className='d-flex align-items-center gap-1'>
            <TextField className='mb-1 w-100' size="small" label="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been." id="field2" />
            <i class="fa-solid fa-xmark" style={{ cursor: 'pointer', fontSize: '1.5rem', color: 'grey'}}></i>
          </div> 
          <div className='d-flex align-items-center gap-1'>
            <TextField className=' w-100' size="small" label="Enter Here" id="field2" />
            <i class="fa-solid fa-xmark" style={{ cursor: 'pointer', fontSize: '1.5rem', color: 'grey'}}></i>
          </div>
          <a href="/newForm" style={{ cursor: 'pointer', fontSize: '.9rem', color: 'green'}}>Add Another Items</a>
      <div>
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
      {/* </Box> */}
    </div>

  );
}
