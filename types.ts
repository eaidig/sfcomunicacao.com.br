export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface SocialStat {
  label: string;
  value: string;
}

export enum FormStatus {
  IDLE = 'IDLE',
  LOADING_AI = 'LOADING_AI',
  SUBMITTING = 'SUBMITTING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export interface ContactFormState {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}