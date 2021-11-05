export default {
  name: "DolarHoje",
  data() {
    return {
      valorDolar: 0,
    }
  },
  template: `<p>Valor dolar/real: {{valorDolar}}</p>`,
  methods: {
    puxarDolar() {
      fetch("https://exchangeratesapi.io/latest?base=USD")
        .then(r => r.json())
        .then(r => {
          this.valorDolar = r.rates.BRL
        })
    }
  },
  created() {
    this.puxarDolar();
  }
}