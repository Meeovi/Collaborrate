import { DMMFDocument } from './transformDMMF';

export interface Generatable<T> {
  data: T;
  toHTML(): string;
  getData(d: DMMFDocument): T;
}

export function capitalize(str: string): string {
  return str[0].toUpperCase() + str.slice(1);
}

export function lowerCase(name: string): string {
  return name.substring(0, 1).toLowerCase() + name.substring(1);
}

const primitiveTypes = [
  'String',
  'Boolean',
  'Int',
  'Float',
  'Json',
  'DateTime',
  'Null',
];

export function isScalarType(type: string): boolean {
  return primitiveTypes.includes(type);
}
