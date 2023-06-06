import { useEffect, useState, useCallback, useContext } from "react";
import RentService from "../services/RentService";
import { toast } from "react-toastify";
import { useBikes } from "./useBikes";
import { useAuth } from "./useAuth";
import AuthContextProvider from "./../context/AuthContext";

export function useRent() {
  const [rents, setRent] = useState([]);
  const { updateUser } = useAuth();
  const { user } = useContext(AuthContextProvider);

  const createRent = useCallback(async (bikeRent) => {
    let returned = 0;
    await RentService.createRent(bikeRent)
      .then(() => {
        toast.success(bikeRent.slug + " rented successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
        returned = bikeRent.bike;
      })
      .catch(({ response }) => {
        if (response.data) {
          toast.error(response.data[0], {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      });
    return returned;
  }, []);

  const closeRent = useCallback(async (id, data) => {
    await RentService.closeRent(id, data)
      .then(({ data }) => {
        if (data.cost > parseFloat(user.balance)){
            toast.error("Insufficient balance", {
                position: toast.POSITION.TOP_RIGHT,
            });
        }else {
            const discount_balance = parseFloat(user.balance) - data.cost;
            updateUser({ balance: discount_balance });
        }
        
      })
      .catch(({ response }) => {
        if (response.data) {
          toast.error("Insufficient balance", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      });
  }, []);

  const getRentsByUser = useCallback(async () => {
    await RentService.getRentsByUser().then(({ data }) => {
      setRent(data);
    });
  });

  return { rents, setRent, createRent, closeRent, getRentsByUser };
}
