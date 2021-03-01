import React, { useRef, useState, useEffect } from 'react';

import Button from './Button';
import './ImageUpload.css';

const ImageUpload = props => {
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const [isValid, setIsValid] = useState(false);

  const filePickerRef = useRef();

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const pickedHandler = event => {
    let pickedFile;
    /////////////////////
    // let localBase64;
    /////////////////////
    let fileIsValid = isValid;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];

      //////////////////////
      // const reader = new FileReader();
      //
      // reader.onloadend = function () {
      //   // Since it contains the Data URI, we should remove the prefix and keep only Base64 string
      //   let b64 = reader.result;
      //   let buff = new Buffer(b64);
      //   let base64data = buff.toString('base64');
      //   // console.log(base64data);
      //   localStorage.setItem('myImage', base64data);
      //
      //   // console.log("b64 converted to a string is " + base64data + '"');
      //
      //   let decoded = new Buffer(base64data, 'base64');
      //   let plainText = decoded.toString('ascii');
      //
      //   // console.log("Back to b64 is " + plainText + '"');
      //
      //   // .replace("data:", "")
      //   // .replace(/^.+,/, "");
      //   // console.log(b64);
      // };
      // reader.readAsDataURL(pickedFile);
      // localBase64 = localStorage.getItem('myImage');
      // console.log(localBase64);

      //////////////////////

      setFile(pickedFile);
      setIsValid(true);
      fileIsValid = true;
    } else {
      setIsValid(false);
      fileIsValid = false;
    }
    // props.onInput(props.id, pickedFile, fileIsValid);
    props.onInput(props.id, pickedFile, fileIsValid);
  };

  const pickImageHandler = () => {
    filePickerRef.current.click();
  };

  return (
    <div className="form-control">
      <input
        id={props.id}
        ref={filePickerRef}
        style={{ display: 'none' }}
        type="file"
        accept=".jpg,.png,.jpeg"
        onChange={pickedHandler}
      />
      <div className={`image-upload ${props.center && 'center'}`}>
        <div className="image-upload__preview">
          {previewUrl && <img src={previewUrl} alt="Preview" />}
          {!previewUrl && <p>Please pick an image.</p>}
        </div>
        <Button type="button" onClick={pickImageHandler}>
          PICK IMAGE
        </Button>
      </div>
      {!isValid && <p>{props.errorText}</p>}
    </div>
  );
};

export default ImageUpload;
