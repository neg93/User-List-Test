import { height } from "@mui/system";
import React from "react";
import classess from "./UserInfo.module.css";
import Image from 'next/image';


function UserInfo({ data }) {
  return (
    <div className={classess.container}>
      <div className={classess.imageBox}>
        <div className={classess.coverImg}>

      <Image
        src="/images/cover-photo.jpeg"
        alt="Cover Image"
        layout="fill"
        objectFit="cover"

      />
      </div>
        {/* "https://images.pexels.com/photos/14555676/pexels-photo-14555676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" */}
       
        <div className={classess.avatarBox}>
        <Image
        src="/images/avatar.jpg"
        alt="Avatar"
        width={155}
        height={155}

      />
        {/* "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN9NVBIOk_blWPFbW7lJfwX3FNO6jMIsDdZg&usqp=CAU" */}
        </div>
        <div className={classess.detailsContainer}>

        <div className={classess.name}>
          <h1>{data.name}</h1>
          <p>{data.company.name}</p> 
            <p>{'City: '+data.address.city+','}{'        Username: '+data.username}</p>
          </div>
      </div>
      </div>

      <div className={classess.contact}>
        <div>
          <p>{data.website}</p>
        </div>
        <div>
          <p>{data.phone}</p>
        </div>
        <div>
          <p>{data.email}</p>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
