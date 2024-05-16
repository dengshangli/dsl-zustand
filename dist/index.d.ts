type InitStateFn = (state: any) => void;
export declare const create: <T>(initStateFn: InitStateFn) => any;
export { default as hello } from './helleo';
