import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-empresa",
  imports: [FormsModule],
  templateUrl: "./empresa.html",
  styleUrl: "./empresa.css",
})
export class Empresa {
  empresa = {
    nome: "",
    cnpj: "",
    logomarca: "",
    fundacao: "",
    descricao: "",
  };
}
