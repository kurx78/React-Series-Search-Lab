import React from "react";
import Table from "react-bootstrap/Table";

const SeriesList = props => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
          <th>Premiered</th>
          <th>Language</th>
          <th>Summary</th>
        </tr>
      </thead>
      <tbody>
        {props.seriesList.map((element, ElementIndex) => {
          return (
            <tr key={ElementIndex}>
              <td>{element.show.name}</td>
              <td>{element.show.status}</td>
              <td>{element.show.premiered}</td>
              <td>{element.show.language}</td>
              <td dangerouslySetInnerHTML={{ __html: element.show.summary }} />
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default SeriesList;
