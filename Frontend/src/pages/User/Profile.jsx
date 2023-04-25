import React, { useContext } from 'react'
import UpdateUser from "../../components/User/UpdateUser";
import UserRentProfile from '../../components/User/UserRentProfile';
import UserAdminProfile from '../../components/User/UserAdminProfile';
import AuthContextProvider from '../../context/AuthContext';
import Incident from "../../components/Incident/Incident";

export default function Profile() {
  const { isAdmin, user } = useContext(AuthContextProvider)

  return (
    <>
      <section>
        <div  >
          <div  >
            <div  >
              <div  >
                <div  >
                  <UpdateUser />
                </div>
              </div>
            </div>
            {/* Rent Profile or User Admin */}
            {!user.opt_profile && (
              <div  >
                <div  >
                    {isAdmin && (
                      <UserAdminProfile />
                    )}
                    {!isAdmin && (
                      <UserRentProfile />
                    )}
                </div>
              </div>
            )}
            {/* Incident */}
            {user.opt_profile && (
              <>
                <div  >
                  <div  >
                    <Incident />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
