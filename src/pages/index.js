import { useState } from "react";
import Card from '../components/ui/Card';
import UserTable from '../components/UserTable';


export default function HomePage({usersData}) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  // const formattedPhoneNumber = usersData.phone.replace(/\D/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  // console.log(formattedPhoneNumber);
  const columns = [
    { id: "name", label: "Name", minWidth: 170 },
    { id: "username", label: "Username", minWidth: 70 },
    { id: "phone", label: "Phone", minWidth: 100, align: "right",   format: (value) => value.toLocaleString("en-US"),},
  ];

  const rows = usersData.map((user) => {
    return {
      ...user,
      phone: user.phone.replace(/\D/g, "").replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3"),
    };
  });
  return (
    <div>
      <Card>
      <UserTable columns={columns} rows={rows} />
      </Card>
    </div>
  );
}

export async function getStaticProps() {
  console.log('Fetching data from API...');

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if(!response.ok){
      throw new Error("Failed to fetch data from API");
    }
    const usersData = await response.json();
    return { props: { usersData } };
  } catch (error) {
    console.error('Error fetching data from API:', error);
    return { props: { usersData: [] } };
  }
}