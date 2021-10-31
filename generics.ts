function merge<T extends object, R extends object>(arr1: T, arr2: R): T & R {
  return Object.assign({}, arr1, arr2);
}

type Weapon = { weapon: string; ammo: number };

const lasgun: Weapon = {
  weapon: 'lasgun',
  ammo: 10,
};

const rocketLauncher: Weapon = {
  weapon: 'rocket luncher',
  ammo: 1,
};

const merged = merge(lasgun, rocketLauncher);

interface IhasLength {
  length: number;
}

function countLength<T extends IhasLength>(value): { value: T; count: string } {
  return {
    value,
    count: `here ${value.length} symbols`,
  };
}

const counted = countLength('dfsd');
function getObjValue<T extends object, R extends keyof T>(
  object: object,
  key: R,
) {
  return object[key];
}

class Collection<T> {
  /**
   *
   */
  constructor(private _items: T[]) {}

  private _items: T[] = [];

  public add(item: T) {
    this._items.push(item);
  }

  public remove(item: T) {
    this._items = this._items.filter((x) => x !== item);
  }

  public get items(): T[] {
    return this._items;
  }
}

const values = new Collection<string>(['lascanon', 'grenade luncher']);

values.add('@');

enum WeaponTypeEnum {
  RAPIDFIRE = 'rapid fire',
  HEAVY = 'Heavy',
  ASSAULT = 'Assault',
  PISTOL = 'Pistol',
  BLASST = 'Blast',
}

interface RangedWeapon {
  model: string;
  weaponType: WeaponTypeEnum;
  attacksCount: number;
  armorPiercing: number;
  damage: number;
}

function createWeapon<T extends RangedWeapon>({
  model = 'plasma',
  weaponType = WeaponTypeEnum.HEAVY,
  attacksCount = 4,
  armorPiercing = 3,
  damage = 2,
}: T) {
  const weaponInst: Partial<RangedWeapon> = {
    model,
    weaponType,
  };

  return weaponInst as RangedWeapon;
}
 