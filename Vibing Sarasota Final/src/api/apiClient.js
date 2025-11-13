// Custom API client for Vibing Sarasota
const ENV_API_URL = import.meta.env.VITE_API_URL || '';
const DEFAULT_API_BASE_URL = ENV_API_URL || 'http://localhost:3000/api';
const DEFAULT_API_KEY = import.meta.env.VITE_SUPABASE_KEY || '';

export class ApiClient {
  constructor(baseURL = DEFAULT_API_BASE_URL, apiKey = DEFAULT_API_KEY) {
    this.baseURL = baseURL;
    this.apiKey = apiKey;
  }

  buildHeaders(customHeaders = {}) {
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...customHeaders,
    };

    if (this.apiKey) {
      headers.apikey = this.apiKey;
      headers.Authorization = `Bearer ${this.apiKey}`;
    }

    return headers;
  }

  async request(endpoint, options = {}) {
    if (!this.baseURL) {
      throw new Error('API base URL is not configured.');
    }

    const url = `${this.baseURL}${endpoint}`;
    const headers = this.buildHeaders(options.headers);
    const config = {
      ...options,
      headers,
    };

    if (options.body && typeof options.body !== 'string') {
      config.body = JSON.stringify(options.body);
    }

    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }

      if (response.status === 204) {
        return null;
      }

      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  get(endpoint, options = {}) {
    return this.request(endpoint, { ...options, method: 'GET' });
  }

  post(endpoint, body, options = {}) {
    const headers = {
      ...options.headers,
    };

    if (this.apiKey && this.baseURL?.includes('supabase.co')) {
      headers.Prefer = headers.Prefer || 'return=representation';
    }

    return this.request(endpoint, {
      ...options,
      method: 'POST',
      body,
      headers,
    });
  }

  put(endpoint, body, options = {}) {
    return this.request(endpoint, { ...options, method: 'PUT', body });
  }

  delete(endpoint, options = {}) {
    return this.request(endpoint, { ...options, method: 'DELETE' });
  }
}

export const apiClient = new ApiClient();

export const createApiClient = (baseURL, apiKey = DEFAULT_API_KEY) =>
  new ApiClient(baseURL, apiKey);

