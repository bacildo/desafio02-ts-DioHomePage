const conta = {
  nome:"Diogo",
  email:"bacildo@gmail.com",
  senha:"123456",
  saldo:5000.00
}

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta)
  }, 3000)
})
