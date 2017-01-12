var React = require("react");

var UploadButton = React.createClass({
  upload(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(window.cloudinary_options, function(error, results){
      if(!error){
        this.props.postImage(results[0]);
      }
    }.bind(this));
  },
  render() {
    return (
      <div className="upload-form">
        <button onClick={this.upload}>Upload new image!</button>
      </div>
    );
  }
});

module.exports = UploadButton;
