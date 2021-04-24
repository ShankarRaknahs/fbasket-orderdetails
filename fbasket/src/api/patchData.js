const patchData = async (url = "", reqData = {}) => {
  const options = {
    method: "PATCH",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reqData),
  };

  const response = await fetch(url, options);

  if (!response.ok) {
    const error = response;
    throw error;
  }
  const resData = await response.json();
  return resData;
};

export default patchData;
