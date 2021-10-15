import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import UserCards from "../UserCards/UserCards";
import UserDetails from "../UserDetails/UserDetails";
import Addresses from "../Addresses/Addresses";

export default function Users(props) {
  const [list, setList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let spinner = document.getElementById("spinner");
      if (spinner) {
        spinner.classList.add("show");
      }
      const NUMBER_OF_USERS_TO_FETCH = Math.floor(Math.random() * 17) + 16;
      const SEED = "murr0391";
      const url = `https://randomuser.me/api/?nat=ca,us,au,nz,gb&seed=${SEED}&format=json&results=${NUMBER_OF_USERS_TO_FETCH}`;
      const resp = await fetch(url);
      const data = await resp.json();
      if (spinner) {
        spinner.classList.remove("show");
      }
      const sortedAddresses = data.results.sort((a, b) => {
        if (a.name.last < b.name.last) {
          return -1;
        } else if (a.name.last > b.name.last) {
          return 1;
        } else return 0;
      });
      setList(sortedAddresses);
    }

    fetchData();
  }, []);

  if (!list || !list.length) {
    return <p>Loading users ...</p>;
  } else {
    return (
      <div>
        <Route path="/users">
          <UserCards props={list} />
        </Route>
        <Route path="/user/:id">
          <UserDetails props={list} />
        </Route>
        <Route path="/addresses">
          <Addresses props={list} />
        </Route>
      </div>
    );
    //return (<UserCards props={list} />);
  }
}

/*
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
