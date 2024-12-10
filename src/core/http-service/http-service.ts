import { API_URL } from "@/configs/global";
import { ApiError } from "@/types/http-errors.interface";
import axios, {
  AxiosHeaders,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosResponseHeaders,
} from "axios";
import { errorHandler, networkErrorStrategy } from "./http-error-strategies";

const httpService = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

httpService.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response) {
      const statusCode = error?.response?.status;
      if (statusCode >= 400) {
        const errorData: ApiError = error.response?.data;
        errorHandler[statusCode](errorData);
      }
    } else {
      networkErrorStrategy();
    }
  }
);

async function apiBase<T>(
  url: string,
  options?: AxiosRequestConfig
): Promise<T> {
  const response: AxiosResponse = await httpService(url, options);
  return response.data as T;
}

export async function readData<T>(
  url: string,
  headers?: AxiosHeaders
): Promise<T> {
  const options: AxiosRequestConfig = {
    headers: headers,
    method: "GET",
  };
  return await apiBase<T>(url, options);
}

export async function createData<TModel, TResult>(
  url: string,
  data: TModel,
  headers: AxiosHeaders
): Promise<TResult> {
  const options: AxiosRequestConfig = {
    headers: headers,
    method: "POST",
    data: JSON.stringify(data),
  };
  return await apiBase<TResult>(url, options);
}

export async function updateData<TModel, TResult>(
  url: string,
  data: TModel,
  headers: AxiosHeaders
): Promise<TResult> {
  const options: AxiosRequestConfig = {
    headers: headers,
    method: "PUT",
    data: JSON.stringify(data),
  };

  return await apiBase<TResult>(url, options);
}

export async function deleteData(
  url: string,
  headers?: AxiosResponseHeaders
): Promise<void> {
  const options: AxiosRequestConfig = {
    headers: headers,
    method: "DELETE",
  };

  return await apiBase(url, options);
}
