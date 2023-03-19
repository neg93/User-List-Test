import { useRouter } from "next/router";
import { Fragment } from "react";
import UserInfo from "@/components/UserInfo";

function UserDetails({ userData }) {
  console.log("userDetailsPage");
  const router = useRouter();
  const userId = router.query.userId;
  console.log(userId);
  return (
    <section>
      <UserInfo
        // id={userData.id}
        // name={userData.name}
        // username={userData.username}
        // email={userData.email}
        // company={userData.company.name}
        // address={userData.address.city}
        // phone={userData.phone}
        // website={userData.website}
        data={userData}
      />
    </section>
  );
}

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const usersData = await response.json();
  console.log(usersData);

  return {
    fallback: "blocking",
    paths: usersData.map((userData) => ({
      params: { userId: userData.id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  // fetch data for a single user
  const userId = context.params.userId;

  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  if(!response.ok){
    throw new Error("Failed to fetch data from API");
  }
  const selectedUser = await response.json();

  return {
    props: {
      userData: {
        id: selectedUser.id,
        name: selectedUser.name,
        company: selectedUser.company,
        username: selectedUser.username,
        address:selectedUser.address,
        phone: selectedUser.phone,
        website: selectedUser.website,
        email:selectedUser.email,
      },
    },
  };
}

export default UserDetails;
