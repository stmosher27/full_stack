const ModalStyle = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(255, 255, 255, 0.75)',
    zIndex          : 10
  },
  content : {
    position        : 'fixed',
    top             : '15%',
    left            : '40%',
    bottom          : '15%',
    height          : '300px',
    width           : '150px',
    border          : '1px solid #ccc',
    padding         : '20px',
    zIndex          : 11
  }
};

export default ModalStyle;
