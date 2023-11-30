//import 'react-phone-number-input/style.css'

import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';


const PhoneNumberInput = () => {
    const [value, setValue] = useState();

    return (
        <PhoneInput
            placeholder="Enter phone number"
            value={value}
            onChange={setValue}
        />
    );
}

export default PhoneNumberInput;