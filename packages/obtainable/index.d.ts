type MaybePromise<T> = T | Promise<T>;

export type Obtained<O> = O extends Obtainable<infer T, any> ? Awaited<T> : O;
export type Obtainable<T, P extends any[] = []> = MaybePromise<T> | ((...params: P) => MaybePromise<T>);

export type ObtainedSync<O> = O extends Obtainable<infer T, any> ? T : O;
export type ObtainableSync<T, P extends any[] = []> = T | ((...params: P) => T);

export declare function obtain<T, P extends any[]>(o: Obtainable<T, P>, params: P): Promise<T>;
export declare function obtain<U, T, P extends any[]>(o: Obtainable<T, P>, params: P, ifthrow: U): Promise<T>;

export declare function obtainSync<T, P extends any[]>(o: ObtainableSync<T, P>, params: P): T;
export declare function obtainSync<U, T, P extends any[]>(o: ObtainableSync<T, P>, params: P, ifthrow: U): T | U;

declare namespace obtainable {
  export { obtain, obtainSync };
  export type { Obtained, Obtainable, ObtainedSync, ObtainableSync };
}

export default obtainable;
