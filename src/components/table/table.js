import React from 'react';
import { MDBCard, MDBCardBody, MDBCardHeader, MDBInput, MDBBtn, MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';

const Table = (props) => {
    const { name, tabs, rows, columns } = props;

  const getTabs = () => {
      if (!tabs) return;
      return tabs.map(({text, onClick}) => {
          return (
            <MDBBtn outline rounded size="sm" color="white" className="px-2" onClick={onclick}>
                {/* <i className="fa fa-th-large mt-0"></i> */}
                {text}
            </MDBBtn>
          )
      })
  }

  return(
    <MDBCard narrow>
      <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3">
        <div>
            {getTabs()}
        </div>
        <a href="#" className="white-text mx-3">{name}</a>
      </MDBCardHeader>
      <MDBCardBody cascade>
        <MDBTable btn fixed>
          <MDBTableHead columns={columns} />
          <MDBTableBody rows={rows} />
        </MDBTable>
      </MDBCardBody>
    </MDBCard>
  );
};

export default Table;