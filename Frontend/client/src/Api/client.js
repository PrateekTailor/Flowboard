const BASE_URL = "http://localhost:8002/api";

export async function request(path, options = {}) {
  const token = localStorage.getItem("token");

  const res = await fetch(BASE_URL + path, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });
  const data = await res.json().catch(()=>({}));

  if(!res.ok){
    throw new Error(data.message||"kuch galat hua hai api client me");
  }
  return data;
}

export async function login(email,password) {
    const data =  await request("/auth/login",{
        method:"POST",
        body:JSON.stringify({Email:email,password:password}),
    })
    localStorage.getItem("token",data.token);
    return data;
}

export async function signup(name,email,password) {
    await request("/auth/signup",{
        method:"POST",
        body:JSON.stringify({Name:name,Email:email,password:password})
    })
    return login(email,password);
}