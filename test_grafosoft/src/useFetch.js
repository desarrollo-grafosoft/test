import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("Datos recibidos:", data);
        setData(data);
      })
      .catch((error) => console.error("Error en la petición:", error));
  }, [url]);

  return { data };
}
