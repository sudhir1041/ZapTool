const API_BASE = '/api';

export async function apiSignup(username, email, password) {
  const res = await fetch(`${API_BASE}/signup/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, email, password })
  });
  if (!res.ok) {
    throw new Error('Signup failed');
  }
  return res.json();
}

export async function apiLogin(username, password) {
  const res = await fetch(`${API_BASE}/login/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });
  if (!res.ok) {
    throw new Error('Login failed');
  }
  return res.json();
}

export async function apiMe(token) {
  const res = await fetch(`${API_BASE}/me/`, {
    headers: { Authorization: `Token ${token}` }
  });
  if (!res.ok) throw new Error('Failed to fetch user');
  return res.json();
}
