const mutationEvent = (url: string, config: RequestInit = {}) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: "",
      ...config,
    })
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export { mutationEvent };
