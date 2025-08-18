
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
// import IngredientBenefit from "../components/IngredientBenefit";
// import { Routes, Route } from 'react-router-dom';
import vector1 from '../assets/Vector1.png';
import vector2 from '../assets/Vector2.png';


export default function AddIngredient() {
  const [formData, setFormData] = useState({
    ingredientName: '',
    scientificName: '',
    sanskritName: '',
    description: '',
    image: null,
  });

  const navigate = useNavigate();
  const steps = ['General Information', 'Benefits', 'Properties', 'Other', 'Overview'];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  const handleNext = () => {
    navigate('/ingredients/benefit');
  };

  return (
    <div className="mt-8 pt-8 ">
      <div className="text-gray-500">
        <span className="text-green-700 font-semibold">Ingredient</span> &gt; Add Ingredient
      </div>
     {/* stepper */}
    <Box sx={{ width: '100%', mt: '16px'}}>
        <Stepper activeStep={0} alternativeLabel sx={{
    '& .MuiStepIcon-root': {
      borderRadius: '50%',
      backgroundColor: 'transparent',
    },
    '& .MuiStepIcon-root.Mui-active': {
      color: '#464a4661',
      border: '2px solid #3A643B',
      borderRadius: '50%',
      backgroundColor: 'transparent',

    },
      '& .MuiStepIcon-root:not(.Mui-active):not(.Mui-completed)': {
        borderRadius: '50%',
        border: '2px solid #878890', 
        color: '#464a4661', 
      },
        '& .MuiStepIcon-root.Mui-completed': {
      color: '#3A643B', 
    },

  }} >
          {steps.map((label) => (
            <Step key={label} sx={{
    '& .MuiStepIcon-root': {

    },
    '& .MuiStepIcon-root.Mui-active': {
      color: '#3A643B',
    },
      // '& .MuiStepIcon-root:not(.Mui-active):not(.Mui-completed)': {
      //   color: '#464a4661', 
      // },
        '& .MuiStepIcon-root.Mui-completed': {
      color: '#3A643B', 
    },

  }} >
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
     </Box>

      {/* Form Section */}
    <Box
        className="box mt-8 bg-white  rounded shadow "
        sx={{ '& .MuiTextField-root': {m: 1} , display: 'flex', flexWrap: 'wrap'}}
      noValidate
        autoComplete="on"
    >
      <div>
      <div className=' gen-1 d-flex  '>
        <TextField
            required
            size="small"
            className=" gen"
            id="outlined-required"
            label="Ingredient Name"
            defaultValue="Label"
          />
        <TextField
            required
            size="small"
            className="gen  "
            id="outlined-disabled"
            label="Scientific Name"
            defaultValue="Label"
          />
          <TextField
            required
            size="small"
            className=" gen"
            id="outlined-disabled"
            label="Sanskrit Name"
            defaultValue="Label"
          />
          </div>

            <TextField
            required
            className="desc "
            size="small" 
            label="Ingredient Name" 
            defaultValue="description. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee"
          />



          <div className="mb-6">
            <br />
            {/* <div className="image border-2 border-dashed border-gray-300 rounded-lg d-flex align-items-center justify-center text-gray-400 cursor-pointer">
              <label className="cursor-pointer w-full h-full d-flex items-center justify-content-center">
                <input type="file" name="image" accept="image/*" className="hidden" onChange={handleChange} />
                                
                  Upload Image
              </label>
            </div> */}
            <div className="image border-2 border-dashed border-gray-300 rounded-lg  d-flex align-items-center justify-content-center text-gray-400 cursor-pointer" >
  <label className="cursor-pointer w-100 h-100  d-flex align-items-center justify-content-center position-relative">
    <input type="file" name="image" accept="image/*" className="d-none" onChange={handleChange} />

    {/* Background Image */}
    <img src={vector2} alt="Background" className=" mb-4 "  />

    {/* Overlay Image */}
    <img src={vector1} alt="Overlay" className="position-absolute mb-4 "  />

    <span className="position-absolute bottom-20 text-center " style={{ color: '#0C140C'}}>Upload Image</span>
  </label>
</div>
{/* style={{ width: '160px', height: '160px' }} style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', }} */}
          </div>
        </div>
      </Box>

      <div className="d-flex justify-content-center">
        <button type="submit" className="m-4 px-4 btn1 btn btn-success"  onClick={handleSubmit} style={{backgroundColor:"#3A643B"}}>
          Save
        </button>
        <button type="button" className="m-4 px-4 btn1 btn btn-light" onClick={handleNext}>
          Next
        </button>
      </div>
   </div>
  );
}

