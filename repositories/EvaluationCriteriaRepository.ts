import { AxiosResponse } from 'axios';
import { authenticatedService } from './BaseRepository';
import { ResourcesEnpoint } from '@/constants/app.enum';
import { EvaluationCriteriorDTO, AdminParams } from '@/constants/app.interface';

export default class EvaluationCriteriorRepository {
  public static get(params: AdminParams): Promise<AxiosResponse<any>> {
    const query = { params };
    return authenticatedService.get(`${ResourcesEnpoint.EvaluationCriterial}`, query);
  }

  public static update(payload: EvaluationCriteriorDTO): Promise<AxiosResponse<any>> {
    return authenticatedService.put(`${ResourcesEnpoint.EvaluationCriterial}/${payload.id}`, payload);
  }

  public static post(payload: EvaluationCriteriorDTO): Promise<AxiosResponse<any>> {
    return authenticatedService.post(`${ResourcesEnpoint.EvaluationCriterial}`, payload);
  }

  public static delete(id: number): Promise<AxiosResponse<any>> {
    return authenticatedService.delete(`${ResourcesEnpoint.EvaluationCriterial}/${id}`);
  }
}
