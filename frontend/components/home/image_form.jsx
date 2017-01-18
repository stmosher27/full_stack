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
        <a onClick={this.upload}><img className="upload-pic" src="https://image.freepik.com/free-icon/upload-file-ios-7-interface-symbol_318-33627.jpg" alt="upload" /></a>
      </div>
    );
  }
}

export default ImageForm;
