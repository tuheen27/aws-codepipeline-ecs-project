// API client utilities for frontend
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

let authToken: string | null = localStorage.getItem('authToken');

export function setAuthToken(token: string) {
  authToken = token;
  localStorage.setItem('authToken', token);
}

export function getAuthToken() {
  return authToken;
}

function getHeaders() {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };
  if (authToken) {
    headers['Authorization'] = `Bearer ${authToken}`;
  }
  return headers;
}

// Auth API
export const authApi = {
  async login(password: string) {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({ password }),
    });
    if (!response.ok) throw new Error('Login failed');
    const data = await response.json();
    setAuthToken(data.token);
    return data;
  },
};

// Personal Info API
export const personalApi = {
  async get() {
    const response = await fetch(`${API_BASE_URL}/personal`, {
      headers: getHeaders(),
    });
    if (!response.ok) throw new Error('Failed to fetch personal info');
    return response.json();
  },
  async update(id: string, data: any) {
    const response = await fetch(`${API_BASE_URL}/personal/${id}`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to update personal info');
    return response.json();
  },
  async create(data: any) {
    const response = await fetch(`${API_BASE_URL}/personal`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to create personal info');
    return response.json();
  },
};

// Projects API
export const projectsApi = {
  async getAll() {
    const response = await fetch(`${API_BASE_URL}/projects`, {
      headers: getHeaders(),
    });
    if (!response.ok) throw new Error('Failed to fetch projects');
    return response.json();
  },
  async get(id: string) {
    const response = await fetch(`${API_BASE_URL}/projects/${id}`, {
      headers: getHeaders(),
    });
    if (!response.ok) throw new Error('Failed to fetch project');
    return response.json();
  },
  async create(data: any) {
    const response = await fetch(`${API_BASE_URL}/projects`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to create project');
    return response.json();
  },
  async update(id: string, data: any) {
    const response = await fetch(`${API_BASE_URL}/projects/${id}`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to update project');
    return response.json();
  },
  async delete(id: string) {
    const response = await fetch(`${API_BASE_URL}/projects/${id}`, {
      method: 'DELETE',
      headers: getHeaders(),
    });
    if (!response.ok) throw new Error('Failed to delete project');
    return response.json();
  },
};

// Skills API
export const skillsApi = {
  async getAll() {
    const response = await fetch(`${API_BASE_URL}/skills`, {
      headers: getHeaders(),
    });
    if (!response.ok) throw new Error('Failed to fetch skills');
    return response.json();
  },
  async create(data: any) {
    const response = await fetch(`${API_BASE_URL}/skills`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to create skill');
    return response.json();
  },
  async update(id: string, data: any) {
    const response = await fetch(`${API_BASE_URL}/skills/${id}`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to update skill');
    return response.json();
  },
  async delete(id: string) {
    const response = await fetch(`${API_BASE_URL}/skills/${id}`, {
      method: 'DELETE',
      headers: getHeaders(),
    });
    if (!response.ok) throw new Error('Failed to delete skill');
    return response.json();
  },
};

// Experience API
export const experienceApi = {
  async getAll() {
    const response = await fetch(`${API_BASE_URL}/experience`, {
      headers: getHeaders(),
    });
    if (!response.ok) throw new Error('Failed to fetch experience');
    return response.json();
  },
  async create(data: any) {
    const response = await fetch(`${API_BASE_URL}/experience`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to create experience');
    return response.json();
  },
  async update(id: string, data: any) {
    const response = await fetch(`${API_BASE_URL}/experience/${id}`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to update experience');
    return response.json();
  },
  async delete(id: string) {
    const response = await fetch(`${API_BASE_URL}/experience/${id}`, {
      method: 'DELETE',
      headers: getHeaders(),
    });
    if (!response.ok) throw new Error('Failed to delete experience');
    return response.json();
  },
};

// Social API
export const socialApi = {
  async getAll() {
    const response = await fetch(`${API_BASE_URL}/social`, {
      headers: getHeaders(),
    });
    if (!response.ok) throw new Error('Failed to fetch social links');
    return response.json();
  },
  async update(platform: string, url: string) {
    const response = await fetch(`${API_BASE_URL}/social/${platform}`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify({ url }),
    });
    if (!response.ok) throw new Error('Failed to update social link');
    return response.json();
  },
};
