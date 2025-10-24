
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Posts
 * 
 */
export type Posts = $Result.DefaultSelection<Prisma.$PostsPayload>
/**
 * Model Comments
 * 
 */
export type Comments = $Result.DefaultSelection<Prisma.$CommentsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.posts`: Exposes CRUD operations for the **Posts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.posts.findMany()
    * ```
    */
  get posts(): Prisma.PostsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comments`: Exposes CRUD operations for the **Comments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comments.findMany()
    * ```
    */
  get comments(): Prisma.CommentsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Posts: 'Posts',
    Comments: 'Comments'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "posts" | "comments"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Posts: {
        payload: Prisma.$PostsPayload<ExtArgs>
        fields: Prisma.PostsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          findFirst: {
            args: Prisma.PostsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          findMany: {
            args: Prisma.PostsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>[]
          }
          create: {
            args: Prisma.PostsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          createMany: {
            args: Prisma.PostsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>[]
          }
          delete: {
            args: Prisma.PostsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          update: {
            args: Prisma.PostsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          deleteMany: {
            args: Prisma.PostsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>[]
          }
          upsert: {
            args: Prisma.PostsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          aggregate: {
            args: Prisma.PostsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePosts>
          }
          groupBy: {
            args: Prisma.PostsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostsCountArgs<ExtArgs>
            result: $Utils.Optional<PostsCountAggregateOutputType> | number
          }
        }
      }
      Comments: {
        payload: Prisma.$CommentsPayload<ExtArgs>
        fields: Prisma.CommentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          findFirst: {
            args: Prisma.CommentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          findMany: {
            args: Prisma.CommentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>[]
          }
          create: {
            args: Prisma.CommentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          createMany: {
            args: Prisma.CommentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>[]
          }
          delete: {
            args: Prisma.CommentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          update: {
            args: Prisma.CommentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          deleteMany: {
            args: Prisma.CommentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>[]
          }
          upsert: {
            args: Prisma.CommentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          aggregate: {
            args: Prisma.CommentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComments>
          }
          groupBy: {
            args: Prisma.CommentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentsCountArgs<ExtArgs>
            result: $Utils.Optional<CommentsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    posts?: PostsOmit
    comments?: CommentsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    posts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | UserCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostsWhereInput
  }


  /**
   * Count Type PostsCountOutputType
   */

  export type PostsCountOutputType = {
    comments: number
  }

  export type PostsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | PostsCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostsCountOutputType
     */
    select?: PostsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
  }


  /**
   * Count Type CommentsCountOutputType
   */

  export type CommentsCountOutputType = {
    replies: number
  }

  export type CommentsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    replies?: boolean | CommentsCountOutputTypeCountRepliesArgs
  }

  // Custom InputTypes
  /**
   * CommentsCountOutputType without action
   */
  export type CommentsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentsCountOutputType
     */
    select?: CommentsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommentsCountOutputType without action
   */
  export type CommentsCountOutputTypeCountRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    hash: string | null
    salt: string | null
    role: $Enums.Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    hash: string | null
    salt: string | null
    role: $Enums.Role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    hash: number
    salt: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    hash?: true
    salt?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    hash?: true
    salt?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    hash?: true
    salt?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    hash: string
    salt: string
    role: $Enums.Role
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    hash?: boolean
    salt?: boolean
    role?: boolean
    posts?: boolean | User$postsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    hash?: boolean
    salt?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    hash?: boolean
    salt?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    hash?: boolean
    salt?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "hash" | "salt" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | User$postsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      posts: Prisma.$PostsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      hash: string
      salt: string
      role: $Enums.Role
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly hash: FieldRef<"User", 'String'>
    readonly salt: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    where?: PostsWhereInput
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    cursor?: PostsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Posts
   */

  export type AggregatePosts = {
    _count: PostsCountAggregateOutputType | null
    _min: PostsMinAggregateOutputType | null
    _max: PostsMaxAggregateOutputType | null
  }

  export type PostsMinAggregateOutputType = {
    id: string | null
    authorId: string | null
    title: string | null
    content: string | null
    description: string | null
    tag: string | null
    createdAt: Date | null
    lastUpdate: Date | null
    isPublished: boolean | null
  }

  export type PostsMaxAggregateOutputType = {
    id: string | null
    authorId: string | null
    title: string | null
    content: string | null
    description: string | null
    tag: string | null
    createdAt: Date | null
    lastUpdate: Date | null
    isPublished: boolean | null
  }

  export type PostsCountAggregateOutputType = {
    id: number
    authorId: number
    title: number
    content: number
    description: number
    tag: number
    createdAt: number
    lastUpdate: number
    isPublished: number
    _all: number
  }


  export type PostsMinAggregateInputType = {
    id?: true
    authorId?: true
    title?: true
    content?: true
    description?: true
    tag?: true
    createdAt?: true
    lastUpdate?: true
    isPublished?: true
  }

  export type PostsMaxAggregateInputType = {
    id?: true
    authorId?: true
    title?: true
    content?: true
    description?: true
    tag?: true
    createdAt?: true
    lastUpdate?: true
    isPublished?: true
  }

  export type PostsCountAggregateInputType = {
    id?: true
    authorId?: true
    title?: true
    content?: true
    description?: true
    tag?: true
    createdAt?: true
    lastUpdate?: true
    isPublished?: true
    _all?: true
  }

  export type PostsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to aggregate.
     */
    where?: PostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostsMaxAggregateInputType
  }

  export type GetPostsAggregateType<T extends PostsAggregateArgs> = {
        [P in keyof T & keyof AggregatePosts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosts[P]>
      : GetScalarType<T[P], AggregatePosts[P]>
  }




  export type PostsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostsWhereInput
    orderBy?: PostsOrderByWithAggregationInput | PostsOrderByWithAggregationInput[]
    by: PostsScalarFieldEnum[] | PostsScalarFieldEnum
    having?: PostsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostsCountAggregateInputType | true
    _min?: PostsMinAggregateInputType
    _max?: PostsMaxAggregateInputType
  }

  export type PostsGroupByOutputType = {
    id: string
    authorId: string
    title: string
    content: string
    description: string
    tag: string
    createdAt: Date
    lastUpdate: Date
    isPublished: boolean
    _count: PostsCountAggregateOutputType | null
    _min: PostsMinAggregateOutputType | null
    _max: PostsMaxAggregateOutputType | null
  }

  type GetPostsGroupByPayload<T extends PostsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostsGroupByOutputType[P]>
            : GetScalarType<T[P], PostsGroupByOutputType[P]>
        }
      >
    >


  export type PostsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorId?: boolean
    title?: boolean
    content?: boolean
    description?: boolean
    tag?: boolean
    createdAt?: boolean
    lastUpdate?: boolean
    isPublished?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    comments?: boolean | Posts$commentsArgs<ExtArgs>
    _count?: boolean | PostsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posts"]>

  export type PostsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorId?: boolean
    title?: boolean
    content?: boolean
    description?: boolean
    tag?: boolean
    createdAt?: boolean
    lastUpdate?: boolean
    isPublished?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posts"]>

  export type PostsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorId?: boolean
    title?: boolean
    content?: boolean
    description?: boolean
    tag?: boolean
    createdAt?: boolean
    lastUpdate?: boolean
    isPublished?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posts"]>

  export type PostsSelectScalar = {
    id?: boolean
    authorId?: boolean
    title?: boolean
    content?: boolean
    description?: boolean
    tag?: boolean
    createdAt?: boolean
    lastUpdate?: boolean
    isPublished?: boolean
  }

  export type PostsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "authorId" | "title" | "content" | "description" | "tag" | "createdAt" | "lastUpdate" | "isPublished", ExtArgs["result"]["posts"]>
  export type PostsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    comments?: boolean | Posts$commentsArgs<ExtArgs>
    _count?: boolean | PostsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PostsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Posts"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      comments: Prisma.$CommentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      authorId: string
      title: string
      content: string
      description: string
      tag: string
      createdAt: Date
      lastUpdate: Date
      isPublished: boolean
    }, ExtArgs["result"]["posts"]>
    composites: {}
  }

  type PostsGetPayload<S extends boolean | null | undefined | PostsDefaultArgs> = $Result.GetResult<Prisma.$PostsPayload, S>

  type PostsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostsCountAggregateInputType | true
    }

  export interface PostsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Posts'], meta: { name: 'Posts' } }
    /**
     * Find zero or one Posts that matches the filter.
     * @param {PostsFindUniqueArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostsFindUniqueArgs>(args: SelectSubset<T, PostsFindUniqueArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Posts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostsFindUniqueOrThrowArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostsFindUniqueOrThrowArgs>(args: SelectSubset<T, PostsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsFindFirstArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostsFindFirstArgs>(args?: SelectSubset<T, PostsFindFirstArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsFindFirstOrThrowArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostsFindFirstOrThrowArgs>(args?: SelectSubset<T, PostsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.posts.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.posts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postsWithIdOnly = await prisma.posts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostsFindManyArgs>(args?: SelectSubset<T, PostsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Posts.
     * @param {PostsCreateArgs} args - Arguments to create a Posts.
     * @example
     * // Create one Posts
     * const Posts = await prisma.posts.create({
     *   data: {
     *     // ... data to create a Posts
     *   }
     * })
     * 
     */
    create<T extends PostsCreateArgs>(args: SelectSubset<T, PostsCreateArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostsCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const posts = await prisma.posts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostsCreateManyArgs>(args?: SelectSubset<T, PostsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostsCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const posts = await prisma.posts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postsWithIdOnly = await prisma.posts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostsCreateManyAndReturnArgs>(args?: SelectSubset<T, PostsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Posts.
     * @param {PostsDeleteArgs} args - Arguments to delete one Posts.
     * @example
     * // Delete one Posts
     * const Posts = await prisma.posts.delete({
     *   where: {
     *     // ... filter to delete one Posts
     *   }
     * })
     * 
     */
    delete<T extends PostsDeleteArgs>(args: SelectSubset<T, PostsDeleteArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Posts.
     * @param {PostsUpdateArgs} args - Arguments to update one Posts.
     * @example
     * // Update one Posts
     * const posts = await prisma.posts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostsUpdateArgs>(args: SelectSubset<T, PostsUpdateArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostsDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.posts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostsDeleteManyArgs>(args?: SelectSubset<T, PostsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const posts = await prisma.posts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostsUpdateManyArgs>(args: SelectSubset<T, PostsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostsUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const posts = await prisma.posts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postsWithIdOnly = await prisma.posts.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostsUpdateManyAndReturnArgs>(args: SelectSubset<T, PostsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Posts.
     * @param {PostsUpsertArgs} args - Arguments to update or create a Posts.
     * @example
     * // Update or create a Posts
     * const posts = await prisma.posts.upsert({
     *   create: {
     *     // ... data to create a Posts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Posts we want to update
     *   }
     * })
     */
    upsert<T extends PostsUpsertArgs>(args: SelectSubset<T, PostsUpsertArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.posts.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostsCountArgs>(
      args?: Subset<T, PostsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostsAggregateArgs>(args: Subset<T, PostsAggregateArgs>): Prisma.PrismaPromise<GetPostsAggregateType<T>>

    /**
     * Group by Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostsGroupByArgs['orderBy'] }
        : { orderBy?: PostsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Posts model
   */
  readonly fields: PostsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Posts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comments<T extends Posts$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Posts$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Posts model
   */
  interface PostsFieldRefs {
    readonly id: FieldRef<"Posts", 'String'>
    readonly authorId: FieldRef<"Posts", 'String'>
    readonly title: FieldRef<"Posts", 'String'>
    readonly content: FieldRef<"Posts", 'String'>
    readonly description: FieldRef<"Posts", 'String'>
    readonly tag: FieldRef<"Posts", 'String'>
    readonly createdAt: FieldRef<"Posts", 'DateTime'>
    readonly lastUpdate: FieldRef<"Posts", 'DateTime'>
    readonly isPublished: FieldRef<"Posts", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Posts findUnique
   */
  export type PostsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where: PostsWhereUniqueInput
  }

  /**
   * Posts findUniqueOrThrow
   */
  export type PostsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where: PostsWhereUniqueInput
  }

  /**
   * Posts findFirst
   */
  export type PostsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * Posts findFirstOrThrow
   */
  export type PostsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * Posts findMany
   */
  export type PostsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * Posts create
   */
  export type PostsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * The data needed to create a Posts.
     */
    data: XOR<PostsCreateInput, PostsUncheckedCreateInput>
  }

  /**
   * Posts createMany
   */
  export type PostsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostsCreateManyInput | PostsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Posts createManyAndReturn
   */
  export type PostsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostsCreateManyInput | PostsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Posts update
   */
  export type PostsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * The data needed to update a Posts.
     */
    data: XOR<PostsUpdateInput, PostsUncheckedUpdateInput>
    /**
     * Choose, which Posts to update.
     */
    where: PostsWhereUniqueInput
  }

  /**
   * Posts updateMany
   */
  export type PostsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostsUpdateManyMutationInput, PostsUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostsWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Posts updateManyAndReturn
   */
  export type PostsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostsUpdateManyMutationInput, PostsUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostsWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Posts upsert
   */
  export type PostsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * The filter to search for the Posts to update in case it exists.
     */
    where: PostsWhereUniqueInput
    /**
     * In case the Posts found by the `where` argument doesn't exist, create a new Posts with this data.
     */
    create: XOR<PostsCreateInput, PostsUncheckedCreateInput>
    /**
     * In case the Posts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostsUpdateInput, PostsUncheckedUpdateInput>
  }

  /**
   * Posts delete
   */
  export type PostsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter which Posts to delete.
     */
    where: PostsWhereUniqueInput
  }

  /**
   * Posts deleteMany
   */
  export type PostsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostsWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Posts.comments
   */
  export type Posts$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    cursor?: CommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Posts without action
   */
  export type PostsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
  }


  /**
   * Model Comments
   */

  export type AggregateComments = {
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  export type CommentsAvgAggregateOutputType = {
    likes: number | null
  }

  export type CommentsSumAggregateOutputType = {
    likes: number | null
  }

  export type CommentsMinAggregateOutputType = {
    id: string | null
    name: string | null
    content: string | null
    postId: string | null
    likes: number | null
    createdAt: Date | null
    parentCommentId: string | null
  }

  export type CommentsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    content: string | null
    postId: string | null
    likes: number | null
    createdAt: Date | null
    parentCommentId: string | null
  }

  export type CommentsCountAggregateOutputType = {
    id: number
    name: number
    content: number
    postId: number
    likes: number
    createdAt: number
    parentCommentId: number
    _all: number
  }


  export type CommentsAvgAggregateInputType = {
    likes?: true
  }

  export type CommentsSumAggregateInputType = {
    likes?: true
  }

  export type CommentsMinAggregateInputType = {
    id?: true
    name?: true
    content?: true
    postId?: true
    likes?: true
    createdAt?: true
    parentCommentId?: true
  }

  export type CommentsMaxAggregateInputType = {
    id?: true
    name?: true
    content?: true
    postId?: true
    likes?: true
    createdAt?: true
    parentCommentId?: true
  }

  export type CommentsCountAggregateInputType = {
    id?: true
    name?: true
    content?: true
    postId?: true
    likes?: true
    createdAt?: true
    parentCommentId?: true
    _all?: true
  }

  export type CommentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to aggregate.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentsMaxAggregateInputType
  }

  export type GetCommentsAggregateType<T extends CommentsAggregateArgs> = {
        [P in keyof T & keyof AggregateComments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComments[P]>
      : GetScalarType<T[P], AggregateComments[P]>
  }




  export type CommentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithAggregationInput | CommentsOrderByWithAggregationInput[]
    by: CommentsScalarFieldEnum[] | CommentsScalarFieldEnum
    having?: CommentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentsCountAggregateInputType | true
    _avg?: CommentsAvgAggregateInputType
    _sum?: CommentsSumAggregateInputType
    _min?: CommentsMinAggregateInputType
    _max?: CommentsMaxAggregateInputType
  }

  export type CommentsGroupByOutputType = {
    id: string
    name: string
    content: string
    postId: string
    likes: number | null
    createdAt: Date
    parentCommentId: string | null
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  type GetCommentsGroupByPayload<T extends CommentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentsGroupByOutputType[P]>
            : GetScalarType<T[P], CommentsGroupByOutputType[P]>
        }
      >
    >


  export type CommentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    content?: boolean
    postId?: boolean
    likes?: boolean
    createdAt?: boolean
    parentCommentId?: boolean
    post?: boolean | PostsDefaultArgs<ExtArgs>
    parentComment?: boolean | Comments$parentCommentArgs<ExtArgs>
    replies?: boolean | Comments$repliesArgs<ExtArgs>
    _count?: boolean | CommentsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type CommentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    content?: boolean
    postId?: boolean
    likes?: boolean
    createdAt?: boolean
    parentCommentId?: boolean
    post?: boolean | PostsDefaultArgs<ExtArgs>
    parentComment?: boolean | Comments$parentCommentArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type CommentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    content?: boolean
    postId?: boolean
    likes?: boolean
    createdAt?: boolean
    parentCommentId?: boolean
    post?: boolean | PostsDefaultArgs<ExtArgs>
    parentComment?: boolean | Comments$parentCommentArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type CommentsSelectScalar = {
    id?: boolean
    name?: boolean
    content?: boolean
    postId?: boolean
    likes?: boolean
    createdAt?: boolean
    parentCommentId?: boolean
  }

  export type CommentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "content" | "postId" | "likes" | "createdAt" | "parentCommentId", ExtArgs["result"]["comments"]>
  export type CommentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostsDefaultArgs<ExtArgs>
    parentComment?: boolean | Comments$parentCommentArgs<ExtArgs>
    replies?: boolean | Comments$repliesArgs<ExtArgs>
    _count?: boolean | CommentsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CommentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostsDefaultArgs<ExtArgs>
    parentComment?: boolean | Comments$parentCommentArgs<ExtArgs>
  }
  export type CommentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostsDefaultArgs<ExtArgs>
    parentComment?: boolean | Comments$parentCommentArgs<ExtArgs>
  }

  export type $CommentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comments"
    objects: {
      post: Prisma.$PostsPayload<ExtArgs>
      parentComment: Prisma.$CommentsPayload<ExtArgs> | null
      replies: Prisma.$CommentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      content: string
      postId: string
      likes: number | null
      createdAt: Date
      parentCommentId: string | null
    }, ExtArgs["result"]["comments"]>
    composites: {}
  }

  type CommentsGetPayload<S extends boolean | null | undefined | CommentsDefaultArgs> = $Result.GetResult<Prisma.$CommentsPayload, S>

  type CommentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentsCountAggregateInputType | true
    }

  export interface CommentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comments'], meta: { name: 'Comments' } }
    /**
     * Find zero or one Comments that matches the filter.
     * @param {CommentsFindUniqueArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentsFindUniqueArgs>(args: SelectSubset<T, CommentsFindUniqueArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentsFindUniqueOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentsFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindFirstArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentsFindFirstArgs>(args?: SelectSubset<T, CommentsFindFirstArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindFirstOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentsFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comments.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentsWithIdOnly = await prisma.comments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentsFindManyArgs>(args?: SelectSubset<T, CommentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comments.
     * @param {CommentsCreateArgs} args - Arguments to create a Comments.
     * @example
     * // Create one Comments
     * const Comments = await prisma.comments.create({
     *   data: {
     *     // ... data to create a Comments
     *   }
     * })
     * 
     */
    create<T extends CommentsCreateArgs>(args: SelectSubset<T, CommentsCreateArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentsCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentsCreateManyArgs>(args?: SelectSubset<T, CommentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentsCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentsWithIdOnly = await prisma.comments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentsCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comments.
     * @param {CommentsDeleteArgs} args - Arguments to delete one Comments.
     * @example
     * // Delete one Comments
     * const Comments = await prisma.comments.delete({
     *   where: {
     *     // ... filter to delete one Comments
     *   }
     * })
     * 
     */
    delete<T extends CommentsDeleteArgs>(args: SelectSubset<T, CommentsDeleteArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comments.
     * @param {CommentsUpdateArgs} args - Arguments to update one Comments.
     * @example
     * // Update one Comments
     * const comments = await prisma.comments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentsUpdateArgs>(args: SelectSubset<T, CommentsUpdateArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentsDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentsDeleteManyArgs>(args?: SelectSubset<T, CommentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentsUpdateManyArgs>(args: SelectSubset<T, CommentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentsUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentsWithIdOnly = await prisma.comments.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentsUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comments.
     * @param {CommentsUpsertArgs} args - Arguments to update or create a Comments.
     * @example
     * // Update or create a Comments
     * const comments = await prisma.comments.upsert({
     *   create: {
     *     // ... data to create a Comments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comments we want to update
     *   }
     * })
     */
    upsert<T extends CommentsUpsertArgs>(args: SelectSubset<T, CommentsUpsertArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comments.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentsCountArgs>(
      args?: Subset<T, CommentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentsAggregateArgs>(args: Subset<T, CommentsAggregateArgs>): Prisma.PrismaPromise<GetCommentsAggregateType<T>>

    /**
     * Group by Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentsGroupByArgs['orderBy'] }
        : { orderBy?: CommentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comments model
   */
  readonly fields: CommentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostsDefaultArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parentComment<T extends Comments$parentCommentArgs<ExtArgs> = {}>(args?: Subset<T, Comments$parentCommentArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    replies<T extends Comments$repliesArgs<ExtArgs> = {}>(args?: Subset<T, Comments$repliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comments model
   */
  interface CommentsFieldRefs {
    readonly id: FieldRef<"Comments", 'String'>
    readonly name: FieldRef<"Comments", 'String'>
    readonly content: FieldRef<"Comments", 'String'>
    readonly postId: FieldRef<"Comments", 'String'>
    readonly likes: FieldRef<"Comments", 'Int'>
    readonly createdAt: FieldRef<"Comments", 'DateTime'>
    readonly parentCommentId: FieldRef<"Comments", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Comments findUnique
   */
  export type CommentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments findUniqueOrThrow
   */
  export type CommentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments findFirst
   */
  export type CommentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments findFirstOrThrow
   */
  export type CommentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments findMany
   */
  export type CommentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments create
   */
  export type CommentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Comments.
     */
    data: XOR<CommentsCreateInput, CommentsUncheckedCreateInput>
  }

  /**
   * Comments createMany
   */
  export type CommentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentsCreateManyInput | CommentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comments createManyAndReturn
   */
  export type CommentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentsCreateManyInput | CommentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comments update
   */
  export type CommentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Comments.
     */
    data: XOR<CommentsUpdateInput, CommentsUncheckedUpdateInput>
    /**
     * Choose, which Comments to update.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments updateMany
   */
  export type CommentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentsWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comments updateManyAndReturn
   */
  export type CommentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentsWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comments upsert
   */
  export type CommentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Comments to update in case it exists.
     */
    where: CommentsWhereUniqueInput
    /**
     * In case the Comments found by the `where` argument doesn't exist, create a new Comments with this data.
     */
    create: XOR<CommentsCreateInput, CommentsUncheckedCreateInput>
    /**
     * In case the Comments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentsUpdateInput, CommentsUncheckedUpdateInput>
  }

  /**
   * Comments delete
   */
  export type CommentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter which Comments to delete.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments deleteMany
   */
  export type CommentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentsWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comments.parentComment
   */
  export type Comments$parentCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    where?: CommentsWhereInput
  }

  /**
   * Comments.replies
   */
  export type Comments$repliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    cursor?: CommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments without action
   */
  export type CommentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    hash: 'hash',
    salt: 'salt',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PostsScalarFieldEnum: {
    id: 'id',
    authorId: 'authorId',
    title: 'title',
    content: 'content',
    description: 'description',
    tag: 'tag',
    createdAt: 'createdAt',
    lastUpdate: 'lastUpdate',
    isPublished: 'isPublished'
  };

  export type PostsScalarFieldEnum = (typeof PostsScalarFieldEnum)[keyof typeof PostsScalarFieldEnum]


  export const CommentsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    content: 'content',
    postId: 'postId',
    likes: 'likes',
    createdAt: 'createdAt',
    parentCommentId: 'parentCommentId'
  };

  export type CommentsScalarFieldEnum = (typeof CommentsScalarFieldEnum)[keyof typeof CommentsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    hash?: StringFilter<"User"> | string
    salt?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    posts?: PostsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    hash?: SortOrder
    salt?: SortOrder
    role?: SortOrder
    posts?: PostsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    hash?: StringFilter<"User"> | string
    salt?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    posts?: PostsListRelationFilter
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    hash?: SortOrder
    salt?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    hash?: StringWithAggregatesFilter<"User"> | string
    salt?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
  }

  export type PostsWhereInput = {
    AND?: PostsWhereInput | PostsWhereInput[]
    OR?: PostsWhereInput[]
    NOT?: PostsWhereInput | PostsWhereInput[]
    id?: StringFilter<"Posts"> | string
    authorId?: StringFilter<"Posts"> | string
    title?: StringFilter<"Posts"> | string
    content?: StringFilter<"Posts"> | string
    description?: StringFilter<"Posts"> | string
    tag?: StringFilter<"Posts"> | string
    createdAt?: DateTimeFilter<"Posts"> | Date | string
    lastUpdate?: DateTimeFilter<"Posts"> | Date | string
    isPublished?: BoolFilter<"Posts"> | boolean
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    comments?: CommentsListRelationFilter
  }

  export type PostsOrderByWithRelationInput = {
    id?: SortOrder
    authorId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    description?: SortOrder
    tag?: SortOrder
    createdAt?: SortOrder
    lastUpdate?: SortOrder
    isPublished?: SortOrder
    author?: UserOrderByWithRelationInput
    comments?: CommentsOrderByRelationAggregateInput
  }

  export type PostsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostsWhereInput | PostsWhereInput[]
    OR?: PostsWhereInput[]
    NOT?: PostsWhereInput | PostsWhereInput[]
    authorId?: StringFilter<"Posts"> | string
    title?: StringFilter<"Posts"> | string
    content?: StringFilter<"Posts"> | string
    description?: StringFilter<"Posts"> | string
    tag?: StringFilter<"Posts"> | string
    createdAt?: DateTimeFilter<"Posts"> | Date | string
    lastUpdate?: DateTimeFilter<"Posts"> | Date | string
    isPublished?: BoolFilter<"Posts"> | boolean
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    comments?: CommentsListRelationFilter
  }, "id">

  export type PostsOrderByWithAggregationInput = {
    id?: SortOrder
    authorId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    description?: SortOrder
    tag?: SortOrder
    createdAt?: SortOrder
    lastUpdate?: SortOrder
    isPublished?: SortOrder
    _count?: PostsCountOrderByAggregateInput
    _max?: PostsMaxOrderByAggregateInput
    _min?: PostsMinOrderByAggregateInput
  }

  export type PostsScalarWhereWithAggregatesInput = {
    AND?: PostsScalarWhereWithAggregatesInput | PostsScalarWhereWithAggregatesInput[]
    OR?: PostsScalarWhereWithAggregatesInput[]
    NOT?: PostsScalarWhereWithAggregatesInput | PostsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Posts"> | string
    authorId?: StringWithAggregatesFilter<"Posts"> | string
    title?: StringWithAggregatesFilter<"Posts"> | string
    content?: StringWithAggregatesFilter<"Posts"> | string
    description?: StringWithAggregatesFilter<"Posts"> | string
    tag?: StringWithAggregatesFilter<"Posts"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Posts"> | Date | string
    lastUpdate?: DateTimeWithAggregatesFilter<"Posts"> | Date | string
    isPublished?: BoolWithAggregatesFilter<"Posts"> | boolean
  }

  export type CommentsWhereInput = {
    AND?: CommentsWhereInput | CommentsWhereInput[]
    OR?: CommentsWhereInput[]
    NOT?: CommentsWhereInput | CommentsWhereInput[]
    id?: StringFilter<"Comments"> | string
    name?: StringFilter<"Comments"> | string
    content?: StringFilter<"Comments"> | string
    postId?: StringFilter<"Comments"> | string
    likes?: IntNullableFilter<"Comments"> | number | null
    createdAt?: DateTimeFilter<"Comments"> | Date | string
    parentCommentId?: StringNullableFilter<"Comments"> | string | null
    post?: XOR<PostsScalarRelationFilter, PostsWhereInput>
    parentComment?: XOR<CommentsNullableScalarRelationFilter, CommentsWhereInput> | null
    replies?: CommentsListRelationFilter
  }

  export type CommentsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrder
    postId?: SortOrder
    likes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    parentCommentId?: SortOrderInput | SortOrder
    post?: PostsOrderByWithRelationInput
    parentComment?: CommentsOrderByWithRelationInput
    replies?: CommentsOrderByRelationAggregateInput
  }

  export type CommentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentsWhereInput | CommentsWhereInput[]
    OR?: CommentsWhereInput[]
    NOT?: CommentsWhereInput | CommentsWhereInput[]
    name?: StringFilter<"Comments"> | string
    content?: StringFilter<"Comments"> | string
    postId?: StringFilter<"Comments"> | string
    likes?: IntNullableFilter<"Comments"> | number | null
    createdAt?: DateTimeFilter<"Comments"> | Date | string
    parentCommentId?: StringNullableFilter<"Comments"> | string | null
    post?: XOR<PostsScalarRelationFilter, PostsWhereInput>
    parentComment?: XOR<CommentsNullableScalarRelationFilter, CommentsWhereInput> | null
    replies?: CommentsListRelationFilter
  }, "id">

  export type CommentsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrder
    postId?: SortOrder
    likes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    parentCommentId?: SortOrderInput | SortOrder
    _count?: CommentsCountOrderByAggregateInput
    _avg?: CommentsAvgOrderByAggregateInput
    _max?: CommentsMaxOrderByAggregateInput
    _min?: CommentsMinOrderByAggregateInput
    _sum?: CommentsSumOrderByAggregateInput
  }

  export type CommentsScalarWhereWithAggregatesInput = {
    AND?: CommentsScalarWhereWithAggregatesInput | CommentsScalarWhereWithAggregatesInput[]
    OR?: CommentsScalarWhereWithAggregatesInput[]
    NOT?: CommentsScalarWhereWithAggregatesInput | CommentsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comments"> | string
    name?: StringWithAggregatesFilter<"Comments"> | string
    content?: StringWithAggregatesFilter<"Comments"> | string
    postId?: StringWithAggregatesFilter<"Comments"> | string
    likes?: IntNullableWithAggregatesFilter<"Comments"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Comments"> | Date | string
    parentCommentId?: StringNullableWithAggregatesFilter<"Comments"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    username: string
    hash: string
    salt: string
    role?: $Enums.Role
    posts?: PostsCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    hash: string
    salt: string
    role?: $Enums.Role
    posts?: PostsUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    posts?: PostsUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    posts?: PostsUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    hash: string
    salt: string
    role?: $Enums.Role
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type PostsCreateInput = {
    id?: string
    title: string
    content: string
    description: string
    tag?: string
    createdAt?: Date | string
    lastUpdate?: Date | string
    isPublished?: boolean
    author: UserCreateNestedOneWithoutPostsInput
    comments?: CommentsCreateNestedManyWithoutPostInput
  }

  export type PostsUncheckedCreateInput = {
    id?: string
    authorId: string
    title: string
    content: string
    description: string
    tag?: string
    createdAt?: Date | string
    lastUpdate?: Date | string
    isPublished?: boolean
    comments?: CommentsUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
    comments?: CommentsUpdateManyWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    comments?: CommentsUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostsCreateManyInput = {
    id?: string
    authorId: string
    title: string
    content: string
    description: string
    tag?: string
    createdAt?: Date | string
    lastUpdate?: Date | string
    isPublished?: boolean
  }

  export type PostsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PostsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CommentsCreateInput = {
    id?: string
    name: string
    content: string
    likes?: number | null
    createdAt?: Date | string
    post: PostsCreateNestedOneWithoutCommentsInput
    parentComment?: CommentsCreateNestedOneWithoutRepliesInput
    replies?: CommentsCreateNestedManyWithoutParentCommentInput
  }

  export type CommentsUncheckedCreateInput = {
    id?: string
    name: string
    content: string
    postId: string
    likes?: number | null
    createdAt?: Date | string
    parentCommentId?: string | null
    replies?: CommentsUncheckedCreateNestedManyWithoutParentCommentInput
  }

  export type CommentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    likes?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostsUpdateOneRequiredWithoutCommentsNestedInput
    parentComment?: CommentsUpdateOneWithoutRepliesNestedInput
    replies?: CommentsUpdateManyWithoutParentCommentNestedInput
  }

  export type CommentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    likes?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentCommentId?: NullableStringFieldUpdateOperationsInput | string | null
    replies?: CommentsUncheckedUpdateManyWithoutParentCommentNestedInput
  }

  export type CommentsCreateManyInput = {
    id?: string
    name: string
    content: string
    postId: string
    likes?: number | null
    createdAt?: Date | string
    parentCommentId?: string | null
  }

  export type CommentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    likes?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    likes?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentCommentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type PostsListRelationFilter = {
    every?: PostsWhereInput
    some?: PostsWhereInput
    none?: PostsWhereInput
  }

  export type PostsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    hash?: SortOrder
    salt?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    hash?: SortOrder
    salt?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    hash?: SortOrder
    salt?: SortOrder
    role?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CommentsListRelationFilter = {
    every?: CommentsWhereInput
    some?: CommentsWhereInput
    none?: CommentsWhereInput
  }

  export type CommentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostsCountOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    description?: SortOrder
    tag?: SortOrder
    createdAt?: SortOrder
    lastUpdate?: SortOrder
    isPublished?: SortOrder
  }

  export type PostsMaxOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    description?: SortOrder
    tag?: SortOrder
    createdAt?: SortOrder
    lastUpdate?: SortOrder
    isPublished?: SortOrder
  }

  export type PostsMinOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    description?: SortOrder
    tag?: SortOrder
    createdAt?: SortOrder
    lastUpdate?: SortOrder
    isPublished?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type PostsScalarRelationFilter = {
    is?: PostsWhereInput
    isNot?: PostsWhereInput
  }

  export type CommentsNullableScalarRelationFilter = {
    is?: CommentsWhereInput | null
    isNot?: CommentsWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CommentsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrder
    postId?: SortOrder
    likes?: SortOrder
    createdAt?: SortOrder
    parentCommentId?: SortOrder
  }

  export type CommentsAvgOrderByAggregateInput = {
    likes?: SortOrder
  }

  export type CommentsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrder
    postId?: SortOrder
    likes?: SortOrder
    createdAt?: SortOrder
    parentCommentId?: SortOrder
  }

  export type CommentsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrder
    postId?: SortOrder
    likes?: SortOrder
    createdAt?: SortOrder
    parentCommentId?: SortOrder
  }

  export type CommentsSumOrderByAggregateInput = {
    likes?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type PostsCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostsCreateWithoutAuthorInput, PostsUncheckedCreateWithoutAuthorInput> | PostsCreateWithoutAuthorInput[] | PostsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostsCreateOrConnectWithoutAuthorInput | PostsCreateOrConnectWithoutAuthorInput[]
    createMany?: PostsCreateManyAuthorInputEnvelope
    connect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
  }

  export type PostsUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostsCreateWithoutAuthorInput, PostsUncheckedCreateWithoutAuthorInput> | PostsCreateWithoutAuthorInput[] | PostsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostsCreateOrConnectWithoutAuthorInput | PostsCreateOrConnectWithoutAuthorInput[]
    createMany?: PostsCreateManyAuthorInputEnvelope
    connect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type PostsUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostsCreateWithoutAuthorInput, PostsUncheckedCreateWithoutAuthorInput> | PostsCreateWithoutAuthorInput[] | PostsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostsCreateOrConnectWithoutAuthorInput | PostsCreateOrConnectWithoutAuthorInput[]
    upsert?: PostsUpsertWithWhereUniqueWithoutAuthorInput | PostsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostsCreateManyAuthorInputEnvelope
    set?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    disconnect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    delete?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    connect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    update?: PostsUpdateWithWhereUniqueWithoutAuthorInput | PostsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostsUpdateManyWithWhereWithoutAuthorInput | PostsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostsScalarWhereInput | PostsScalarWhereInput[]
  }

  export type PostsUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostsCreateWithoutAuthorInput, PostsUncheckedCreateWithoutAuthorInput> | PostsCreateWithoutAuthorInput[] | PostsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostsCreateOrConnectWithoutAuthorInput | PostsCreateOrConnectWithoutAuthorInput[]
    upsert?: PostsUpsertWithWhereUniqueWithoutAuthorInput | PostsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostsCreateManyAuthorInputEnvelope
    set?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    disconnect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    delete?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    connect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    update?: PostsUpdateWithWhereUniqueWithoutAuthorInput | PostsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostsUpdateManyWithWhereWithoutAuthorInput | PostsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostsScalarWhereInput | PostsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type CommentsCreateNestedManyWithoutPostInput = {
    create?: XOR<CommentsCreateWithoutPostInput, CommentsUncheckedCreateWithoutPostInput> | CommentsCreateWithoutPostInput[] | CommentsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutPostInput | CommentsCreateOrConnectWithoutPostInput[]
    createMany?: CommentsCreateManyPostInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type CommentsUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<CommentsCreateWithoutPostInput, CommentsUncheckedCreateWithoutPostInput> | CommentsCreateWithoutPostInput[] | CommentsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutPostInput | CommentsCreateOrConnectWithoutPostInput[]
    createMany?: CommentsCreateManyPostInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type CommentsUpdateManyWithoutPostNestedInput = {
    create?: XOR<CommentsCreateWithoutPostInput, CommentsUncheckedCreateWithoutPostInput> | CommentsCreateWithoutPostInput[] | CommentsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutPostInput | CommentsCreateOrConnectWithoutPostInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutPostInput | CommentsUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CommentsCreateManyPostInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutPostInput | CommentsUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutPostInput | CommentsUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type CommentsUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<CommentsCreateWithoutPostInput, CommentsUncheckedCreateWithoutPostInput> | CommentsCreateWithoutPostInput[] | CommentsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutPostInput | CommentsCreateOrConnectWithoutPostInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutPostInput | CommentsUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CommentsCreateManyPostInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutPostInput | CommentsUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutPostInput | CommentsUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type PostsCreateNestedOneWithoutCommentsInput = {
    create?: XOR<PostsCreateWithoutCommentsInput, PostsUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PostsCreateOrConnectWithoutCommentsInput
    connect?: PostsWhereUniqueInput
  }

  export type CommentsCreateNestedOneWithoutRepliesInput = {
    create?: XOR<CommentsCreateWithoutRepliesInput, CommentsUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: CommentsCreateOrConnectWithoutRepliesInput
    connect?: CommentsWhereUniqueInput
  }

  export type CommentsCreateNestedManyWithoutParentCommentInput = {
    create?: XOR<CommentsCreateWithoutParentCommentInput, CommentsUncheckedCreateWithoutParentCommentInput> | CommentsCreateWithoutParentCommentInput[] | CommentsUncheckedCreateWithoutParentCommentInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutParentCommentInput | CommentsCreateOrConnectWithoutParentCommentInput[]
    createMany?: CommentsCreateManyParentCommentInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type CommentsUncheckedCreateNestedManyWithoutParentCommentInput = {
    create?: XOR<CommentsCreateWithoutParentCommentInput, CommentsUncheckedCreateWithoutParentCommentInput> | CommentsCreateWithoutParentCommentInput[] | CommentsUncheckedCreateWithoutParentCommentInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutParentCommentInput | CommentsCreateOrConnectWithoutParentCommentInput[]
    createMany?: CommentsCreateManyParentCommentInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PostsUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<PostsCreateWithoutCommentsInput, PostsUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PostsCreateOrConnectWithoutCommentsInput
    upsert?: PostsUpsertWithoutCommentsInput
    connect?: PostsWhereUniqueInput
    update?: XOR<XOR<PostsUpdateToOneWithWhereWithoutCommentsInput, PostsUpdateWithoutCommentsInput>, PostsUncheckedUpdateWithoutCommentsInput>
  }

  export type CommentsUpdateOneWithoutRepliesNestedInput = {
    create?: XOR<CommentsCreateWithoutRepliesInput, CommentsUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: CommentsCreateOrConnectWithoutRepliesInput
    upsert?: CommentsUpsertWithoutRepliesInput
    disconnect?: CommentsWhereInput | boolean
    delete?: CommentsWhereInput | boolean
    connect?: CommentsWhereUniqueInput
    update?: XOR<XOR<CommentsUpdateToOneWithWhereWithoutRepliesInput, CommentsUpdateWithoutRepliesInput>, CommentsUncheckedUpdateWithoutRepliesInput>
  }

  export type CommentsUpdateManyWithoutParentCommentNestedInput = {
    create?: XOR<CommentsCreateWithoutParentCommentInput, CommentsUncheckedCreateWithoutParentCommentInput> | CommentsCreateWithoutParentCommentInput[] | CommentsUncheckedCreateWithoutParentCommentInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutParentCommentInput | CommentsCreateOrConnectWithoutParentCommentInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutParentCommentInput | CommentsUpsertWithWhereUniqueWithoutParentCommentInput[]
    createMany?: CommentsCreateManyParentCommentInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutParentCommentInput | CommentsUpdateWithWhereUniqueWithoutParentCommentInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutParentCommentInput | CommentsUpdateManyWithWhereWithoutParentCommentInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CommentsUncheckedUpdateManyWithoutParentCommentNestedInput = {
    create?: XOR<CommentsCreateWithoutParentCommentInput, CommentsUncheckedCreateWithoutParentCommentInput> | CommentsCreateWithoutParentCommentInput[] | CommentsUncheckedCreateWithoutParentCommentInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutParentCommentInput | CommentsCreateOrConnectWithoutParentCommentInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutParentCommentInput | CommentsUpsertWithWhereUniqueWithoutParentCommentInput[]
    createMany?: CommentsCreateManyParentCommentInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutParentCommentInput | CommentsUpdateWithWhereUniqueWithoutParentCommentInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutParentCommentInput | CommentsUpdateManyWithWhereWithoutParentCommentInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type PostsCreateWithoutAuthorInput = {
    id?: string
    title: string
    content: string
    description: string
    tag?: string
    createdAt?: Date | string
    lastUpdate?: Date | string
    isPublished?: boolean
    comments?: CommentsCreateNestedManyWithoutPostInput
  }

  export type PostsUncheckedCreateWithoutAuthorInput = {
    id?: string
    title: string
    content: string
    description: string
    tag?: string
    createdAt?: Date | string
    lastUpdate?: Date | string
    isPublished?: boolean
    comments?: CommentsUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostsCreateOrConnectWithoutAuthorInput = {
    where: PostsWhereUniqueInput
    create: XOR<PostsCreateWithoutAuthorInput, PostsUncheckedCreateWithoutAuthorInput>
  }

  export type PostsCreateManyAuthorInputEnvelope = {
    data: PostsCreateManyAuthorInput | PostsCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type PostsUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PostsWhereUniqueInput
    update: XOR<PostsUpdateWithoutAuthorInput, PostsUncheckedUpdateWithoutAuthorInput>
    create: XOR<PostsCreateWithoutAuthorInput, PostsUncheckedCreateWithoutAuthorInput>
  }

  export type PostsUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PostsWhereUniqueInput
    data: XOR<PostsUpdateWithoutAuthorInput, PostsUncheckedUpdateWithoutAuthorInput>
  }

  export type PostsUpdateManyWithWhereWithoutAuthorInput = {
    where: PostsScalarWhereInput
    data: XOR<PostsUpdateManyMutationInput, PostsUncheckedUpdateManyWithoutAuthorInput>
  }

  export type PostsScalarWhereInput = {
    AND?: PostsScalarWhereInput | PostsScalarWhereInput[]
    OR?: PostsScalarWhereInput[]
    NOT?: PostsScalarWhereInput | PostsScalarWhereInput[]
    id?: StringFilter<"Posts"> | string
    authorId?: StringFilter<"Posts"> | string
    title?: StringFilter<"Posts"> | string
    content?: StringFilter<"Posts"> | string
    description?: StringFilter<"Posts"> | string
    tag?: StringFilter<"Posts"> | string
    createdAt?: DateTimeFilter<"Posts"> | Date | string
    lastUpdate?: DateTimeFilter<"Posts"> | Date | string
    isPublished?: BoolFilter<"Posts"> | boolean
  }

  export type UserCreateWithoutPostsInput = {
    id?: string
    username: string
    hash: string
    salt: string
    role?: $Enums.Role
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: string
    username: string
    hash: string
    salt: string
    role?: $Enums.Role
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type CommentsCreateWithoutPostInput = {
    id?: string
    name: string
    content: string
    likes?: number | null
    createdAt?: Date | string
    parentComment?: CommentsCreateNestedOneWithoutRepliesInput
    replies?: CommentsCreateNestedManyWithoutParentCommentInput
  }

  export type CommentsUncheckedCreateWithoutPostInput = {
    id?: string
    name: string
    content: string
    likes?: number | null
    createdAt?: Date | string
    parentCommentId?: string | null
    replies?: CommentsUncheckedCreateNestedManyWithoutParentCommentInput
  }

  export type CommentsCreateOrConnectWithoutPostInput = {
    where: CommentsWhereUniqueInput
    create: XOR<CommentsCreateWithoutPostInput, CommentsUncheckedCreateWithoutPostInput>
  }

  export type CommentsCreateManyPostInputEnvelope = {
    data: CommentsCreateManyPostInput | CommentsCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type CommentsUpsertWithWhereUniqueWithoutPostInput = {
    where: CommentsWhereUniqueInput
    update: XOR<CommentsUpdateWithoutPostInput, CommentsUncheckedUpdateWithoutPostInput>
    create: XOR<CommentsCreateWithoutPostInput, CommentsUncheckedCreateWithoutPostInput>
  }

  export type CommentsUpdateWithWhereUniqueWithoutPostInput = {
    where: CommentsWhereUniqueInput
    data: XOR<CommentsUpdateWithoutPostInput, CommentsUncheckedUpdateWithoutPostInput>
  }

  export type CommentsUpdateManyWithWhereWithoutPostInput = {
    where: CommentsScalarWhereInput
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyWithoutPostInput>
  }

  export type CommentsScalarWhereInput = {
    AND?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
    OR?: CommentsScalarWhereInput[]
    NOT?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
    id?: StringFilter<"Comments"> | string
    name?: StringFilter<"Comments"> | string
    content?: StringFilter<"Comments"> | string
    postId?: StringFilter<"Comments"> | string
    likes?: IntNullableFilter<"Comments"> | number | null
    createdAt?: DateTimeFilter<"Comments"> | Date | string
    parentCommentId?: StringNullableFilter<"Comments"> | string | null
  }

  export type PostsCreateWithoutCommentsInput = {
    id?: string
    title: string
    content: string
    description: string
    tag?: string
    createdAt?: Date | string
    lastUpdate?: Date | string
    isPublished?: boolean
    author: UserCreateNestedOneWithoutPostsInput
  }

  export type PostsUncheckedCreateWithoutCommentsInput = {
    id?: string
    authorId: string
    title: string
    content: string
    description: string
    tag?: string
    createdAt?: Date | string
    lastUpdate?: Date | string
    isPublished?: boolean
  }

  export type PostsCreateOrConnectWithoutCommentsInput = {
    where: PostsWhereUniqueInput
    create: XOR<PostsCreateWithoutCommentsInput, PostsUncheckedCreateWithoutCommentsInput>
  }

  export type CommentsCreateWithoutRepliesInput = {
    id?: string
    name: string
    content: string
    likes?: number | null
    createdAt?: Date | string
    post: PostsCreateNestedOneWithoutCommentsInput
    parentComment?: CommentsCreateNestedOneWithoutRepliesInput
  }

  export type CommentsUncheckedCreateWithoutRepliesInput = {
    id?: string
    name: string
    content: string
    postId: string
    likes?: number | null
    createdAt?: Date | string
    parentCommentId?: string | null
  }

  export type CommentsCreateOrConnectWithoutRepliesInput = {
    where: CommentsWhereUniqueInput
    create: XOR<CommentsCreateWithoutRepliesInput, CommentsUncheckedCreateWithoutRepliesInput>
  }

  export type CommentsCreateWithoutParentCommentInput = {
    id?: string
    name: string
    content: string
    likes?: number | null
    createdAt?: Date | string
    post: PostsCreateNestedOneWithoutCommentsInput
    replies?: CommentsCreateNestedManyWithoutParentCommentInput
  }

  export type CommentsUncheckedCreateWithoutParentCommentInput = {
    id?: string
    name: string
    content: string
    postId: string
    likes?: number | null
    createdAt?: Date | string
    replies?: CommentsUncheckedCreateNestedManyWithoutParentCommentInput
  }

  export type CommentsCreateOrConnectWithoutParentCommentInput = {
    where: CommentsWhereUniqueInput
    create: XOR<CommentsCreateWithoutParentCommentInput, CommentsUncheckedCreateWithoutParentCommentInput>
  }

  export type CommentsCreateManyParentCommentInputEnvelope = {
    data: CommentsCreateManyParentCommentInput | CommentsCreateManyParentCommentInput[]
    skipDuplicates?: boolean
  }

  export type PostsUpsertWithoutCommentsInput = {
    update: XOR<PostsUpdateWithoutCommentsInput, PostsUncheckedUpdateWithoutCommentsInput>
    create: XOR<PostsCreateWithoutCommentsInput, PostsUncheckedCreateWithoutCommentsInput>
    where?: PostsWhereInput
  }

  export type PostsUpdateToOneWithWhereWithoutCommentsInput = {
    where?: PostsWhereInput
    data: XOR<PostsUpdateWithoutCommentsInput, PostsUncheckedUpdateWithoutCommentsInput>
  }

  export type PostsUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostsUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CommentsUpsertWithoutRepliesInput = {
    update: XOR<CommentsUpdateWithoutRepliesInput, CommentsUncheckedUpdateWithoutRepliesInput>
    create: XOR<CommentsCreateWithoutRepliesInput, CommentsUncheckedCreateWithoutRepliesInput>
    where?: CommentsWhereInput
  }

  export type CommentsUpdateToOneWithWhereWithoutRepliesInput = {
    where?: CommentsWhereInput
    data: XOR<CommentsUpdateWithoutRepliesInput, CommentsUncheckedUpdateWithoutRepliesInput>
  }

  export type CommentsUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    likes?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostsUpdateOneRequiredWithoutCommentsNestedInput
    parentComment?: CommentsUpdateOneWithoutRepliesNestedInput
  }

  export type CommentsUncheckedUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    likes?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentCommentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentsUpsertWithWhereUniqueWithoutParentCommentInput = {
    where: CommentsWhereUniqueInput
    update: XOR<CommentsUpdateWithoutParentCommentInput, CommentsUncheckedUpdateWithoutParentCommentInput>
    create: XOR<CommentsCreateWithoutParentCommentInput, CommentsUncheckedCreateWithoutParentCommentInput>
  }

  export type CommentsUpdateWithWhereUniqueWithoutParentCommentInput = {
    where: CommentsWhereUniqueInput
    data: XOR<CommentsUpdateWithoutParentCommentInput, CommentsUncheckedUpdateWithoutParentCommentInput>
  }

  export type CommentsUpdateManyWithWhereWithoutParentCommentInput = {
    where: CommentsScalarWhereInput
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyWithoutParentCommentInput>
  }

  export type PostsCreateManyAuthorInput = {
    id?: string
    title: string
    content: string
    description: string
    tag?: string
    createdAt?: Date | string
    lastUpdate?: Date | string
    isPublished?: boolean
  }

  export type PostsUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    comments?: CommentsUpdateManyWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    comments?: CommentsUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CommentsCreateManyPostInput = {
    id?: string
    name: string
    content: string
    likes?: number | null
    createdAt?: Date | string
    parentCommentId?: string | null
  }

  export type CommentsUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    likes?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentComment?: CommentsUpdateOneWithoutRepliesNestedInput
    replies?: CommentsUpdateManyWithoutParentCommentNestedInput
  }

  export type CommentsUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    likes?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentCommentId?: NullableStringFieldUpdateOperationsInput | string | null
    replies?: CommentsUncheckedUpdateManyWithoutParentCommentNestedInput
  }

  export type CommentsUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    likes?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentCommentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentsCreateManyParentCommentInput = {
    id?: string
    name: string
    content: string
    postId: string
    likes?: number | null
    createdAt?: Date | string
  }

  export type CommentsUpdateWithoutParentCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    likes?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostsUpdateOneRequiredWithoutCommentsNestedInput
    replies?: CommentsUpdateManyWithoutParentCommentNestedInput
  }

  export type CommentsUncheckedUpdateWithoutParentCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    likes?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: CommentsUncheckedUpdateManyWithoutParentCommentNestedInput
  }

  export type CommentsUncheckedUpdateManyWithoutParentCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    likes?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}