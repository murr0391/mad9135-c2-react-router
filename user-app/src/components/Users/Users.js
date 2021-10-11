import { useState, useEffect } from "react";
import { Row, Col, Card, TextInput, Button } from "react-materialize";
import UserCard from "../UserCard/UserCard";

export default function Users(props) {
  const [list, setList] = useState([]);
  const numberOfUsersToFetch = Math.floor(Math.random() * 17) + 16;


  useEffect(() => {
    async function fetchData() {
      let url = `https://randomuser.me/api/?nat=ca,us,au,nz,gb&seed=murr0391&format=json&results=${numberOfUsersToFetch}`;
      let resp = await fetch(url);
      let data = await resp.json();
      setList(data.results);
    }

    fetchData();
  }, []);
  return (
    <Row>
      <Col s12 m6>
        {(!list || !list.length) && <p>There are no users yet</p>}
        {list && list.map((item) =>  <UserCard props={item}/>




        )}
      </Col>
    </Row>
  );
}

/*
    <div className="users">
      <p>This is the users page</p>
      {!list.length && <p>There are no users yet</p>}
      {list.map((item) => (
        <p key={item.key}>
          {item.name.title +
            " " +
            item.name.first +
            " " +
            item.name.last +
            " " +
            item.email +
            " " +
            item.cell}
        </p>
      ))}
    </div>
*/
