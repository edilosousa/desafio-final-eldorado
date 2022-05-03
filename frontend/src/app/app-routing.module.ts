import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component'
import { LoginComponent } from './componentes/login/login.component'
import { CategoryComponent } from './componentes/category/category.component'
import { AddCategoryComponent } from './componentes/category/add-category/add-category.component'
import { DeviceComponent } from './componentes/device/device.component'
import { AddDeviceComponent } from './componentes/device/add-device/add-device.component'

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'devices', component: DeviceComponent },
  { path: 'addCategory', component: AddCategoryComponent },
  { path: 'addDevice', component: AddDeviceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
