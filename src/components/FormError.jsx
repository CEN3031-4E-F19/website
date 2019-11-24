import React, { Component } from 'react';

//stateless component that iterates through formErrors array and displays each of them
const FormError = ({formErrors}) => {
    return (
        <div className='formErrors'>
            {Object.keys(formErrors).map((fieldName, i) => {
                if(formErrors[fieldName].length > 0){
                    return (
                        /*
                        <p key={i}>{fieldName} {formErrors[fieldName]}</p>
                        */
                        <li key={i} className="text-danger">{formErrors[fieldName]}</li>
                    )        
                } else {
                    return '';
                }
            })}
        </div>
    );
}

export default FormError;
