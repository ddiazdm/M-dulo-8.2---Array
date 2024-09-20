import "./style.css";

import { pacientes, Pacientes, NumeroPacientesPorEspecialidad } from './data';

console.log("Hello Typescript!");

const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  var pacientesPediatria = pacientes.filter(
    (p) => p.especialidad == "Pediatra"
  );
  return pacientesPediatria;
};

var pedriatria = obtenPacientesAsignadosAPediatria(pacientes);
console.log("PacientesPediatria", pedriatria);

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  var pacientesMayoresEdadPediatria = pacientes.filter(
    (p) => p.especialidad == "Pediatra" && p.edad < 10
  );
  return pacientesMayoresEdadPediatria;
};

var pacientesMayoresEdadPediatria =
  obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes);
console.log("PacientesMayoresEdadPediatria", pacientesMayoresEdadPediatria);

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProctolo = pacientes.some(
    (p) => p.temperatura > 39 && p.frecuenciaCardiaca > 100
  );

  return activarProctolo;
};

console.log("Activado protocolo: ", activarProtocoloUrgencia(pacientes));

const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  return pacientes.map((paciente) => {
    return paciente.especialidad === "Pediatra"
      ? { ...paciente, especialidad: "Medico de familia" } 
      : { ...paciente }; 
  });
};

console.log("reasignacion : ", reasignaPacientesAMedicoFamilia(pacientes));


const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  return pacientes.some(paciente => paciente.especialidad.trim() == "Pediatra");
};

console.log("Hay pacientes de pediatria ? ", HayPacientesDePediatria(pacientes))

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  return pacientes.reduce((acc, paciente) => {
    if (paciente.especialidad === 'Medico de familia') {
      acc.medicoDeFamilia += 1;
    }
    if (paciente.especialidad === 'Pediatra') {
      acc.pediatria += 1;
    }
    if (paciente.especialidad === 'Cardiólogo') {
      acc.cardiologia += 1;
    }
    return acc;
  }, { medicoDeFamilia: 0, pediatria: 0, cardiologia: 0 });
};

console.log("cuenta de los pacientes por especialidad: ", cuentaPacientesPorEspecialidad(pacientes));
