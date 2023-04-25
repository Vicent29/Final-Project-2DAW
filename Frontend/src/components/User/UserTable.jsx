import React from "react";
import UserLine from "./UserLine";

export default function UserTable({users, changeStatus}) {
  return (
    <div  >
      <table  >
        <thead   >
          <tr  fixed>
            <th>ID</th>
            <th>Img</th>
            <th>FName</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => {
            return (
              <tr key={item.id}>
                <UserLine user={item} changeStatus={changeStatus}/>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}


