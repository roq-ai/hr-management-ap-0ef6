/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model job
 *
 */
export type job = $Result.DefaultSelection<Prisma.$jobPayload>;
/**
 * Model job_application
 *
 */
export type job_application = $Result.DefaultSelection<Prisma.$job_applicationPayload>;
/**
 * Model performance_review
 *
 */
export type performance_review = $Result.DefaultSelection<Prisma.$performance_reviewPayload>;
/**
 * Model team
 *
 */
export type team = $Result.DefaultSelection<Prisma.$teamPayload>;
/**
 * Model team_member
 *
 */
export type team_member = $Result.DefaultSelection<Prisma.$team_memberPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Jobs
 * const jobs = await prisma.job.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Jobs
   * const jobs = await prisma.job.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.job`: Exposes CRUD operations for the **job** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Jobs
   * const jobs = await prisma.job.findMany()
   * ```
   */
  get job(): Prisma.jobDelegate<ExtArgs>;

  /**
   * `prisma.job_application`: Exposes CRUD operations for the **job_application** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Job_applications
   * const job_applications = await prisma.job_application.findMany()
   * ```
   */
  get job_application(): Prisma.job_applicationDelegate<ExtArgs>;

  /**
   * `prisma.performance_review`: Exposes CRUD operations for the **performance_review** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Performance_reviews
   * const performance_reviews = await prisma.performance_review.findMany()
   * ```
   */
  get performance_review(): Prisma.performance_reviewDelegate<ExtArgs>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **team** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Teams
   * const teams = await prisma.team.findMany()
   * ```
   */
  get team(): Prisma.teamDelegate<ExtArgs>;

  /**
   * `prisma.team_member`: Exposes CRUD operations for the **team_member** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Team_members
   * const team_members = await prisma.team_member.findMany()
   * ```
   */
  get team_member(): Prisma.team_memberDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

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
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    job: 'job';
    job_application: 'job_application';
    performance_review: 'performance_review';
    team: 'team';
    team_member: 'team_member';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'job' | 'job_application' | 'performance_review' | 'team' | 'team_member' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      job: {
        payload: Prisma.$jobPayload<ExtArgs>;
        fields: Prisma.jobFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.jobFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$jobPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.jobFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$jobPayload>;
          };
          findFirst: {
            args: Prisma.jobFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$jobPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.jobFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$jobPayload>;
          };
          findMany: {
            args: Prisma.jobFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$jobPayload>[];
          };
          create: {
            args: Prisma.jobCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$jobPayload>;
          };
          createMany: {
            args: Prisma.jobCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.jobDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$jobPayload>;
          };
          update: {
            args: Prisma.jobUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$jobPayload>;
          };
          deleteMany: {
            args: Prisma.jobDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.jobUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.jobUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$jobPayload>;
          };
          aggregate: {
            args: Prisma.JobAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateJob>;
          };
          groupBy: {
            args: Prisma.jobGroupByArgs<ExtArgs>;
            result: $Utils.Optional<JobGroupByOutputType>[];
          };
          count: {
            args: Prisma.jobCountArgs<ExtArgs>;
            result: $Utils.Optional<JobCountAggregateOutputType> | number;
          };
        };
      };
      job_application: {
        payload: Prisma.$job_applicationPayload<ExtArgs>;
        fields: Prisma.job_applicationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.job_applicationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_applicationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.job_applicationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_applicationPayload>;
          };
          findFirst: {
            args: Prisma.job_applicationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_applicationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.job_applicationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_applicationPayload>;
          };
          findMany: {
            args: Prisma.job_applicationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_applicationPayload>[];
          };
          create: {
            args: Prisma.job_applicationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_applicationPayload>;
          };
          createMany: {
            args: Prisma.job_applicationCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.job_applicationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_applicationPayload>;
          };
          update: {
            args: Prisma.job_applicationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_applicationPayload>;
          };
          deleteMany: {
            args: Prisma.job_applicationDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.job_applicationUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.job_applicationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_applicationPayload>;
          };
          aggregate: {
            args: Prisma.Job_applicationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateJob_application>;
          };
          groupBy: {
            args: Prisma.job_applicationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Job_applicationGroupByOutputType>[];
          };
          count: {
            args: Prisma.job_applicationCountArgs<ExtArgs>;
            result: $Utils.Optional<Job_applicationCountAggregateOutputType> | number;
          };
        };
      };
      performance_review: {
        payload: Prisma.$performance_reviewPayload<ExtArgs>;
        fields: Prisma.performance_reviewFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.performance_reviewFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$performance_reviewPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.performance_reviewFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$performance_reviewPayload>;
          };
          findFirst: {
            args: Prisma.performance_reviewFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$performance_reviewPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.performance_reviewFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$performance_reviewPayload>;
          };
          findMany: {
            args: Prisma.performance_reviewFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$performance_reviewPayload>[];
          };
          create: {
            args: Prisma.performance_reviewCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$performance_reviewPayload>;
          };
          createMany: {
            args: Prisma.performance_reviewCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.performance_reviewDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$performance_reviewPayload>;
          };
          update: {
            args: Prisma.performance_reviewUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$performance_reviewPayload>;
          };
          deleteMany: {
            args: Prisma.performance_reviewDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.performance_reviewUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.performance_reviewUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$performance_reviewPayload>;
          };
          aggregate: {
            args: Prisma.Performance_reviewAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePerformance_review>;
          };
          groupBy: {
            args: Prisma.performance_reviewGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Performance_reviewGroupByOutputType>[];
          };
          count: {
            args: Prisma.performance_reviewCountArgs<ExtArgs>;
            result: $Utils.Optional<Performance_reviewCountAggregateOutputType> | number;
          };
        };
      };
      team: {
        payload: Prisma.$teamPayload<ExtArgs>;
        fields: Prisma.teamFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.teamFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.teamFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload>;
          };
          findFirst: {
            args: Prisma.teamFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.teamFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload>;
          };
          findMany: {
            args: Prisma.teamFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload>[];
          };
          create: {
            args: Prisma.teamCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload>;
          };
          createMany: {
            args: Prisma.teamCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.teamDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload>;
          };
          update: {
            args: Prisma.teamUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload>;
          };
          deleteMany: {
            args: Prisma.teamDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.teamUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.teamUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload>;
          };
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTeam>;
          };
          groupBy: {
            args: Prisma.teamGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TeamGroupByOutputType>[];
          };
          count: {
            args: Prisma.teamCountArgs<ExtArgs>;
            result: $Utils.Optional<TeamCountAggregateOutputType> | number;
          };
        };
      };
      team_member: {
        payload: Prisma.$team_memberPayload<ExtArgs>;
        fields: Prisma.team_memberFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.team_memberFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.team_memberFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload>;
          };
          findFirst: {
            args: Prisma.team_memberFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.team_memberFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload>;
          };
          findMany: {
            args: Prisma.team_memberFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload>[];
          };
          create: {
            args: Prisma.team_memberCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload>;
          };
          createMany: {
            args: Prisma.team_memberCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.team_memberDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload>;
          };
          update: {
            args: Prisma.team_memberUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload>;
          };
          deleteMany: {
            args: Prisma.team_memberDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.team_memberUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.team_memberUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload>;
          };
          aggregate: {
            args: Prisma.Team_memberAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTeam_member>;
          };
          groupBy: {
            args: Prisma.team_memberGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Team_memberGroupByOutputType>[];
          };
          count: {
            args: Prisma.team_memberCountArgs<ExtArgs>;
            result: $Utils.Optional<Team_memberCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type JobCountOutputType
   */

  export type JobCountOutputType = {
    job_application: number;
  };

  export type JobCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job_application?: boolean | JobCountOutputTypeCountJob_applicationArgs;
  };

  // Custom InputTypes

  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCountOutputType
     */
    select?: JobCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeCountJob_applicationArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: job_applicationWhereInput;
  };

  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    team_member: number;
  };

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team_member?: boolean | TeamCountOutputTypeCountTeam_memberArgs;
  };

  // Custom InputTypes

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountTeam_memberArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: team_memberWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    job_application: number;
    performance_review_performance_review_reviewer_idTouser: number;
    performance_review_performance_review_user_idTouser: number;
    team: number;
    team_member: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job_application?: boolean | UserCountOutputTypeCountJob_applicationArgs;
    performance_review_performance_review_reviewer_idTouser?:
      | boolean
      | UserCountOutputTypeCountPerformance_review_performance_review_reviewer_idTouserArgs;
    performance_review_performance_review_user_idTouser?:
      | boolean
      | UserCountOutputTypeCountPerformance_review_performance_review_user_idTouserArgs;
    team?: boolean | UserCountOutputTypeCountTeamArgs;
    team_member?: boolean | UserCountOutputTypeCountTeam_memberArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountJob_applicationArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: job_applicationWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPerformance_review_performance_review_reviewer_idTouserArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: performance_reviewWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPerformance_review_performance_review_user_idTouserArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: performance_reviewWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTeamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: teamWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTeam_memberArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: team_memberWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model job
   */

  export type AggregateJob = {
    _count: JobCountAggregateOutputType | null;
    _min: JobMinAggregateOutputType | null;
    _max: JobMaxAggregateOutputType | null;
  };

  export type JobMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type JobMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type JobCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    status: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type JobMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type JobMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type JobCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type JobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which job to aggregate.
     */
    where?: jobWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobOrderByWithRelationInput | jobOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: jobWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` jobs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned jobs
     **/
    _count?: true | JobCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: JobMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: JobMaxAggregateInputType;
  };

  export type GetJobAggregateType<T extends JobAggregateArgs> = {
    [P in keyof T & keyof AggregateJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob[P]>
      : GetScalarType<T[P], AggregateJob[P]>;
  };

  export type jobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jobWhereInput;
    orderBy?: jobOrderByWithAggregationInput | jobOrderByWithAggregationInput[];
    by: JobScalarFieldEnum[] | JobScalarFieldEnum;
    having?: jobScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: JobCountAggregateInputType | true;
    _min?: JobMinAggregateInputType;
    _max?: JobMaxAggregateInputType;
  };

  export type JobGroupByOutputType = {
    id: string;
    title: string;
    description: string | null;
    status: string;
    created_at: Date;
    updated_at: Date;
    _count: JobCountAggregateOutputType | null;
    _min: JobMinAggregateOutputType | null;
    _max: JobMaxAggregateOutputType | null;
  };

  type GetJobGroupByPayload<T extends jobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobGroupByOutputType, T['by']> & {
        [P in keyof T & keyof JobGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], JobGroupByOutputType[P]>
          : GetScalarType<T[P], JobGroupByOutputType[P]>;
      }
    >
  >;

  export type jobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      description?: boolean;
      status?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      job_application?: boolean | job$job_applicationArgs<ExtArgs>;
      _count?: boolean | JobCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['job']
  >;

  export type jobSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type jobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job_application?: boolean | job$job_applicationArgs<ExtArgs>;
    _count?: boolean | JobCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $jobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'job';
    objects: {
      job_application: Prisma.$job_applicationPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        title: string;
        description: string | null;
        status: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['job']
    >;
    composites: {};
  };

  type jobGetPayload<S extends boolean | null | undefined | jobDefaultArgs> = $Result.GetResult<Prisma.$jobPayload, S>;

  type jobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    jobFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: JobCountAggregateInputType | true;
  };

  export interface jobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['job']; meta: { name: 'job' } };
    /**
     * Find zero or one Job that matches the filter.
     * @param {jobFindUniqueArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends jobFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, jobFindUniqueArgs<ExtArgs>>,
    ): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Job that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {jobFindUniqueOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends jobFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, jobFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Job that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobFindFirstArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends jobFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, jobFindFirstArgs<ExtArgs>>,
    ): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Job that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobFindFirstOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends jobFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, jobFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jobs
     * const jobs = await prisma.job.findMany()
     *
     * // Get first 10 Jobs
     * const jobs = await prisma.job.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const jobWithIdOnly = await prisma.job.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends jobFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, jobFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Job.
     * @param {jobCreateArgs} args - Arguments to create a Job.
     * @example
     * // Create one Job
     * const Job = await prisma.job.create({
     *   data: {
     *     // ... data to create a Job
     *   }
     * })
     *
     **/
    create<T extends jobCreateArgs<ExtArgs>>(
      args: SelectSubset<T, jobCreateArgs<ExtArgs>>,
    ): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Jobs.
     *     @param {jobCreateManyArgs} args - Arguments to create many Jobs.
     *     @example
     *     // Create many Jobs
     *     const job = await prisma.job.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends jobCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, jobCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Job.
     * @param {jobDeleteArgs} args - Arguments to delete one Job.
     * @example
     * // Delete one Job
     * const Job = await prisma.job.delete({
     *   where: {
     *     // ... filter to delete one Job
     *   }
     * })
     *
     **/
    delete<T extends jobDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, jobDeleteArgs<ExtArgs>>,
    ): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Job.
     * @param {jobUpdateArgs} args - Arguments to update one Job.
     * @example
     * // Update one Job
     * const job = await prisma.job.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends jobUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, jobUpdateArgs<ExtArgs>>,
    ): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Jobs.
     * @param {jobDeleteManyArgs} args - Arguments to filter Jobs to delete.
     * @example
     * // Delete a few Jobs
     * const { count } = await prisma.job.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends jobDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, jobDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jobs
     * const job = await prisma.job.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends jobUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, jobUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Job.
     * @param {jobUpsertArgs} args - Arguments to update or create a Job.
     * @example
     * // Update or create a Job
     * const job = await prisma.job.upsert({
     *   create: {
     *     // ... data to create a Job
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job we want to update
     *   }
     * })
     **/
    upsert<T extends jobUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, jobUpsertArgs<ExtArgs>>,
    ): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobCountArgs} args - Arguments to filter Jobs to count.
     * @example
     * // Count the number of Jobs
     * const count = await prisma.job.count({
     *   where: {
     *     // ... the filter for the Jobs we want to count
     *   }
     * })
     **/
    count<T extends jobCountArgs>(
      args?: Subset<T, jobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobAggregateArgs>(
      args: Subset<T, JobAggregateArgs>,
    ): Prisma.PrismaPromise<GetJobAggregateType<T>>;

    /**
     * Group by Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobGroupByArgs} args - Group by arguments.
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
      T extends jobGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: jobGroupByArgs['orderBy'] }
        : { orderBy?: jobGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, jobGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the job model
     */
    readonly fields: jobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for job.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__jobClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    job_application<T extends job$job_applicationArgs<ExtArgs> = {}>(
      args?: Subset<T, job$job_applicationArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$job_applicationPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the job model
   */
  interface jobFieldRefs {
    readonly id: FieldRef<'job', 'String'>;
    readonly title: FieldRef<'job', 'String'>;
    readonly description: FieldRef<'job', 'String'>;
    readonly status: FieldRef<'job', 'String'>;
    readonly created_at: FieldRef<'job', 'DateTime'>;
    readonly updated_at: FieldRef<'job', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * job findUnique
   */
  export type jobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobInclude<ExtArgs> | null;
    /**
     * Filter, which job to fetch.
     */
    where: jobWhereUniqueInput;
  };

  /**
   * job findUniqueOrThrow
   */
  export type jobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobInclude<ExtArgs> | null;
    /**
     * Filter, which job to fetch.
     */
    where: jobWhereUniqueInput;
  };

  /**
   * job findFirst
   */
  export type jobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobInclude<ExtArgs> | null;
    /**
     * Filter, which job to fetch.
     */
    where?: jobWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobOrderByWithRelationInput | jobOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for jobs.
     */
    cursor?: jobWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` jobs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[];
  };

  /**
   * job findFirstOrThrow
   */
  export type jobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobInclude<ExtArgs> | null;
    /**
     * Filter, which job to fetch.
     */
    where?: jobWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobOrderByWithRelationInput | jobOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for jobs.
     */
    cursor?: jobWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` jobs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[];
  };

  /**
   * job findMany
   */
  export type jobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobInclude<ExtArgs> | null;
    /**
     * Filter, which jobs to fetch.
     */
    where?: jobWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobOrderByWithRelationInput | jobOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing jobs.
     */
    cursor?: jobWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` jobs.
     */
    skip?: number;
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[];
  };

  /**
   * job create
   */
  export type jobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobInclude<ExtArgs> | null;
    /**
     * The data needed to create a job.
     */
    data: XOR<jobCreateInput, jobUncheckedCreateInput>;
  };

  /**
   * job createMany
   */
  export type jobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many jobs.
     */
    data: jobCreateManyInput | jobCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * job update
   */
  export type jobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobInclude<ExtArgs> | null;
    /**
     * The data needed to update a job.
     */
    data: XOR<jobUpdateInput, jobUncheckedUpdateInput>;
    /**
     * Choose, which job to update.
     */
    where: jobWhereUniqueInput;
  };

  /**
   * job updateMany
   */
  export type jobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update jobs.
     */
    data: XOR<jobUpdateManyMutationInput, jobUncheckedUpdateManyInput>;
    /**
     * Filter which jobs to update
     */
    where?: jobWhereInput;
  };

  /**
   * job upsert
   */
  export type jobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobInclude<ExtArgs> | null;
    /**
     * The filter to search for the job to update in case it exists.
     */
    where: jobWhereUniqueInput;
    /**
     * In case the job found by the `where` argument doesn't exist, create a new job with this data.
     */
    create: XOR<jobCreateInput, jobUncheckedCreateInput>;
    /**
     * In case the job was found with the provided `where` argument, update it with this data.
     */
    update: XOR<jobUpdateInput, jobUncheckedUpdateInput>;
  };

  /**
   * job delete
   */
  export type jobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobInclude<ExtArgs> | null;
    /**
     * Filter which job to delete.
     */
    where: jobWhereUniqueInput;
  };

  /**
   * job deleteMany
   */
  export type jobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jobs to delete
     */
    where?: jobWhereInput;
  };

  /**
   * job.job_application
   */
  export type job$job_applicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_application
     */
    select?: job_applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_applicationInclude<ExtArgs> | null;
    where?: job_applicationWhereInput;
    orderBy?: job_applicationOrderByWithRelationInput | job_applicationOrderByWithRelationInput[];
    cursor?: job_applicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Job_applicationScalarFieldEnum | Job_applicationScalarFieldEnum[];
  };

  /**
   * job without action
   */
  export type jobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobInclude<ExtArgs> | null;
  };

  /**
   * Model job_application
   */

  export type AggregateJob_application = {
    _count: Job_applicationCountAggregateOutputType | null;
    _min: Job_applicationMinAggregateOutputType | null;
    _max: Job_applicationMaxAggregateOutputType | null;
  };

  export type Job_applicationMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    job_id: string | null;
    status: string | null;
    applied_at: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Job_applicationMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    job_id: string | null;
    status: string | null;
    applied_at: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Job_applicationCountAggregateOutputType = {
    id: number;
    user_id: number;
    job_id: number;
    status: number;
    applied_at: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Job_applicationMinAggregateInputType = {
    id?: true;
    user_id?: true;
    job_id?: true;
    status?: true;
    applied_at?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Job_applicationMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    job_id?: true;
    status?: true;
    applied_at?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Job_applicationCountAggregateInputType = {
    id?: true;
    user_id?: true;
    job_id?: true;
    status?: true;
    applied_at?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Job_applicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which job_application to aggregate.
     */
    where?: job_applicationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of job_applications to fetch.
     */
    orderBy?: job_applicationOrderByWithRelationInput | job_applicationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: job_applicationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` job_applications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` job_applications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned job_applications
     **/
    _count?: true | Job_applicationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Job_applicationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Job_applicationMaxAggregateInputType;
  };

  export type GetJob_applicationAggregateType<T extends Job_applicationAggregateArgs> = {
    [P in keyof T & keyof AggregateJob_application]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob_application[P]>
      : GetScalarType<T[P], AggregateJob_application[P]>;
  };

  export type job_applicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: job_applicationWhereInput;
    orderBy?: job_applicationOrderByWithAggregationInput | job_applicationOrderByWithAggregationInput[];
    by: Job_applicationScalarFieldEnum[] | Job_applicationScalarFieldEnum;
    having?: job_applicationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Job_applicationCountAggregateInputType | true;
    _min?: Job_applicationMinAggregateInputType;
    _max?: Job_applicationMaxAggregateInputType;
  };

  export type Job_applicationGroupByOutputType = {
    id: string;
    user_id: string;
    job_id: string;
    status: string;
    applied_at: Date;
    created_at: Date;
    updated_at: Date;
    _count: Job_applicationCountAggregateOutputType | null;
    _min: Job_applicationMinAggregateOutputType | null;
    _max: Job_applicationMaxAggregateOutputType | null;
  };

  type GetJob_applicationGroupByPayload<T extends job_applicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Job_applicationGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Job_applicationGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Job_applicationGroupByOutputType[P]>
          : GetScalarType<T[P], Job_applicationGroupByOutputType[P]>;
      }
    >
  >;

  export type job_applicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        user_id?: boolean;
        job_id?: boolean;
        status?: boolean;
        applied_at?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        job?: boolean | jobDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['job_application']
    >;

  export type job_applicationSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    job_id?: boolean;
    status?: boolean;
    applied_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type job_applicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | jobDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $job_applicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'job_application';
    objects: {
      job: Prisma.$jobPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        job_id: string;
        status: string;
        applied_at: Date;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['job_application']
    >;
    composites: {};
  };

  type job_applicationGetPayload<S extends boolean | null | undefined | job_applicationDefaultArgs> = $Result.GetResult<
    Prisma.$job_applicationPayload,
    S
  >;

  type job_applicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    job_applicationFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Job_applicationCountAggregateInputType | true;
  };

  export interface job_applicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['job_application']; meta: { name: 'job_application' } };
    /**
     * Find zero or one Job_application that matches the filter.
     * @param {job_applicationFindUniqueArgs} args - Arguments to find a Job_application
     * @example
     * // Get one Job_application
     * const job_application = await prisma.job_application.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends job_applicationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, job_applicationFindUniqueArgs<ExtArgs>>,
    ): Prisma__job_applicationClient<
      $Result.GetResult<Prisma.$job_applicationPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Job_application that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {job_applicationFindUniqueOrThrowArgs} args - Arguments to find a Job_application
     * @example
     * // Get one Job_application
     * const job_application = await prisma.job_application.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends job_applicationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, job_applicationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__job_applicationClient<
      $Result.GetResult<Prisma.$job_applicationPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Job_application that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_applicationFindFirstArgs} args - Arguments to find a Job_application
     * @example
     * // Get one Job_application
     * const job_application = await prisma.job_application.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends job_applicationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, job_applicationFindFirstArgs<ExtArgs>>,
    ): Prisma__job_applicationClient<
      $Result.GetResult<Prisma.$job_applicationPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Job_application that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_applicationFindFirstOrThrowArgs} args - Arguments to find a Job_application
     * @example
     * // Get one Job_application
     * const job_application = await prisma.job_application.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends job_applicationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, job_applicationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__job_applicationClient<
      $Result.GetResult<Prisma.$job_applicationPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Job_applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_applicationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Job_applications
     * const job_applications = await prisma.job_application.findMany()
     *
     * // Get first 10 Job_applications
     * const job_applications = await prisma.job_application.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const job_applicationWithIdOnly = await prisma.job_application.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends job_applicationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, job_applicationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$job_applicationPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Job_application.
     * @param {job_applicationCreateArgs} args - Arguments to create a Job_application.
     * @example
     * // Create one Job_application
     * const Job_application = await prisma.job_application.create({
     *   data: {
     *     // ... data to create a Job_application
     *   }
     * })
     *
     **/
    create<T extends job_applicationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, job_applicationCreateArgs<ExtArgs>>,
    ): Prisma__job_applicationClient<
      $Result.GetResult<Prisma.$job_applicationPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Job_applications.
     *     @param {job_applicationCreateManyArgs} args - Arguments to create many Job_applications.
     *     @example
     *     // Create many Job_applications
     *     const job_application = await prisma.job_application.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends job_applicationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, job_applicationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Job_application.
     * @param {job_applicationDeleteArgs} args - Arguments to delete one Job_application.
     * @example
     * // Delete one Job_application
     * const Job_application = await prisma.job_application.delete({
     *   where: {
     *     // ... filter to delete one Job_application
     *   }
     * })
     *
     **/
    delete<T extends job_applicationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, job_applicationDeleteArgs<ExtArgs>>,
    ): Prisma__job_applicationClient<
      $Result.GetResult<Prisma.$job_applicationPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Job_application.
     * @param {job_applicationUpdateArgs} args - Arguments to update one Job_application.
     * @example
     * // Update one Job_application
     * const job_application = await prisma.job_application.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends job_applicationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, job_applicationUpdateArgs<ExtArgs>>,
    ): Prisma__job_applicationClient<
      $Result.GetResult<Prisma.$job_applicationPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Job_applications.
     * @param {job_applicationDeleteManyArgs} args - Arguments to filter Job_applications to delete.
     * @example
     * // Delete a few Job_applications
     * const { count } = await prisma.job_application.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends job_applicationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, job_applicationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Job_applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_applicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Job_applications
     * const job_application = await prisma.job_application.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends job_applicationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, job_applicationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Job_application.
     * @param {job_applicationUpsertArgs} args - Arguments to update or create a Job_application.
     * @example
     * // Update or create a Job_application
     * const job_application = await prisma.job_application.upsert({
     *   create: {
     *     // ... data to create a Job_application
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job_application we want to update
     *   }
     * })
     **/
    upsert<T extends job_applicationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, job_applicationUpsertArgs<ExtArgs>>,
    ): Prisma__job_applicationClient<
      $Result.GetResult<Prisma.$job_applicationPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Job_applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_applicationCountArgs} args - Arguments to filter Job_applications to count.
     * @example
     * // Count the number of Job_applications
     * const count = await prisma.job_application.count({
     *   where: {
     *     // ... the filter for the Job_applications we want to count
     *   }
     * })
     **/
    count<T extends job_applicationCountArgs>(
      args?: Subset<T, job_applicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Job_applicationCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Job_application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Job_applicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Job_applicationAggregateArgs>(
      args: Subset<T, Job_applicationAggregateArgs>,
    ): Prisma.PrismaPromise<GetJob_applicationAggregateType<T>>;

    /**
     * Group by Job_application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_applicationGroupByArgs} args - Group by arguments.
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
      T extends job_applicationGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: job_applicationGroupByArgs['orderBy'] }
        : { orderBy?: job_applicationGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, job_applicationGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetJob_applicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the job_application model
     */
    readonly fields: job_applicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for job_application.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__job_applicationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    job<T extends jobDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, jobDefaultArgs<ExtArgs>>,
    ): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the job_application model
   */
  interface job_applicationFieldRefs {
    readonly id: FieldRef<'job_application', 'String'>;
    readonly user_id: FieldRef<'job_application', 'String'>;
    readonly job_id: FieldRef<'job_application', 'String'>;
    readonly status: FieldRef<'job_application', 'String'>;
    readonly applied_at: FieldRef<'job_application', 'DateTime'>;
    readonly created_at: FieldRef<'job_application', 'DateTime'>;
    readonly updated_at: FieldRef<'job_application', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * job_application findUnique
   */
  export type job_applicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_application
     */
    select?: job_applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_applicationInclude<ExtArgs> | null;
    /**
     * Filter, which job_application to fetch.
     */
    where: job_applicationWhereUniqueInput;
  };

  /**
   * job_application findUniqueOrThrow
   */
  export type job_applicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the job_application
       */
      select?: job_applicationSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well.
       */
      include?: job_applicationInclude<ExtArgs> | null;
      /**
       * Filter, which job_application to fetch.
       */
      where: job_applicationWhereUniqueInput;
    };

  /**
   * job_application findFirst
   */
  export type job_applicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_application
     */
    select?: job_applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_applicationInclude<ExtArgs> | null;
    /**
     * Filter, which job_application to fetch.
     */
    where?: job_applicationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of job_applications to fetch.
     */
    orderBy?: job_applicationOrderByWithRelationInput | job_applicationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for job_applications.
     */
    cursor?: job_applicationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` job_applications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` job_applications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of job_applications.
     */
    distinct?: Job_applicationScalarFieldEnum | Job_applicationScalarFieldEnum[];
  };

  /**
   * job_application findFirstOrThrow
   */
  export type job_applicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the job_application
       */
      select?: job_applicationSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well.
       */
      include?: job_applicationInclude<ExtArgs> | null;
      /**
       * Filter, which job_application to fetch.
       */
      where?: job_applicationWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of job_applications to fetch.
       */
      orderBy?: job_applicationOrderByWithRelationInput | job_applicationOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for searching for job_applications.
       */
      cursor?: job_applicationWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` job_applications from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` job_applications.
       */
      skip?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
       *
       * Filter by unique combinations of job_applications.
       */
      distinct?: Job_applicationScalarFieldEnum | Job_applicationScalarFieldEnum[];
    };

  /**
   * job_application findMany
   */
  export type job_applicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_application
     */
    select?: job_applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_applicationInclude<ExtArgs> | null;
    /**
     * Filter, which job_applications to fetch.
     */
    where?: job_applicationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of job_applications to fetch.
     */
    orderBy?: job_applicationOrderByWithRelationInput | job_applicationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing job_applications.
     */
    cursor?: job_applicationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` job_applications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` job_applications.
     */
    skip?: number;
    distinct?: Job_applicationScalarFieldEnum | Job_applicationScalarFieldEnum[];
  };

  /**
   * job_application create
   */
  export type job_applicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_application
     */
    select?: job_applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_applicationInclude<ExtArgs> | null;
    /**
     * The data needed to create a job_application.
     */
    data: XOR<job_applicationCreateInput, job_applicationUncheckedCreateInput>;
  };

  /**
   * job_application createMany
   */
  export type job_applicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many job_applications.
     */
    data: job_applicationCreateManyInput | job_applicationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * job_application update
   */
  export type job_applicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_application
     */
    select?: job_applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_applicationInclude<ExtArgs> | null;
    /**
     * The data needed to update a job_application.
     */
    data: XOR<job_applicationUpdateInput, job_applicationUncheckedUpdateInput>;
    /**
     * Choose, which job_application to update.
     */
    where: job_applicationWhereUniqueInput;
  };

  /**
   * job_application updateMany
   */
  export type job_applicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update job_applications.
     */
    data: XOR<job_applicationUpdateManyMutationInput, job_applicationUncheckedUpdateManyInput>;
    /**
     * Filter which job_applications to update
     */
    where?: job_applicationWhereInput;
  };

  /**
   * job_application upsert
   */
  export type job_applicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_application
     */
    select?: job_applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_applicationInclude<ExtArgs> | null;
    /**
     * The filter to search for the job_application to update in case it exists.
     */
    where: job_applicationWhereUniqueInput;
    /**
     * In case the job_application found by the `where` argument doesn't exist, create a new job_application with this data.
     */
    create: XOR<job_applicationCreateInput, job_applicationUncheckedCreateInput>;
    /**
     * In case the job_application was found with the provided `where` argument, update it with this data.
     */
    update: XOR<job_applicationUpdateInput, job_applicationUncheckedUpdateInput>;
  };

  /**
   * job_application delete
   */
  export type job_applicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_application
     */
    select?: job_applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_applicationInclude<ExtArgs> | null;
    /**
     * Filter which job_application to delete.
     */
    where: job_applicationWhereUniqueInput;
  };

  /**
   * job_application deleteMany
   */
  export type job_applicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which job_applications to delete
     */
    where?: job_applicationWhereInput;
  };

  /**
   * job_application without action
   */
  export type job_applicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_application
     */
    select?: job_applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_applicationInclude<ExtArgs> | null;
  };

  /**
   * Model performance_review
   */

  export type AggregatePerformance_review = {
    _count: Performance_reviewCountAggregateOutputType | null;
    _avg: Performance_reviewAvgAggregateOutputType | null;
    _sum: Performance_reviewSumAggregateOutputType | null;
    _min: Performance_reviewMinAggregateOutputType | null;
    _max: Performance_reviewMaxAggregateOutputType | null;
  };

  export type Performance_reviewAvgAggregateOutputType = {
    rating: number | null;
  };

  export type Performance_reviewSumAggregateOutputType = {
    rating: number | null;
  };

  export type Performance_reviewMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    reviewer_id: string | null;
    rating: number | null;
    comments: string | null;
    reviewed_at: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Performance_reviewMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    reviewer_id: string | null;
    rating: number | null;
    comments: string | null;
    reviewed_at: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Performance_reviewCountAggregateOutputType = {
    id: number;
    user_id: number;
    reviewer_id: number;
    rating: number;
    comments: number;
    reviewed_at: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Performance_reviewAvgAggregateInputType = {
    rating?: true;
  };

  export type Performance_reviewSumAggregateInputType = {
    rating?: true;
  };

  export type Performance_reviewMinAggregateInputType = {
    id?: true;
    user_id?: true;
    reviewer_id?: true;
    rating?: true;
    comments?: true;
    reviewed_at?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Performance_reviewMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    reviewer_id?: true;
    rating?: true;
    comments?: true;
    reviewed_at?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Performance_reviewCountAggregateInputType = {
    id?: true;
    user_id?: true;
    reviewer_id?: true;
    rating?: true;
    comments?: true;
    reviewed_at?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Performance_reviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which performance_review to aggregate.
     */
    where?: performance_reviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of performance_reviews to fetch.
     */
    orderBy?: performance_reviewOrderByWithRelationInput | performance_reviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: performance_reviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` performance_reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` performance_reviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned performance_reviews
     **/
    _count?: true | Performance_reviewCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: Performance_reviewAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: Performance_reviewSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Performance_reviewMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Performance_reviewMaxAggregateInputType;
  };

  export type GetPerformance_reviewAggregateType<T extends Performance_reviewAggregateArgs> = {
    [P in keyof T & keyof AggregatePerformance_review]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerformance_review[P]>
      : GetScalarType<T[P], AggregatePerformance_review[P]>;
  };

  export type performance_reviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: performance_reviewWhereInput;
    orderBy?: performance_reviewOrderByWithAggregationInput | performance_reviewOrderByWithAggregationInput[];
    by: Performance_reviewScalarFieldEnum[] | Performance_reviewScalarFieldEnum;
    having?: performance_reviewScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Performance_reviewCountAggregateInputType | true;
    _avg?: Performance_reviewAvgAggregateInputType;
    _sum?: Performance_reviewSumAggregateInputType;
    _min?: Performance_reviewMinAggregateInputType;
    _max?: Performance_reviewMaxAggregateInputType;
  };

  export type Performance_reviewGroupByOutputType = {
    id: string;
    user_id: string;
    reviewer_id: string;
    rating: number;
    comments: string | null;
    reviewed_at: Date;
    created_at: Date;
    updated_at: Date;
    _count: Performance_reviewCountAggregateOutputType | null;
    _avg: Performance_reviewAvgAggregateOutputType | null;
    _sum: Performance_reviewSumAggregateOutputType | null;
    _min: Performance_reviewMinAggregateOutputType | null;
    _max: Performance_reviewMaxAggregateOutputType | null;
  };

  type GetPerformance_reviewGroupByPayload<T extends performance_reviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Performance_reviewGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Performance_reviewGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Performance_reviewGroupByOutputType[P]>
          : GetScalarType<T[P], Performance_reviewGroupByOutputType[P]>;
      }
    >
  >;

  export type performance_reviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        user_id?: boolean;
        reviewer_id?: boolean;
        rating?: boolean;
        comments?: boolean;
        reviewed_at?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user_performance_review_reviewer_idTouser?: boolean | userDefaultArgs<ExtArgs>;
        user_performance_review_user_idTouser?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['performance_review']
    >;

  export type performance_reviewSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    reviewer_id?: boolean;
    rating?: boolean;
    comments?: boolean;
    reviewed_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type performance_reviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_performance_review_reviewer_idTouser?: boolean | userDefaultArgs<ExtArgs>;
    user_performance_review_user_idTouser?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $performance_reviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'performance_review';
    objects: {
      user_performance_review_reviewer_idTouser: Prisma.$userPayload<ExtArgs>;
      user_performance_review_user_idTouser: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        reviewer_id: string;
        rating: number;
        comments: string | null;
        reviewed_at: Date;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['performance_review']
    >;
    composites: {};
  };

  type performance_reviewGetPayload<S extends boolean | null | undefined | performance_reviewDefaultArgs> =
    $Result.GetResult<Prisma.$performance_reviewPayload, S>;

  type performance_reviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    performance_reviewFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Performance_reviewCountAggregateInputType | true;
  };

  export interface performance_reviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['performance_review'];
      meta: { name: 'performance_review' };
    };
    /**
     * Find zero or one Performance_review that matches the filter.
     * @param {performance_reviewFindUniqueArgs} args - Arguments to find a Performance_review
     * @example
     * // Get one Performance_review
     * const performance_review = await prisma.performance_review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends performance_reviewFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, performance_reviewFindUniqueArgs<ExtArgs>>,
    ): Prisma__performance_reviewClient<
      $Result.GetResult<Prisma.$performance_reviewPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Performance_review that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {performance_reviewFindUniqueOrThrowArgs} args - Arguments to find a Performance_review
     * @example
     * // Get one Performance_review
     * const performance_review = await prisma.performance_review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends performance_reviewFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, performance_reviewFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__performance_reviewClient<
      $Result.GetResult<Prisma.$performance_reviewPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Performance_review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {performance_reviewFindFirstArgs} args - Arguments to find a Performance_review
     * @example
     * // Get one Performance_review
     * const performance_review = await prisma.performance_review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends performance_reviewFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, performance_reviewFindFirstArgs<ExtArgs>>,
    ): Prisma__performance_reviewClient<
      $Result.GetResult<Prisma.$performance_reviewPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Performance_review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {performance_reviewFindFirstOrThrowArgs} args - Arguments to find a Performance_review
     * @example
     * // Get one Performance_review
     * const performance_review = await prisma.performance_review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends performance_reviewFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, performance_reviewFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__performance_reviewClient<
      $Result.GetResult<Prisma.$performance_reviewPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Performance_reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {performance_reviewFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Performance_reviews
     * const performance_reviews = await prisma.performance_review.findMany()
     *
     * // Get first 10 Performance_reviews
     * const performance_reviews = await prisma.performance_review.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const performance_reviewWithIdOnly = await prisma.performance_review.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends performance_reviewFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, performance_reviewFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$performance_reviewPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Performance_review.
     * @param {performance_reviewCreateArgs} args - Arguments to create a Performance_review.
     * @example
     * // Create one Performance_review
     * const Performance_review = await prisma.performance_review.create({
     *   data: {
     *     // ... data to create a Performance_review
     *   }
     * })
     *
     **/
    create<T extends performance_reviewCreateArgs<ExtArgs>>(
      args: SelectSubset<T, performance_reviewCreateArgs<ExtArgs>>,
    ): Prisma__performance_reviewClient<
      $Result.GetResult<Prisma.$performance_reviewPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Performance_reviews.
     *     @param {performance_reviewCreateManyArgs} args - Arguments to create many Performance_reviews.
     *     @example
     *     // Create many Performance_reviews
     *     const performance_review = await prisma.performance_review.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends performance_reviewCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, performance_reviewCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Performance_review.
     * @param {performance_reviewDeleteArgs} args - Arguments to delete one Performance_review.
     * @example
     * // Delete one Performance_review
     * const Performance_review = await prisma.performance_review.delete({
     *   where: {
     *     // ... filter to delete one Performance_review
     *   }
     * })
     *
     **/
    delete<T extends performance_reviewDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, performance_reviewDeleteArgs<ExtArgs>>,
    ): Prisma__performance_reviewClient<
      $Result.GetResult<Prisma.$performance_reviewPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Performance_review.
     * @param {performance_reviewUpdateArgs} args - Arguments to update one Performance_review.
     * @example
     * // Update one Performance_review
     * const performance_review = await prisma.performance_review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends performance_reviewUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, performance_reviewUpdateArgs<ExtArgs>>,
    ): Prisma__performance_reviewClient<
      $Result.GetResult<Prisma.$performance_reviewPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Performance_reviews.
     * @param {performance_reviewDeleteManyArgs} args - Arguments to filter Performance_reviews to delete.
     * @example
     * // Delete a few Performance_reviews
     * const { count } = await prisma.performance_review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends performance_reviewDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, performance_reviewDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Performance_reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {performance_reviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Performance_reviews
     * const performance_review = await prisma.performance_review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends performance_reviewUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, performance_reviewUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Performance_review.
     * @param {performance_reviewUpsertArgs} args - Arguments to update or create a Performance_review.
     * @example
     * // Update or create a Performance_review
     * const performance_review = await prisma.performance_review.upsert({
     *   create: {
     *     // ... data to create a Performance_review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Performance_review we want to update
     *   }
     * })
     **/
    upsert<T extends performance_reviewUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, performance_reviewUpsertArgs<ExtArgs>>,
    ): Prisma__performance_reviewClient<
      $Result.GetResult<Prisma.$performance_reviewPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Performance_reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {performance_reviewCountArgs} args - Arguments to filter Performance_reviews to count.
     * @example
     * // Count the number of Performance_reviews
     * const count = await prisma.performance_review.count({
     *   where: {
     *     // ... the filter for the Performance_reviews we want to count
     *   }
     * })
     **/
    count<T extends performance_reviewCountArgs>(
      args?: Subset<T, performance_reviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Performance_reviewCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Performance_review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Performance_reviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Performance_reviewAggregateArgs>(
      args: Subset<T, Performance_reviewAggregateArgs>,
    ): Prisma.PrismaPromise<GetPerformance_reviewAggregateType<T>>;

    /**
     * Group by Performance_review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {performance_reviewGroupByArgs} args - Group by arguments.
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
      T extends performance_reviewGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: performance_reviewGroupByArgs['orderBy'] }
        : { orderBy?: performance_reviewGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, performance_reviewGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetPerformance_reviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the performance_review model
     */
    readonly fields: performance_reviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for performance_review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__performance_reviewClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user_performance_review_reviewer_idTouser<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user_performance_review_user_idTouser<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the performance_review model
   */
  interface performance_reviewFieldRefs {
    readonly id: FieldRef<'performance_review', 'String'>;
    readonly user_id: FieldRef<'performance_review', 'String'>;
    readonly reviewer_id: FieldRef<'performance_review', 'String'>;
    readonly rating: FieldRef<'performance_review', 'Int'>;
    readonly comments: FieldRef<'performance_review', 'String'>;
    readonly reviewed_at: FieldRef<'performance_review', 'DateTime'>;
    readonly created_at: FieldRef<'performance_review', 'DateTime'>;
    readonly updated_at: FieldRef<'performance_review', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * performance_review findUnique
   */
  export type performance_reviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the performance_review
     */
    select?: performance_reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: performance_reviewInclude<ExtArgs> | null;
    /**
     * Filter, which performance_review to fetch.
     */
    where: performance_reviewWhereUniqueInput;
  };

  /**
   * performance_review findUniqueOrThrow
   */
  export type performance_reviewFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the performance_review
     */
    select?: performance_reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: performance_reviewInclude<ExtArgs> | null;
    /**
     * Filter, which performance_review to fetch.
     */
    where: performance_reviewWhereUniqueInput;
  };

  /**
   * performance_review findFirst
   */
  export type performance_reviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the performance_review
     */
    select?: performance_reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: performance_reviewInclude<ExtArgs> | null;
    /**
     * Filter, which performance_review to fetch.
     */
    where?: performance_reviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of performance_reviews to fetch.
     */
    orderBy?: performance_reviewOrderByWithRelationInput | performance_reviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for performance_reviews.
     */
    cursor?: performance_reviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` performance_reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` performance_reviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of performance_reviews.
     */
    distinct?: Performance_reviewScalarFieldEnum | Performance_reviewScalarFieldEnum[];
  };

  /**
   * performance_review findFirstOrThrow
   */
  export type performance_reviewFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the performance_review
     */
    select?: performance_reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: performance_reviewInclude<ExtArgs> | null;
    /**
     * Filter, which performance_review to fetch.
     */
    where?: performance_reviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of performance_reviews to fetch.
     */
    orderBy?: performance_reviewOrderByWithRelationInput | performance_reviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for performance_reviews.
     */
    cursor?: performance_reviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` performance_reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` performance_reviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of performance_reviews.
     */
    distinct?: Performance_reviewScalarFieldEnum | Performance_reviewScalarFieldEnum[];
  };

  /**
   * performance_review findMany
   */
  export type performance_reviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the performance_review
     */
    select?: performance_reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: performance_reviewInclude<ExtArgs> | null;
    /**
     * Filter, which performance_reviews to fetch.
     */
    where?: performance_reviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of performance_reviews to fetch.
     */
    orderBy?: performance_reviewOrderByWithRelationInput | performance_reviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing performance_reviews.
     */
    cursor?: performance_reviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` performance_reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` performance_reviews.
     */
    skip?: number;
    distinct?: Performance_reviewScalarFieldEnum | Performance_reviewScalarFieldEnum[];
  };

  /**
   * performance_review create
   */
  export type performance_reviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the performance_review
     */
    select?: performance_reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: performance_reviewInclude<ExtArgs> | null;
    /**
     * The data needed to create a performance_review.
     */
    data: XOR<performance_reviewCreateInput, performance_reviewUncheckedCreateInput>;
  };

  /**
   * performance_review createMany
   */
  export type performance_reviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many performance_reviews.
     */
    data: performance_reviewCreateManyInput | performance_reviewCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * performance_review update
   */
  export type performance_reviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the performance_review
     */
    select?: performance_reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: performance_reviewInclude<ExtArgs> | null;
    /**
     * The data needed to update a performance_review.
     */
    data: XOR<performance_reviewUpdateInput, performance_reviewUncheckedUpdateInput>;
    /**
     * Choose, which performance_review to update.
     */
    where: performance_reviewWhereUniqueInput;
  };

  /**
   * performance_review updateMany
   */
  export type performance_reviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update performance_reviews.
     */
    data: XOR<performance_reviewUpdateManyMutationInput, performance_reviewUncheckedUpdateManyInput>;
    /**
     * Filter which performance_reviews to update
     */
    where?: performance_reviewWhereInput;
  };

  /**
   * performance_review upsert
   */
  export type performance_reviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the performance_review
     */
    select?: performance_reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: performance_reviewInclude<ExtArgs> | null;
    /**
     * The filter to search for the performance_review to update in case it exists.
     */
    where: performance_reviewWhereUniqueInput;
    /**
     * In case the performance_review found by the `where` argument doesn't exist, create a new performance_review with this data.
     */
    create: XOR<performance_reviewCreateInput, performance_reviewUncheckedCreateInput>;
    /**
     * In case the performance_review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<performance_reviewUpdateInput, performance_reviewUncheckedUpdateInput>;
  };

  /**
   * performance_review delete
   */
  export type performance_reviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the performance_review
     */
    select?: performance_reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: performance_reviewInclude<ExtArgs> | null;
    /**
     * Filter which performance_review to delete.
     */
    where: performance_reviewWhereUniqueInput;
  };

  /**
   * performance_review deleteMany
   */
  export type performance_reviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which performance_reviews to delete
     */
    where?: performance_reviewWhereInput;
  };

  /**
   * performance_review without action
   */
  export type performance_reviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the performance_review
     */
    select?: performance_reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: performance_reviewInclude<ExtArgs> | null;
  };

  /**
   * Model team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null;
    _min: TeamMinAggregateOutputType | null;
    _max: TeamMaxAggregateOutputType | null;
  };

  export type TeamMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type TeamMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type TeamCountAggregateOutputType = {
    id: number;
    description: number;
    name: number;
    created_at: number;
    updated_at: number;
    user_id: number;
    tenant_id: number;
    _all: number;
  };

  export type TeamMinAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type TeamMaxAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type TeamCountAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which team to aggregate.
     */
    where?: teamWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of teams to fetch.
     */
    orderBy?: teamOrderByWithRelationInput | teamOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: teamWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` teams from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` teams.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned teams
     **/
    _count?: true | TeamCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TeamMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TeamMaxAggregateInputType;
  };

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
    [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>;
  };

  export type teamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: teamWhereInput;
    orderBy?: teamOrderByWithAggregationInput | teamOrderByWithAggregationInput[];
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum;
    having?: teamScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TeamCountAggregateInputType | true;
    _min?: TeamMinAggregateInputType;
    _max?: TeamMaxAggregateInputType;
  };

  export type TeamGroupByOutputType = {
    id: string;
    description: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    tenant_id: string;
    _count: TeamCountAggregateOutputType | null;
    _min: TeamMinAggregateOutputType | null;
    _max: TeamMaxAggregateOutputType | null;
  };

  type GetTeamGroupByPayload<T extends teamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> & {
        [P in keyof T & keyof TeamGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
          : GetScalarType<T[P], TeamGroupByOutputType[P]>;
      }
    >
  >;

  export type teamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user_id?: boolean;
      tenant_id?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
      team_member?: boolean | team$team_memberArgs<ExtArgs>;
      _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['team']
  >;

  export type teamSelectScalar = {
    id?: boolean;
    description?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    tenant_id?: boolean;
  };

  export type teamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
    team_member?: boolean | team$team_memberArgs<ExtArgs>;
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $teamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'team';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
      team_member: Prisma.$team_memberPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        tenant_id: string;
      },
      ExtArgs['result']['team']
    >;
    composites: {};
  };

  type teamGetPayload<S extends boolean | null | undefined | teamDefaultArgs> = $Result.GetResult<
    Prisma.$teamPayload,
    S
  >;

  type teamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    teamFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: TeamCountAggregateInputType | true;
  };

  export interface teamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['team']; meta: { name: 'team' } };
    /**
     * Find zero or one Team that matches the filter.
     * @param {teamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends teamFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, teamFindUniqueArgs<ExtArgs>>,
    ): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Team that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {teamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends teamFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, teamFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends teamFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, teamFindFirstArgs<ExtArgs>>,
    ): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends teamFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, teamFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     *
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends teamFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, teamFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Team.
     * @param {teamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     *
     **/
    create<T extends teamCreateArgs<ExtArgs>>(
      args: SelectSubset<T, teamCreateArgs<ExtArgs>>,
    ): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Teams.
     *     @param {teamCreateManyArgs} args - Arguments to create many Teams.
     *     @example
     *     // Create many Teams
     *     const team = await prisma.team.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends teamCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, teamCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Team.
     * @param {teamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     *
     **/
    delete<T extends teamDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, teamDeleteArgs<ExtArgs>>,
    ): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Team.
     * @param {teamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends teamUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, teamUpdateArgs<ExtArgs>>,
    ): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Teams.
     * @param {teamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends teamDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, teamDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends teamUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, teamUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Team.
     * @param {teamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     **/
    upsert<T extends teamUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, teamUpsertArgs<ExtArgs>>,
    ): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
     **/
    count<T extends teamCountArgs>(
      args?: Subset<T, teamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamAggregateArgs>(
      args: Subset<T, TeamAggregateArgs>,
    ): Prisma.PrismaPromise<GetTeamAggregateType<T>>;

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamGroupByArgs} args - Group by arguments.
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
      T extends teamGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: teamGroupByArgs['orderBy'] }
        : { orderBy?: teamGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, teamGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the team model
     */
    readonly fields: teamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__teamClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    team_member<T extends team$team_memberArgs<ExtArgs> = {}>(
      args?: Subset<T, team$team_memberArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the team model
   */
  interface teamFieldRefs {
    readonly id: FieldRef<'team', 'String'>;
    readonly description: FieldRef<'team', 'String'>;
    readonly name: FieldRef<'team', 'String'>;
    readonly created_at: FieldRef<'team', 'DateTime'>;
    readonly updated_at: FieldRef<'team', 'DateTime'>;
    readonly user_id: FieldRef<'team', 'String'>;
    readonly tenant_id: FieldRef<'team', 'String'>;
  }

  // Custom InputTypes

  /**
   * team findUnique
   */
  export type teamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * Filter, which team to fetch.
     */
    where: teamWhereUniqueInput;
  };

  /**
   * team findUniqueOrThrow
   */
  export type teamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * Filter, which team to fetch.
     */
    where: teamWhereUniqueInput;
  };

  /**
   * team findFirst
   */
  export type teamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * Filter, which team to fetch.
     */
    where?: teamWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of teams to fetch.
     */
    orderBy?: teamOrderByWithRelationInput | teamOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for teams.
     */
    cursor?: teamWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` teams from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` teams.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[];
  };

  /**
   * team findFirstOrThrow
   */
  export type teamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * Filter, which team to fetch.
     */
    where?: teamWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of teams to fetch.
     */
    orderBy?: teamOrderByWithRelationInput | teamOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for teams.
     */
    cursor?: teamWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` teams from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` teams.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[];
  };

  /**
   * team findMany
   */
  export type teamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * Filter, which teams to fetch.
     */
    where?: teamWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of teams to fetch.
     */
    orderBy?: teamOrderByWithRelationInput | teamOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing teams.
     */
    cursor?: teamWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` teams from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` teams.
     */
    skip?: number;
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[];
  };

  /**
   * team create
   */
  export type teamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * The data needed to create a team.
     */
    data: XOR<teamCreateInput, teamUncheckedCreateInput>;
  };

  /**
   * team createMany
   */
  export type teamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many teams.
     */
    data: teamCreateManyInput | teamCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * team update
   */
  export type teamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * The data needed to update a team.
     */
    data: XOR<teamUpdateInput, teamUncheckedUpdateInput>;
    /**
     * Choose, which team to update.
     */
    where: teamWhereUniqueInput;
  };

  /**
   * team updateMany
   */
  export type teamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update teams.
     */
    data: XOR<teamUpdateManyMutationInput, teamUncheckedUpdateManyInput>;
    /**
     * Filter which teams to update
     */
    where?: teamWhereInput;
  };

  /**
   * team upsert
   */
  export type teamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * The filter to search for the team to update in case it exists.
     */
    where: teamWhereUniqueInput;
    /**
     * In case the team found by the `where` argument doesn't exist, create a new team with this data.
     */
    create: XOR<teamCreateInput, teamUncheckedCreateInput>;
    /**
     * In case the team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<teamUpdateInput, teamUncheckedUpdateInput>;
  };

  /**
   * team delete
   */
  export type teamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * Filter which team to delete.
     */
    where: teamWhereUniqueInput;
  };

  /**
   * team deleteMany
   */
  export type teamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which teams to delete
     */
    where?: teamWhereInput;
  };

  /**
   * team.team_member
   */
  export type team$team_memberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    where?: team_memberWhereInput;
    orderBy?: team_memberOrderByWithRelationInput | team_memberOrderByWithRelationInput[];
    cursor?: team_memberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Team_memberScalarFieldEnum | Team_memberScalarFieldEnum[];
  };

  /**
   * team without action
   */
  export type teamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
  };

  /**
   * Model team_member
   */

  export type AggregateTeam_member = {
    _count: Team_memberCountAggregateOutputType | null;
    _min: Team_memberMinAggregateOutputType | null;
    _max: Team_memberMaxAggregateOutputType | null;
  };

  export type Team_memberMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    team_id: string | null;
    joined_at: Date | null;
    role: string | null;
    status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Team_memberMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    team_id: string | null;
    joined_at: Date | null;
    role: string | null;
    status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Team_memberCountAggregateOutputType = {
    id: number;
    user_id: number;
    team_id: number;
    joined_at: number;
    role: number;
    status: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Team_memberMinAggregateInputType = {
    id?: true;
    user_id?: true;
    team_id?: true;
    joined_at?: true;
    role?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Team_memberMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    team_id?: true;
    joined_at?: true;
    role?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Team_memberCountAggregateInputType = {
    id?: true;
    user_id?: true;
    team_id?: true;
    joined_at?: true;
    role?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Team_memberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which team_member to aggregate.
     */
    where?: team_memberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of team_members to fetch.
     */
    orderBy?: team_memberOrderByWithRelationInput | team_memberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: team_memberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` team_members from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` team_members.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned team_members
     **/
    _count?: true | Team_memberCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Team_memberMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Team_memberMaxAggregateInputType;
  };

  export type GetTeam_memberAggregateType<T extends Team_memberAggregateArgs> = {
    [P in keyof T & keyof AggregateTeam_member]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam_member[P]>
      : GetScalarType<T[P], AggregateTeam_member[P]>;
  };

  export type team_memberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: team_memberWhereInput;
    orderBy?: team_memberOrderByWithAggregationInput | team_memberOrderByWithAggregationInput[];
    by: Team_memberScalarFieldEnum[] | Team_memberScalarFieldEnum;
    having?: team_memberScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Team_memberCountAggregateInputType | true;
    _min?: Team_memberMinAggregateInputType;
    _max?: Team_memberMaxAggregateInputType;
  };

  export type Team_memberGroupByOutputType = {
    id: string;
    user_id: string;
    team_id: string;
    joined_at: Date;
    role: string;
    status: string;
    created_at: Date;
    updated_at: Date;
    _count: Team_memberCountAggregateOutputType | null;
    _min: Team_memberMinAggregateOutputType | null;
    _max: Team_memberMaxAggregateOutputType | null;
  };

  type GetTeam_memberGroupByPayload<T extends team_memberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Team_memberGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Team_memberGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Team_memberGroupByOutputType[P]>
          : GetScalarType<T[P], Team_memberGroupByOutputType[P]>;
      }
    >
  >;

  export type team_memberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        user_id?: boolean;
        team_id?: boolean;
        joined_at?: boolean;
        role?: boolean;
        status?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        team?: boolean | teamDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['team_member']
    >;

  export type team_memberSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    team_id?: boolean;
    joined_at?: boolean;
    role?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type team_memberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | teamDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $team_memberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'team_member';
    objects: {
      team: Prisma.$teamPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        team_id: string;
        joined_at: Date;
        role: string;
        status: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['team_member']
    >;
    composites: {};
  };

  type team_memberGetPayload<S extends boolean | null | undefined | team_memberDefaultArgs> = $Result.GetResult<
    Prisma.$team_memberPayload,
    S
  >;

  type team_memberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    team_memberFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Team_memberCountAggregateInputType | true;
  };

  export interface team_memberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['team_member']; meta: { name: 'team_member' } };
    /**
     * Find zero or one Team_member that matches the filter.
     * @param {team_memberFindUniqueArgs} args - Arguments to find a Team_member
     * @example
     * // Get one Team_member
     * const team_member = await prisma.team_member.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends team_memberFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, team_memberFindUniqueArgs<ExtArgs>>,
    ): Prisma__team_memberClient<
      $Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Team_member that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {team_memberFindUniqueOrThrowArgs} args - Arguments to find a Team_member
     * @example
     * // Get one Team_member
     * const team_member = await prisma.team_member.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends team_memberFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, team_memberFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__team_memberClient<
      $Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Team_member that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_memberFindFirstArgs} args - Arguments to find a Team_member
     * @example
     * // Get one Team_member
     * const team_member = await prisma.team_member.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends team_memberFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, team_memberFindFirstArgs<ExtArgs>>,
    ): Prisma__team_memberClient<
      $Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Team_member that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_memberFindFirstOrThrowArgs} args - Arguments to find a Team_member
     * @example
     * // Get one Team_member
     * const team_member = await prisma.team_member.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends team_memberFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, team_memberFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__team_memberClient<
      $Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Team_members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_memberFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Team_members
     * const team_members = await prisma.team_member.findMany()
     *
     * // Get first 10 Team_members
     * const team_members = await prisma.team_member.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const team_memberWithIdOnly = await prisma.team_member.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends team_memberFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, team_memberFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Team_member.
     * @param {team_memberCreateArgs} args - Arguments to create a Team_member.
     * @example
     * // Create one Team_member
     * const Team_member = await prisma.team_member.create({
     *   data: {
     *     // ... data to create a Team_member
     *   }
     * })
     *
     **/
    create<T extends team_memberCreateArgs<ExtArgs>>(
      args: SelectSubset<T, team_memberCreateArgs<ExtArgs>>,
    ): Prisma__team_memberClient<$Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Team_members.
     *     @param {team_memberCreateManyArgs} args - Arguments to create many Team_members.
     *     @example
     *     // Create many Team_members
     *     const team_member = await prisma.team_member.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends team_memberCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, team_memberCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Team_member.
     * @param {team_memberDeleteArgs} args - Arguments to delete one Team_member.
     * @example
     * // Delete one Team_member
     * const Team_member = await prisma.team_member.delete({
     *   where: {
     *     // ... filter to delete one Team_member
     *   }
     * })
     *
     **/
    delete<T extends team_memberDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, team_memberDeleteArgs<ExtArgs>>,
    ): Prisma__team_memberClient<$Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Team_member.
     * @param {team_memberUpdateArgs} args - Arguments to update one Team_member.
     * @example
     * // Update one Team_member
     * const team_member = await prisma.team_member.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends team_memberUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, team_memberUpdateArgs<ExtArgs>>,
    ): Prisma__team_memberClient<$Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Team_members.
     * @param {team_memberDeleteManyArgs} args - Arguments to filter Team_members to delete.
     * @example
     * // Delete a few Team_members
     * const { count } = await prisma.team_member.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends team_memberDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, team_memberDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Team_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_memberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Team_members
     * const team_member = await prisma.team_member.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends team_memberUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, team_memberUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Team_member.
     * @param {team_memberUpsertArgs} args - Arguments to update or create a Team_member.
     * @example
     * // Update or create a Team_member
     * const team_member = await prisma.team_member.upsert({
     *   create: {
     *     // ... data to create a Team_member
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team_member we want to update
     *   }
     * })
     **/
    upsert<T extends team_memberUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, team_memberUpsertArgs<ExtArgs>>,
    ): Prisma__team_memberClient<$Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Team_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_memberCountArgs} args - Arguments to filter Team_members to count.
     * @example
     * // Count the number of Team_members
     * const count = await prisma.team_member.count({
     *   where: {
     *     // ... the filter for the Team_members we want to count
     *   }
     * })
     **/
    count<T extends team_memberCountArgs>(
      args?: Subset<T, team_memberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Team_memberCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Team_member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Team_memberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Team_memberAggregateArgs>(
      args: Subset<T, Team_memberAggregateArgs>,
    ): Prisma.PrismaPromise<GetTeam_memberAggregateType<T>>;

    /**
     * Group by Team_member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_memberGroupByArgs} args - Group by arguments.
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
      T extends team_memberGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: team_memberGroupByArgs['orderBy'] }
        : { orderBy?: team_memberGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, team_memberGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetTeam_memberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the team_member model
     */
    readonly fields: team_memberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for team_member.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__team_memberClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    team<T extends teamDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, teamDefaultArgs<ExtArgs>>,
    ): Prisma__teamClient<
      $Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the team_member model
   */
  interface team_memberFieldRefs {
    readonly id: FieldRef<'team_member', 'String'>;
    readonly user_id: FieldRef<'team_member', 'String'>;
    readonly team_id: FieldRef<'team_member', 'String'>;
    readonly joined_at: FieldRef<'team_member', 'DateTime'>;
    readonly role: FieldRef<'team_member', 'String'>;
    readonly status: FieldRef<'team_member', 'String'>;
    readonly created_at: FieldRef<'team_member', 'DateTime'>;
    readonly updated_at: FieldRef<'team_member', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * team_member findUnique
   */
  export type team_memberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    /**
     * Filter, which team_member to fetch.
     */
    where: team_memberWhereUniqueInput;
  };

  /**
   * team_member findUniqueOrThrow
   */
  export type team_memberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    /**
     * Filter, which team_member to fetch.
     */
    where: team_memberWhereUniqueInput;
  };

  /**
   * team_member findFirst
   */
  export type team_memberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    /**
     * Filter, which team_member to fetch.
     */
    where?: team_memberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of team_members to fetch.
     */
    orderBy?: team_memberOrderByWithRelationInput | team_memberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for team_members.
     */
    cursor?: team_memberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` team_members from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` team_members.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of team_members.
     */
    distinct?: Team_memberScalarFieldEnum | Team_memberScalarFieldEnum[];
  };

  /**
   * team_member findFirstOrThrow
   */
  export type team_memberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    /**
     * Filter, which team_member to fetch.
     */
    where?: team_memberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of team_members to fetch.
     */
    orderBy?: team_memberOrderByWithRelationInput | team_memberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for team_members.
     */
    cursor?: team_memberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` team_members from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` team_members.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of team_members.
     */
    distinct?: Team_memberScalarFieldEnum | Team_memberScalarFieldEnum[];
  };

  /**
   * team_member findMany
   */
  export type team_memberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    /**
     * Filter, which team_members to fetch.
     */
    where?: team_memberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of team_members to fetch.
     */
    orderBy?: team_memberOrderByWithRelationInput | team_memberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing team_members.
     */
    cursor?: team_memberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` team_members from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` team_members.
     */
    skip?: number;
    distinct?: Team_memberScalarFieldEnum | Team_memberScalarFieldEnum[];
  };

  /**
   * team_member create
   */
  export type team_memberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    /**
     * The data needed to create a team_member.
     */
    data: XOR<team_memberCreateInput, team_memberUncheckedCreateInput>;
  };

  /**
   * team_member createMany
   */
  export type team_memberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many team_members.
     */
    data: team_memberCreateManyInput | team_memberCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * team_member update
   */
  export type team_memberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    /**
     * The data needed to update a team_member.
     */
    data: XOR<team_memberUpdateInput, team_memberUncheckedUpdateInput>;
    /**
     * Choose, which team_member to update.
     */
    where: team_memberWhereUniqueInput;
  };

  /**
   * team_member updateMany
   */
  export type team_memberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update team_members.
     */
    data: XOR<team_memberUpdateManyMutationInput, team_memberUncheckedUpdateManyInput>;
    /**
     * Filter which team_members to update
     */
    where?: team_memberWhereInput;
  };

  /**
   * team_member upsert
   */
  export type team_memberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    /**
     * The filter to search for the team_member to update in case it exists.
     */
    where: team_memberWhereUniqueInput;
    /**
     * In case the team_member found by the `where` argument doesn't exist, create a new team_member with this data.
     */
    create: XOR<team_memberCreateInput, team_memberUncheckedCreateInput>;
    /**
     * In case the team_member was found with the provided `where` argument, update it with this data.
     */
    update: XOR<team_memberUpdateInput, team_memberUncheckedUpdateInput>;
  };

  /**
   * team_member delete
   */
  export type team_memberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    /**
     * Filter which team_member to delete.
     */
    where: team_memberWhereUniqueInput;
  };

  /**
   * team_member deleteMany
   */
  export type team_memberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which team_members to delete
     */
    where?: team_memberWhereInput;
  };

  /**
   * team_member without action
   */
  export type team_memberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    firstName: number;
    lastName: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      job_application?: boolean | user$job_applicationArgs<ExtArgs>;
      performance_review_performance_review_reviewer_idTouser?:
        | boolean
        | user$performance_review_performance_review_reviewer_idTouserArgs<ExtArgs>;
      performance_review_performance_review_user_idTouser?:
        | boolean
        | user$performance_review_performance_review_user_idTouserArgs<ExtArgs>;
      team?: boolean | user$teamArgs<ExtArgs>;
      team_member?: boolean | user$team_memberArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job_application?: boolean | user$job_applicationArgs<ExtArgs>;
    performance_review_performance_review_reviewer_idTouser?:
      | boolean
      | user$performance_review_performance_review_reviewer_idTouserArgs<ExtArgs>;
    performance_review_performance_review_user_idTouser?:
      | boolean
      | user$performance_review_performance_review_user_idTouserArgs<ExtArgs>;
    team?: boolean | user$teamArgs<ExtArgs>;
    team_member?: boolean | user$team_memberArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      job_application: Prisma.$job_applicationPayload<ExtArgs>[];
      performance_review_performance_review_reviewer_idTouser: Prisma.$performance_reviewPayload<ExtArgs>[];
      performance_review_performance_review_user_idTouser: Prisma.$performance_reviewPayload<ExtArgs>[];
      team: Prisma.$teamPayload<ExtArgs>[];
      team_member: Prisma.$team_memberPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
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
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
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
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
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
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
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
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    job_application<T extends user$job_applicationArgs<ExtArgs> = {}>(
      args?: Subset<T, user$job_applicationArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$job_applicationPayload<ExtArgs>, T, 'findMany'> | Null>;

    performance_review_performance_review_reviewer_idTouser<
      T extends user$performance_review_performance_review_reviewer_idTouserArgs<ExtArgs> = {},
    >(
      args?: Subset<T, user$performance_review_performance_review_reviewer_idTouserArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$performance_reviewPayload<ExtArgs>, T, 'findMany'> | Null>;

    performance_review_performance_review_user_idTouser<
      T extends user$performance_review_performance_review_user_idTouserArgs<ExtArgs> = {},
    >(
      args?: Subset<T, user$performance_review_performance_review_user_idTouserArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$performance_reviewPayload<ExtArgs>, T, 'findMany'> | Null>;

    team<T extends user$teamArgs<ExtArgs> = {}>(
      args?: Subset<T, user$teamArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'findMany'> | Null>;

    team_member<T extends user$team_memberArgs<ExtArgs> = {}>(
      args?: Subset<T, user$team_memberArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly firstName: FieldRef<'user', 'String'>;
    readonly lastName: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.job_application
   */
  export type user$job_applicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_application
     */
    select?: job_applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_applicationInclude<ExtArgs> | null;
    where?: job_applicationWhereInput;
    orderBy?: job_applicationOrderByWithRelationInput | job_applicationOrderByWithRelationInput[];
    cursor?: job_applicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Job_applicationScalarFieldEnum | Job_applicationScalarFieldEnum[];
  };

  /**
   * user.performance_review_performance_review_reviewer_idTouser
   */
  export type user$performance_review_performance_review_reviewer_idTouserArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the performance_review
     */
    select?: performance_reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: performance_reviewInclude<ExtArgs> | null;
    where?: performance_reviewWhereInput;
    orderBy?: performance_reviewOrderByWithRelationInput | performance_reviewOrderByWithRelationInput[];
    cursor?: performance_reviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Performance_reviewScalarFieldEnum | Performance_reviewScalarFieldEnum[];
  };

  /**
   * user.performance_review_performance_review_user_idTouser
   */
  export type user$performance_review_performance_review_user_idTouserArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the performance_review
     */
    select?: performance_reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: performance_reviewInclude<ExtArgs> | null;
    where?: performance_reviewWhereInput;
    orderBy?: performance_reviewOrderByWithRelationInput | performance_reviewOrderByWithRelationInput[];
    cursor?: performance_reviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Performance_reviewScalarFieldEnum | Performance_reviewScalarFieldEnum[];
  };

  /**
   * user.team
   */
  export type user$teamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    where?: teamWhereInput;
    orderBy?: teamOrderByWithRelationInput | teamOrderByWithRelationInput[];
    cursor?: teamWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[];
  };

  /**
   * user.team_member
   */
  export type user$team_memberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    where?: team_memberWhereInput;
    orderBy?: team_memberOrderByWithRelationInput | team_memberOrderByWithRelationInput[];
    cursor?: team_memberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Team_memberScalarFieldEnum | Team_memberScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const JobScalarFieldEnum: {
    id: 'id';
    title: 'title';
    description: 'description';
    status: 'status';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type JobScalarFieldEnum = (typeof JobScalarFieldEnum)[keyof typeof JobScalarFieldEnum];

  export const Job_applicationScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    job_id: 'job_id';
    status: 'status';
    applied_at: 'applied_at';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Job_applicationScalarFieldEnum =
    (typeof Job_applicationScalarFieldEnum)[keyof typeof Job_applicationScalarFieldEnum];

  export const Performance_reviewScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    reviewer_id: 'reviewer_id';
    rating: 'rating';
    comments: 'comments';
    reviewed_at: 'reviewed_at';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Performance_reviewScalarFieldEnum =
    (typeof Performance_reviewScalarFieldEnum)[keyof typeof Performance_reviewScalarFieldEnum];

  export const TeamScalarFieldEnum: {
    id: 'id';
    description: 'description';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    user_id: 'user_id';
    tenant_id: 'tenant_id';
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum];

  export const Team_memberScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    team_id: 'team_id';
    joined_at: 'joined_at';
    role: 'role';
    status: 'status';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Team_memberScalarFieldEnum = (typeof Team_memberScalarFieldEnum)[keyof typeof Team_memberScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    firstName: 'firstName';
    lastName: 'lastName';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type jobWhereInput = {
    AND?: jobWhereInput | jobWhereInput[];
    OR?: jobWhereInput[];
    NOT?: jobWhereInput | jobWhereInput[];
    id?: UuidFilter<'job'> | string;
    title?: StringFilter<'job'> | string;
    description?: StringNullableFilter<'job'> | string | null;
    status?: StringFilter<'job'> | string;
    created_at?: DateTimeFilter<'job'> | Date | string;
    updated_at?: DateTimeFilter<'job'> | Date | string;
    job_application?: Job_applicationListRelationFilter;
  };

  export type jobOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrderInput | SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    job_application?: job_applicationOrderByRelationAggregateInput;
  };

  export type jobWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: jobWhereInput | jobWhereInput[];
      OR?: jobWhereInput[];
      NOT?: jobWhereInput | jobWhereInput[];
      title?: StringFilter<'job'> | string;
      description?: StringNullableFilter<'job'> | string | null;
      status?: StringFilter<'job'> | string;
      created_at?: DateTimeFilter<'job'> | Date | string;
      updated_at?: DateTimeFilter<'job'> | Date | string;
      job_application?: Job_applicationListRelationFilter;
    },
    'id'
  >;

  export type jobOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrderInput | SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: jobCountOrderByAggregateInput;
    _max?: jobMaxOrderByAggregateInput;
    _min?: jobMinOrderByAggregateInput;
  };

  export type jobScalarWhereWithAggregatesInput = {
    AND?: jobScalarWhereWithAggregatesInput | jobScalarWhereWithAggregatesInput[];
    OR?: jobScalarWhereWithAggregatesInput[];
    NOT?: jobScalarWhereWithAggregatesInput | jobScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'job'> | string;
    title?: StringWithAggregatesFilter<'job'> | string;
    description?: StringNullableWithAggregatesFilter<'job'> | string | null;
    status?: StringWithAggregatesFilter<'job'> | string;
    created_at?: DateTimeWithAggregatesFilter<'job'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'job'> | Date | string;
  };

  export type job_applicationWhereInput = {
    AND?: job_applicationWhereInput | job_applicationWhereInput[];
    OR?: job_applicationWhereInput[];
    NOT?: job_applicationWhereInput | job_applicationWhereInput[];
    id?: UuidFilter<'job_application'> | string;
    user_id?: UuidFilter<'job_application'> | string;
    job_id?: UuidFilter<'job_application'> | string;
    status?: StringFilter<'job_application'> | string;
    applied_at?: DateTimeFilter<'job_application'> | Date | string;
    created_at?: DateTimeFilter<'job_application'> | Date | string;
    updated_at?: DateTimeFilter<'job_application'> | Date | string;
    job?: XOR<JobRelationFilter, jobWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type job_applicationOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    job_id?: SortOrder;
    status?: SortOrder;
    applied_at?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    job?: jobOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type job_applicationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: job_applicationWhereInput | job_applicationWhereInput[];
      OR?: job_applicationWhereInput[];
      NOT?: job_applicationWhereInput | job_applicationWhereInput[];
      user_id?: UuidFilter<'job_application'> | string;
      job_id?: UuidFilter<'job_application'> | string;
      status?: StringFilter<'job_application'> | string;
      applied_at?: DateTimeFilter<'job_application'> | Date | string;
      created_at?: DateTimeFilter<'job_application'> | Date | string;
      updated_at?: DateTimeFilter<'job_application'> | Date | string;
      job?: XOR<JobRelationFilter, jobWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type job_applicationOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    job_id?: SortOrder;
    status?: SortOrder;
    applied_at?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: job_applicationCountOrderByAggregateInput;
    _max?: job_applicationMaxOrderByAggregateInput;
    _min?: job_applicationMinOrderByAggregateInput;
  };

  export type job_applicationScalarWhereWithAggregatesInput = {
    AND?: job_applicationScalarWhereWithAggregatesInput | job_applicationScalarWhereWithAggregatesInput[];
    OR?: job_applicationScalarWhereWithAggregatesInput[];
    NOT?: job_applicationScalarWhereWithAggregatesInput | job_applicationScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'job_application'> | string;
    user_id?: UuidWithAggregatesFilter<'job_application'> | string;
    job_id?: UuidWithAggregatesFilter<'job_application'> | string;
    status?: StringWithAggregatesFilter<'job_application'> | string;
    applied_at?: DateTimeWithAggregatesFilter<'job_application'> | Date | string;
    created_at?: DateTimeWithAggregatesFilter<'job_application'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'job_application'> | Date | string;
  };

  export type performance_reviewWhereInput = {
    AND?: performance_reviewWhereInput | performance_reviewWhereInput[];
    OR?: performance_reviewWhereInput[];
    NOT?: performance_reviewWhereInput | performance_reviewWhereInput[];
    id?: UuidFilter<'performance_review'> | string;
    user_id?: UuidFilter<'performance_review'> | string;
    reviewer_id?: UuidFilter<'performance_review'> | string;
    rating?: IntFilter<'performance_review'> | number;
    comments?: StringNullableFilter<'performance_review'> | string | null;
    reviewed_at?: DateTimeFilter<'performance_review'> | Date | string;
    created_at?: DateTimeFilter<'performance_review'> | Date | string;
    updated_at?: DateTimeFilter<'performance_review'> | Date | string;
    user_performance_review_reviewer_idTouser?: XOR<UserRelationFilter, userWhereInput>;
    user_performance_review_user_idTouser?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type performance_reviewOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    reviewer_id?: SortOrder;
    rating?: SortOrder;
    comments?: SortOrderInput | SortOrder;
    reviewed_at?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_performance_review_reviewer_idTouser?: userOrderByWithRelationInput;
    user_performance_review_user_idTouser?: userOrderByWithRelationInput;
  };

  export type performance_reviewWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: performance_reviewWhereInput | performance_reviewWhereInput[];
      OR?: performance_reviewWhereInput[];
      NOT?: performance_reviewWhereInput | performance_reviewWhereInput[];
      user_id?: UuidFilter<'performance_review'> | string;
      reviewer_id?: UuidFilter<'performance_review'> | string;
      rating?: IntFilter<'performance_review'> | number;
      comments?: StringNullableFilter<'performance_review'> | string | null;
      reviewed_at?: DateTimeFilter<'performance_review'> | Date | string;
      created_at?: DateTimeFilter<'performance_review'> | Date | string;
      updated_at?: DateTimeFilter<'performance_review'> | Date | string;
      user_performance_review_reviewer_idTouser?: XOR<UserRelationFilter, userWhereInput>;
      user_performance_review_user_idTouser?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type performance_reviewOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    reviewer_id?: SortOrder;
    rating?: SortOrder;
    comments?: SortOrderInput | SortOrder;
    reviewed_at?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: performance_reviewCountOrderByAggregateInput;
    _avg?: performance_reviewAvgOrderByAggregateInput;
    _max?: performance_reviewMaxOrderByAggregateInput;
    _min?: performance_reviewMinOrderByAggregateInput;
    _sum?: performance_reviewSumOrderByAggregateInput;
  };

  export type performance_reviewScalarWhereWithAggregatesInput = {
    AND?: performance_reviewScalarWhereWithAggregatesInput | performance_reviewScalarWhereWithAggregatesInput[];
    OR?: performance_reviewScalarWhereWithAggregatesInput[];
    NOT?: performance_reviewScalarWhereWithAggregatesInput | performance_reviewScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'performance_review'> | string;
    user_id?: UuidWithAggregatesFilter<'performance_review'> | string;
    reviewer_id?: UuidWithAggregatesFilter<'performance_review'> | string;
    rating?: IntWithAggregatesFilter<'performance_review'> | number;
    comments?: StringNullableWithAggregatesFilter<'performance_review'> | string | null;
    reviewed_at?: DateTimeWithAggregatesFilter<'performance_review'> | Date | string;
    created_at?: DateTimeWithAggregatesFilter<'performance_review'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'performance_review'> | Date | string;
  };

  export type teamWhereInput = {
    AND?: teamWhereInput | teamWhereInput[];
    OR?: teamWhereInput[];
    NOT?: teamWhereInput | teamWhereInput[];
    id?: UuidFilter<'team'> | string;
    description?: StringNullableFilter<'team'> | string | null;
    name?: StringFilter<'team'> | string;
    created_at?: DateTimeFilter<'team'> | Date | string;
    updated_at?: DateTimeFilter<'team'> | Date | string;
    user_id?: UuidFilter<'team'> | string;
    tenant_id?: StringFilter<'team'> | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
    team_member?: Team_memberListRelationFilter;
  };

  export type teamOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    user?: userOrderByWithRelationInput;
    team_member?: team_memberOrderByRelationAggregateInput;
  };

  export type teamWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: teamWhereInput | teamWhereInput[];
      OR?: teamWhereInput[];
      NOT?: teamWhereInput | teamWhereInput[];
      description?: StringNullableFilter<'team'> | string | null;
      name?: StringFilter<'team'> | string;
      created_at?: DateTimeFilter<'team'> | Date | string;
      updated_at?: DateTimeFilter<'team'> | Date | string;
      user_id?: UuidFilter<'team'> | string;
      tenant_id?: StringFilter<'team'> | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
      team_member?: Team_memberListRelationFilter;
    },
    'id'
  >;

  export type teamOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    _count?: teamCountOrderByAggregateInput;
    _max?: teamMaxOrderByAggregateInput;
    _min?: teamMinOrderByAggregateInput;
  };

  export type teamScalarWhereWithAggregatesInput = {
    AND?: teamScalarWhereWithAggregatesInput | teamScalarWhereWithAggregatesInput[];
    OR?: teamScalarWhereWithAggregatesInput[];
    NOT?: teamScalarWhereWithAggregatesInput | teamScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'team'> | string;
    description?: StringNullableWithAggregatesFilter<'team'> | string | null;
    name?: StringWithAggregatesFilter<'team'> | string;
    created_at?: DateTimeWithAggregatesFilter<'team'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'team'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'team'> | string;
    tenant_id?: StringWithAggregatesFilter<'team'> | string;
  };

  export type team_memberWhereInput = {
    AND?: team_memberWhereInput | team_memberWhereInput[];
    OR?: team_memberWhereInput[];
    NOT?: team_memberWhereInput | team_memberWhereInput[];
    id?: UuidFilter<'team_member'> | string;
    user_id?: UuidFilter<'team_member'> | string;
    team_id?: UuidFilter<'team_member'> | string;
    joined_at?: DateTimeFilter<'team_member'> | Date | string;
    role?: StringFilter<'team_member'> | string;
    status?: StringFilter<'team_member'> | string;
    created_at?: DateTimeFilter<'team_member'> | Date | string;
    updated_at?: DateTimeFilter<'team_member'> | Date | string;
    team?: XOR<TeamRelationFilter, teamWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type team_memberOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    team_id?: SortOrder;
    joined_at?: SortOrder;
    role?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    team?: teamOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type team_memberWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: team_memberWhereInput | team_memberWhereInput[];
      OR?: team_memberWhereInput[];
      NOT?: team_memberWhereInput | team_memberWhereInput[];
      user_id?: UuidFilter<'team_member'> | string;
      team_id?: UuidFilter<'team_member'> | string;
      joined_at?: DateTimeFilter<'team_member'> | Date | string;
      role?: StringFilter<'team_member'> | string;
      status?: StringFilter<'team_member'> | string;
      created_at?: DateTimeFilter<'team_member'> | Date | string;
      updated_at?: DateTimeFilter<'team_member'> | Date | string;
      team?: XOR<TeamRelationFilter, teamWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type team_memberOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    team_id?: SortOrder;
    joined_at?: SortOrder;
    role?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: team_memberCountOrderByAggregateInput;
    _max?: team_memberMaxOrderByAggregateInput;
    _min?: team_memberMinOrderByAggregateInput;
  };

  export type team_memberScalarWhereWithAggregatesInput = {
    AND?: team_memberScalarWhereWithAggregatesInput | team_memberScalarWhereWithAggregatesInput[];
    OR?: team_memberScalarWhereWithAggregatesInput[];
    NOT?: team_memberScalarWhereWithAggregatesInput | team_memberScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'team_member'> | string;
    user_id?: UuidWithAggregatesFilter<'team_member'> | string;
    team_id?: UuidWithAggregatesFilter<'team_member'> | string;
    joined_at?: DateTimeWithAggregatesFilter<'team_member'> | Date | string;
    role?: StringWithAggregatesFilter<'team_member'> | string;
    status?: StringWithAggregatesFilter<'team_member'> | string;
    created_at?: DateTimeWithAggregatesFilter<'team_member'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'team_member'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    firstName?: StringNullableFilter<'user'> | string | null;
    lastName?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    job_application?: Job_applicationListRelationFilter;
    performance_review_performance_review_reviewer_idTouser?: Performance_reviewListRelationFilter;
    performance_review_performance_review_user_idTouser?: Performance_reviewListRelationFilter;
    team?: TeamListRelationFilter;
    team_member?: Team_memberListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    job_application?: job_applicationOrderByRelationAggregateInput;
    performance_review_performance_review_reviewer_idTouser?: performance_reviewOrderByRelationAggregateInput;
    performance_review_performance_review_user_idTouser?: performance_reviewOrderByRelationAggregateInput;
    team?: teamOrderByRelationAggregateInput;
    team_member?: team_memberOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      firstName?: StringNullableFilter<'user'> | string | null;
      lastName?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      job_application?: Job_applicationListRelationFilter;
      performance_review_performance_review_reviewer_idTouser?: Performance_reviewListRelationFilter;
      performance_review_performance_review_user_idTouser?: Performance_reviewListRelationFilter;
      team?: TeamListRelationFilter;
      team_member?: Team_memberListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    firstName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    lastName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type jobCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    job_application?: job_applicationCreateNestedManyWithoutJobInput;
  };

  export type jobUncheckedCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    job_application?: job_applicationUncheckedCreateNestedManyWithoutJobInput;
  };

  export type jobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_application?: job_applicationUpdateManyWithoutJobNestedInput;
  };

  export type jobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_application?: job_applicationUncheckedUpdateManyWithoutJobNestedInput;
  };

  export type jobCreateManyInput = {
    id?: string;
    title: string;
    description?: string | null;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type jobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type jobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type job_applicationCreateInput = {
    id?: string;
    status: string;
    applied_at?: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    job: jobCreateNestedOneWithoutJob_applicationInput;
    user: userCreateNestedOneWithoutJob_applicationInput;
  };

  export type job_applicationUncheckedCreateInput = {
    id?: string;
    user_id: string;
    job_id: string;
    status: string;
    applied_at?: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type job_applicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    applied_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    job?: jobUpdateOneRequiredWithoutJob_applicationNestedInput;
    user?: userUpdateOneRequiredWithoutJob_applicationNestedInput;
  };

  export type job_applicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    job_id?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    applied_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type job_applicationCreateManyInput = {
    id?: string;
    user_id: string;
    job_id: string;
    status: string;
    applied_at?: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type job_applicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    applied_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type job_applicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    job_id?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    applied_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type performance_reviewCreateInput = {
    id?: string;
    rating: number;
    comments?: string | null;
    reviewed_at?: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_performance_review_reviewer_idTouser: userCreateNestedOneWithoutPerformance_review_performance_review_reviewer_idTouserInput;
    user_performance_review_user_idTouser: userCreateNestedOneWithoutPerformance_review_performance_review_user_idTouserInput;
  };

  export type performance_reviewUncheckedCreateInput = {
    id?: string;
    user_id: string;
    reviewer_id: string;
    rating: number;
    comments?: string | null;
    reviewed_at?: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type performance_reviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comments?: NullableStringFieldUpdateOperationsInput | string | null;
    reviewed_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_performance_review_reviewer_idTouser?: userUpdateOneRequiredWithoutPerformance_review_performance_review_reviewer_idTouserNestedInput;
    user_performance_review_user_idTouser?: userUpdateOneRequiredWithoutPerformance_review_performance_review_user_idTouserNestedInput;
  };

  export type performance_reviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    reviewer_id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comments?: NullableStringFieldUpdateOperationsInput | string | null;
    reviewed_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type performance_reviewCreateManyInput = {
    id?: string;
    user_id: string;
    reviewer_id: string;
    rating: number;
    comments?: string | null;
    reviewed_at?: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type performance_reviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comments?: NullableStringFieldUpdateOperationsInput | string | null;
    reviewed_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type performance_reviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    reviewer_id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comments?: NullableStringFieldUpdateOperationsInput | string | null;
    reviewed_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type teamCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutTeamInput;
    team_member?: team_memberCreateNestedManyWithoutTeamInput;
  };

  export type teamUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    team_member?: team_memberUncheckedCreateNestedManyWithoutTeamInput;
  };

  export type teamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutTeamNestedInput;
    team_member?: team_memberUpdateManyWithoutTeamNestedInput;
  };

  export type teamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    team_member?: team_memberUncheckedUpdateManyWithoutTeamNestedInput;
  };

  export type teamCreateManyInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type teamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type teamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type team_memberCreateInput = {
    id?: string;
    joined_at?: Date | string;
    role: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    team: teamCreateNestedOneWithoutTeam_memberInput;
    user: userCreateNestedOneWithoutTeam_memberInput;
  };

  export type team_memberUncheckedCreateInput = {
    id?: string;
    user_id: string;
    team_id: string;
    joined_at?: Date | string;
    role: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type team_memberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    role?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    team?: teamUpdateOneRequiredWithoutTeam_memberNestedInput;
    user?: userUpdateOneRequiredWithoutTeam_memberNestedInput;
  };

  export type team_memberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    team_id?: StringFieldUpdateOperationsInput | string;
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    role?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type team_memberCreateManyInput = {
    id?: string;
    user_id: string;
    team_id: string;
    joined_at?: Date | string;
    role: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type team_memberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    role?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type team_memberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    team_id?: StringFieldUpdateOperationsInput | string;
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    role?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    job_application?: job_applicationCreateNestedManyWithoutUserInput;
    performance_review_performance_review_reviewer_idTouser?: performance_reviewCreateNestedManyWithoutUser_performance_review_reviewer_idTouserInput;
    performance_review_performance_review_user_idTouser?: performance_reviewCreateNestedManyWithoutUser_performance_review_user_idTouserInput;
    team?: teamCreateNestedManyWithoutUserInput;
    team_member?: team_memberCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    job_application?: job_applicationUncheckedCreateNestedManyWithoutUserInput;
    performance_review_performance_review_reviewer_idTouser?: performance_reviewUncheckedCreateNestedManyWithoutUser_performance_review_reviewer_idTouserInput;
    performance_review_performance_review_user_idTouser?: performance_reviewUncheckedCreateNestedManyWithoutUser_performance_review_user_idTouserInput;
    team?: teamUncheckedCreateNestedManyWithoutUserInput;
    team_member?: team_memberUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_application?: job_applicationUpdateManyWithoutUserNestedInput;
    performance_review_performance_review_reviewer_idTouser?: performance_reviewUpdateManyWithoutUser_performance_review_reviewer_idTouserNestedInput;
    performance_review_performance_review_user_idTouser?: performance_reviewUpdateManyWithoutUser_performance_review_user_idTouserNestedInput;
    team?: teamUpdateManyWithoutUserNestedInput;
    team_member?: team_memberUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_application?: job_applicationUncheckedUpdateManyWithoutUserNestedInput;
    performance_review_performance_review_reviewer_idTouser?: performance_reviewUncheckedUpdateManyWithoutUser_performance_review_reviewer_idTouserNestedInput;
    performance_review_performance_review_user_idTouser?: performance_reviewUncheckedUpdateManyWithoutUser_performance_review_user_idTouserNestedInput;
    team?: teamUncheckedUpdateManyWithoutUserNestedInput;
    team_member?: team_memberUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type Job_applicationListRelationFilter = {
    every?: job_applicationWhereInput;
    some?: job_applicationWhereInput;
    none?: job_applicationWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type job_applicationOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type jobCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type jobMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type jobMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type JobRelationFilter = {
    is?: jobWhereInput;
    isNot?: jobWhereInput;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type job_applicationCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    job_id?: SortOrder;
    status?: SortOrder;
    applied_at?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type job_applicationMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    job_id?: SortOrder;
    status?: SortOrder;
    applied_at?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type job_applicationMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    job_id?: SortOrder;
    status?: SortOrder;
    applied_at?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type performance_reviewCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    reviewer_id?: SortOrder;
    rating?: SortOrder;
    comments?: SortOrder;
    reviewed_at?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type performance_reviewAvgOrderByAggregateInput = {
    rating?: SortOrder;
  };

  export type performance_reviewMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    reviewer_id?: SortOrder;
    rating?: SortOrder;
    comments?: SortOrder;
    reviewed_at?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type performance_reviewMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    reviewer_id?: SortOrder;
    rating?: SortOrder;
    comments?: SortOrder;
    reviewed_at?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type performance_reviewSumOrderByAggregateInput = {
    rating?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type Team_memberListRelationFilter = {
    every?: team_memberWhereInput;
    some?: team_memberWhereInput;
    none?: team_memberWhereInput;
  };

  export type team_memberOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type teamCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type teamMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type teamMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type TeamRelationFilter = {
    is?: teamWhereInput;
    isNot?: teamWhereInput;
  };

  export type team_memberCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    team_id?: SortOrder;
    joined_at?: SortOrder;
    role?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type team_memberMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    team_id?: SortOrder;
    joined_at?: SortOrder;
    role?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type team_memberMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    team_id?: SortOrder;
    joined_at?: SortOrder;
    role?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type Performance_reviewListRelationFilter = {
    every?: performance_reviewWhereInput;
    some?: performance_reviewWhereInput;
    none?: performance_reviewWhereInput;
  };

  export type TeamListRelationFilter = {
    every?: teamWhereInput;
    some?: teamWhereInput;
    none?: teamWhereInput;
  };

  export type performance_reviewOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type teamOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type job_applicationCreateNestedManyWithoutJobInput = {
    create?:
      | XOR<job_applicationCreateWithoutJobInput, job_applicationUncheckedCreateWithoutJobInput>
      | job_applicationCreateWithoutJobInput[]
      | job_applicationUncheckedCreateWithoutJobInput[];
    connectOrCreate?: job_applicationCreateOrConnectWithoutJobInput | job_applicationCreateOrConnectWithoutJobInput[];
    createMany?: job_applicationCreateManyJobInputEnvelope;
    connect?: job_applicationWhereUniqueInput | job_applicationWhereUniqueInput[];
  };

  export type job_applicationUncheckedCreateNestedManyWithoutJobInput = {
    create?:
      | XOR<job_applicationCreateWithoutJobInput, job_applicationUncheckedCreateWithoutJobInput>
      | job_applicationCreateWithoutJobInput[]
      | job_applicationUncheckedCreateWithoutJobInput[];
    connectOrCreate?: job_applicationCreateOrConnectWithoutJobInput | job_applicationCreateOrConnectWithoutJobInput[];
    createMany?: job_applicationCreateManyJobInputEnvelope;
    connect?: job_applicationWhereUniqueInput | job_applicationWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type job_applicationUpdateManyWithoutJobNestedInput = {
    create?:
      | XOR<job_applicationCreateWithoutJobInput, job_applicationUncheckedCreateWithoutJobInput>
      | job_applicationCreateWithoutJobInput[]
      | job_applicationUncheckedCreateWithoutJobInput[];
    connectOrCreate?: job_applicationCreateOrConnectWithoutJobInput | job_applicationCreateOrConnectWithoutJobInput[];
    upsert?:
      | job_applicationUpsertWithWhereUniqueWithoutJobInput
      | job_applicationUpsertWithWhereUniqueWithoutJobInput[];
    createMany?: job_applicationCreateManyJobInputEnvelope;
    set?: job_applicationWhereUniqueInput | job_applicationWhereUniqueInput[];
    disconnect?: job_applicationWhereUniqueInput | job_applicationWhereUniqueInput[];
    delete?: job_applicationWhereUniqueInput | job_applicationWhereUniqueInput[];
    connect?: job_applicationWhereUniqueInput | job_applicationWhereUniqueInput[];
    update?:
      | job_applicationUpdateWithWhereUniqueWithoutJobInput
      | job_applicationUpdateWithWhereUniqueWithoutJobInput[];
    updateMany?:
      | job_applicationUpdateManyWithWhereWithoutJobInput
      | job_applicationUpdateManyWithWhereWithoutJobInput[];
    deleteMany?: job_applicationScalarWhereInput | job_applicationScalarWhereInput[];
  };

  export type job_applicationUncheckedUpdateManyWithoutJobNestedInput = {
    create?:
      | XOR<job_applicationCreateWithoutJobInput, job_applicationUncheckedCreateWithoutJobInput>
      | job_applicationCreateWithoutJobInput[]
      | job_applicationUncheckedCreateWithoutJobInput[];
    connectOrCreate?: job_applicationCreateOrConnectWithoutJobInput | job_applicationCreateOrConnectWithoutJobInput[];
    upsert?:
      | job_applicationUpsertWithWhereUniqueWithoutJobInput
      | job_applicationUpsertWithWhereUniqueWithoutJobInput[];
    createMany?: job_applicationCreateManyJobInputEnvelope;
    set?: job_applicationWhereUniqueInput | job_applicationWhereUniqueInput[];
    disconnect?: job_applicationWhereUniqueInput | job_applicationWhereUniqueInput[];
    delete?: job_applicationWhereUniqueInput | job_applicationWhereUniqueInput[];
    connect?: job_applicationWhereUniqueInput | job_applicationWhereUniqueInput[];
    update?:
      | job_applicationUpdateWithWhereUniqueWithoutJobInput
      | job_applicationUpdateWithWhereUniqueWithoutJobInput[];
    updateMany?:
      | job_applicationUpdateManyWithWhereWithoutJobInput
      | job_applicationUpdateManyWithWhereWithoutJobInput[];
    deleteMany?: job_applicationScalarWhereInput | job_applicationScalarWhereInput[];
  };

  export type jobCreateNestedOneWithoutJob_applicationInput = {
    create?: XOR<jobCreateWithoutJob_applicationInput, jobUncheckedCreateWithoutJob_applicationInput>;
    connectOrCreate?: jobCreateOrConnectWithoutJob_applicationInput;
    connect?: jobWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutJob_applicationInput = {
    create?: XOR<userCreateWithoutJob_applicationInput, userUncheckedCreateWithoutJob_applicationInput>;
    connectOrCreate?: userCreateOrConnectWithoutJob_applicationInput;
    connect?: userWhereUniqueInput;
  };

  export type jobUpdateOneRequiredWithoutJob_applicationNestedInput = {
    create?: XOR<jobCreateWithoutJob_applicationInput, jobUncheckedCreateWithoutJob_applicationInput>;
    connectOrCreate?: jobCreateOrConnectWithoutJob_applicationInput;
    upsert?: jobUpsertWithoutJob_applicationInput;
    connect?: jobWhereUniqueInput;
    update?: XOR<
      XOR<jobUpdateToOneWithWhereWithoutJob_applicationInput, jobUpdateWithoutJob_applicationInput>,
      jobUncheckedUpdateWithoutJob_applicationInput
    >;
  };

  export type userUpdateOneRequiredWithoutJob_applicationNestedInput = {
    create?: XOR<userCreateWithoutJob_applicationInput, userUncheckedCreateWithoutJob_applicationInput>;
    connectOrCreate?: userCreateOrConnectWithoutJob_applicationInput;
    upsert?: userUpsertWithoutJob_applicationInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutJob_applicationInput, userUpdateWithoutJob_applicationInput>,
      userUncheckedUpdateWithoutJob_applicationInput
    >;
  };

  export type userCreateNestedOneWithoutPerformance_review_performance_review_reviewer_idTouserInput = {
    create?: XOR<
      userCreateWithoutPerformance_review_performance_review_reviewer_idTouserInput,
      userUncheckedCreateWithoutPerformance_review_performance_review_reviewer_idTouserInput
    >;
    connectOrCreate?: userCreateOrConnectWithoutPerformance_review_performance_review_reviewer_idTouserInput;
    connect?: userWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutPerformance_review_performance_review_user_idTouserInput = {
    create?: XOR<
      userCreateWithoutPerformance_review_performance_review_user_idTouserInput,
      userUncheckedCreateWithoutPerformance_review_performance_review_user_idTouserInput
    >;
    connectOrCreate?: userCreateOrConnectWithoutPerformance_review_performance_review_user_idTouserInput;
    connect?: userWhereUniqueInput;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type userUpdateOneRequiredWithoutPerformance_review_performance_review_reviewer_idTouserNestedInput = {
    create?: XOR<
      userCreateWithoutPerformance_review_performance_review_reviewer_idTouserInput,
      userUncheckedCreateWithoutPerformance_review_performance_review_reviewer_idTouserInput
    >;
    connectOrCreate?: userCreateOrConnectWithoutPerformance_review_performance_review_reviewer_idTouserInput;
    upsert?: userUpsertWithoutPerformance_review_performance_review_reviewer_idTouserInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<
        userUpdateToOneWithWhereWithoutPerformance_review_performance_review_reviewer_idTouserInput,
        userUpdateWithoutPerformance_review_performance_review_reviewer_idTouserInput
      >,
      userUncheckedUpdateWithoutPerformance_review_performance_review_reviewer_idTouserInput
    >;
  };

  export type userUpdateOneRequiredWithoutPerformance_review_performance_review_user_idTouserNestedInput = {
    create?: XOR<
      userCreateWithoutPerformance_review_performance_review_user_idTouserInput,
      userUncheckedCreateWithoutPerformance_review_performance_review_user_idTouserInput
    >;
    connectOrCreate?: userCreateOrConnectWithoutPerformance_review_performance_review_user_idTouserInput;
    upsert?: userUpsertWithoutPerformance_review_performance_review_user_idTouserInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<
        userUpdateToOneWithWhereWithoutPerformance_review_performance_review_user_idTouserInput,
        userUpdateWithoutPerformance_review_performance_review_user_idTouserInput
      >,
      userUncheckedUpdateWithoutPerformance_review_performance_review_user_idTouserInput
    >;
  };

  export type userCreateNestedOneWithoutTeamInput = {
    create?: XOR<userCreateWithoutTeamInput, userUncheckedCreateWithoutTeamInput>;
    connectOrCreate?: userCreateOrConnectWithoutTeamInput;
    connect?: userWhereUniqueInput;
  };

  export type team_memberCreateNestedManyWithoutTeamInput = {
    create?:
      | XOR<team_memberCreateWithoutTeamInput, team_memberUncheckedCreateWithoutTeamInput>
      | team_memberCreateWithoutTeamInput[]
      | team_memberUncheckedCreateWithoutTeamInput[];
    connectOrCreate?: team_memberCreateOrConnectWithoutTeamInput | team_memberCreateOrConnectWithoutTeamInput[];
    createMany?: team_memberCreateManyTeamInputEnvelope;
    connect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
  };

  export type team_memberUncheckedCreateNestedManyWithoutTeamInput = {
    create?:
      | XOR<team_memberCreateWithoutTeamInput, team_memberUncheckedCreateWithoutTeamInput>
      | team_memberCreateWithoutTeamInput[]
      | team_memberUncheckedCreateWithoutTeamInput[];
    connectOrCreate?: team_memberCreateOrConnectWithoutTeamInput | team_memberCreateOrConnectWithoutTeamInput[];
    createMany?: team_memberCreateManyTeamInputEnvelope;
    connect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
  };

  export type userUpdateOneRequiredWithoutTeamNestedInput = {
    create?: XOR<userCreateWithoutTeamInput, userUncheckedCreateWithoutTeamInput>;
    connectOrCreate?: userCreateOrConnectWithoutTeamInput;
    upsert?: userUpsertWithoutTeamInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutTeamInput, userUpdateWithoutTeamInput>,
      userUncheckedUpdateWithoutTeamInput
    >;
  };

  export type team_memberUpdateManyWithoutTeamNestedInput = {
    create?:
      | XOR<team_memberCreateWithoutTeamInput, team_memberUncheckedCreateWithoutTeamInput>
      | team_memberCreateWithoutTeamInput[]
      | team_memberUncheckedCreateWithoutTeamInput[];
    connectOrCreate?: team_memberCreateOrConnectWithoutTeamInput | team_memberCreateOrConnectWithoutTeamInput[];
    upsert?: team_memberUpsertWithWhereUniqueWithoutTeamInput | team_memberUpsertWithWhereUniqueWithoutTeamInput[];
    createMany?: team_memberCreateManyTeamInputEnvelope;
    set?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    disconnect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    delete?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    connect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    update?: team_memberUpdateWithWhereUniqueWithoutTeamInput | team_memberUpdateWithWhereUniqueWithoutTeamInput[];
    updateMany?: team_memberUpdateManyWithWhereWithoutTeamInput | team_memberUpdateManyWithWhereWithoutTeamInput[];
    deleteMany?: team_memberScalarWhereInput | team_memberScalarWhereInput[];
  };

  export type team_memberUncheckedUpdateManyWithoutTeamNestedInput = {
    create?:
      | XOR<team_memberCreateWithoutTeamInput, team_memberUncheckedCreateWithoutTeamInput>
      | team_memberCreateWithoutTeamInput[]
      | team_memberUncheckedCreateWithoutTeamInput[];
    connectOrCreate?: team_memberCreateOrConnectWithoutTeamInput | team_memberCreateOrConnectWithoutTeamInput[];
    upsert?: team_memberUpsertWithWhereUniqueWithoutTeamInput | team_memberUpsertWithWhereUniqueWithoutTeamInput[];
    createMany?: team_memberCreateManyTeamInputEnvelope;
    set?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    disconnect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    delete?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    connect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    update?: team_memberUpdateWithWhereUniqueWithoutTeamInput | team_memberUpdateWithWhereUniqueWithoutTeamInput[];
    updateMany?: team_memberUpdateManyWithWhereWithoutTeamInput | team_memberUpdateManyWithWhereWithoutTeamInput[];
    deleteMany?: team_memberScalarWhereInput | team_memberScalarWhereInput[];
  };

  export type teamCreateNestedOneWithoutTeam_memberInput = {
    create?: XOR<teamCreateWithoutTeam_memberInput, teamUncheckedCreateWithoutTeam_memberInput>;
    connectOrCreate?: teamCreateOrConnectWithoutTeam_memberInput;
    connect?: teamWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutTeam_memberInput = {
    create?: XOR<userCreateWithoutTeam_memberInput, userUncheckedCreateWithoutTeam_memberInput>;
    connectOrCreate?: userCreateOrConnectWithoutTeam_memberInput;
    connect?: userWhereUniqueInput;
  };

  export type teamUpdateOneRequiredWithoutTeam_memberNestedInput = {
    create?: XOR<teamCreateWithoutTeam_memberInput, teamUncheckedCreateWithoutTeam_memberInput>;
    connectOrCreate?: teamCreateOrConnectWithoutTeam_memberInput;
    upsert?: teamUpsertWithoutTeam_memberInput;
    connect?: teamWhereUniqueInput;
    update?: XOR<
      XOR<teamUpdateToOneWithWhereWithoutTeam_memberInput, teamUpdateWithoutTeam_memberInput>,
      teamUncheckedUpdateWithoutTeam_memberInput
    >;
  };

  export type userUpdateOneRequiredWithoutTeam_memberNestedInput = {
    create?: XOR<userCreateWithoutTeam_memberInput, userUncheckedCreateWithoutTeam_memberInput>;
    connectOrCreate?: userCreateOrConnectWithoutTeam_memberInput;
    upsert?: userUpsertWithoutTeam_memberInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutTeam_memberInput, userUpdateWithoutTeam_memberInput>,
      userUncheckedUpdateWithoutTeam_memberInput
    >;
  };

  export type job_applicationCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<job_applicationCreateWithoutUserInput, job_applicationUncheckedCreateWithoutUserInput>
      | job_applicationCreateWithoutUserInput[]
      | job_applicationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: job_applicationCreateOrConnectWithoutUserInput | job_applicationCreateOrConnectWithoutUserInput[];
    createMany?: job_applicationCreateManyUserInputEnvelope;
    connect?: job_applicationWhereUniqueInput | job_applicationWhereUniqueInput[];
  };

  export type performance_reviewCreateNestedManyWithoutUser_performance_review_reviewer_idTouserInput = {
    create?:
      | XOR<
          performance_reviewCreateWithoutUser_performance_review_reviewer_idTouserInput,
          performance_reviewUncheckedCreateWithoutUser_performance_review_reviewer_idTouserInput
        >
      | performance_reviewCreateWithoutUser_performance_review_reviewer_idTouserInput[]
      | performance_reviewUncheckedCreateWithoutUser_performance_review_reviewer_idTouserInput[];
    connectOrCreate?:
      | performance_reviewCreateOrConnectWithoutUser_performance_review_reviewer_idTouserInput
      | performance_reviewCreateOrConnectWithoutUser_performance_review_reviewer_idTouserInput[];
    createMany?: performance_reviewCreateManyUser_performance_review_reviewer_idTouserInputEnvelope;
    connect?: performance_reviewWhereUniqueInput | performance_reviewWhereUniqueInput[];
  };

  export type performance_reviewCreateNestedManyWithoutUser_performance_review_user_idTouserInput = {
    create?:
      | XOR<
          performance_reviewCreateWithoutUser_performance_review_user_idTouserInput,
          performance_reviewUncheckedCreateWithoutUser_performance_review_user_idTouserInput
        >
      | performance_reviewCreateWithoutUser_performance_review_user_idTouserInput[]
      | performance_reviewUncheckedCreateWithoutUser_performance_review_user_idTouserInput[];
    connectOrCreate?:
      | performance_reviewCreateOrConnectWithoutUser_performance_review_user_idTouserInput
      | performance_reviewCreateOrConnectWithoutUser_performance_review_user_idTouserInput[];
    createMany?: performance_reviewCreateManyUser_performance_review_user_idTouserInputEnvelope;
    connect?: performance_reviewWhereUniqueInput | performance_reviewWhereUniqueInput[];
  };

  export type teamCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<teamCreateWithoutUserInput, teamUncheckedCreateWithoutUserInput>
      | teamCreateWithoutUserInput[]
      | teamUncheckedCreateWithoutUserInput[];
    connectOrCreate?: teamCreateOrConnectWithoutUserInput | teamCreateOrConnectWithoutUserInput[];
    createMany?: teamCreateManyUserInputEnvelope;
    connect?: teamWhereUniqueInput | teamWhereUniqueInput[];
  };

  export type team_memberCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<team_memberCreateWithoutUserInput, team_memberUncheckedCreateWithoutUserInput>
      | team_memberCreateWithoutUserInput[]
      | team_memberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: team_memberCreateOrConnectWithoutUserInput | team_memberCreateOrConnectWithoutUserInput[];
    createMany?: team_memberCreateManyUserInputEnvelope;
    connect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
  };

  export type job_applicationUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<job_applicationCreateWithoutUserInput, job_applicationUncheckedCreateWithoutUserInput>
      | job_applicationCreateWithoutUserInput[]
      | job_applicationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: job_applicationCreateOrConnectWithoutUserInput | job_applicationCreateOrConnectWithoutUserInput[];
    createMany?: job_applicationCreateManyUserInputEnvelope;
    connect?: job_applicationWhereUniqueInput | job_applicationWhereUniqueInput[];
  };

  export type performance_reviewUncheckedCreateNestedManyWithoutUser_performance_review_reviewer_idTouserInput = {
    create?:
      | XOR<
          performance_reviewCreateWithoutUser_performance_review_reviewer_idTouserInput,
          performance_reviewUncheckedCreateWithoutUser_performance_review_reviewer_idTouserInput
        >
      | performance_reviewCreateWithoutUser_performance_review_reviewer_idTouserInput[]
      | performance_reviewUncheckedCreateWithoutUser_performance_review_reviewer_idTouserInput[];
    connectOrCreate?:
      | performance_reviewCreateOrConnectWithoutUser_performance_review_reviewer_idTouserInput
      | performance_reviewCreateOrConnectWithoutUser_performance_review_reviewer_idTouserInput[];
    createMany?: performance_reviewCreateManyUser_performance_review_reviewer_idTouserInputEnvelope;
    connect?: performance_reviewWhereUniqueInput | performance_reviewWhereUniqueInput[];
  };

  export type performance_reviewUncheckedCreateNestedManyWithoutUser_performance_review_user_idTouserInput = {
    create?:
      | XOR<
          performance_reviewCreateWithoutUser_performance_review_user_idTouserInput,
          performance_reviewUncheckedCreateWithoutUser_performance_review_user_idTouserInput
        >
      | performance_reviewCreateWithoutUser_performance_review_user_idTouserInput[]
      | performance_reviewUncheckedCreateWithoutUser_performance_review_user_idTouserInput[];
    connectOrCreate?:
      | performance_reviewCreateOrConnectWithoutUser_performance_review_user_idTouserInput
      | performance_reviewCreateOrConnectWithoutUser_performance_review_user_idTouserInput[];
    createMany?: performance_reviewCreateManyUser_performance_review_user_idTouserInputEnvelope;
    connect?: performance_reviewWhereUniqueInput | performance_reviewWhereUniqueInput[];
  };

  export type teamUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<teamCreateWithoutUserInput, teamUncheckedCreateWithoutUserInput>
      | teamCreateWithoutUserInput[]
      | teamUncheckedCreateWithoutUserInput[];
    connectOrCreate?: teamCreateOrConnectWithoutUserInput | teamCreateOrConnectWithoutUserInput[];
    createMany?: teamCreateManyUserInputEnvelope;
    connect?: teamWhereUniqueInput | teamWhereUniqueInput[];
  };

  export type team_memberUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<team_memberCreateWithoutUserInput, team_memberUncheckedCreateWithoutUserInput>
      | team_memberCreateWithoutUserInput[]
      | team_memberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: team_memberCreateOrConnectWithoutUserInput | team_memberCreateOrConnectWithoutUserInput[];
    createMany?: team_memberCreateManyUserInputEnvelope;
    connect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
  };

  export type job_applicationUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<job_applicationCreateWithoutUserInput, job_applicationUncheckedCreateWithoutUserInput>
      | job_applicationCreateWithoutUserInput[]
      | job_applicationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: job_applicationCreateOrConnectWithoutUserInput | job_applicationCreateOrConnectWithoutUserInput[];
    upsert?:
      | job_applicationUpsertWithWhereUniqueWithoutUserInput
      | job_applicationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: job_applicationCreateManyUserInputEnvelope;
    set?: job_applicationWhereUniqueInput | job_applicationWhereUniqueInput[];
    disconnect?: job_applicationWhereUniqueInput | job_applicationWhereUniqueInput[];
    delete?: job_applicationWhereUniqueInput | job_applicationWhereUniqueInput[];
    connect?: job_applicationWhereUniqueInput | job_applicationWhereUniqueInput[];
    update?:
      | job_applicationUpdateWithWhereUniqueWithoutUserInput
      | job_applicationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | job_applicationUpdateManyWithWhereWithoutUserInput
      | job_applicationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: job_applicationScalarWhereInput | job_applicationScalarWhereInput[];
  };

  export type performance_reviewUpdateManyWithoutUser_performance_review_reviewer_idTouserNestedInput = {
    create?:
      | XOR<
          performance_reviewCreateWithoutUser_performance_review_reviewer_idTouserInput,
          performance_reviewUncheckedCreateWithoutUser_performance_review_reviewer_idTouserInput
        >
      | performance_reviewCreateWithoutUser_performance_review_reviewer_idTouserInput[]
      | performance_reviewUncheckedCreateWithoutUser_performance_review_reviewer_idTouserInput[];
    connectOrCreate?:
      | performance_reviewCreateOrConnectWithoutUser_performance_review_reviewer_idTouserInput
      | performance_reviewCreateOrConnectWithoutUser_performance_review_reviewer_idTouserInput[];
    upsert?:
      | performance_reviewUpsertWithWhereUniqueWithoutUser_performance_review_reviewer_idTouserInput
      | performance_reviewUpsertWithWhereUniqueWithoutUser_performance_review_reviewer_idTouserInput[];
    createMany?: performance_reviewCreateManyUser_performance_review_reviewer_idTouserInputEnvelope;
    set?: performance_reviewWhereUniqueInput | performance_reviewWhereUniqueInput[];
    disconnect?: performance_reviewWhereUniqueInput | performance_reviewWhereUniqueInput[];
    delete?: performance_reviewWhereUniqueInput | performance_reviewWhereUniqueInput[];
    connect?: performance_reviewWhereUniqueInput | performance_reviewWhereUniqueInput[];
    update?:
      | performance_reviewUpdateWithWhereUniqueWithoutUser_performance_review_reviewer_idTouserInput
      | performance_reviewUpdateWithWhereUniqueWithoutUser_performance_review_reviewer_idTouserInput[];
    updateMany?:
      | performance_reviewUpdateManyWithWhereWithoutUser_performance_review_reviewer_idTouserInput
      | performance_reviewUpdateManyWithWhereWithoutUser_performance_review_reviewer_idTouserInput[];
    deleteMany?: performance_reviewScalarWhereInput | performance_reviewScalarWhereInput[];
  };

  export type performance_reviewUpdateManyWithoutUser_performance_review_user_idTouserNestedInput = {
    create?:
      | XOR<
          performance_reviewCreateWithoutUser_performance_review_user_idTouserInput,
          performance_reviewUncheckedCreateWithoutUser_performance_review_user_idTouserInput
        >
      | performance_reviewCreateWithoutUser_performance_review_user_idTouserInput[]
      | performance_reviewUncheckedCreateWithoutUser_performance_review_user_idTouserInput[];
    connectOrCreate?:
      | performance_reviewCreateOrConnectWithoutUser_performance_review_user_idTouserInput
      | performance_reviewCreateOrConnectWithoutUser_performance_review_user_idTouserInput[];
    upsert?:
      | performance_reviewUpsertWithWhereUniqueWithoutUser_performance_review_user_idTouserInput
      | performance_reviewUpsertWithWhereUniqueWithoutUser_performance_review_user_idTouserInput[];
    createMany?: performance_reviewCreateManyUser_performance_review_user_idTouserInputEnvelope;
    set?: performance_reviewWhereUniqueInput | performance_reviewWhereUniqueInput[];
    disconnect?: performance_reviewWhereUniqueInput | performance_reviewWhereUniqueInput[];
    delete?: performance_reviewWhereUniqueInput | performance_reviewWhereUniqueInput[];
    connect?: performance_reviewWhereUniqueInput | performance_reviewWhereUniqueInput[];
    update?:
      | performance_reviewUpdateWithWhereUniqueWithoutUser_performance_review_user_idTouserInput
      | performance_reviewUpdateWithWhereUniqueWithoutUser_performance_review_user_idTouserInput[];
    updateMany?:
      | performance_reviewUpdateManyWithWhereWithoutUser_performance_review_user_idTouserInput
      | performance_reviewUpdateManyWithWhereWithoutUser_performance_review_user_idTouserInput[];
    deleteMany?: performance_reviewScalarWhereInput | performance_reviewScalarWhereInput[];
  };

  export type teamUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<teamCreateWithoutUserInput, teamUncheckedCreateWithoutUserInput>
      | teamCreateWithoutUserInput[]
      | teamUncheckedCreateWithoutUserInput[];
    connectOrCreate?: teamCreateOrConnectWithoutUserInput | teamCreateOrConnectWithoutUserInput[];
    upsert?: teamUpsertWithWhereUniqueWithoutUserInput | teamUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: teamCreateManyUserInputEnvelope;
    set?: teamWhereUniqueInput | teamWhereUniqueInput[];
    disconnect?: teamWhereUniqueInput | teamWhereUniqueInput[];
    delete?: teamWhereUniqueInput | teamWhereUniqueInput[];
    connect?: teamWhereUniqueInput | teamWhereUniqueInput[];
    update?: teamUpdateWithWhereUniqueWithoutUserInput | teamUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: teamUpdateManyWithWhereWithoutUserInput | teamUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: teamScalarWhereInput | teamScalarWhereInput[];
  };

  export type team_memberUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<team_memberCreateWithoutUserInput, team_memberUncheckedCreateWithoutUserInput>
      | team_memberCreateWithoutUserInput[]
      | team_memberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: team_memberCreateOrConnectWithoutUserInput | team_memberCreateOrConnectWithoutUserInput[];
    upsert?: team_memberUpsertWithWhereUniqueWithoutUserInput | team_memberUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: team_memberCreateManyUserInputEnvelope;
    set?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    disconnect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    delete?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    connect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    update?: team_memberUpdateWithWhereUniqueWithoutUserInput | team_memberUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: team_memberUpdateManyWithWhereWithoutUserInput | team_memberUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: team_memberScalarWhereInput | team_memberScalarWhereInput[];
  };

  export type job_applicationUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<job_applicationCreateWithoutUserInput, job_applicationUncheckedCreateWithoutUserInput>
      | job_applicationCreateWithoutUserInput[]
      | job_applicationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: job_applicationCreateOrConnectWithoutUserInput | job_applicationCreateOrConnectWithoutUserInput[];
    upsert?:
      | job_applicationUpsertWithWhereUniqueWithoutUserInput
      | job_applicationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: job_applicationCreateManyUserInputEnvelope;
    set?: job_applicationWhereUniqueInput | job_applicationWhereUniqueInput[];
    disconnect?: job_applicationWhereUniqueInput | job_applicationWhereUniqueInput[];
    delete?: job_applicationWhereUniqueInput | job_applicationWhereUniqueInput[];
    connect?: job_applicationWhereUniqueInput | job_applicationWhereUniqueInput[];
    update?:
      | job_applicationUpdateWithWhereUniqueWithoutUserInput
      | job_applicationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | job_applicationUpdateManyWithWhereWithoutUserInput
      | job_applicationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: job_applicationScalarWhereInput | job_applicationScalarWhereInput[];
  };

  export type performance_reviewUncheckedUpdateManyWithoutUser_performance_review_reviewer_idTouserNestedInput = {
    create?:
      | XOR<
          performance_reviewCreateWithoutUser_performance_review_reviewer_idTouserInput,
          performance_reviewUncheckedCreateWithoutUser_performance_review_reviewer_idTouserInput
        >
      | performance_reviewCreateWithoutUser_performance_review_reviewer_idTouserInput[]
      | performance_reviewUncheckedCreateWithoutUser_performance_review_reviewer_idTouserInput[];
    connectOrCreate?:
      | performance_reviewCreateOrConnectWithoutUser_performance_review_reviewer_idTouserInput
      | performance_reviewCreateOrConnectWithoutUser_performance_review_reviewer_idTouserInput[];
    upsert?:
      | performance_reviewUpsertWithWhereUniqueWithoutUser_performance_review_reviewer_idTouserInput
      | performance_reviewUpsertWithWhereUniqueWithoutUser_performance_review_reviewer_idTouserInput[];
    createMany?: performance_reviewCreateManyUser_performance_review_reviewer_idTouserInputEnvelope;
    set?: performance_reviewWhereUniqueInput | performance_reviewWhereUniqueInput[];
    disconnect?: performance_reviewWhereUniqueInput | performance_reviewWhereUniqueInput[];
    delete?: performance_reviewWhereUniqueInput | performance_reviewWhereUniqueInput[];
    connect?: performance_reviewWhereUniqueInput | performance_reviewWhereUniqueInput[];
    update?:
      | performance_reviewUpdateWithWhereUniqueWithoutUser_performance_review_reviewer_idTouserInput
      | performance_reviewUpdateWithWhereUniqueWithoutUser_performance_review_reviewer_idTouserInput[];
    updateMany?:
      | performance_reviewUpdateManyWithWhereWithoutUser_performance_review_reviewer_idTouserInput
      | performance_reviewUpdateManyWithWhereWithoutUser_performance_review_reviewer_idTouserInput[];
    deleteMany?: performance_reviewScalarWhereInput | performance_reviewScalarWhereInput[];
  };

  export type performance_reviewUncheckedUpdateManyWithoutUser_performance_review_user_idTouserNestedInput = {
    create?:
      | XOR<
          performance_reviewCreateWithoutUser_performance_review_user_idTouserInput,
          performance_reviewUncheckedCreateWithoutUser_performance_review_user_idTouserInput
        >
      | performance_reviewCreateWithoutUser_performance_review_user_idTouserInput[]
      | performance_reviewUncheckedCreateWithoutUser_performance_review_user_idTouserInput[];
    connectOrCreate?:
      | performance_reviewCreateOrConnectWithoutUser_performance_review_user_idTouserInput
      | performance_reviewCreateOrConnectWithoutUser_performance_review_user_idTouserInput[];
    upsert?:
      | performance_reviewUpsertWithWhereUniqueWithoutUser_performance_review_user_idTouserInput
      | performance_reviewUpsertWithWhereUniqueWithoutUser_performance_review_user_idTouserInput[];
    createMany?: performance_reviewCreateManyUser_performance_review_user_idTouserInputEnvelope;
    set?: performance_reviewWhereUniqueInput | performance_reviewWhereUniqueInput[];
    disconnect?: performance_reviewWhereUniqueInput | performance_reviewWhereUniqueInput[];
    delete?: performance_reviewWhereUniqueInput | performance_reviewWhereUniqueInput[];
    connect?: performance_reviewWhereUniqueInput | performance_reviewWhereUniqueInput[];
    update?:
      | performance_reviewUpdateWithWhereUniqueWithoutUser_performance_review_user_idTouserInput
      | performance_reviewUpdateWithWhereUniqueWithoutUser_performance_review_user_idTouserInput[];
    updateMany?:
      | performance_reviewUpdateManyWithWhereWithoutUser_performance_review_user_idTouserInput
      | performance_reviewUpdateManyWithWhereWithoutUser_performance_review_user_idTouserInput[];
    deleteMany?: performance_reviewScalarWhereInput | performance_reviewScalarWhereInput[];
  };

  export type teamUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<teamCreateWithoutUserInput, teamUncheckedCreateWithoutUserInput>
      | teamCreateWithoutUserInput[]
      | teamUncheckedCreateWithoutUserInput[];
    connectOrCreate?: teamCreateOrConnectWithoutUserInput | teamCreateOrConnectWithoutUserInput[];
    upsert?: teamUpsertWithWhereUniqueWithoutUserInput | teamUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: teamCreateManyUserInputEnvelope;
    set?: teamWhereUniqueInput | teamWhereUniqueInput[];
    disconnect?: teamWhereUniqueInput | teamWhereUniqueInput[];
    delete?: teamWhereUniqueInput | teamWhereUniqueInput[];
    connect?: teamWhereUniqueInput | teamWhereUniqueInput[];
    update?: teamUpdateWithWhereUniqueWithoutUserInput | teamUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: teamUpdateManyWithWhereWithoutUserInput | teamUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: teamScalarWhereInput | teamScalarWhereInput[];
  };

  export type team_memberUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<team_memberCreateWithoutUserInput, team_memberUncheckedCreateWithoutUserInput>
      | team_memberCreateWithoutUserInput[]
      | team_memberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: team_memberCreateOrConnectWithoutUserInput | team_memberCreateOrConnectWithoutUserInput[];
    upsert?: team_memberUpsertWithWhereUniqueWithoutUserInput | team_memberUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: team_memberCreateManyUserInputEnvelope;
    set?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    disconnect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    delete?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    connect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    update?: team_memberUpdateWithWhereUniqueWithoutUserInput | team_memberUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: team_memberUpdateManyWithWhereWithoutUserInput | team_memberUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: team_memberScalarWhereInput | team_memberScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type job_applicationCreateWithoutJobInput = {
    id?: string;
    status: string;
    applied_at?: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutJob_applicationInput;
  };

  export type job_applicationUncheckedCreateWithoutJobInput = {
    id?: string;
    user_id: string;
    status: string;
    applied_at?: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type job_applicationCreateOrConnectWithoutJobInput = {
    where: job_applicationWhereUniqueInput;
    create: XOR<job_applicationCreateWithoutJobInput, job_applicationUncheckedCreateWithoutJobInput>;
  };

  export type job_applicationCreateManyJobInputEnvelope = {
    data: job_applicationCreateManyJobInput | job_applicationCreateManyJobInput[];
    skipDuplicates?: boolean;
  };

  export type job_applicationUpsertWithWhereUniqueWithoutJobInput = {
    where: job_applicationWhereUniqueInput;
    update: XOR<job_applicationUpdateWithoutJobInput, job_applicationUncheckedUpdateWithoutJobInput>;
    create: XOR<job_applicationCreateWithoutJobInput, job_applicationUncheckedCreateWithoutJobInput>;
  };

  export type job_applicationUpdateWithWhereUniqueWithoutJobInput = {
    where: job_applicationWhereUniqueInput;
    data: XOR<job_applicationUpdateWithoutJobInput, job_applicationUncheckedUpdateWithoutJobInput>;
  };

  export type job_applicationUpdateManyWithWhereWithoutJobInput = {
    where: job_applicationScalarWhereInput;
    data: XOR<job_applicationUpdateManyMutationInput, job_applicationUncheckedUpdateManyWithoutJobInput>;
  };

  export type job_applicationScalarWhereInput = {
    AND?: job_applicationScalarWhereInput | job_applicationScalarWhereInput[];
    OR?: job_applicationScalarWhereInput[];
    NOT?: job_applicationScalarWhereInput | job_applicationScalarWhereInput[];
    id?: UuidFilter<'job_application'> | string;
    user_id?: UuidFilter<'job_application'> | string;
    job_id?: UuidFilter<'job_application'> | string;
    status?: StringFilter<'job_application'> | string;
    applied_at?: DateTimeFilter<'job_application'> | Date | string;
    created_at?: DateTimeFilter<'job_application'> | Date | string;
    updated_at?: DateTimeFilter<'job_application'> | Date | string;
  };

  export type jobCreateWithoutJob_applicationInput = {
    id?: string;
    title: string;
    description?: string | null;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type jobUncheckedCreateWithoutJob_applicationInput = {
    id?: string;
    title: string;
    description?: string | null;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type jobCreateOrConnectWithoutJob_applicationInput = {
    where: jobWhereUniqueInput;
    create: XOR<jobCreateWithoutJob_applicationInput, jobUncheckedCreateWithoutJob_applicationInput>;
  };

  export type userCreateWithoutJob_applicationInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    performance_review_performance_review_reviewer_idTouser?: performance_reviewCreateNestedManyWithoutUser_performance_review_reviewer_idTouserInput;
    performance_review_performance_review_user_idTouser?: performance_reviewCreateNestedManyWithoutUser_performance_review_user_idTouserInput;
    team?: teamCreateNestedManyWithoutUserInput;
    team_member?: team_memberCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutJob_applicationInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    performance_review_performance_review_reviewer_idTouser?: performance_reviewUncheckedCreateNestedManyWithoutUser_performance_review_reviewer_idTouserInput;
    performance_review_performance_review_user_idTouser?: performance_reviewUncheckedCreateNestedManyWithoutUser_performance_review_user_idTouserInput;
    team?: teamUncheckedCreateNestedManyWithoutUserInput;
    team_member?: team_memberUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutJob_applicationInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutJob_applicationInput, userUncheckedCreateWithoutJob_applicationInput>;
  };

  export type jobUpsertWithoutJob_applicationInput = {
    update: XOR<jobUpdateWithoutJob_applicationInput, jobUncheckedUpdateWithoutJob_applicationInput>;
    create: XOR<jobCreateWithoutJob_applicationInput, jobUncheckedCreateWithoutJob_applicationInput>;
    where?: jobWhereInput;
  };

  export type jobUpdateToOneWithWhereWithoutJob_applicationInput = {
    where?: jobWhereInput;
    data: XOR<jobUpdateWithoutJob_applicationInput, jobUncheckedUpdateWithoutJob_applicationInput>;
  };

  export type jobUpdateWithoutJob_applicationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type jobUncheckedUpdateWithoutJob_applicationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUpsertWithoutJob_applicationInput = {
    update: XOR<userUpdateWithoutJob_applicationInput, userUncheckedUpdateWithoutJob_applicationInput>;
    create: XOR<userCreateWithoutJob_applicationInput, userUncheckedCreateWithoutJob_applicationInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutJob_applicationInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutJob_applicationInput, userUncheckedUpdateWithoutJob_applicationInput>;
  };

  export type userUpdateWithoutJob_applicationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    performance_review_performance_review_reviewer_idTouser?: performance_reviewUpdateManyWithoutUser_performance_review_reviewer_idTouserNestedInput;
    performance_review_performance_review_user_idTouser?: performance_reviewUpdateManyWithoutUser_performance_review_user_idTouserNestedInput;
    team?: teamUpdateManyWithoutUserNestedInput;
    team_member?: team_memberUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutJob_applicationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    performance_review_performance_review_reviewer_idTouser?: performance_reviewUncheckedUpdateManyWithoutUser_performance_review_reviewer_idTouserNestedInput;
    performance_review_performance_review_user_idTouser?: performance_reviewUncheckedUpdateManyWithoutUser_performance_review_user_idTouserNestedInput;
    team?: teamUncheckedUpdateManyWithoutUserNestedInput;
    team_member?: team_memberUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutPerformance_review_performance_review_reviewer_idTouserInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    job_application?: job_applicationCreateNestedManyWithoutUserInput;
    performance_review_performance_review_user_idTouser?: performance_reviewCreateNestedManyWithoutUser_performance_review_user_idTouserInput;
    team?: teamCreateNestedManyWithoutUserInput;
    team_member?: team_memberCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutPerformance_review_performance_review_reviewer_idTouserInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    job_application?: job_applicationUncheckedCreateNestedManyWithoutUserInput;
    performance_review_performance_review_user_idTouser?: performance_reviewUncheckedCreateNestedManyWithoutUser_performance_review_user_idTouserInput;
    team?: teamUncheckedCreateNestedManyWithoutUserInput;
    team_member?: team_memberUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutPerformance_review_performance_review_reviewer_idTouserInput = {
    where: userWhereUniqueInput;
    create: XOR<
      userCreateWithoutPerformance_review_performance_review_reviewer_idTouserInput,
      userUncheckedCreateWithoutPerformance_review_performance_review_reviewer_idTouserInput
    >;
  };

  export type userCreateWithoutPerformance_review_performance_review_user_idTouserInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    job_application?: job_applicationCreateNestedManyWithoutUserInput;
    performance_review_performance_review_reviewer_idTouser?: performance_reviewCreateNestedManyWithoutUser_performance_review_reviewer_idTouserInput;
    team?: teamCreateNestedManyWithoutUserInput;
    team_member?: team_memberCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutPerformance_review_performance_review_user_idTouserInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    job_application?: job_applicationUncheckedCreateNestedManyWithoutUserInput;
    performance_review_performance_review_reviewer_idTouser?: performance_reviewUncheckedCreateNestedManyWithoutUser_performance_review_reviewer_idTouserInput;
    team?: teamUncheckedCreateNestedManyWithoutUserInput;
    team_member?: team_memberUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutPerformance_review_performance_review_user_idTouserInput = {
    where: userWhereUniqueInput;
    create: XOR<
      userCreateWithoutPerformance_review_performance_review_user_idTouserInput,
      userUncheckedCreateWithoutPerformance_review_performance_review_user_idTouserInput
    >;
  };

  export type userUpsertWithoutPerformance_review_performance_review_reviewer_idTouserInput = {
    update: XOR<
      userUpdateWithoutPerformance_review_performance_review_reviewer_idTouserInput,
      userUncheckedUpdateWithoutPerformance_review_performance_review_reviewer_idTouserInput
    >;
    create: XOR<
      userCreateWithoutPerformance_review_performance_review_reviewer_idTouserInput,
      userUncheckedCreateWithoutPerformance_review_performance_review_reviewer_idTouserInput
    >;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutPerformance_review_performance_review_reviewer_idTouserInput = {
    where?: userWhereInput;
    data: XOR<
      userUpdateWithoutPerformance_review_performance_review_reviewer_idTouserInput,
      userUncheckedUpdateWithoutPerformance_review_performance_review_reviewer_idTouserInput
    >;
  };

  export type userUpdateWithoutPerformance_review_performance_review_reviewer_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_application?: job_applicationUpdateManyWithoutUserNestedInput;
    performance_review_performance_review_user_idTouser?: performance_reviewUpdateManyWithoutUser_performance_review_user_idTouserNestedInput;
    team?: teamUpdateManyWithoutUserNestedInput;
    team_member?: team_memberUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutPerformance_review_performance_review_reviewer_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_application?: job_applicationUncheckedUpdateManyWithoutUserNestedInput;
    performance_review_performance_review_user_idTouser?: performance_reviewUncheckedUpdateManyWithoutUser_performance_review_user_idTouserNestedInput;
    team?: teamUncheckedUpdateManyWithoutUserNestedInput;
    team_member?: team_memberUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userUpsertWithoutPerformance_review_performance_review_user_idTouserInput = {
    update: XOR<
      userUpdateWithoutPerformance_review_performance_review_user_idTouserInput,
      userUncheckedUpdateWithoutPerformance_review_performance_review_user_idTouserInput
    >;
    create: XOR<
      userCreateWithoutPerformance_review_performance_review_user_idTouserInput,
      userUncheckedCreateWithoutPerformance_review_performance_review_user_idTouserInput
    >;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutPerformance_review_performance_review_user_idTouserInput = {
    where?: userWhereInput;
    data: XOR<
      userUpdateWithoutPerformance_review_performance_review_user_idTouserInput,
      userUncheckedUpdateWithoutPerformance_review_performance_review_user_idTouserInput
    >;
  };

  export type userUpdateWithoutPerformance_review_performance_review_user_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_application?: job_applicationUpdateManyWithoutUserNestedInput;
    performance_review_performance_review_reviewer_idTouser?: performance_reviewUpdateManyWithoutUser_performance_review_reviewer_idTouserNestedInput;
    team?: teamUpdateManyWithoutUserNestedInput;
    team_member?: team_memberUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutPerformance_review_performance_review_user_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_application?: job_applicationUncheckedUpdateManyWithoutUserNestedInput;
    performance_review_performance_review_reviewer_idTouser?: performance_reviewUncheckedUpdateManyWithoutUser_performance_review_reviewer_idTouserNestedInput;
    team?: teamUncheckedUpdateManyWithoutUserNestedInput;
    team_member?: team_memberUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutTeamInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    job_application?: job_applicationCreateNestedManyWithoutUserInput;
    performance_review_performance_review_reviewer_idTouser?: performance_reviewCreateNestedManyWithoutUser_performance_review_reviewer_idTouserInput;
    performance_review_performance_review_user_idTouser?: performance_reviewCreateNestedManyWithoutUser_performance_review_user_idTouserInput;
    team_member?: team_memberCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutTeamInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    job_application?: job_applicationUncheckedCreateNestedManyWithoutUserInput;
    performance_review_performance_review_reviewer_idTouser?: performance_reviewUncheckedCreateNestedManyWithoutUser_performance_review_reviewer_idTouserInput;
    performance_review_performance_review_user_idTouser?: performance_reviewUncheckedCreateNestedManyWithoutUser_performance_review_user_idTouserInput;
    team_member?: team_memberUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutTeamInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutTeamInput, userUncheckedCreateWithoutTeamInput>;
  };

  export type team_memberCreateWithoutTeamInput = {
    id?: string;
    joined_at?: Date | string;
    role: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutTeam_memberInput;
  };

  export type team_memberUncheckedCreateWithoutTeamInput = {
    id?: string;
    user_id: string;
    joined_at?: Date | string;
    role: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type team_memberCreateOrConnectWithoutTeamInput = {
    where: team_memberWhereUniqueInput;
    create: XOR<team_memberCreateWithoutTeamInput, team_memberUncheckedCreateWithoutTeamInput>;
  };

  export type team_memberCreateManyTeamInputEnvelope = {
    data: team_memberCreateManyTeamInput | team_memberCreateManyTeamInput[];
    skipDuplicates?: boolean;
  };

  export type userUpsertWithoutTeamInput = {
    update: XOR<userUpdateWithoutTeamInput, userUncheckedUpdateWithoutTeamInput>;
    create: XOR<userCreateWithoutTeamInput, userUncheckedCreateWithoutTeamInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutTeamInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutTeamInput, userUncheckedUpdateWithoutTeamInput>;
  };

  export type userUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_application?: job_applicationUpdateManyWithoutUserNestedInput;
    performance_review_performance_review_reviewer_idTouser?: performance_reviewUpdateManyWithoutUser_performance_review_reviewer_idTouserNestedInput;
    performance_review_performance_review_user_idTouser?: performance_reviewUpdateManyWithoutUser_performance_review_user_idTouserNestedInput;
    team_member?: team_memberUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_application?: job_applicationUncheckedUpdateManyWithoutUserNestedInput;
    performance_review_performance_review_reviewer_idTouser?: performance_reviewUncheckedUpdateManyWithoutUser_performance_review_reviewer_idTouserNestedInput;
    performance_review_performance_review_user_idTouser?: performance_reviewUncheckedUpdateManyWithoutUser_performance_review_user_idTouserNestedInput;
    team_member?: team_memberUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type team_memberUpsertWithWhereUniqueWithoutTeamInput = {
    where: team_memberWhereUniqueInput;
    update: XOR<team_memberUpdateWithoutTeamInput, team_memberUncheckedUpdateWithoutTeamInput>;
    create: XOR<team_memberCreateWithoutTeamInput, team_memberUncheckedCreateWithoutTeamInput>;
  };

  export type team_memberUpdateWithWhereUniqueWithoutTeamInput = {
    where: team_memberWhereUniqueInput;
    data: XOR<team_memberUpdateWithoutTeamInput, team_memberUncheckedUpdateWithoutTeamInput>;
  };

  export type team_memberUpdateManyWithWhereWithoutTeamInput = {
    where: team_memberScalarWhereInput;
    data: XOR<team_memberUpdateManyMutationInput, team_memberUncheckedUpdateManyWithoutTeamInput>;
  };

  export type team_memberScalarWhereInput = {
    AND?: team_memberScalarWhereInput | team_memberScalarWhereInput[];
    OR?: team_memberScalarWhereInput[];
    NOT?: team_memberScalarWhereInput | team_memberScalarWhereInput[];
    id?: UuidFilter<'team_member'> | string;
    user_id?: UuidFilter<'team_member'> | string;
    team_id?: UuidFilter<'team_member'> | string;
    joined_at?: DateTimeFilter<'team_member'> | Date | string;
    role?: StringFilter<'team_member'> | string;
    status?: StringFilter<'team_member'> | string;
    created_at?: DateTimeFilter<'team_member'> | Date | string;
    updated_at?: DateTimeFilter<'team_member'> | Date | string;
  };

  export type teamCreateWithoutTeam_memberInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutTeamInput;
  };

  export type teamUncheckedCreateWithoutTeam_memberInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type teamCreateOrConnectWithoutTeam_memberInput = {
    where: teamWhereUniqueInput;
    create: XOR<teamCreateWithoutTeam_memberInput, teamUncheckedCreateWithoutTeam_memberInput>;
  };

  export type userCreateWithoutTeam_memberInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    job_application?: job_applicationCreateNestedManyWithoutUserInput;
    performance_review_performance_review_reviewer_idTouser?: performance_reviewCreateNestedManyWithoutUser_performance_review_reviewer_idTouserInput;
    performance_review_performance_review_user_idTouser?: performance_reviewCreateNestedManyWithoutUser_performance_review_user_idTouserInput;
    team?: teamCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutTeam_memberInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    job_application?: job_applicationUncheckedCreateNestedManyWithoutUserInput;
    performance_review_performance_review_reviewer_idTouser?: performance_reviewUncheckedCreateNestedManyWithoutUser_performance_review_reviewer_idTouserInput;
    performance_review_performance_review_user_idTouser?: performance_reviewUncheckedCreateNestedManyWithoutUser_performance_review_user_idTouserInput;
    team?: teamUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutTeam_memberInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutTeam_memberInput, userUncheckedCreateWithoutTeam_memberInput>;
  };

  export type teamUpsertWithoutTeam_memberInput = {
    update: XOR<teamUpdateWithoutTeam_memberInput, teamUncheckedUpdateWithoutTeam_memberInput>;
    create: XOR<teamCreateWithoutTeam_memberInput, teamUncheckedCreateWithoutTeam_memberInput>;
    where?: teamWhereInput;
  };

  export type teamUpdateToOneWithWhereWithoutTeam_memberInput = {
    where?: teamWhereInput;
    data: XOR<teamUpdateWithoutTeam_memberInput, teamUncheckedUpdateWithoutTeam_memberInput>;
  };

  export type teamUpdateWithoutTeam_memberInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutTeamNestedInput;
  };

  export type teamUncheckedUpdateWithoutTeam_memberInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type userUpsertWithoutTeam_memberInput = {
    update: XOR<userUpdateWithoutTeam_memberInput, userUncheckedUpdateWithoutTeam_memberInput>;
    create: XOR<userCreateWithoutTeam_memberInput, userUncheckedCreateWithoutTeam_memberInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutTeam_memberInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutTeam_memberInput, userUncheckedUpdateWithoutTeam_memberInput>;
  };

  export type userUpdateWithoutTeam_memberInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_application?: job_applicationUpdateManyWithoutUserNestedInput;
    performance_review_performance_review_reviewer_idTouser?: performance_reviewUpdateManyWithoutUser_performance_review_reviewer_idTouserNestedInput;
    performance_review_performance_review_user_idTouser?: performance_reviewUpdateManyWithoutUser_performance_review_user_idTouserNestedInput;
    team?: teamUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutTeam_memberInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_application?: job_applicationUncheckedUpdateManyWithoutUserNestedInput;
    performance_review_performance_review_reviewer_idTouser?: performance_reviewUncheckedUpdateManyWithoutUser_performance_review_reviewer_idTouserNestedInput;
    performance_review_performance_review_user_idTouser?: performance_reviewUncheckedUpdateManyWithoutUser_performance_review_user_idTouserNestedInput;
    team?: teamUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type job_applicationCreateWithoutUserInput = {
    id?: string;
    status: string;
    applied_at?: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    job: jobCreateNestedOneWithoutJob_applicationInput;
  };

  export type job_applicationUncheckedCreateWithoutUserInput = {
    id?: string;
    job_id: string;
    status: string;
    applied_at?: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type job_applicationCreateOrConnectWithoutUserInput = {
    where: job_applicationWhereUniqueInput;
    create: XOR<job_applicationCreateWithoutUserInput, job_applicationUncheckedCreateWithoutUserInput>;
  };

  export type job_applicationCreateManyUserInputEnvelope = {
    data: job_applicationCreateManyUserInput | job_applicationCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type performance_reviewCreateWithoutUser_performance_review_reviewer_idTouserInput = {
    id?: string;
    rating: number;
    comments?: string | null;
    reviewed_at?: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_performance_review_user_idTouser: userCreateNestedOneWithoutPerformance_review_performance_review_user_idTouserInput;
  };

  export type performance_reviewUncheckedCreateWithoutUser_performance_review_reviewer_idTouserInput = {
    id?: string;
    user_id: string;
    rating: number;
    comments?: string | null;
    reviewed_at?: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type performance_reviewCreateOrConnectWithoutUser_performance_review_reviewer_idTouserInput = {
    where: performance_reviewWhereUniqueInput;
    create: XOR<
      performance_reviewCreateWithoutUser_performance_review_reviewer_idTouserInput,
      performance_reviewUncheckedCreateWithoutUser_performance_review_reviewer_idTouserInput
    >;
  };

  export type performance_reviewCreateManyUser_performance_review_reviewer_idTouserInputEnvelope = {
    data:
      | performance_reviewCreateManyUser_performance_review_reviewer_idTouserInput
      | performance_reviewCreateManyUser_performance_review_reviewer_idTouserInput[];
    skipDuplicates?: boolean;
  };

  export type performance_reviewCreateWithoutUser_performance_review_user_idTouserInput = {
    id?: string;
    rating: number;
    comments?: string | null;
    reviewed_at?: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_performance_review_reviewer_idTouser: userCreateNestedOneWithoutPerformance_review_performance_review_reviewer_idTouserInput;
  };

  export type performance_reviewUncheckedCreateWithoutUser_performance_review_user_idTouserInput = {
    id?: string;
    reviewer_id: string;
    rating: number;
    comments?: string | null;
    reviewed_at?: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type performance_reviewCreateOrConnectWithoutUser_performance_review_user_idTouserInput = {
    where: performance_reviewWhereUniqueInput;
    create: XOR<
      performance_reviewCreateWithoutUser_performance_review_user_idTouserInput,
      performance_reviewUncheckedCreateWithoutUser_performance_review_user_idTouserInput
    >;
  };

  export type performance_reviewCreateManyUser_performance_review_user_idTouserInputEnvelope = {
    data:
      | performance_reviewCreateManyUser_performance_review_user_idTouserInput
      | performance_reviewCreateManyUser_performance_review_user_idTouserInput[];
    skipDuplicates?: boolean;
  };

  export type teamCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    team_member?: team_memberCreateNestedManyWithoutTeamInput;
  };

  export type teamUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    team_member?: team_memberUncheckedCreateNestedManyWithoutTeamInput;
  };

  export type teamCreateOrConnectWithoutUserInput = {
    where: teamWhereUniqueInput;
    create: XOR<teamCreateWithoutUserInput, teamUncheckedCreateWithoutUserInput>;
  };

  export type teamCreateManyUserInputEnvelope = {
    data: teamCreateManyUserInput | teamCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type team_memberCreateWithoutUserInput = {
    id?: string;
    joined_at?: Date | string;
    role: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    team: teamCreateNestedOneWithoutTeam_memberInput;
  };

  export type team_memberUncheckedCreateWithoutUserInput = {
    id?: string;
    team_id: string;
    joined_at?: Date | string;
    role: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type team_memberCreateOrConnectWithoutUserInput = {
    where: team_memberWhereUniqueInput;
    create: XOR<team_memberCreateWithoutUserInput, team_memberUncheckedCreateWithoutUserInput>;
  };

  export type team_memberCreateManyUserInputEnvelope = {
    data: team_memberCreateManyUserInput | team_memberCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type job_applicationUpsertWithWhereUniqueWithoutUserInput = {
    where: job_applicationWhereUniqueInput;
    update: XOR<job_applicationUpdateWithoutUserInput, job_applicationUncheckedUpdateWithoutUserInput>;
    create: XOR<job_applicationCreateWithoutUserInput, job_applicationUncheckedCreateWithoutUserInput>;
  };

  export type job_applicationUpdateWithWhereUniqueWithoutUserInput = {
    where: job_applicationWhereUniqueInput;
    data: XOR<job_applicationUpdateWithoutUserInput, job_applicationUncheckedUpdateWithoutUserInput>;
  };

  export type job_applicationUpdateManyWithWhereWithoutUserInput = {
    where: job_applicationScalarWhereInput;
    data: XOR<job_applicationUpdateManyMutationInput, job_applicationUncheckedUpdateManyWithoutUserInput>;
  };

  export type performance_reviewUpsertWithWhereUniqueWithoutUser_performance_review_reviewer_idTouserInput = {
    where: performance_reviewWhereUniqueInput;
    update: XOR<
      performance_reviewUpdateWithoutUser_performance_review_reviewer_idTouserInput,
      performance_reviewUncheckedUpdateWithoutUser_performance_review_reviewer_idTouserInput
    >;
    create: XOR<
      performance_reviewCreateWithoutUser_performance_review_reviewer_idTouserInput,
      performance_reviewUncheckedCreateWithoutUser_performance_review_reviewer_idTouserInput
    >;
  };

  export type performance_reviewUpdateWithWhereUniqueWithoutUser_performance_review_reviewer_idTouserInput = {
    where: performance_reviewWhereUniqueInput;
    data: XOR<
      performance_reviewUpdateWithoutUser_performance_review_reviewer_idTouserInput,
      performance_reviewUncheckedUpdateWithoutUser_performance_review_reviewer_idTouserInput
    >;
  };

  export type performance_reviewUpdateManyWithWhereWithoutUser_performance_review_reviewer_idTouserInput = {
    where: performance_reviewScalarWhereInput;
    data: XOR<
      performance_reviewUpdateManyMutationInput,
      performance_reviewUncheckedUpdateManyWithoutUser_performance_review_reviewer_idTouserInput
    >;
  };

  export type performance_reviewScalarWhereInput = {
    AND?: performance_reviewScalarWhereInput | performance_reviewScalarWhereInput[];
    OR?: performance_reviewScalarWhereInput[];
    NOT?: performance_reviewScalarWhereInput | performance_reviewScalarWhereInput[];
    id?: UuidFilter<'performance_review'> | string;
    user_id?: UuidFilter<'performance_review'> | string;
    reviewer_id?: UuidFilter<'performance_review'> | string;
    rating?: IntFilter<'performance_review'> | number;
    comments?: StringNullableFilter<'performance_review'> | string | null;
    reviewed_at?: DateTimeFilter<'performance_review'> | Date | string;
    created_at?: DateTimeFilter<'performance_review'> | Date | string;
    updated_at?: DateTimeFilter<'performance_review'> | Date | string;
  };

  export type performance_reviewUpsertWithWhereUniqueWithoutUser_performance_review_user_idTouserInput = {
    where: performance_reviewWhereUniqueInput;
    update: XOR<
      performance_reviewUpdateWithoutUser_performance_review_user_idTouserInput,
      performance_reviewUncheckedUpdateWithoutUser_performance_review_user_idTouserInput
    >;
    create: XOR<
      performance_reviewCreateWithoutUser_performance_review_user_idTouserInput,
      performance_reviewUncheckedCreateWithoutUser_performance_review_user_idTouserInput
    >;
  };

  export type performance_reviewUpdateWithWhereUniqueWithoutUser_performance_review_user_idTouserInput = {
    where: performance_reviewWhereUniqueInput;
    data: XOR<
      performance_reviewUpdateWithoutUser_performance_review_user_idTouserInput,
      performance_reviewUncheckedUpdateWithoutUser_performance_review_user_idTouserInput
    >;
  };

  export type performance_reviewUpdateManyWithWhereWithoutUser_performance_review_user_idTouserInput = {
    where: performance_reviewScalarWhereInput;
    data: XOR<
      performance_reviewUpdateManyMutationInput,
      performance_reviewUncheckedUpdateManyWithoutUser_performance_review_user_idTouserInput
    >;
  };

  export type teamUpsertWithWhereUniqueWithoutUserInput = {
    where: teamWhereUniqueInput;
    update: XOR<teamUpdateWithoutUserInput, teamUncheckedUpdateWithoutUserInput>;
    create: XOR<teamCreateWithoutUserInput, teamUncheckedCreateWithoutUserInput>;
  };

  export type teamUpdateWithWhereUniqueWithoutUserInput = {
    where: teamWhereUniqueInput;
    data: XOR<teamUpdateWithoutUserInput, teamUncheckedUpdateWithoutUserInput>;
  };

  export type teamUpdateManyWithWhereWithoutUserInput = {
    where: teamScalarWhereInput;
    data: XOR<teamUpdateManyMutationInput, teamUncheckedUpdateManyWithoutUserInput>;
  };

  export type teamScalarWhereInput = {
    AND?: teamScalarWhereInput | teamScalarWhereInput[];
    OR?: teamScalarWhereInput[];
    NOT?: teamScalarWhereInput | teamScalarWhereInput[];
    id?: UuidFilter<'team'> | string;
    description?: StringNullableFilter<'team'> | string | null;
    name?: StringFilter<'team'> | string;
    created_at?: DateTimeFilter<'team'> | Date | string;
    updated_at?: DateTimeFilter<'team'> | Date | string;
    user_id?: UuidFilter<'team'> | string;
    tenant_id?: StringFilter<'team'> | string;
  };

  export type team_memberUpsertWithWhereUniqueWithoutUserInput = {
    where: team_memberWhereUniqueInput;
    update: XOR<team_memberUpdateWithoutUserInput, team_memberUncheckedUpdateWithoutUserInput>;
    create: XOR<team_memberCreateWithoutUserInput, team_memberUncheckedCreateWithoutUserInput>;
  };

  export type team_memberUpdateWithWhereUniqueWithoutUserInput = {
    where: team_memberWhereUniqueInput;
    data: XOR<team_memberUpdateWithoutUserInput, team_memberUncheckedUpdateWithoutUserInput>;
  };

  export type team_memberUpdateManyWithWhereWithoutUserInput = {
    where: team_memberScalarWhereInput;
    data: XOR<team_memberUpdateManyMutationInput, team_memberUncheckedUpdateManyWithoutUserInput>;
  };

  export type job_applicationCreateManyJobInput = {
    id?: string;
    user_id: string;
    status: string;
    applied_at?: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type job_applicationUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    applied_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutJob_applicationNestedInput;
  };

  export type job_applicationUncheckedUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    applied_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type job_applicationUncheckedUpdateManyWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    applied_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type team_memberCreateManyTeamInput = {
    id?: string;
    user_id: string;
    joined_at?: Date | string;
    role: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type team_memberUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string;
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    role?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutTeam_memberNestedInput;
  };

  export type team_memberUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    role?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type team_memberUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    role?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type job_applicationCreateManyUserInput = {
    id?: string;
    job_id: string;
    status: string;
    applied_at?: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type performance_reviewCreateManyUser_performance_review_reviewer_idTouserInput = {
    id?: string;
    user_id: string;
    rating: number;
    comments?: string | null;
    reviewed_at?: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type performance_reviewCreateManyUser_performance_review_user_idTouserInput = {
    id?: string;
    reviewer_id: string;
    rating: number;
    comments?: string | null;
    reviewed_at?: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type teamCreateManyUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type team_memberCreateManyUserInput = {
    id?: string;
    team_id: string;
    joined_at?: Date | string;
    role: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type job_applicationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    applied_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    job?: jobUpdateOneRequiredWithoutJob_applicationNestedInput;
  };

  export type job_applicationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    job_id?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    applied_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type job_applicationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    job_id?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    applied_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type performance_reviewUpdateWithoutUser_performance_review_reviewer_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comments?: NullableStringFieldUpdateOperationsInput | string | null;
    reviewed_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_performance_review_user_idTouser?: userUpdateOneRequiredWithoutPerformance_review_performance_review_user_idTouserNestedInput;
  };

  export type performance_reviewUncheckedUpdateWithoutUser_performance_review_reviewer_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comments?: NullableStringFieldUpdateOperationsInput | string | null;
    reviewed_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type performance_reviewUncheckedUpdateManyWithoutUser_performance_review_reviewer_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comments?: NullableStringFieldUpdateOperationsInput | string | null;
    reviewed_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type performance_reviewUpdateWithoutUser_performance_review_user_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comments?: NullableStringFieldUpdateOperationsInput | string | null;
    reviewed_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_performance_review_reviewer_idTouser?: userUpdateOneRequiredWithoutPerformance_review_performance_review_reviewer_idTouserNestedInput;
  };

  export type performance_reviewUncheckedUpdateWithoutUser_performance_review_user_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    reviewer_id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comments?: NullableStringFieldUpdateOperationsInput | string | null;
    reviewed_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type performance_reviewUncheckedUpdateManyWithoutUser_performance_review_user_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    reviewer_id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comments?: NullableStringFieldUpdateOperationsInput | string | null;
    reviewed_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type teamUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    team_member?: team_memberUpdateManyWithoutTeamNestedInput;
  };

  export type teamUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    team_member?: team_memberUncheckedUpdateManyWithoutTeamNestedInput;
  };

  export type teamUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type team_memberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    role?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    team?: teamUpdateOneRequiredWithoutTeam_memberNestedInput;
  };

  export type team_memberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    team_id?: StringFieldUpdateOperationsInput | string;
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    role?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type team_memberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    team_id?: StringFieldUpdateOperationsInput | string;
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    role?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use JobCountOutputTypeDefaultArgs instead
   */
  export type JobCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    JobCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use TeamCountOutputTypeDefaultArgs instead
   */
  export type TeamCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    TeamCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use jobDefaultArgs instead
   */
  export type jobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = jobDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use job_applicationDefaultArgs instead
   */
  export type job_applicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    job_applicationDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use performance_reviewDefaultArgs instead
   */
  export type performance_reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    performance_reviewDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use teamDefaultArgs instead
   */
  export type teamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = teamDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use team_memberDefaultArgs instead
   */
  export type team_memberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    team_memberDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
