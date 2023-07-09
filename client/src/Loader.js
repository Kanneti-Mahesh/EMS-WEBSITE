import Spinner from 'react-bootstrap/Spinner';

function Loader() {
  return (
    <>
      <center>
        <Spinner animation="border" variant="primary" style={{marginTop:"200px",position:"absolute"}}/>
      </center>
    </>
  );
}

export default Loader;
