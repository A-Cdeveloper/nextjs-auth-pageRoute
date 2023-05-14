export const registrationUser = async (email, password) => {
  const response = await fetch('/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something was wrong');
  }
  return data;
};
