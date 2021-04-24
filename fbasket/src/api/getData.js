const getData = async (url = "") => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    const error = response;
    throw error;
  }
  const resData = await response.json();
  return resData;
};

export default getData;
