import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {format} from "date-fns";
import { PegawaiService } from "../../api/pegawai.service";
import { Location } from "@angular/common";

@Component({
  selector: 'app-tambah-pegawai',
  templateUrl: './tambah-pegawai.component.html',
  styleUrls: ['./tambah-pegawai.component.scss'],
})
export class TambahPegawaiComponent implements OnInit {

  todo: FormGroup

  constructor(private formBuilder: FormBuilder, private pegawaService:PegawaiService, private location:Location) { }

  ngOnInit() {
    this.todo = this.formBuilder.group(
      {
        nama: new FormControl({value:'', disabled:false}, Validators.required),
        nik: new FormControl({value:'', disabled:false}, Validators.required),
        jenis_kelamin: new FormControl({value:'', disabled:false}, Validators.required),
        tanggal_lahir: new FormControl({value:'', disabled:false}, Validators.required),
      }
    )
  }

  tambahData()
  {
    const tanggal_lahir = format(new Date(this.todo.value.tanggal_lahir), "yyyy-MM-dd");
    const urlDataPegawai = '/index.php/Pegawai/TambahDataPegawai';
    let fd = new FormData();

    fd.append('nama', this.todo.value.nama);
    fd.append('nik', this.todo.value.nik);
    fd.append('jenis_kelamin', this.todo.value.jenis_kelamin);
    fd.append('tanggal_lahir', tanggal_lahir);

    this.pegawaService.postRequest(urlDataPegawai, fd)
    .subscribe(
      (data:any)=>{
        
        if (data == true) {
          this.location.back()
        }
        
      }
    )
    
    
  }

}
