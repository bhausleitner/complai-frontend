import { createAction, props } from '@ngrx/store';

export const actionLoadCompanyTags = createAction(
  '[Company] Load Company Tags',
  props<{ website: string }>()
);

export const actionLoadCompanyTagsSuccess = createAction(
  '[Company] Load Company Tags Sucess',
  props<{ tags: Array<string> }>()
);

export const actionRemoveCompanyTag = createAction(
  '[Company] Remove Company Tag',
  props<{ tag: string }>()
);

export const actionAddCompanyTag = createAction(
  '[Company] Add Company Tag',
  props<{ tag: string }>()
);
