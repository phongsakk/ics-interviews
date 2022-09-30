import { PlaceInfo } from '../types';
import { DATA_PER_PAGE } from './const';
import data from './example_data.json';

interface IResponse {
  status: number;
  data?: PlaceInfo[];
  pageCount?: number;
  dataCount?: number;
  hasNextPage?: boolean;
}

export const Fetch = async (
  category: string,
  query: string,
  page: number = 1
): Promise<IResponse> => {
  try {
    const zodData = data.map((item) => PlaceInfo.parse(item));
    const chkCategory = zodData.filter((item) => item.categories.includes(category))
    const chkQuery = chkCategory.filter(item => item.name.toLowerCase().includes(query.toLowerCase()))

    const start = (page - 1) * DATA_PER_PAGE
    const end = start + DATA_PER_PAGE
    const responseData = chkQuery.slice(start, end)

    const dataCount = chkQuery.length
    const pageCount = Math.ceil(chkQuery.length / DATA_PER_PAGE)

    return {
      data: responseData,
      dataCount,
      pageCount,
      status: 200
    }
  } catch (err) {
    console.error(err)
    return {
      status: 500
    }
  }
}

export const FetchById = async (id: number): Promise<PlaceInfo> => {
  setTimeout(() => {

  }, 200);

  return PlaceInfo.parse(data.find(item => item.id === id))
}