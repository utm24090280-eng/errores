import {Schema, model} from "mongoose";

const Esqueleto_de_tabla = new Schema({
    coment:String
})

 export const Tabla = new model("Tabla de quejas UTMA", Esqueleto_de_tabla)