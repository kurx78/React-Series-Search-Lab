import React from "react";
import Table from "react-bootstrap/Table";
import {Link} from "react-router-dom"
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
          const elementLink = `series/${ElementIndex}`;
          return (
            <tr key={ElementIndex}>
              <td>{element.show.name}</td>
              <td>{element.show.status}</td>
              <td>{element.show.premiered}</td>
              <td>{element.show.language}</td>
              <td dangerouslySetInnerHTML={{ __html: element.show.summary }} />
              <td><Link to={elementLink} movie={element}>Open</Link>></td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default SeriesList;
