export function httpGet(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.json())
      .then(result => resolve(result))
      .catch(error => reject(error));
  });
}

export function httpPost(url, data) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: "post",
      header: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(result => resolve(result))
    .catch(error => reject(error));
  });
}
