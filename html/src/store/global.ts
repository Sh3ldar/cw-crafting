// Utilities
import { defineStore } from 'pinia'
import { Recipe, Recipes } from './types'

export const useGlobalStore = defineStore('global', {
  state: () => ({
    oxInventory: false,
    uiIsOpen: false,
    selectedCategories: [] as string[],
    selectedRecipe: '',
    search: '',
    recipes: {} as Recipes,
    isLoadingBaseData: true,
  })
})
