import './style.css';

// const app = document.querySelector<HTMLDivElement>('#app')!;
const output = document.querySelector<HTMLDivElement>('#output')!;

output.innerHTML = `${'-=DEFAULT OUTPUT STRING=-'}`;

function printOutput(msg: any): void {
  output.innerHTML = msg;
}

//////
function componentDecorator({ ...config }) {
  return function <T extends { new (...args: any[]): object }>(Constructor: T) {
    return class extends Constructor {
      constructor(...args: any[]) {
        super(...args);
        const el = document.querySelector(config.selector)! as Element;
        el.innerHTML = config.template;
      }
    };
  };
}

//
@componentDecorator({
  selector: '#card',
  template: `
  <div class="card">
    <div class="card-content">
      <span class="card-title"> GEneric component creation </span>
    </div>
  </div>
  `,
})
class Component {
  constructor(public name: string) {
    this.name = name;
  }

  log(): string {
    return this.name.toString();
  }
}

const card = new Component('gen component');
const activatorButton = document.querySelector('.activator')!;

activatorButton.addEventListener('click', function () {
  printOutput(card.log());
});

type ValidatorType = 'some' | 'email';

interface ValidatorConfig {
  [prop: string]: {
    [validateProp: string]: ValidatorType;
  };
}

const validatorsStateContainer :ValidatorConfig= {};

function validateEmailDecorator(target: any, propName: string) {
  validatorsStateContainer[target.constructor.name] = {
    ...validatorsStateContainer[target.constructor.name],
    [propName]:'some'
  }
}

class Form {
  // public email: string | void;

  constructor(
    @validateEmailDecorator
    public email?: string | void,
  ) {
    email;
  }
}
