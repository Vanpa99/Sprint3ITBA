import React, { useEffect, useState } from "react";
import InputField from "./InputField";
import Selector from "./Selector";
import Boton from "./Boton";
import { opcionesMoneda } from "./Selector.jsx";
import reut from "../../modules/Reut.module.css";

function Saldo({ saldo, fromCurrency, toCurrency }) {
  const [saldoConvertido, setSaldoConvertido] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const apiKey = "d73d8e24e51e8ce6bfd33d19"; // Aquí va tu API key

  // URL para obtener las tasas de cambio
  const convertUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;

  // Efecto para la conversión del saldo
  useEffect(() => {
    if (saldo > 0) {
      setIsLoading(true);
      fetch(convertUrl)
        .then((response) => response.json())
        .then((data) => {
          const rate = data.conversion_rates[toCurrency];
          const saldoEnOtraMoneda = saldo * rate;
          setSaldoConvertido(saldoEnOtraMoneda.toFixed(2));
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching the exchange rate:", error);
          setIsLoading(false);
        });
    }
  }, [saldo, fromCurrency, toCurrency, convertUrl]);

  return (
    <div>{isLoading ? "Cargando..." : `${saldoConvertido} ${toCurrency}`}</div>
  );
}

// Componente Moneda para el convertidor de monto
function Moneda() {
  const [amount, setAmount] = useState();
  const [fromCurrency, setFromCurrency] = useState("ARS");
  const [toCurrency, setToCurrency] = useState("USD");
  const [result, setResult] = useState(null);
  const apiKey = "d73d8e24e51e8ce6bfd33d19"; // Clave de API
  const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;

  useEffect(() => {
    if (amount > 0) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const rate = data.conversion_rates[toCurrency];
          const conversionResult = amount * rate;
          setResult(
            `${toCurrency} ${conversionResult.toLocaleString("es-ES")} `
          );
        })
        .catch((error) => {
          console.error("Error fetching the exchange rate:", error);
        });
    }
  }, [amount, fromCurrency, toCurrency, url]);

  return (
    <section className={reut.contPrincipal}>
      <h3 className={reut.sectionTitle}>Convertidor de Monedas</h3>
      <p className={reut.infoForm}>
        A continuacion le ofrecemos nuestro servicio de convertidor de monedas:
      </p>

      <form className={reut.formContainer}>
        <Selector
          name="fromCurrency"
          label="Moneda a convertir:"
          options={opcionesMoneda}
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        />
        <InputField
          type="number"
          id="monto"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Ingrese monto"
        />
        <Boton type="button" text="Limpiar" action="clear" />
        <Selector
          name="toCurrency"
          label="Moneda convertida:"
          options={opcionesMoneda}
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        />
        <InputField
          for="result"
          type="text"
          id="result"
          value={result || ""}
          placeholder="Monto convertido"
          disabled
        />
      </form>
    </section>
  );
}

export { Saldo, Moneda };
