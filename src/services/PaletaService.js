import { Api } from "helpers/Api";

const parseResponse = (response) => response.json();

export const PaletaService = {
  getLista: () =>
    fetch(Api.paletaLista(), { method: "GET" }).then(parseResponse),
  getById: (id) =>
    fetch(Api.paletaById(id), { method: "GET" }).then(parseResponse),
  create: () =>
    fetch(Api.createPaleta(), {
      method: "POST",
    }).then(parseResponse),
  update: (id) => {
    return fetch(Api.updatePaletaById(id), {
      method: "PUT",
    }).then(parseResponse);
  },
  delete: (id) => {
    return fetch(Api.deletePaletaById(id), {
      method: "DELETE",
    }).then(parseResponse);
  },
};
