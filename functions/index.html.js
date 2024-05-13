let responseString =`
<!DOCTYPE html>
<html>
<head>
  <title>URL Shorter</title>
  <meta charset="UTF-8">
  <meta name="description" content="便捷的短网址生成工具">
  <meta name="keywords" content="短网址生成,URL Shorter">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f5f5f5;
    }
    h1 {
      text-align: center;
      color: #333;
      margin-top: 30px;
    }

  .form-container {
      background-color: #fff;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      width: 80%;
      margin: 0 auto;
    }

  .form-row {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 15px;
    }

    label {
      flex: 1;
      margin-right: 10px;
      font-weight: bold;
      color: #555;
    }

    #inputUrl {
      flex: 3;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 3px;
    }

    button {
      flex: 1;
      padding: 10px 20px;
      background-color: #4CAF50;
      color: #fff;
      border: none;
      border-radius: 3px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    button:hover {
      background-color: #45a049;
    }

    #resultDiv {
      text-align: center;
      margin-top: 20px;
      color: #333;
    }
  </style>
</head>

<body>

  <h1>URL Shorter</h1>
  <div class="form-container">
    <div class="form-row">
      <label>url：</label>
      <input type="text" id="inputUrl">
      <button onclick="submitForm()">GEN</button>
    </div>

    <div id="resultDiv"></div>
  </div>
  

    <script>
  function submitForm() {
    var inputValue = document.getElementById('inputUrl').value;
    var encodedValue = cusbtoa(inputValue);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/addkey', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('value=' + encodedValue);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var result = xhr.responseText;
        document.getElementById('resultDiv').innerText = location.origin+'/'+result;
      }
    };
  }

  function cusbtoa(str) {
    return window.btoa(unescape(encodeURIComponent(str)));
  }
</script>
</body>
</html>
`

export async function onRequest(context) {
    return new Response(responseString,{headers: {
      'Content-Type': 'text/html;charset=UTF-8' ,
    },});
}
