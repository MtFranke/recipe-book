import {Component, OnInit} from '@angular/core';
import { Recipe } from "../recipe.model";
import {RecipeService} from "../recipe.service";
import {Route, Router, Routes} from "@angular/router";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit{

  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService,
              private route: Router)
  {
  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipeClick() {
    this.route.navigate(['/recipes', 'new']);
  }
}
