import { Observable } from 'rxjs';

export interface UseCase<TYPE_DATA, TYPE_RESULT> {

  execute(params: TYPE_DATA): Observable<TYPE_RESULT>;
}
