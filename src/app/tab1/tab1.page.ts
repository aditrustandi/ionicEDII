import { Component, OnInit } from '@angular/core';
import { PegawaiService } from "../api/pegawai.service";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  data_pegawai: any[];

  constructor(private pegawaiService: PegawaiService) {}

  ngOnInit()
  {
    
  }

  ionViewWillEnter() {
    const urlDataPegawai = '/index.php/Pegawai/DataPegawai';
    this.pegawaiService.sendGetRequest(urlDataPegawai).subscribe(
      (data: any[])=>{
        
        this.data_pegawai = data;
        
      }
    )
  }

}
