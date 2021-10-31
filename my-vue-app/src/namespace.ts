/// <referece path="./form-namespace.ts" />

namespace Form {
  class FormReturn {
    private type: FormType = 'horiontal';
    private state: FormState = 'disabled';

    constructor(public input: string) {}

    getInfo(): FormDetails {
      return {
        type: this.type,
        state: this.state,
      };
    }
  }
  const form = new FormReturn('password');
}
