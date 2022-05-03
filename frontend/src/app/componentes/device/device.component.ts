import { Component, OnInit } from '@angular/core';
import Device  from 'src/app/models/Device'
import { DeviceService } from 'src/app/services/device.service'

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.sass']
})
export class DeviceComponent implements OnInit {
  device: Device[] = [];

  constructor(private deviceService: DeviceService) { }

  ngOnInit(): void {
    this.listDevice()
  }

  listDevice() { 
    return this.deviceService.listDevice().subscribe(response => {
      this.device = response
    })
  }

  onDeleteDevice(deviceId: number): void {
    this.deviceService.deleteDevice(deviceId).subscribe(response => {
      alert("Device Deletado com sucesso!")
        this.listDevice()
    })
  }

}
