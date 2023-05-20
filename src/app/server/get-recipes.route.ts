

import { Request, Response } from 'express';
import { RECIPES } from "./db-data";



// export function getAllRecipes(req: Request, res: Response) {

//   res.status(200).json({ payload: Object.values(RECIPES).sort((c1: any, c2: any) => c1.seqNo - c2.seqNo) });

// }

export function getAllRecipes(req: Request, res: Response) {

  console.log("Retrieving recipes data ...");

  setTimeout(() => {

    res.status(200).json({ payload: Object.values(RECIPES) });

  }, 1000);



}


export function getRecipeById(req: Request, res: Response) {

  const recipeId = req.params["id"];

  const recipes: any = Object.values(RECIPES);

  const recipe = recipes.find((recipe: any) => recipe.id == recipeId);

  res.status(200).json(recipe);
}
