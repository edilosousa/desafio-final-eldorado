import { Component, OnInit } from '@angular/core';
import Category from 'src/app/models/Category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.sass']
})
export class AddCategoryComponent implements OnInit {
  categoryName: string = '';

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
  }

  onCreateCategory(): void {
    const category: Category = new Category()
    category.CAT_NOME = this.categoryName
    this.categoryService.createCategory(category).subscribe(response => {
      // if (response.errors !== null && response.errors.length > 0) {
      //   console.error('Erro ao criar compania')
      // } else {
        //this.listCompanies()
      // }
    })
  }

}
