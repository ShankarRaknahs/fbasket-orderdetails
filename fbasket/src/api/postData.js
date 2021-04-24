const postData = async (url = "", data = {}) => {
  const options = {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const response = await fetch(url, options);

  if (!response.ok) {
    const error = response;
    throw error;
  }
  const data = await response.json();
  return data;
};

export default postData;
