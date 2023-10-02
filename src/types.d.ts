export interface AllObject {
  id: string;
  title: string;
  completed: boolean;
}
//Extraer propiedades unicas
export type allId = Pick<AllObject, 'id'>
export type allTitle = Pick<AllObject, 'title'>
export type allCompleted = Pick<AllObject, 'completed'>

export type listOfAlls = AllObject[];

export type filterValue = typeof ALL_FILTERS[keyof typeof ALL_FILTERS]
