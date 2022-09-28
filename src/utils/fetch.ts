import { ZodPlaceJson } from '../types';
import data from './example_data.json';

interface IResponse {
  status: number;
  data?: ZodPlaceJson[];
}

export const Fetch = (
  category: string,
  query: string
): IResponse => {
  try {
    const zodData = data.map((item) => ZodPlaceJson.parse(item));
    const chkCategory = zodData.filter((item) => item.categories.includes(category))
    const chkQuery = chkCategory.filter(item => item.name.includes(query))
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