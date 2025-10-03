// Mock client API functions for the component library
/* eslint-disable @typescript-eslint/no-unused-vars */
export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export class ClientApi {
  static async get<T>(_endpoint: string): Promise<ApiResponse<T>> {
    // This is a mock implementation for the component library
    // In real usage, this would make actual API calls
    console.warn('ClientApi.get is a mock implementation');
    return {
      data: {} as T,
      status: 200,
      message: 'Mock response'
    };
  }

  static async post<T>(_endpoint: string, _data: unknown): Promise<ApiResponse<T>> {
    console.warn('ClientApi.post is a mock implementation');
    return {
      data: {} as T,
      status: 201,
      message: 'Mock response'
    };
  }

  static async put<T>(_endpoint: string, _data: unknown): Promise<ApiResponse<T>> {
    console.warn('ClientApi.put is a mock implementation');
    return {
      data: {} as T,
      status: 200,
      message: 'Mock response'
    };
  }

  static async delete<T>(_endpoint: string): Promise<ApiResponse<T>> {
    console.warn('ClientApi.delete is a mock implementation');
    return {
      data: {} as T,
      status: 204,
      message: 'Mock response'
    };
  }
}

// Legacy function wrapper for backwards compatibility with fetch-like API
export async function clientApiRequest(
  url: string,
  options?: RequestInit
): Promise<Response> {
  // This is a mock implementation for the component library
  // In real usage, this would use fetch() or axios
  console.warn('clientApiRequest is a mock implementation');

  const method = options?.method || 'GET';
  const body = options?.body ? JSON.parse(options.body as string) : undefined;

  // Mock Response object
  return {
    ok: true,
    status: method === 'DELETE' ? 204 : method === 'POST' ? 201 : 200,
    statusText: 'OK',
    json: async () => ({ success: true, data: body }),
    text: async () => JSON.stringify({ success: true }),
  } as Response;
}