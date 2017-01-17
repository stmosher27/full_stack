import React from 'react';
import Dropzone from 'react-dropzone';

class ImageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: {
        img_url: '',
        post_id: ''
      }
    };
    this.upload = this.upload.bind(this);
  }

  upload(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(window.cloudinary_options, function(error, results){
      if(!error){
        console.log(results);
      }
    });
  }

  render() {
    return(
      <div className="photo-upload-form">
        <button onClick={this.upload}>Upload Image!</button>
      </div>
    );
  }
}

export default ImageForm;
