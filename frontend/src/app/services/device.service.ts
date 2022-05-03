import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import Device from '../models/Device';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  baseUrl: string = 'http://localhost:3000/api/device';

  constructor(private httpClient: HttpClient) { }

  private getOptions() {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjUxNjEwMDc4LCJleHAiOjE2NTc2MTAwNzh9.5QAk6xYJj3KQKp9Flft2z5s1q-vdnU647WeB8DZedHw"
    // const token = localStorage.getItem('token')

    return {
      headers: { 'Authorization': `Bearer ${token}` },
      // observe: 'response',
      // responseType: 'json'
    }
  }
  
  createDevice(device: Device){
    return this.httpClient.post(`${this.baseUrl}/add`, {
              device_name:device.DEV_NAME,
              device_color:device.DEV_COLOR,
              device_partnumber:device.DEV_PARTNUMBER,
              device_fk_id_category:device.DEV_FK_ID_CATEGORY
              }, this.getOptions())
  }

  listDevice() {
    return this.httpClient.get(`${this.baseUrl}`,this.getOptions())
    .pipe(
      map((resposta: any) => resposta)
    )
  }

  deleteDevice(deviceId: number) {
    return this.httpClient.delete(`${this.baseUrl}/${deviceId}`, this.getOptions())
  }

}
