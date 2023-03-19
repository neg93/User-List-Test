import { Fragment } from "react";
import Link from "next/link";

function Users() {
  return (
    <Fragment>
      <h1>The Users Page!</h1>
      <ul>
        <li>
          <Link href="/users/clicked-user-info">Clicked User Info</Link>
        </li>
        <li>
          <Link href="/users/the-second-clicked-user-info">
            The Second Clicked User Info
          </Link>
        </li>
      </ul>
    </Fragment>
  );
}
export default Users;
