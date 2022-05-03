import { Component, OnInit } from '@angular/core';
import Device from 'src/app/models/Device';
import { DeviceService } from 'src/app/services/device.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.sass']
})
export class AddDeviceComponent implements OnInit {
  deviceName: string = '';
  deviceCor: string = '';
  devicePartnumber: number = 0;
  deviceCategoria: number =0;

  device: Device[] = [];

  constructor(private categoryService: DeviceService,  private router: Router) { }

  ngOnInit(): void {
  }

  
  onCreateDevice(): void {
    const device: Device = new Device()

    device.DEV_NAME = this.deviceName
    device.DEV_COLOR = this.deviceCor
    device.DEV_PARTNUMBER = this.devicePartnumber
    device.DEV_FK_ID_CATEGORY = this.deviceCategoria

    this.categoryService.createDevice(device).subscribe(response => {
      // if (response.errors !== null && response.errors.length > 0) {
      //   console.error('Erro ao criar compania')
      // } else {
        alert("Device Cadastrada com sucesso!")
        this.router.navigate(['/devices']);
      // }
    })
  }

}
