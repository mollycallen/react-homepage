import React, { useState } from 'react'
import styled from 'styled-components'

const CustomFileInput2 = ({ onFileSelected }) => {
  const FileInputWrapper = styled.div`
    margin: 10px 0;
  `

  const CustomFileInput = styled.input`
    display: none; // This ensures the default file input is not visible
  `

  const CustomLabel = styled.label`
    padding: 10px 20px;
    background-color: #2d9cdb; // Change this color to suit your design
    color: white;
    border-radius: 5px;
    cursor: pointer;
    font-size: 15px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #007bbd; // Change this color for hover effect
    }
  `
  const [fileName, setFileName] = useState('')

  const handleFileChange = event => {
    let file = event.target.files[0]
    if (file) {
      setFileName(file.name)
      if (onFileSelected) {
        onFileSelected(file) // Propagate the selected file to the parent component
      }
    }
  }
  return (
    <FileInputWrapper>
      <CustomLabel htmlFor='upload-button'>
        {fileName || 'Choose file'}
      </CustomLabel>
      <CustomFileInput
        id='upload-button'
        type='file'
        onChange={handleFileChange}
      />
    </FileInputWrapper>
  )
}

export default CustomFileInput2
