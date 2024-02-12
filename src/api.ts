import { IConta } from "./interfaces/Conta"


const conta:IConta = {

  nome:"Diogo",
  email:"bacildo@gmail.com",
  senha:"123456",
  saldo:5000.00,
  id:'1'
}

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta)
  }, 3000)
})

