import { Endereco } from './endereco';

export class Usuario {
    uid:String;
    nome: String;
    email: String;
    pws: String;
    endereco: Endereco = new Endereco
}
