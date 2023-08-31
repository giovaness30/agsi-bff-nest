import { SisUserViewModel } from "../models/view-models/sisUser-data.model";

export class SisUserAdaptor {
  static listAll(dataItem: SisUserViewModel[]) {
    const newArr = [];
    dataItem.forEach((item) => {
      newArr.push({
        key: item?.key,
        description: item?.description,
        type: item?.type
      })

    });

    return {
      data: newArr,
      error: null,
      message: 'Dados encontrados com Sucesso!',
      status: 200
    }
  }
}