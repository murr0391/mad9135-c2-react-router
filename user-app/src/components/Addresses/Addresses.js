import { useState, useEffect } from "react";
import { Table } from "react-materialize";
import AddressRow from "../AddressRow/AddressRow";

export default function Addresses(props) {
  const [list, setList] = useState([]);
  const numberOfUsersToFetch = Math.floor(Math.random() * 17) + 16;

  useEffect(() => {

    async function fetchData() {
      let url = `https://randomuser.me/api/?nat=ca,us,au,nz,gb&seed=murr0391&format=json&results=${numberOfUsersToFetch}`;
      let resp = await fetch(url);
      let data = await resp.json();
      let sortedAddresses = data.results.sort((a,b) => {
        if (a.name.last < b.name.last) {
            return -1;
        } else if (a.name.last > b.name.last){
            return 1;
        } else 
        return 0;
      });
      setList(sortedAddresses);
    }

    fetchData();
  }, []);
  if (list && list.length) {
    return (
      <Table>
        <thead>
          <tr>
            <th>Last</th>
            <th>First</th>
            <th>Country</th>
            <th>State</th>
            <th>City</th>
            <th>Street</th>
            <th>PostCode</th>
          </tr>
        </thead>
        <tbody>{list && list.map((item) => <AddressRow props={item} />)}</tbody>
      </Table>
    );
  } else {
    return null;
  }
}
