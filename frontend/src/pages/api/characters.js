import { api } from "./api";
import toast from "react-hot-toast";

export async function createData(payload) {
  const toastId = toast.loading("Salvando...");
  try {
    const response = await api.post("/api/fichas", payload);

    if (response.status === 200) {
      toast.success("Cadastrado com sucesso.", {
        duration: 5000,
      });
      return response.data;
    }
  } catch (error) {
    toast.error("Ops, ocorreu um erro.", {
      duration: 5000,
    });
    console.log(error);
  } finally {
    toast.dismiss(toastId);
  }
}

export async function getAllData() {
  const toastId = toast.loading("Procurando fichas...");

  try {
    const response = await api.get("/api/fichas");

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    toast.error(
      "Ocorreu um erro no servidor. Tente novamente ou contate o suporte.",
      {
        duration: 5000,
      }
    );
  } finally {
    toast.dismiss(toastId);
  }
}

export async function deleteData(id) {
  const toastId = toast.loading("Excluindo...");
  try {
    const response = await api.delete(`/api/fichas/${id}`);
    console.log(response);
    toast.success("Excluído com sucesso.", {
      duration: 5000,
    });
  } catch (error) {
    console.log(error);
    toast.error(
      "Ocorreu um erro no servidor. Tente novamente ou contate o suporte.",
      {
        duration: 5000,
      }
    );
  } finally {
    toast.dismiss(toastId);
  }
}
