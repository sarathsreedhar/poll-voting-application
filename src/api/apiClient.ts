import axios, { type AxiosInstance, type AxiosResponse, type AxiosRequestConfig } from 'axios'

class ApiClient {
  private instance: AxiosInstance | null = null

  private get http(): AxiosInstance {
    return this.instance != null ? this.instance : this.initHttp()
  }

  initHttp() {
    console.log(process.env)
    const http = axios.create({
      baseURL: `${process.env.REACT_APP_API_BASE_URL}`,
    })

    http.interceptors.response.use(
      (response) => response,
      (error) => {
        const { response } = error
        return Promise.reject(response)
      }
    )

    this.instance = http
    return http
  }

  request<T = any, R = AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R> {
    return this.http.request(config)
  }

  get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.http.get<T, R>(url, config)
  }

  post<T = any, R = AxiosResponse<T>>(url: string, data?: T, config?: AxiosRequestConfig): Promise<R> {
    return this.http.post<T, R>(url, data, config)
  }
}

export const client = new ApiClient()
