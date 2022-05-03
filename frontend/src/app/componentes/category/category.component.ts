import { Component, OnInit } from '@angular/core';
import Category  from 'src/app/models/Category'
import {CategoryService} from 'src/app/services/category.service'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.sass']
})
export class CategoryComponent implements OnInit {
  category: Category[] = [];

 
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.listCategory()
  }

  listCategory() { 
    return this.categoryService.listCategory().subscribe(response => {
      this.category = response
    })
  }

  onDeleteCategory(categoryId: number): void {
    this.categoryService.deleteCategory(categoryId).subscribe(response => {
        this.listCategory()
    })
  }

}
