export const register = (client) => async (params) => {
  try {
    const { data } = await client.post("/auth/signup", params);
    console.info("signup data: ", data);
  } catch (error) {
    console.info("signup error: ", error.message);
  }
};

export const signin = (client) => async (params) => {
  try {
    const { data } = await client.post("/auth/signin", params);
    console.info(data);
    return data;
  } catch (error) {
    console.info("login error: ", error.message);
    return { success: false };
  }
};

export const logout = (client) => async () => {
  try {
    const { data } = await client.post("/auth/signout");
    return data;
  } catch (error) {
    console.info("signout error: ", error.message);
    return { success: false };
  }
};
