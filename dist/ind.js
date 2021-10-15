function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
document.querySelector('#form').addEventListener('submit',(e)=>{
  e.preventDefault()
  file_div = document.querySelector('#file')
  // data = getBase64(e.target.elements.adhar.value)
  file=file_div.files[0];
  console.log(file)
  if(file.size >= 6*1024*1024){
    console.log('file size should be less than 6mb')
  } else {
    getBase64(file).then((data) => {
      console.log(data)
      
      postData('http://localhost:8888/register/submit', { file:{adhar:data}})
        .then(data1 => {
          console.log(data1); // JSON data parsed by `data.json()` call
        });
      // // document.querySelector('#form').submit();
      }
    );
  }
})
function convert(e){
  console.log(e);
}
function sendData(e){
  e.preventDefault();
  console.log(e);
}