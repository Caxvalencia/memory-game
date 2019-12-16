import { Observable } from 'rxjs';

export interface UseCase<TYPE_DATA, TYPE_RESULT> {

  execute(params: TYPE_DATA): Promise<TYPE_RESULT> | Observable<TYPE_RESULT>;
}
