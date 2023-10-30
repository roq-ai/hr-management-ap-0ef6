import { JobApplicationInterface } from 'interfaces/job-application';
import { GetQueryInterface } from 'interfaces';

export interface JobInterface {
  id?: string;
  title: string;
  description?: string;
  status: string;
  created_at?: any;
  updated_at?: any;
  job_application?: JobApplicationInterface[];

  _count?: {
    job_application?: number;
  };
}

export interface JobGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  status?: string;
}
