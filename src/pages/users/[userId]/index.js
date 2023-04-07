import { useRouter } from "next/router";
import { Fragment } from "react";
import UserInfo from "@/components/UserInfo";

function UserDetails({ userData }) {
  console.log("userDetailsPage");
  const router = useRouter();
  const userId = router.query.userId;

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <UserInfo
        data={userData}
      />
    </section>
  );
}

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const usersData = await response.json();

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
    return {
      notFound: true
    };     
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
