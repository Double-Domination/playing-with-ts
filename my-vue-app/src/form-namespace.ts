namespace Form {
  export type FormType = 'horiontal' | 'vertical';
  export type FormState = 'active' | 'disabled';

  export interface FormDetails {
    type: FormType;
    state: FormState;
  }
}
