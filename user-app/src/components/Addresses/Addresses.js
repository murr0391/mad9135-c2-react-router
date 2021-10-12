import { Table } from "react-materialize";
import AddressRow from "../AddressRow/AddressRow";

export default function Addresses({props}) {
  if (props && props.length) {
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
        <tbody>{props.map((item) => <AddressRow props={item} />)}</tbody>
      </Table>
    );
  } else {
    return null;
  }
}
