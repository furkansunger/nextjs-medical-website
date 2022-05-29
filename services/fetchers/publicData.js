import axios from "../../axios-instance-be";
import { getFlatObject } from "../utils/getFlatObject";

export const getMultipleData = async (
  dataName = "",
  fields = "",
  populate = "",
  filters = "",
  sort = ""
) => {
  try {
    const response = await axios.get(
      `/${dataName}?${fields}${populate}${filters}${sort}`
    );
    let data;
    const arr = response.data.data || response.data;
    if (Array.isArray(arr)) {
      data = arr.map((item) => getFlatObject(item));
    } else {
      data = getFlatObject(arr);
    }
    return data;
  } catch (err) {
    console.log(err.toJSON());
    return [];
  }
};

export const getSingleData = async (
  dataName = "",
  id = "",
  fields = "",
  populate = "",
  filters = "",
  sort = ""
) => {
  try {
    const response = await axios.get(
      `/${dataName}/${id}?${fields}${populate}${filters}${sort}`
    );
    if (Object.keys(response.data).length === 0) {
      return null;
    }
    const dataObj = response.data.data || response.data;
    const data = getFlatObject(dataObj);
    return data;
  } catch (err) {
    console.log(err.toJSON());
    return null;
  }
};
