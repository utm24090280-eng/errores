import {schema, model} from "mongoose";

const Esqueleto_de_tabla = new Schema({
    alumno: string,
    materias: string,
    calificacion_por_materia: Number,
    asistencias: Number,
    promedio: number,
    grado: Number,
})

 export const Tabla = new model("registros alumnos", Esqueleto_de_tabla)