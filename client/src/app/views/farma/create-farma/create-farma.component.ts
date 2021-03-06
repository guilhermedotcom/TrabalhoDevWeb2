import { Component, OnInit } from "@angular/core";
import { Farmacia } from "src/app/models/Farmacia";
import { FarmaService } from 'src/app/services/farma.service';

@Component({
  selector: "app-create-farma",
  templateUrl: "./create-farma.component.html",
  styleUrls: ["./create-farma.component.css"],
})
export class CreateFarmaComponent implements OnInit {
  
  farma: Farmacia = {
    nome: "",
    cnpj: ""
  };

  constructor(private service: FarmaService) {}

  ngOnInit(): void {
    
  }

  create(): void {
    this.service.create(this.farma).subscribe((farma) => {
      console.log(farma);
    });
  }
}
