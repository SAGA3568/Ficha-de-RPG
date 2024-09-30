import { api } from "./api";
import toast from "react-hot-toast";

export function createData(payload) {
  const toastId = toast.loading("Salvando...");

  api
    .post("url", payload)
    .then((response) => {
      toast.success("Cadastrado com sucesso.", {
        duration: 5000,
      });
      console.log(response.data);
    })
    .catch((err) => {
      toast.error("Ops, ocorreu um erro.", {
        duration: 5000,
      });
      console.log(err);
    })
    .finally(() => {
      toast.dismiss(toastId);
    });
}

export function getAllData(payload) {
  api
    .post("url", payload)
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getDataById(id) {
  api
    .get(`url/${id}`, payload)
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
}
