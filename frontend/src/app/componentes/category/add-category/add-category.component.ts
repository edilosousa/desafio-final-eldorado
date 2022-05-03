import { Component, OnInit } from '@angular/core';
import Category from 'src/app/models/Category';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.sass']
})
export class AddCategoryComponent implements OnInit {
  categoryName: string = '';
  category: Category[] = [];

  constructor(private categoryService: CategoryService,  private router: Router) { }

  ngOnInit(): void {
  }

  listCategory() { 
    return this.categoryService.listCategory().subscribe(response => {
      this.category = response
    })
  }

  onCreateCategory(): void {
    const category: Category = new Category()
    category.CAT_NOME = this.categoryName
    this.categoryService.createCategory(category).subscribe(response => {
      // if (response.errors !== null && response.errors.length > 0) {
      //   console.error('Erro ao criar compania')
      // } else {
        alert("Categoria Cadastrada com sucesso!")
        this.router.navigate(['/category']);
      // }
    })
  }

}
