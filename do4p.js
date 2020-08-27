const axios = require('axios')
const configuracoes = require("./configurar.json");

let data = {
  "password":`${configuracoes.senha}`
};

let configuracao = {
  headers: {
      'Content-Type': 'application/json',
      "authorization": `${configuracoes.token}`
  }
};

axios.post('https://discord.com/api/v8/users/@me/disable', data, configuracao)


