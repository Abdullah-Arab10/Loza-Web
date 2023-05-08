import {IErrorModel} from './error.model';

export interface IResponseModel<T> {
  isError: boolean;
  statusCode: number;
  data: T[];
  errors: IErrorModel[];
  totalCount?: number;
}
