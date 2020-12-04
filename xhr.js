const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

const sendHttpRequest = (method, url, data) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.responseType = 'json';

    if (data) {
      xhr.setRequestHeader('Content-Type','application/json');
      xhr.setRequestHeader('Accept','*/*');
      xhr.setRequestHeader('X-Authorization','Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsaW5oY3QwMjAzMjhAZ21haWwuY29tIiwic2NvcGVzIjpbIlRFTkFOVF9BRE1JTiJdLCJ1c2VySWQiOiIwZjcwZTAxMC05YTY5LTExZTktYmU4NC03NTZmNmIxMzAzYjUiLCJmaXJzdE5hbWUiOiJUaHV5IiwibGFzdE5hbWUiOiJMaW5oIiwiZW5hYmxlZCI6dHJ1ZSwicHJpdmFjeVBvbGljeUFjY2VwdGVkIjp0cnVlLCJpc1B1YmxpYyI6ZmFsc2UsInRlbmFudElkIjoiMGYzMDA2ODAtOWE2OS0xMWU5LWJlODQtNzU2ZjZiMTMwM2I1IiwiY3VzdG9tZXJJZCI6IjEzODE0MDAwLTFkZDItMTFiMi04MDgwLTgwODA4MDgwODA4MCIsImlzcyI6InRoaW5nc2JvYXJkLmlvIiwiaWF0IjoxNjA3MDgwMDUwLCJleHAiOjE2MDg4ODAwNTB9.WB7W3CWQ94g-7kI7qDOkBGOQyhsxbzN_eaEmyCt4iOJEm9SxMloXmOztKxCgYF1drg6ZUWW5OqMaFlThKloEUg');

    }

    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };

    xhr.onerror = () => {
      reject('Something went wrong!');
    };

    xhr.send(JSON.stringify(data));
  });
  return promise;
};

const getData = () => {
  sendHttpRequest('GET', 'https://reqres.in/api/users').then(responseData => {
    console.log(responseData);
  });
};

const sendData = () => {
  sendHttpRequest('POST', 'http://demo.thingsboard.io/api/plugins/rpc/oneway/3e85b630-28a4-11eb-85ee-f936949cce2a',{
   // email: 'eve.holt@reqres.in'
    // password: 'pistol'
      method:"R4",
      params:false,
      timeout:1000
  })
    .then(responseData => {
      console.log(responseData);
    })
    .catch(err => {
      console.log(err);
    });
};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);
