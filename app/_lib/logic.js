// Function to call API to generate accessToken from refreshToken that is stored
// in Cookie
async function generateAccessToken() {
  const response = await fetch("https://grocery-app.my.id/api/token", {
    method: "GET",
    headers: { "content-type": "application/json" },
    credentials: "include",
  });

  const data = await response.json();
  return data;
}

export { generateAccessToken };
