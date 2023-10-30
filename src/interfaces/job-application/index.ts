import { UserInterface } from 'interfaces/user';
import { JobInterface } from 'interfaces/job';
import { GetQueryInterface } from 'interfaces';

export interface JobApplicationInterface {
  id?: string;
  user_id: string;
  job_id: string;
  status: string;
  applied_at?: any;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  job?: JobInterface;
  _count?: {};
}

export interface JobApplicationGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  job_id?: string;
  status?: string;
}
