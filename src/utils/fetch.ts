import { PlaceInfo } from '../types';
import data from './example_data.json';

interface IResponse {
  status: number;
  data?: PlaceInfo[];
}

export const Fetch = async (
  category: string,
  query: string
): Promise<IResponse> => {
  try {
    const zodData = data.map((item) => PlaceInfo.parse(item));
    const chkCategory = zodData.filter((item) => item.categories.includes(category))
    const chkQuery = chkCategory.filter(item => item.name.toLowerCase().includes(query.toLowerCase()))
    return {
      data: chkQuery,
      status: 200
    }
  } catch (err) {
    console.error(err)
    return {
      status: 500
    }
  }
}