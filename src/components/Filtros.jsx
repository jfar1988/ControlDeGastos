import { useState, useEffect } from "react";

const Filtros = ({ filtro, setFiltro }) => {
  return (
    <div className="filtros sombra contenedor">
      <form>
        <div className="campo">
          <label>Filtrar Datos</label>
          <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
            <option value="">-- Todas Las Categorias --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="gastos">Gastos Varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
            <option value="hogar">Hogar</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Filtros;
