import "./style.css";

import {   pacientes, Pacientes } from "./data";

console.log("Hello Typescript!");

const obtenPacientesAsignadosAPediatria = (
    pacientes: Pacientes[]
  ): Pacientes[] => {
    var pacientesPediatria =  pacientes.filter(p => p.especialidad == 'Pediatra');
    return pacientesPediatria;
  };

var pedriatria = obtenPacientesAsignadosAPediatria(pacientes)
console.log(pedriatria)