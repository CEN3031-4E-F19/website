import React, { Component } from 'react';

//stateless component that iterates through formErrors array and displays each of them
class FormError extends Component {
    return (
        <div className='formErrors'>
        {Object.keys(formErrors).map((fieldName, i) => {
            if(formErrors[fieldName].length > 0){
                return (
                <p key={i}>{fieldName} {formErrors[fieldName]}</p>
                )        
            } else {
                return '';
            }
        })}
        </div>
    );
}

export default FormError;
