var apiKey = {
  key: 'f3242b9f-5f7d-4d19-83cb-f46fde63a4d7'
};

fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=${apiKey.key}`)
  .then(response => {
    if (!response.ok) throw new Error('Erro ao executar a requisição, status ' + response.status);
    return response.json();
  })
  .then(api => {
    var text = "";

    for (let i = 0; i < 15; i++) {
      text += `
        <div class="media">
          <img src="./images/coin.jpg" alt="coin" />
          <div class="media-body">
          <h5>${api.data[i].name}</h5>
          <p>${api.data[i].symbol}</p>
          </div>
        </div>
      `;

      document.getElementById("coins").innerHTML = text;
    }
  })
  .catch(error => {
    console.log(error.message);
  })