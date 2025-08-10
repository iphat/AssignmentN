
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
    <div className="mt-8 pt-8">
      <div className="text-gray-500">
        <span className="text-green-700 font-semibold">Ingredient</span> &gt; Add Ingredient
      </div>
     {/* stepper */}
   <div className="mt-2 pt-2 ">
           <Box sx={{ width: '100%', mb:2 }}>
             <Stepper activeStep={0} alternativeLabel sx={{
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

      {/* Form Section */}
    <Box
        className="mt-8 bg-white p-4 rounded shadow md:max-lg:flex  " 
      component="form"
        sx={{ '& .MuiTextField-root': { m: 1,  } , display: 'flex', flexWrap: 'wrap'}}
      noValidate
        autoComplete="on"
    >
          <div>
        <TextField
            required
            id="outlined-required"
            label="Ingredient Name"
            defaultValue="Label"
          />
        <TextField
            required
            id="outlined-disabled"
            label="Scientific Name"
            defaultValue="Label"
          />
          <TextField
            required
            id="outlined-disabled"
            label="Sanskrit Name"
            defaultValue="Label"
          />
          <TextField
            required
            className="desc" 
            label="Ingredient Name"
            sx={{m: 1,  }}  
            defaultValue="description. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee"
          />


          <div className="mb-6">
            <br />
            <div className="border-2 border-dashed border-gray-300 rounded-lg w-40 h-40 flex items-center justify-center text-gray-400 cursor-pointer">
              <label className="bg-green-300/10 cursor-pointer w-full h-full d-flex items-center justify-content-center">
                <input type="file" name="image" accept="image/*" className="hidden" onChange={handleChange} />
                Upload Image
              </label>
            </div>
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

