
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
 * Model UserAuthToken
 * 
 */
export type UserAuthToken = $Result.DefaultSelection<Prisma.$UserAuthTokenPayload>
/**
 * Model Author
 * 
 */
export type Author = $Result.DefaultSelection<Prisma.$AuthorPayload>
/**
 * Model BookAuthor
 * 
 */
export type BookAuthor = $Result.DefaultSelection<Prisma.$BookAuthorPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model BookTag
 * 
 */
export type BookTag = $Result.DefaultSelection<Prisma.$BookTagPayload>
/**
 * Model Book
 * 
 */
export type Book = $Result.DefaultSelection<Prisma.$BookPayload>
/**
 * Model Loan
 * 
 */
export type Loan = $Result.DefaultSelection<Prisma.$LoanPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SexEnum: {
  M: 'M',
  F: 'F',
  N: 'N'
};

export type SexEnum = (typeof SexEnum)[keyof typeof SexEnum]


export const UserRole: {
  ADMIN: 'ADMIN',
  LIBRARIAN: 'LIBRARIAN',
  MEMBER: 'MEMBER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const StatusEnum: {
  A: 'A',
  I: 'I',
  E: 'E',
  D: 'D',
  V: 'V'
};

export type StatusEnum = (typeof StatusEnum)[keyof typeof StatusEnum]

}

export type SexEnum = $Enums.SexEnum

export const SexEnum: typeof $Enums.SexEnum

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type StatusEnum = $Enums.StatusEnum

export const StatusEnum: typeof $Enums.StatusEnum

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
   * `prisma.userAuthToken`: Exposes CRUD operations for the **UserAuthToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAuthTokens
    * const userAuthTokens = await prisma.userAuthToken.findMany()
    * ```
    */
  get userAuthToken(): Prisma.UserAuthTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.author`: Exposes CRUD operations for the **Author** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Authors
    * const authors = await prisma.author.findMany()
    * ```
    */
  get author(): Prisma.AuthorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookAuthor`: Exposes CRUD operations for the **BookAuthor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookAuthors
    * const bookAuthors = await prisma.bookAuthor.findMany()
    * ```
    */
  get bookAuthor(): Prisma.BookAuthorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookTag`: Exposes CRUD operations for the **BookTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookTags
    * const bookTags = await prisma.bookTag.findMany()
    * ```
    */
  get bookTag(): Prisma.BookTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.book`: Exposes CRUD operations for the **Book** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Books
    * const books = await prisma.book.findMany()
    * ```
    */
  get book(): Prisma.BookDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.loan`: Exposes CRUD operations for the **Loan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Loans
    * const loans = await prisma.loan.findMany()
    * ```
    */
  get loan(): Prisma.LoanDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    UserAuthToken: 'UserAuthToken',
    Author: 'Author',
    BookAuthor: 'BookAuthor',
    Tag: 'Tag',
    BookTag: 'BookTag',
    Book: 'Book',
    Loan: 'Loan'
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
      modelProps: "user" | "userAuthToken" | "author" | "bookAuthor" | "tag" | "bookTag" | "book" | "loan"
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
      UserAuthToken: {
        payload: Prisma.$UserAuthTokenPayload<ExtArgs>
        fields: Prisma.UserAuthTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserAuthTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuthTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserAuthTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuthTokenPayload>
          }
          findFirst: {
            args: Prisma.UserAuthTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuthTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserAuthTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuthTokenPayload>
          }
          findMany: {
            args: Prisma.UserAuthTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuthTokenPayload>[]
          }
          create: {
            args: Prisma.UserAuthTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuthTokenPayload>
          }
          createMany: {
            args: Prisma.UserAuthTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserAuthTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuthTokenPayload>[]
          }
          delete: {
            args: Prisma.UserAuthTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuthTokenPayload>
          }
          update: {
            args: Prisma.UserAuthTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuthTokenPayload>
          }
          deleteMany: {
            args: Prisma.UserAuthTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserAuthTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserAuthTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuthTokenPayload>[]
          }
          upsert: {
            args: Prisma.UserAuthTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuthTokenPayload>
          }
          aggregate: {
            args: Prisma.UserAuthTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserAuthToken>
          }
          groupBy: {
            args: Prisma.UserAuthTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserAuthTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserAuthTokenCountArgs<ExtArgs>
            result: $Utils.Optional<UserAuthTokenCountAggregateOutputType> | number
          }
        }
      }
      Author: {
        payload: Prisma.$AuthorPayload<ExtArgs>
        fields: Prisma.AuthorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          findFirst: {
            args: Prisma.AuthorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          findMany: {
            args: Prisma.AuthorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>[]
          }
          create: {
            args: Prisma.AuthorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          createMany: {
            args: Prisma.AuthorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>[]
          }
          delete: {
            args: Prisma.AuthorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          update: {
            args: Prisma.AuthorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          deleteMany: {
            args: Prisma.AuthorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuthorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>[]
          }
          upsert: {
            args: Prisma.AuthorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          aggregate: {
            args: Prisma.AuthorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthor>
          }
          groupBy: {
            args: Prisma.AuthorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthorGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthorCountArgs<ExtArgs>
            result: $Utils.Optional<AuthorCountAggregateOutputType> | number
          }
        }
      }
      BookAuthor: {
        payload: Prisma.$BookAuthorPayload<ExtArgs>
        fields: Prisma.BookAuthorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookAuthorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookAuthorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookAuthorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookAuthorPayload>
          }
          findFirst: {
            args: Prisma.BookAuthorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookAuthorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookAuthorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookAuthorPayload>
          }
          findMany: {
            args: Prisma.BookAuthorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookAuthorPayload>[]
          }
          create: {
            args: Prisma.BookAuthorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookAuthorPayload>
          }
          createMany: {
            args: Prisma.BookAuthorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookAuthorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookAuthorPayload>[]
          }
          delete: {
            args: Prisma.BookAuthorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookAuthorPayload>
          }
          update: {
            args: Prisma.BookAuthorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookAuthorPayload>
          }
          deleteMany: {
            args: Prisma.BookAuthorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookAuthorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookAuthorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookAuthorPayload>[]
          }
          upsert: {
            args: Prisma.BookAuthorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookAuthorPayload>
          }
          aggregate: {
            args: Prisma.BookAuthorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookAuthor>
          }
          groupBy: {
            args: Prisma.BookAuthorGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookAuthorGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookAuthorCountArgs<ExtArgs>
            result: $Utils.Optional<BookAuthorCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      BookTag: {
        payload: Prisma.$BookTagPayload<ExtArgs>
        fields: Prisma.BookTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookTagPayload>
          }
          findFirst: {
            args: Prisma.BookTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookTagPayload>
          }
          findMany: {
            args: Prisma.BookTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookTagPayload>[]
          }
          create: {
            args: Prisma.BookTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookTagPayload>
          }
          createMany: {
            args: Prisma.BookTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookTagPayload>[]
          }
          delete: {
            args: Prisma.BookTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookTagPayload>
          }
          update: {
            args: Prisma.BookTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookTagPayload>
          }
          deleteMany: {
            args: Prisma.BookTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookTagPayload>[]
          }
          upsert: {
            args: Prisma.BookTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookTagPayload>
          }
          aggregate: {
            args: Prisma.BookTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookTag>
          }
          groupBy: {
            args: Prisma.BookTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookTagCountArgs<ExtArgs>
            result: $Utils.Optional<BookTagCountAggregateOutputType> | number
          }
        }
      }
      Book: {
        payload: Prisma.$BookPayload<ExtArgs>
        fields: Prisma.BookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findFirst: {
            args: Prisma.BookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findMany: {
            args: Prisma.BookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          create: {
            args: Prisma.BookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          createMany: {
            args: Prisma.BookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          delete: {
            args: Prisma.BookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          update: {
            args: Prisma.BookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          deleteMany: {
            args: Prisma.BookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          upsert: {
            args: Prisma.BookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          aggregate: {
            args: Prisma.BookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBook>
          }
          groupBy: {
            args: Prisma.BookGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookCountArgs<ExtArgs>
            result: $Utils.Optional<BookCountAggregateOutputType> | number
          }
        }
      }
      Loan: {
        payload: Prisma.$LoanPayload<ExtArgs>
        fields: Prisma.LoanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LoanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LoanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPayload>
          }
          findFirst: {
            args: Prisma.LoanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LoanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPayload>
          }
          findMany: {
            args: Prisma.LoanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPayload>[]
          }
          create: {
            args: Prisma.LoanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPayload>
          }
          createMany: {
            args: Prisma.LoanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LoanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPayload>[]
          }
          delete: {
            args: Prisma.LoanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPayload>
          }
          update: {
            args: Prisma.LoanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPayload>
          }
          deleteMany: {
            args: Prisma.LoanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LoanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LoanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPayload>[]
          }
          upsert: {
            args: Prisma.LoanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPayload>
          }
          aggregate: {
            args: Prisma.LoanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLoan>
          }
          groupBy: {
            args: Prisma.LoanGroupByArgs<ExtArgs>
            result: $Utils.Optional<LoanGroupByOutputType>[]
          }
          count: {
            args: Prisma.LoanCountArgs<ExtArgs>
            result: $Utils.Optional<LoanCountAggregateOutputType> | number
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
    userAuthToken?: UserAuthTokenOmit
    author?: AuthorOmit
    bookAuthor?: BookAuthorOmit
    tag?: TagOmit
    bookTag?: BookTagOmit
    book?: BookOmit
    loan?: LoanOmit
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
    auth_tokens: number
    created_authors: number
    updated_authors: number
    created_books: number
    updated_books: number
    created_book_authors: number
    updated_book_authors: number
    created_tags: number
    updated_tags: number
    created_book_tags: number
    updated_book_tags: number
    created_loans: number
    updated_loans: number
    user_loans: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth_tokens?: boolean | UserCountOutputTypeCountAuth_tokensArgs
    created_authors?: boolean | UserCountOutputTypeCountCreated_authorsArgs
    updated_authors?: boolean | UserCountOutputTypeCountUpdated_authorsArgs
    created_books?: boolean | UserCountOutputTypeCountCreated_booksArgs
    updated_books?: boolean | UserCountOutputTypeCountUpdated_booksArgs
    created_book_authors?: boolean | UserCountOutputTypeCountCreated_book_authorsArgs
    updated_book_authors?: boolean | UserCountOutputTypeCountUpdated_book_authorsArgs
    created_tags?: boolean | UserCountOutputTypeCountCreated_tagsArgs
    updated_tags?: boolean | UserCountOutputTypeCountUpdated_tagsArgs
    created_book_tags?: boolean | UserCountOutputTypeCountCreated_book_tagsArgs
    updated_book_tags?: boolean | UserCountOutputTypeCountUpdated_book_tagsArgs
    created_loans?: boolean | UserCountOutputTypeCountCreated_loansArgs
    updated_loans?: boolean | UserCountOutputTypeCountUpdated_loansArgs
    user_loans?: boolean | UserCountOutputTypeCountUser_loansArgs
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
  export type UserCountOutputTypeCountAuth_tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAuthTokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreated_authorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthorWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUpdated_authorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthorWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreated_booksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUpdated_booksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreated_book_authorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookAuthorWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUpdated_book_authorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookAuthorWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreated_tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUpdated_tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreated_book_tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookTagWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUpdated_book_tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookTagWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreated_loansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoanWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUpdated_loansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoanWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUser_loansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoanWhereInput
  }


  /**
   * Count Type AuthorCountOutputType
   */

  export type AuthorCountOutputType = {
    books: number
  }

  export type AuthorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | AuthorCountOutputTypeCountBooksArgs
  }

  // Custom InputTypes
  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorCountOutputType
     */
    select?: AuthorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeCountBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookAuthorWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    books: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | TagCountOutputTypeCountBooksArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookTagWhereInput
  }


  /**
   * Count Type BookCountOutputType
   */

  export type BookCountOutputType = {
    authors: number
    tags: number
    loans: number
  }

  export type BookCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authors?: boolean | BookCountOutputTypeCountAuthorsArgs
    tags?: boolean | BookCountOutputTypeCountTagsArgs
    loans?: boolean | BookCountOutputTypeCountLoansArgs
  }

  // Custom InputTypes
  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCountOutputType
     */
    select?: BookCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountAuthorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookAuthorWhereInput
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookTagWhereInput
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountLoansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoanWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: bigint | null
  }

  export type UserMinAggregateOutputType = {
    id: bigint | null
    slug: string | null
    created_at: Date | null
    name: string | null
    display_name: string | null
    sex: $Enums.SexEnum | null
    login: string | null
    status: $Enums.StatusEnum | null
    password: string | null
    email: string | null
    role: $Enums.UserRole | null
  }

  export type UserMaxAggregateOutputType = {
    id: bigint | null
    slug: string | null
    created_at: Date | null
    name: string | null
    display_name: string | null
    sex: $Enums.SexEnum | null
    login: string | null
    status: $Enums.StatusEnum | null
    password: string | null
    email: string | null
    role: $Enums.UserRole | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    slug: number
    created_at: number
    name: number
    display_name: number
    sex: number
    login: number
    status: number
    password: number
    email: number
    role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    slug?: true
    created_at?: true
    name?: true
    display_name?: true
    sex?: true
    login?: true
    status?: true
    password?: true
    email?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    slug?: true
    created_at?: true
    name?: true
    display_name?: true
    sex?: true
    login?: true
    status?: true
    password?: true
    email?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    slug?: true
    created_at?: true
    name?: true
    display_name?: true
    sex?: true
    login?: true
    status?: true
    password?: true
    email?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: bigint
    slug: string
    created_at: Date
    name: string
    display_name: string
    sex: $Enums.SexEnum | null
    login: string
    status: $Enums.StatusEnum
    password: string
    email: string
    role: $Enums.UserRole
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    slug?: boolean
    created_at?: boolean
    name?: boolean
    display_name?: boolean
    sex?: boolean
    login?: boolean
    status?: boolean
    password?: boolean
    email?: boolean
    role?: boolean
    auth_tokens?: boolean | User$auth_tokensArgs<ExtArgs>
    created_authors?: boolean | User$created_authorsArgs<ExtArgs>
    updated_authors?: boolean | User$updated_authorsArgs<ExtArgs>
    created_books?: boolean | User$created_booksArgs<ExtArgs>
    updated_books?: boolean | User$updated_booksArgs<ExtArgs>
    created_book_authors?: boolean | User$created_book_authorsArgs<ExtArgs>
    updated_book_authors?: boolean | User$updated_book_authorsArgs<ExtArgs>
    created_tags?: boolean | User$created_tagsArgs<ExtArgs>
    updated_tags?: boolean | User$updated_tagsArgs<ExtArgs>
    created_book_tags?: boolean | User$created_book_tagsArgs<ExtArgs>
    updated_book_tags?: boolean | User$updated_book_tagsArgs<ExtArgs>
    created_loans?: boolean | User$created_loansArgs<ExtArgs>
    updated_loans?: boolean | User$updated_loansArgs<ExtArgs>
    user_loans?: boolean | User$user_loansArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    created_at?: boolean
    name?: boolean
    display_name?: boolean
    sex?: boolean
    login?: boolean
    status?: boolean
    password?: boolean
    email?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    created_at?: boolean
    name?: boolean
    display_name?: boolean
    sex?: boolean
    login?: boolean
    status?: boolean
    password?: boolean
    email?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    slug?: boolean
    created_at?: boolean
    name?: boolean
    display_name?: boolean
    sex?: boolean
    login?: boolean
    status?: boolean
    password?: boolean
    email?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "created_at" | "name" | "display_name" | "sex" | "login" | "status" | "password" | "email" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth_tokens?: boolean | User$auth_tokensArgs<ExtArgs>
    created_authors?: boolean | User$created_authorsArgs<ExtArgs>
    updated_authors?: boolean | User$updated_authorsArgs<ExtArgs>
    created_books?: boolean | User$created_booksArgs<ExtArgs>
    updated_books?: boolean | User$updated_booksArgs<ExtArgs>
    created_book_authors?: boolean | User$created_book_authorsArgs<ExtArgs>
    updated_book_authors?: boolean | User$updated_book_authorsArgs<ExtArgs>
    created_tags?: boolean | User$created_tagsArgs<ExtArgs>
    updated_tags?: boolean | User$updated_tagsArgs<ExtArgs>
    created_book_tags?: boolean | User$created_book_tagsArgs<ExtArgs>
    updated_book_tags?: boolean | User$updated_book_tagsArgs<ExtArgs>
    created_loans?: boolean | User$created_loansArgs<ExtArgs>
    updated_loans?: boolean | User$updated_loansArgs<ExtArgs>
    user_loans?: boolean | User$user_loansArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      auth_tokens: Prisma.$UserAuthTokenPayload<ExtArgs>[]
      created_authors: Prisma.$AuthorPayload<ExtArgs>[]
      updated_authors: Prisma.$AuthorPayload<ExtArgs>[]
      created_books: Prisma.$BookPayload<ExtArgs>[]
      updated_books: Prisma.$BookPayload<ExtArgs>[]
      created_book_authors: Prisma.$BookAuthorPayload<ExtArgs>[]
      updated_book_authors: Prisma.$BookAuthorPayload<ExtArgs>[]
      created_tags: Prisma.$TagPayload<ExtArgs>[]
      updated_tags: Prisma.$TagPayload<ExtArgs>[]
      created_book_tags: Prisma.$BookTagPayload<ExtArgs>[]
      updated_book_tags: Prisma.$BookTagPayload<ExtArgs>[]
      created_loans: Prisma.$LoanPayload<ExtArgs>[]
      updated_loans: Prisma.$LoanPayload<ExtArgs>[]
      user_loans: Prisma.$LoanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      slug: string
      created_at: Date
      name: string
      display_name: string
      sex: $Enums.SexEnum | null
      login: string
      status: $Enums.StatusEnum
      password: string
      email: string
      role: $Enums.UserRole
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
    auth_tokens<T extends User$auth_tokensArgs<ExtArgs> = {}>(args?: Subset<T, User$auth_tokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAuthTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    created_authors<T extends User$created_authorsArgs<ExtArgs> = {}>(args?: Subset<T, User$created_authorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    updated_authors<T extends User$updated_authorsArgs<ExtArgs> = {}>(args?: Subset<T, User$updated_authorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    created_books<T extends User$created_booksArgs<ExtArgs> = {}>(args?: Subset<T, User$created_booksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    updated_books<T extends User$updated_booksArgs<ExtArgs> = {}>(args?: Subset<T, User$updated_booksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    created_book_authors<T extends User$created_book_authorsArgs<ExtArgs> = {}>(args?: Subset<T, User$created_book_authorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookAuthorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    updated_book_authors<T extends User$updated_book_authorsArgs<ExtArgs> = {}>(args?: Subset<T, User$updated_book_authorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookAuthorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    created_tags<T extends User$created_tagsArgs<ExtArgs> = {}>(args?: Subset<T, User$created_tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    updated_tags<T extends User$updated_tagsArgs<ExtArgs> = {}>(args?: Subset<T, User$updated_tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    created_book_tags<T extends User$created_book_tagsArgs<ExtArgs> = {}>(args?: Subset<T, User$created_book_tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    updated_book_tags<T extends User$updated_book_tagsArgs<ExtArgs> = {}>(args?: Subset<T, User$updated_book_tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    created_loans<T extends User$created_loansArgs<ExtArgs> = {}>(args?: Subset<T, User$created_loansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    updated_loans<T extends User$updated_loansArgs<ExtArgs> = {}>(args?: Subset<T, User$updated_loansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_loans<T extends User$user_loansArgs<ExtArgs> = {}>(args?: Subset<T, User$user_loansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'BigInt'>
    readonly slug: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly name: FieldRef<"User", 'String'>
    readonly display_name: FieldRef<"User", 'String'>
    readonly sex: FieldRef<"User", 'SexEnum'>
    readonly login: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'StatusEnum'>
    readonly password: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
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
   * User.auth_tokens
   */
  export type User$auth_tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuthToken
     */
    select?: UserAuthTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuthToken
     */
    omit?: UserAuthTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuthTokenInclude<ExtArgs> | null
    where?: UserAuthTokenWhereInput
    orderBy?: UserAuthTokenOrderByWithRelationInput | UserAuthTokenOrderByWithRelationInput[]
    cursor?: UserAuthTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAuthTokenScalarFieldEnum | UserAuthTokenScalarFieldEnum[]
  }

  /**
   * User.created_authors
   */
  export type User$created_authorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    where?: AuthorWhereInput
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    cursor?: AuthorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * User.updated_authors
   */
  export type User$updated_authorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    where?: AuthorWhereInput
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    cursor?: AuthorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * User.created_books
   */
  export type User$created_booksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    where?: BookWhereInput
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    cursor?: BookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * User.updated_books
   */
  export type User$updated_booksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    where?: BookWhereInput
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    cursor?: BookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * User.created_book_authors
   */
  export type User$created_book_authorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookAuthor
     */
    select?: BookAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookAuthor
     */
    omit?: BookAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAuthorInclude<ExtArgs> | null
    where?: BookAuthorWhereInput
    orderBy?: BookAuthorOrderByWithRelationInput | BookAuthorOrderByWithRelationInput[]
    cursor?: BookAuthorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookAuthorScalarFieldEnum | BookAuthorScalarFieldEnum[]
  }

  /**
   * User.updated_book_authors
   */
  export type User$updated_book_authorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookAuthor
     */
    select?: BookAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookAuthor
     */
    omit?: BookAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAuthorInclude<ExtArgs> | null
    where?: BookAuthorWhereInput
    orderBy?: BookAuthorOrderByWithRelationInput | BookAuthorOrderByWithRelationInput[]
    cursor?: BookAuthorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookAuthorScalarFieldEnum | BookAuthorScalarFieldEnum[]
  }

  /**
   * User.created_tags
   */
  export type User$created_tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    where?: TagWhereInput
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    cursor?: TagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * User.updated_tags
   */
  export type User$updated_tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    where?: TagWhereInput
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    cursor?: TagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * User.created_book_tags
   */
  export type User$created_book_tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookTag
     */
    select?: BookTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookTag
     */
    omit?: BookTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookTagInclude<ExtArgs> | null
    where?: BookTagWhereInput
    orderBy?: BookTagOrderByWithRelationInput | BookTagOrderByWithRelationInput[]
    cursor?: BookTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookTagScalarFieldEnum | BookTagScalarFieldEnum[]
  }

  /**
   * User.updated_book_tags
   */
  export type User$updated_book_tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookTag
     */
    select?: BookTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookTag
     */
    omit?: BookTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookTagInclude<ExtArgs> | null
    where?: BookTagWhereInput
    orderBy?: BookTagOrderByWithRelationInput | BookTagOrderByWithRelationInput[]
    cursor?: BookTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookTagScalarFieldEnum | BookTagScalarFieldEnum[]
  }

  /**
   * User.created_loans
   */
  export type User$created_loansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loan
     */
    omit?: LoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    where?: LoanWhereInput
    orderBy?: LoanOrderByWithRelationInput | LoanOrderByWithRelationInput[]
    cursor?: LoanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoanScalarFieldEnum | LoanScalarFieldEnum[]
  }

  /**
   * User.updated_loans
   */
  export type User$updated_loansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loan
     */
    omit?: LoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    where?: LoanWhereInput
    orderBy?: LoanOrderByWithRelationInput | LoanOrderByWithRelationInput[]
    cursor?: LoanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoanScalarFieldEnum | LoanScalarFieldEnum[]
  }

  /**
   * User.user_loans
   */
  export type User$user_loansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loan
     */
    omit?: LoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    where?: LoanWhereInput
    orderBy?: LoanOrderByWithRelationInput | LoanOrderByWithRelationInput[]
    cursor?: LoanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoanScalarFieldEnum | LoanScalarFieldEnum[]
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
   * Model UserAuthToken
   */

  export type AggregateUserAuthToken = {
    _count: UserAuthTokenCountAggregateOutputType | null
    _avg: UserAuthTokenAvgAggregateOutputType | null
    _sum: UserAuthTokenSumAggregateOutputType | null
    _min: UserAuthTokenMinAggregateOutputType | null
    _max: UserAuthTokenMaxAggregateOutputType | null
  }

  export type UserAuthTokenAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type UserAuthTokenSumAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
  }

  export type UserAuthTokenMinAggregateOutputType = {
    id: bigint | null
    slug: string | null
    created_at: Date | null
    updated_at: Date | null
    last_used_at: Date | null
    created_ip: string | null
    last_used_ip: string | null
    status: $Enums.StatusEnum | null
    jwt_token: string | null
    jwt_secret: string | null
    keep: boolean | null
    user_id: bigint | null
  }

  export type UserAuthTokenMaxAggregateOutputType = {
    id: bigint | null
    slug: string | null
    created_at: Date | null
    updated_at: Date | null
    last_used_at: Date | null
    created_ip: string | null
    last_used_ip: string | null
    status: $Enums.StatusEnum | null
    jwt_token: string | null
    jwt_secret: string | null
    keep: boolean | null
    user_id: bigint | null
  }

  export type UserAuthTokenCountAggregateOutputType = {
    id: number
    slug: number
    created_at: number
    updated_at: number
    last_used_at: number
    created_ip: number
    last_used_ip: number
    status: number
    jwt_token: number
    jwt_secret: number
    keep: number
    user_id: number
    _all: number
  }


  export type UserAuthTokenAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type UserAuthTokenSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type UserAuthTokenMinAggregateInputType = {
    id?: true
    slug?: true
    created_at?: true
    updated_at?: true
    last_used_at?: true
    created_ip?: true
    last_used_ip?: true
    status?: true
    jwt_token?: true
    jwt_secret?: true
    keep?: true
    user_id?: true
  }

  export type UserAuthTokenMaxAggregateInputType = {
    id?: true
    slug?: true
    created_at?: true
    updated_at?: true
    last_used_at?: true
    created_ip?: true
    last_used_ip?: true
    status?: true
    jwt_token?: true
    jwt_secret?: true
    keep?: true
    user_id?: true
  }

  export type UserAuthTokenCountAggregateInputType = {
    id?: true
    slug?: true
    created_at?: true
    updated_at?: true
    last_used_at?: true
    created_ip?: true
    last_used_ip?: true
    status?: true
    jwt_token?: true
    jwt_secret?: true
    keep?: true
    user_id?: true
    _all?: true
  }

  export type UserAuthTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAuthToken to aggregate.
     */
    where?: UserAuthTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAuthTokens to fetch.
     */
    orderBy?: UserAuthTokenOrderByWithRelationInput | UserAuthTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserAuthTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAuthTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAuthTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserAuthTokens
    **/
    _count?: true | UserAuthTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAuthTokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserAuthTokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAuthTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAuthTokenMaxAggregateInputType
  }

  export type GetUserAuthTokenAggregateType<T extends UserAuthTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAuthToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAuthToken[P]>
      : GetScalarType<T[P], AggregateUserAuthToken[P]>
  }




  export type UserAuthTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAuthTokenWhereInput
    orderBy?: UserAuthTokenOrderByWithAggregationInput | UserAuthTokenOrderByWithAggregationInput[]
    by: UserAuthTokenScalarFieldEnum[] | UserAuthTokenScalarFieldEnum
    having?: UserAuthTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAuthTokenCountAggregateInputType | true
    _avg?: UserAuthTokenAvgAggregateInputType
    _sum?: UserAuthTokenSumAggregateInputType
    _min?: UserAuthTokenMinAggregateInputType
    _max?: UserAuthTokenMaxAggregateInputType
  }

  export type UserAuthTokenGroupByOutputType = {
    id: bigint
    slug: string
    created_at: Date
    updated_at: Date | null
    last_used_at: Date | null
    created_ip: string
    last_used_ip: string | null
    status: $Enums.StatusEnum
    jwt_token: string
    jwt_secret: string
    keep: boolean
    user_id: bigint
    _count: UserAuthTokenCountAggregateOutputType | null
    _avg: UserAuthTokenAvgAggregateOutputType | null
    _sum: UserAuthTokenSumAggregateOutputType | null
    _min: UserAuthTokenMinAggregateOutputType | null
    _max: UserAuthTokenMaxAggregateOutputType | null
  }

  type GetUserAuthTokenGroupByPayload<T extends UserAuthTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserAuthTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAuthTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAuthTokenGroupByOutputType[P]>
            : GetScalarType<T[P], UserAuthTokenGroupByOutputType[P]>
        }
      >
    >


  export type UserAuthTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    created_at?: boolean
    updated_at?: boolean
    last_used_at?: boolean
    created_ip?: boolean
    last_used_ip?: boolean
    status?: boolean
    jwt_token?: boolean
    jwt_secret?: boolean
    keep?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAuthToken"]>

  export type UserAuthTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    created_at?: boolean
    updated_at?: boolean
    last_used_at?: boolean
    created_ip?: boolean
    last_used_ip?: boolean
    status?: boolean
    jwt_token?: boolean
    jwt_secret?: boolean
    keep?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAuthToken"]>

  export type UserAuthTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    created_at?: boolean
    updated_at?: boolean
    last_used_at?: boolean
    created_ip?: boolean
    last_used_ip?: boolean
    status?: boolean
    jwt_token?: boolean
    jwt_secret?: boolean
    keep?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAuthToken"]>

  export type UserAuthTokenSelectScalar = {
    id?: boolean
    slug?: boolean
    created_at?: boolean
    updated_at?: boolean
    last_used_at?: boolean
    created_ip?: boolean
    last_used_ip?: boolean
    status?: boolean
    jwt_token?: boolean
    jwt_secret?: boolean
    keep?: boolean
    user_id?: boolean
  }

  export type UserAuthTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "created_at" | "updated_at" | "last_used_at" | "created_ip" | "last_used_ip" | "status" | "jwt_token" | "jwt_secret" | "keep" | "user_id", ExtArgs["result"]["userAuthToken"]>
  export type UserAuthTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserAuthTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserAuthTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserAuthTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserAuthToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      slug: string
      created_at: Date
      updated_at: Date | null
      last_used_at: Date | null
      created_ip: string
      last_used_ip: string | null
      status: $Enums.StatusEnum
      jwt_token: string
      jwt_secret: string
      keep: boolean
      user_id: bigint
    }, ExtArgs["result"]["userAuthToken"]>
    composites: {}
  }

  type UserAuthTokenGetPayload<S extends boolean | null | undefined | UserAuthTokenDefaultArgs> = $Result.GetResult<Prisma.$UserAuthTokenPayload, S>

  type UserAuthTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserAuthTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserAuthTokenCountAggregateInputType | true
    }

  export interface UserAuthTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserAuthToken'], meta: { name: 'UserAuthToken' } }
    /**
     * Find zero or one UserAuthToken that matches the filter.
     * @param {UserAuthTokenFindUniqueArgs} args - Arguments to find a UserAuthToken
     * @example
     * // Get one UserAuthToken
     * const userAuthToken = await prisma.userAuthToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserAuthTokenFindUniqueArgs>(args: SelectSubset<T, UserAuthTokenFindUniqueArgs<ExtArgs>>): Prisma__UserAuthTokenClient<$Result.GetResult<Prisma.$UserAuthTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserAuthToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserAuthTokenFindUniqueOrThrowArgs} args - Arguments to find a UserAuthToken
     * @example
     * // Get one UserAuthToken
     * const userAuthToken = await prisma.userAuthToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserAuthTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, UserAuthTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserAuthTokenClient<$Result.GetResult<Prisma.$UserAuthTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAuthToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuthTokenFindFirstArgs} args - Arguments to find a UserAuthToken
     * @example
     * // Get one UserAuthToken
     * const userAuthToken = await prisma.userAuthToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserAuthTokenFindFirstArgs>(args?: SelectSubset<T, UserAuthTokenFindFirstArgs<ExtArgs>>): Prisma__UserAuthTokenClient<$Result.GetResult<Prisma.$UserAuthTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAuthToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuthTokenFindFirstOrThrowArgs} args - Arguments to find a UserAuthToken
     * @example
     * // Get one UserAuthToken
     * const userAuthToken = await prisma.userAuthToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserAuthTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, UserAuthTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserAuthTokenClient<$Result.GetResult<Prisma.$UserAuthTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserAuthTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuthTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAuthTokens
     * const userAuthTokens = await prisma.userAuthToken.findMany()
     * 
     * // Get first 10 UserAuthTokens
     * const userAuthTokens = await prisma.userAuthToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userAuthTokenWithIdOnly = await prisma.userAuthToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserAuthTokenFindManyArgs>(args?: SelectSubset<T, UserAuthTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAuthTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserAuthToken.
     * @param {UserAuthTokenCreateArgs} args - Arguments to create a UserAuthToken.
     * @example
     * // Create one UserAuthToken
     * const UserAuthToken = await prisma.userAuthToken.create({
     *   data: {
     *     // ... data to create a UserAuthToken
     *   }
     * })
     * 
     */
    create<T extends UserAuthTokenCreateArgs>(args: SelectSubset<T, UserAuthTokenCreateArgs<ExtArgs>>): Prisma__UserAuthTokenClient<$Result.GetResult<Prisma.$UserAuthTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserAuthTokens.
     * @param {UserAuthTokenCreateManyArgs} args - Arguments to create many UserAuthTokens.
     * @example
     * // Create many UserAuthTokens
     * const userAuthToken = await prisma.userAuthToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserAuthTokenCreateManyArgs>(args?: SelectSubset<T, UserAuthTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserAuthTokens and returns the data saved in the database.
     * @param {UserAuthTokenCreateManyAndReturnArgs} args - Arguments to create many UserAuthTokens.
     * @example
     * // Create many UserAuthTokens
     * const userAuthToken = await prisma.userAuthToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserAuthTokens and only return the `id`
     * const userAuthTokenWithIdOnly = await prisma.userAuthToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserAuthTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, UserAuthTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAuthTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserAuthToken.
     * @param {UserAuthTokenDeleteArgs} args - Arguments to delete one UserAuthToken.
     * @example
     * // Delete one UserAuthToken
     * const UserAuthToken = await prisma.userAuthToken.delete({
     *   where: {
     *     // ... filter to delete one UserAuthToken
     *   }
     * })
     * 
     */
    delete<T extends UserAuthTokenDeleteArgs>(args: SelectSubset<T, UserAuthTokenDeleteArgs<ExtArgs>>): Prisma__UserAuthTokenClient<$Result.GetResult<Prisma.$UserAuthTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserAuthToken.
     * @param {UserAuthTokenUpdateArgs} args - Arguments to update one UserAuthToken.
     * @example
     * // Update one UserAuthToken
     * const userAuthToken = await prisma.userAuthToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserAuthTokenUpdateArgs>(args: SelectSubset<T, UserAuthTokenUpdateArgs<ExtArgs>>): Prisma__UserAuthTokenClient<$Result.GetResult<Prisma.$UserAuthTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserAuthTokens.
     * @param {UserAuthTokenDeleteManyArgs} args - Arguments to filter UserAuthTokens to delete.
     * @example
     * // Delete a few UserAuthTokens
     * const { count } = await prisma.userAuthToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserAuthTokenDeleteManyArgs>(args?: SelectSubset<T, UserAuthTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAuthTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuthTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAuthTokens
     * const userAuthToken = await prisma.userAuthToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserAuthTokenUpdateManyArgs>(args: SelectSubset<T, UserAuthTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAuthTokens and returns the data updated in the database.
     * @param {UserAuthTokenUpdateManyAndReturnArgs} args - Arguments to update many UserAuthTokens.
     * @example
     * // Update many UserAuthTokens
     * const userAuthToken = await prisma.userAuthToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserAuthTokens and only return the `id`
     * const userAuthTokenWithIdOnly = await prisma.userAuthToken.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserAuthTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, UserAuthTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAuthTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserAuthToken.
     * @param {UserAuthTokenUpsertArgs} args - Arguments to update or create a UserAuthToken.
     * @example
     * // Update or create a UserAuthToken
     * const userAuthToken = await prisma.userAuthToken.upsert({
     *   create: {
     *     // ... data to create a UserAuthToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAuthToken we want to update
     *   }
     * })
     */
    upsert<T extends UserAuthTokenUpsertArgs>(args: SelectSubset<T, UserAuthTokenUpsertArgs<ExtArgs>>): Prisma__UserAuthTokenClient<$Result.GetResult<Prisma.$UserAuthTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserAuthTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuthTokenCountArgs} args - Arguments to filter UserAuthTokens to count.
     * @example
     * // Count the number of UserAuthTokens
     * const count = await prisma.userAuthToken.count({
     *   where: {
     *     // ... the filter for the UserAuthTokens we want to count
     *   }
     * })
    **/
    count<T extends UserAuthTokenCountArgs>(
      args?: Subset<T, UserAuthTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAuthTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAuthToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuthTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAuthTokenAggregateArgs>(args: Subset<T, UserAuthTokenAggregateArgs>): Prisma.PrismaPromise<GetUserAuthTokenAggregateType<T>>

    /**
     * Group by UserAuthToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuthTokenGroupByArgs} args - Group by arguments.
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
      T extends UserAuthTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAuthTokenGroupByArgs['orderBy'] }
        : { orderBy?: UserAuthTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserAuthTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAuthTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserAuthToken model
   */
  readonly fields: UserAuthTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAuthToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserAuthTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserAuthToken model
   */
  interface UserAuthTokenFieldRefs {
    readonly id: FieldRef<"UserAuthToken", 'BigInt'>
    readonly slug: FieldRef<"UserAuthToken", 'String'>
    readonly created_at: FieldRef<"UserAuthToken", 'DateTime'>
    readonly updated_at: FieldRef<"UserAuthToken", 'DateTime'>
    readonly last_used_at: FieldRef<"UserAuthToken", 'DateTime'>
    readonly created_ip: FieldRef<"UserAuthToken", 'String'>
    readonly last_used_ip: FieldRef<"UserAuthToken", 'String'>
    readonly status: FieldRef<"UserAuthToken", 'StatusEnum'>
    readonly jwt_token: FieldRef<"UserAuthToken", 'String'>
    readonly jwt_secret: FieldRef<"UserAuthToken", 'String'>
    readonly keep: FieldRef<"UserAuthToken", 'Boolean'>
    readonly user_id: FieldRef<"UserAuthToken", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * UserAuthToken findUnique
   */
  export type UserAuthTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuthToken
     */
    select?: UserAuthTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuthToken
     */
    omit?: UserAuthTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuthTokenInclude<ExtArgs> | null
    /**
     * Filter, which UserAuthToken to fetch.
     */
    where: UserAuthTokenWhereUniqueInput
  }

  /**
   * UserAuthToken findUniqueOrThrow
   */
  export type UserAuthTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuthToken
     */
    select?: UserAuthTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuthToken
     */
    omit?: UserAuthTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuthTokenInclude<ExtArgs> | null
    /**
     * Filter, which UserAuthToken to fetch.
     */
    where: UserAuthTokenWhereUniqueInput
  }

  /**
   * UserAuthToken findFirst
   */
  export type UserAuthTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuthToken
     */
    select?: UserAuthTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuthToken
     */
    omit?: UserAuthTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuthTokenInclude<ExtArgs> | null
    /**
     * Filter, which UserAuthToken to fetch.
     */
    where?: UserAuthTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAuthTokens to fetch.
     */
    orderBy?: UserAuthTokenOrderByWithRelationInput | UserAuthTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAuthTokens.
     */
    cursor?: UserAuthTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAuthTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAuthTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAuthTokens.
     */
    distinct?: UserAuthTokenScalarFieldEnum | UserAuthTokenScalarFieldEnum[]
  }

  /**
   * UserAuthToken findFirstOrThrow
   */
  export type UserAuthTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuthToken
     */
    select?: UserAuthTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuthToken
     */
    omit?: UserAuthTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuthTokenInclude<ExtArgs> | null
    /**
     * Filter, which UserAuthToken to fetch.
     */
    where?: UserAuthTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAuthTokens to fetch.
     */
    orderBy?: UserAuthTokenOrderByWithRelationInput | UserAuthTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAuthTokens.
     */
    cursor?: UserAuthTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAuthTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAuthTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAuthTokens.
     */
    distinct?: UserAuthTokenScalarFieldEnum | UserAuthTokenScalarFieldEnum[]
  }

  /**
   * UserAuthToken findMany
   */
  export type UserAuthTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuthToken
     */
    select?: UserAuthTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuthToken
     */
    omit?: UserAuthTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuthTokenInclude<ExtArgs> | null
    /**
     * Filter, which UserAuthTokens to fetch.
     */
    where?: UserAuthTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAuthTokens to fetch.
     */
    orderBy?: UserAuthTokenOrderByWithRelationInput | UserAuthTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserAuthTokens.
     */
    cursor?: UserAuthTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAuthTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAuthTokens.
     */
    skip?: number
    distinct?: UserAuthTokenScalarFieldEnum | UserAuthTokenScalarFieldEnum[]
  }

  /**
   * UserAuthToken create
   */
  export type UserAuthTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuthToken
     */
    select?: UserAuthTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuthToken
     */
    omit?: UserAuthTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuthTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a UserAuthToken.
     */
    data: XOR<UserAuthTokenCreateInput, UserAuthTokenUncheckedCreateInput>
  }

  /**
   * UserAuthToken createMany
   */
  export type UserAuthTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserAuthTokens.
     */
    data: UserAuthTokenCreateManyInput | UserAuthTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserAuthToken createManyAndReturn
   */
  export type UserAuthTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuthToken
     */
    select?: UserAuthTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuthToken
     */
    omit?: UserAuthTokenOmit<ExtArgs> | null
    /**
     * The data used to create many UserAuthTokens.
     */
    data: UserAuthTokenCreateManyInput | UserAuthTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuthTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserAuthToken update
   */
  export type UserAuthTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuthToken
     */
    select?: UserAuthTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuthToken
     */
    omit?: UserAuthTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuthTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a UserAuthToken.
     */
    data: XOR<UserAuthTokenUpdateInput, UserAuthTokenUncheckedUpdateInput>
    /**
     * Choose, which UserAuthToken to update.
     */
    where: UserAuthTokenWhereUniqueInput
  }

  /**
   * UserAuthToken updateMany
   */
  export type UserAuthTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserAuthTokens.
     */
    data: XOR<UserAuthTokenUpdateManyMutationInput, UserAuthTokenUncheckedUpdateManyInput>
    /**
     * Filter which UserAuthTokens to update
     */
    where?: UserAuthTokenWhereInput
    /**
     * Limit how many UserAuthTokens to update.
     */
    limit?: number
  }

  /**
   * UserAuthToken updateManyAndReturn
   */
  export type UserAuthTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuthToken
     */
    select?: UserAuthTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuthToken
     */
    omit?: UserAuthTokenOmit<ExtArgs> | null
    /**
     * The data used to update UserAuthTokens.
     */
    data: XOR<UserAuthTokenUpdateManyMutationInput, UserAuthTokenUncheckedUpdateManyInput>
    /**
     * Filter which UserAuthTokens to update
     */
    where?: UserAuthTokenWhereInput
    /**
     * Limit how many UserAuthTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuthTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserAuthToken upsert
   */
  export type UserAuthTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuthToken
     */
    select?: UserAuthTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuthToken
     */
    omit?: UserAuthTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuthTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the UserAuthToken to update in case it exists.
     */
    where: UserAuthTokenWhereUniqueInput
    /**
     * In case the UserAuthToken found by the `where` argument doesn't exist, create a new UserAuthToken with this data.
     */
    create: XOR<UserAuthTokenCreateInput, UserAuthTokenUncheckedCreateInput>
    /**
     * In case the UserAuthToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserAuthTokenUpdateInput, UserAuthTokenUncheckedUpdateInput>
  }

  /**
   * UserAuthToken delete
   */
  export type UserAuthTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuthToken
     */
    select?: UserAuthTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuthToken
     */
    omit?: UserAuthTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuthTokenInclude<ExtArgs> | null
    /**
     * Filter which UserAuthToken to delete.
     */
    where: UserAuthTokenWhereUniqueInput
  }

  /**
   * UserAuthToken deleteMany
   */
  export type UserAuthTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAuthTokens to delete
     */
    where?: UserAuthTokenWhereInput
    /**
     * Limit how many UserAuthTokens to delete.
     */
    limit?: number
  }

  /**
   * UserAuthToken without action
   */
  export type UserAuthTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuthToken
     */
    select?: UserAuthTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuthToken
     */
    omit?: UserAuthTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuthTokenInclude<ExtArgs> | null
  }


  /**
   * Model Author
   */

  export type AggregateAuthor = {
    _count: AuthorCountAggregateOutputType | null
    _avg: AuthorAvgAggregateOutputType | null
    _sum: AuthorSumAggregateOutputType | null
    _min: AuthorMinAggregateOutputType | null
    _max: AuthorMaxAggregateOutputType | null
  }

  export type AuthorAvgAggregateOutputType = {
    id: number | null
    created_by_user_id: number | null
    updated_by_user_id: number | null
  }

  export type AuthorSumAggregateOutputType = {
    id: bigint | null
    created_by_user_id: bigint | null
    updated_by_user_id: bigint | null
  }

  export type AuthorMinAggregateOutputType = {
    id: bigint | null
    slug: string | null
    created_at: Date | null
    created_by_user_id: bigint | null
    updated_at: Date | null
    updated_by_user_id: bigint | null
    name: string | null
    status: $Enums.StatusEnum | null
    description: string | null
    avatar_url: string | null
    is_spirit: boolean | null
  }

  export type AuthorMaxAggregateOutputType = {
    id: bigint | null
    slug: string | null
    created_at: Date | null
    created_by_user_id: bigint | null
    updated_at: Date | null
    updated_by_user_id: bigint | null
    name: string | null
    status: $Enums.StatusEnum | null
    description: string | null
    avatar_url: string | null
    is_spirit: boolean | null
  }

  export type AuthorCountAggregateOutputType = {
    id: number
    slug: number
    created_at: number
    created_by_user_id: number
    updated_at: number
    updated_by_user_id: number
    name: number
    status: number
    description: number
    avatar_url: number
    is_spirit: number
    _all: number
  }


  export type AuthorAvgAggregateInputType = {
    id?: true
    created_by_user_id?: true
    updated_by_user_id?: true
  }

  export type AuthorSumAggregateInputType = {
    id?: true
    created_by_user_id?: true
    updated_by_user_id?: true
  }

  export type AuthorMinAggregateInputType = {
    id?: true
    slug?: true
    created_at?: true
    created_by_user_id?: true
    updated_at?: true
    updated_by_user_id?: true
    name?: true
    status?: true
    description?: true
    avatar_url?: true
    is_spirit?: true
  }

  export type AuthorMaxAggregateInputType = {
    id?: true
    slug?: true
    created_at?: true
    created_by_user_id?: true
    updated_at?: true
    updated_by_user_id?: true
    name?: true
    status?: true
    description?: true
    avatar_url?: true
    is_spirit?: true
  }

  export type AuthorCountAggregateInputType = {
    id?: true
    slug?: true
    created_at?: true
    created_by_user_id?: true
    updated_at?: true
    updated_by_user_id?: true
    name?: true
    status?: true
    description?: true
    avatar_url?: true
    is_spirit?: true
    _all?: true
  }

  export type AuthorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Author to aggregate.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Authors
    **/
    _count?: true | AuthorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuthorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuthorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthorMaxAggregateInputType
  }

  export type GetAuthorAggregateType<T extends AuthorAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthor[P]>
      : GetScalarType<T[P], AggregateAuthor[P]>
  }




  export type AuthorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthorWhereInput
    orderBy?: AuthorOrderByWithAggregationInput | AuthorOrderByWithAggregationInput[]
    by: AuthorScalarFieldEnum[] | AuthorScalarFieldEnum
    having?: AuthorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthorCountAggregateInputType | true
    _avg?: AuthorAvgAggregateInputType
    _sum?: AuthorSumAggregateInputType
    _min?: AuthorMinAggregateInputType
    _max?: AuthorMaxAggregateInputType
  }

  export type AuthorGroupByOutputType = {
    id: bigint
    slug: string
    created_at: Date
    created_by_user_id: bigint
    updated_at: Date | null
    updated_by_user_id: bigint | null
    name: string
    status: $Enums.StatusEnum
    description: string | null
    avatar_url: string | null
    is_spirit: boolean
    _count: AuthorCountAggregateOutputType | null
    _avg: AuthorAvgAggregateOutputType | null
    _sum: AuthorSumAggregateOutputType | null
    _min: AuthorMinAggregateOutputType | null
    _max: AuthorMaxAggregateOutputType | null
  }

  type GetAuthorGroupByPayload<T extends AuthorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthorGroupByOutputType[P]>
            : GetScalarType<T[P], AuthorGroupByOutputType[P]>
        }
      >
    >


  export type AuthorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    created_at?: boolean
    created_by_user_id?: boolean
    updated_at?: boolean
    updated_by_user_id?: boolean
    name?: boolean
    status?: boolean
    description?: boolean
    avatar_url?: boolean
    is_spirit?: boolean
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
    updated_by_user?: boolean | Author$updated_by_userArgs<ExtArgs>
    books?: boolean | Author$booksArgs<ExtArgs>
    _count?: boolean | AuthorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["author"]>

  export type AuthorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    created_at?: boolean
    created_by_user_id?: boolean
    updated_at?: boolean
    updated_by_user_id?: boolean
    name?: boolean
    status?: boolean
    description?: boolean
    avatar_url?: boolean
    is_spirit?: boolean
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
    updated_by_user?: boolean | Author$updated_by_userArgs<ExtArgs>
  }, ExtArgs["result"]["author"]>

  export type AuthorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    created_at?: boolean
    created_by_user_id?: boolean
    updated_at?: boolean
    updated_by_user_id?: boolean
    name?: boolean
    status?: boolean
    description?: boolean
    avatar_url?: boolean
    is_spirit?: boolean
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
    updated_by_user?: boolean | Author$updated_by_userArgs<ExtArgs>
  }, ExtArgs["result"]["author"]>

  export type AuthorSelectScalar = {
    id?: boolean
    slug?: boolean
    created_at?: boolean
    created_by_user_id?: boolean
    updated_at?: boolean
    updated_by_user_id?: boolean
    name?: boolean
    status?: boolean
    description?: boolean
    avatar_url?: boolean
    is_spirit?: boolean
  }

  export type AuthorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "created_at" | "created_by_user_id" | "updated_at" | "updated_by_user_id" | "name" | "status" | "description" | "avatar_url" | "is_spirit", ExtArgs["result"]["author"]>
  export type AuthorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
    updated_by_user?: boolean | Author$updated_by_userArgs<ExtArgs>
    books?: boolean | Author$booksArgs<ExtArgs>
    _count?: boolean | AuthorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AuthorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
    updated_by_user?: boolean | Author$updated_by_userArgs<ExtArgs>
  }
  export type AuthorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
    updated_by_user?: boolean | Author$updated_by_userArgs<ExtArgs>
  }

  export type $AuthorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Author"
    objects: {
      created_by_user: Prisma.$UserPayload<ExtArgs>
      updated_by_user: Prisma.$UserPayload<ExtArgs> | null
      books: Prisma.$BookAuthorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      slug: string
      created_at: Date
      created_by_user_id: bigint
      updated_at: Date | null
      updated_by_user_id: bigint | null
      name: string
      status: $Enums.StatusEnum
      description: string | null
      avatar_url: string | null
      is_spirit: boolean
    }, ExtArgs["result"]["author"]>
    composites: {}
  }

  type AuthorGetPayload<S extends boolean | null | undefined | AuthorDefaultArgs> = $Result.GetResult<Prisma.$AuthorPayload, S>

  type AuthorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthorCountAggregateInputType | true
    }

  export interface AuthorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Author'], meta: { name: 'Author' } }
    /**
     * Find zero or one Author that matches the filter.
     * @param {AuthorFindUniqueArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthorFindUniqueArgs>(args: SelectSubset<T, AuthorFindUniqueArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Author that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthorFindUniqueOrThrowArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthorFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Author that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindFirstArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthorFindFirstArgs>(args?: SelectSubset<T, AuthorFindFirstArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Author that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindFirstOrThrowArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthorFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthorFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Authors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authors
     * const authors = await prisma.author.findMany()
     * 
     * // Get first 10 Authors
     * const authors = await prisma.author.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authorWithIdOnly = await prisma.author.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuthorFindManyArgs>(args?: SelectSubset<T, AuthorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Author.
     * @param {AuthorCreateArgs} args - Arguments to create a Author.
     * @example
     * // Create one Author
     * const Author = await prisma.author.create({
     *   data: {
     *     // ... data to create a Author
     *   }
     * })
     * 
     */
    create<T extends AuthorCreateArgs>(args: SelectSubset<T, AuthorCreateArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Authors.
     * @param {AuthorCreateManyArgs} args - Arguments to create many Authors.
     * @example
     * // Create many Authors
     * const author = await prisma.author.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthorCreateManyArgs>(args?: SelectSubset<T, AuthorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Authors and returns the data saved in the database.
     * @param {AuthorCreateManyAndReturnArgs} args - Arguments to create many Authors.
     * @example
     * // Create many Authors
     * const author = await prisma.author.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Authors and only return the `id`
     * const authorWithIdOnly = await prisma.author.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthorCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Author.
     * @param {AuthorDeleteArgs} args - Arguments to delete one Author.
     * @example
     * // Delete one Author
     * const Author = await prisma.author.delete({
     *   where: {
     *     // ... filter to delete one Author
     *   }
     * })
     * 
     */
    delete<T extends AuthorDeleteArgs>(args: SelectSubset<T, AuthorDeleteArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Author.
     * @param {AuthorUpdateArgs} args - Arguments to update one Author.
     * @example
     * // Update one Author
     * const author = await prisma.author.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthorUpdateArgs>(args: SelectSubset<T, AuthorUpdateArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Authors.
     * @param {AuthorDeleteManyArgs} args - Arguments to filter Authors to delete.
     * @example
     * // Delete a few Authors
     * const { count } = await prisma.author.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthorDeleteManyArgs>(args?: SelectSubset<T, AuthorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authors
     * const author = await prisma.author.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthorUpdateManyArgs>(args: SelectSubset<T, AuthorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authors and returns the data updated in the database.
     * @param {AuthorUpdateManyAndReturnArgs} args - Arguments to update many Authors.
     * @example
     * // Update many Authors
     * const author = await prisma.author.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Authors and only return the `id`
     * const authorWithIdOnly = await prisma.author.updateManyAndReturn({
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
    updateManyAndReturn<T extends AuthorUpdateManyAndReturnArgs>(args: SelectSubset<T, AuthorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Author.
     * @param {AuthorUpsertArgs} args - Arguments to update or create a Author.
     * @example
     * // Update or create a Author
     * const author = await prisma.author.upsert({
     *   create: {
     *     // ... data to create a Author
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Author we want to update
     *   }
     * })
     */
    upsert<T extends AuthorUpsertArgs>(args: SelectSubset<T, AuthorUpsertArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorCountArgs} args - Arguments to filter Authors to count.
     * @example
     * // Count the number of Authors
     * const count = await prisma.author.count({
     *   where: {
     *     // ... the filter for the Authors we want to count
     *   }
     * })
    **/
    count<T extends AuthorCountArgs>(
      args?: Subset<T, AuthorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuthorAggregateArgs>(args: Subset<T, AuthorAggregateArgs>): Prisma.PrismaPromise<GetAuthorAggregateType<T>>

    /**
     * Group by Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorGroupByArgs} args - Group by arguments.
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
      T extends AuthorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthorGroupByArgs['orderBy'] }
        : { orderBy?: AuthorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuthorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Author model
   */
  readonly fields: AuthorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Author.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    created_by_user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    updated_by_user<T extends Author$updated_by_userArgs<ExtArgs> = {}>(args?: Subset<T, Author$updated_by_userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    books<T extends Author$booksArgs<ExtArgs> = {}>(args?: Subset<T, Author$booksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookAuthorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Author model
   */
  interface AuthorFieldRefs {
    readonly id: FieldRef<"Author", 'BigInt'>
    readonly slug: FieldRef<"Author", 'String'>
    readonly created_at: FieldRef<"Author", 'DateTime'>
    readonly created_by_user_id: FieldRef<"Author", 'BigInt'>
    readonly updated_at: FieldRef<"Author", 'DateTime'>
    readonly updated_by_user_id: FieldRef<"Author", 'BigInt'>
    readonly name: FieldRef<"Author", 'String'>
    readonly status: FieldRef<"Author", 'StatusEnum'>
    readonly description: FieldRef<"Author", 'String'>
    readonly avatar_url: FieldRef<"Author", 'String'>
    readonly is_spirit: FieldRef<"Author", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Author findUnique
   */
  export type AuthorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where: AuthorWhereUniqueInput
  }

  /**
   * Author findUniqueOrThrow
   */
  export type AuthorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where: AuthorWhereUniqueInput
  }

  /**
   * Author findFirst
   */
  export type AuthorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authors.
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authors.
     */
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * Author findFirstOrThrow
   */
  export type AuthorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authors.
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authors.
     */
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * Author findMany
   */
  export type AuthorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Authors to fetch.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Authors.
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * Author create
   */
  export type AuthorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * The data needed to create a Author.
     */
    data: XOR<AuthorCreateInput, AuthorUncheckedCreateInput>
  }

  /**
   * Author createMany
   */
  export type AuthorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Authors.
     */
    data: AuthorCreateManyInput | AuthorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Author createManyAndReturn
   */
  export type AuthorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * The data used to create many Authors.
     */
    data: AuthorCreateManyInput | AuthorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Author update
   */
  export type AuthorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * The data needed to update a Author.
     */
    data: XOR<AuthorUpdateInput, AuthorUncheckedUpdateInput>
    /**
     * Choose, which Author to update.
     */
    where: AuthorWhereUniqueInput
  }

  /**
   * Author updateMany
   */
  export type AuthorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Authors.
     */
    data: XOR<AuthorUpdateManyMutationInput, AuthorUncheckedUpdateManyInput>
    /**
     * Filter which Authors to update
     */
    where?: AuthorWhereInput
    /**
     * Limit how many Authors to update.
     */
    limit?: number
  }

  /**
   * Author updateManyAndReturn
   */
  export type AuthorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * The data used to update Authors.
     */
    data: XOR<AuthorUpdateManyMutationInput, AuthorUncheckedUpdateManyInput>
    /**
     * Filter which Authors to update
     */
    where?: AuthorWhereInput
    /**
     * Limit how many Authors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Author upsert
   */
  export type AuthorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * The filter to search for the Author to update in case it exists.
     */
    where: AuthorWhereUniqueInput
    /**
     * In case the Author found by the `where` argument doesn't exist, create a new Author with this data.
     */
    create: XOR<AuthorCreateInput, AuthorUncheckedCreateInput>
    /**
     * In case the Author was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthorUpdateInput, AuthorUncheckedUpdateInput>
  }

  /**
   * Author delete
   */
  export type AuthorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter which Author to delete.
     */
    where: AuthorWhereUniqueInput
  }

  /**
   * Author deleteMany
   */
  export type AuthorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Authors to delete
     */
    where?: AuthorWhereInput
    /**
     * Limit how many Authors to delete.
     */
    limit?: number
  }

  /**
   * Author.updated_by_user
   */
  export type Author$updated_by_userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Author.books
   */
  export type Author$booksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookAuthor
     */
    select?: BookAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookAuthor
     */
    omit?: BookAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAuthorInclude<ExtArgs> | null
    where?: BookAuthorWhereInput
    orderBy?: BookAuthorOrderByWithRelationInput | BookAuthorOrderByWithRelationInput[]
    cursor?: BookAuthorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookAuthorScalarFieldEnum | BookAuthorScalarFieldEnum[]
  }

  /**
   * Author without action
   */
  export type AuthorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
  }


  /**
   * Model BookAuthor
   */

  export type AggregateBookAuthor = {
    _count: BookAuthorCountAggregateOutputType | null
    _avg: BookAuthorAvgAggregateOutputType | null
    _sum: BookAuthorSumAggregateOutputType | null
    _min: BookAuthorMinAggregateOutputType | null
    _max: BookAuthorMaxAggregateOutputType | null
  }

  export type BookAuthorAvgAggregateOutputType = {
    id: number | null
    created_by_user_id: number | null
    updated_by_user_id: number | null
    author_id: number | null
    book_id: number | null
  }

  export type BookAuthorSumAggregateOutputType = {
    id: bigint | null
    created_by_user_id: bigint | null
    updated_by_user_id: bigint | null
    author_id: bigint | null
    book_id: bigint | null
  }

  export type BookAuthorMinAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    created_by_user_id: bigint | null
    updated_at: Date | null
    updated_by_user_id: bigint | null
    status: $Enums.StatusEnum | null
    author_id: bigint | null
    book_id: bigint | null
    description: string | null
  }

  export type BookAuthorMaxAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    created_by_user_id: bigint | null
    updated_at: Date | null
    updated_by_user_id: bigint | null
    status: $Enums.StatusEnum | null
    author_id: bigint | null
    book_id: bigint | null
    description: string | null
  }

  export type BookAuthorCountAggregateOutputType = {
    id: number
    created_at: number
    created_by_user_id: number
    updated_at: number
    updated_by_user_id: number
    status: number
    author_id: number
    book_id: number
    description: number
    _all: number
  }


  export type BookAuthorAvgAggregateInputType = {
    id?: true
    created_by_user_id?: true
    updated_by_user_id?: true
    author_id?: true
    book_id?: true
  }

  export type BookAuthorSumAggregateInputType = {
    id?: true
    created_by_user_id?: true
    updated_by_user_id?: true
    author_id?: true
    book_id?: true
  }

  export type BookAuthorMinAggregateInputType = {
    id?: true
    created_at?: true
    created_by_user_id?: true
    updated_at?: true
    updated_by_user_id?: true
    status?: true
    author_id?: true
    book_id?: true
    description?: true
  }

  export type BookAuthorMaxAggregateInputType = {
    id?: true
    created_at?: true
    created_by_user_id?: true
    updated_at?: true
    updated_by_user_id?: true
    status?: true
    author_id?: true
    book_id?: true
    description?: true
  }

  export type BookAuthorCountAggregateInputType = {
    id?: true
    created_at?: true
    created_by_user_id?: true
    updated_at?: true
    updated_by_user_id?: true
    status?: true
    author_id?: true
    book_id?: true
    description?: true
    _all?: true
  }

  export type BookAuthorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookAuthor to aggregate.
     */
    where?: BookAuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookAuthors to fetch.
     */
    orderBy?: BookAuthorOrderByWithRelationInput | BookAuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookAuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookAuthors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookAuthors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookAuthors
    **/
    _count?: true | BookAuthorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookAuthorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookAuthorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookAuthorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookAuthorMaxAggregateInputType
  }

  export type GetBookAuthorAggregateType<T extends BookAuthorAggregateArgs> = {
        [P in keyof T & keyof AggregateBookAuthor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookAuthor[P]>
      : GetScalarType<T[P], AggregateBookAuthor[P]>
  }




  export type BookAuthorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookAuthorWhereInput
    orderBy?: BookAuthorOrderByWithAggregationInput | BookAuthorOrderByWithAggregationInput[]
    by: BookAuthorScalarFieldEnum[] | BookAuthorScalarFieldEnum
    having?: BookAuthorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookAuthorCountAggregateInputType | true
    _avg?: BookAuthorAvgAggregateInputType
    _sum?: BookAuthorSumAggregateInputType
    _min?: BookAuthorMinAggregateInputType
    _max?: BookAuthorMaxAggregateInputType
  }

  export type BookAuthorGroupByOutputType = {
    id: bigint
    created_at: Date
    created_by_user_id: bigint
    updated_at: Date | null
    updated_by_user_id: bigint | null
    status: $Enums.StatusEnum
    author_id: bigint
    book_id: bigint
    description: string | null
    _count: BookAuthorCountAggregateOutputType | null
    _avg: BookAuthorAvgAggregateOutputType | null
    _sum: BookAuthorSumAggregateOutputType | null
    _min: BookAuthorMinAggregateOutputType | null
    _max: BookAuthorMaxAggregateOutputType | null
  }

  type GetBookAuthorGroupByPayload<T extends BookAuthorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookAuthorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookAuthorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookAuthorGroupByOutputType[P]>
            : GetScalarType<T[P], BookAuthorGroupByOutputType[P]>
        }
      >
    >


  export type BookAuthorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    created_by_user_id?: boolean
    updated_at?: boolean
    updated_by_user_id?: boolean
    status?: boolean
    author_id?: boolean
    book_id?: boolean
    description?: boolean
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
    updated_by_user?: boolean | BookAuthor$updated_by_userArgs<ExtArgs>
    author?: boolean | AuthorDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookAuthor"]>

  export type BookAuthorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    created_by_user_id?: boolean
    updated_at?: boolean
    updated_by_user_id?: boolean
    status?: boolean
    author_id?: boolean
    book_id?: boolean
    description?: boolean
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
    updated_by_user?: boolean | BookAuthor$updated_by_userArgs<ExtArgs>
    author?: boolean | AuthorDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookAuthor"]>

  export type BookAuthorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    created_by_user_id?: boolean
    updated_at?: boolean
    updated_by_user_id?: boolean
    status?: boolean
    author_id?: boolean
    book_id?: boolean
    description?: boolean
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
    updated_by_user?: boolean | BookAuthor$updated_by_userArgs<ExtArgs>
    author?: boolean | AuthorDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookAuthor"]>

  export type BookAuthorSelectScalar = {
    id?: boolean
    created_at?: boolean
    created_by_user_id?: boolean
    updated_at?: boolean
    updated_by_user_id?: boolean
    status?: boolean
    author_id?: boolean
    book_id?: boolean
    description?: boolean
  }

  export type BookAuthorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "created_by_user_id" | "updated_at" | "updated_by_user_id" | "status" | "author_id" | "book_id" | "description", ExtArgs["result"]["bookAuthor"]>
  export type BookAuthorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
    updated_by_user?: boolean | BookAuthor$updated_by_userArgs<ExtArgs>
    author?: boolean | AuthorDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type BookAuthorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
    updated_by_user?: boolean | BookAuthor$updated_by_userArgs<ExtArgs>
    author?: boolean | AuthorDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type BookAuthorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
    updated_by_user?: boolean | BookAuthor$updated_by_userArgs<ExtArgs>
    author?: boolean | AuthorDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }

  export type $BookAuthorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookAuthor"
    objects: {
      created_by_user: Prisma.$UserPayload<ExtArgs>
      updated_by_user: Prisma.$UserPayload<ExtArgs> | null
      author: Prisma.$AuthorPayload<ExtArgs>
      book: Prisma.$BookPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      created_at: Date
      created_by_user_id: bigint
      updated_at: Date | null
      updated_by_user_id: bigint | null
      status: $Enums.StatusEnum
      author_id: bigint
      book_id: bigint
      description: string | null
    }, ExtArgs["result"]["bookAuthor"]>
    composites: {}
  }

  type BookAuthorGetPayload<S extends boolean | null | undefined | BookAuthorDefaultArgs> = $Result.GetResult<Prisma.$BookAuthorPayload, S>

  type BookAuthorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookAuthorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookAuthorCountAggregateInputType | true
    }

  export interface BookAuthorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookAuthor'], meta: { name: 'BookAuthor' } }
    /**
     * Find zero or one BookAuthor that matches the filter.
     * @param {BookAuthorFindUniqueArgs} args - Arguments to find a BookAuthor
     * @example
     * // Get one BookAuthor
     * const bookAuthor = await prisma.bookAuthor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookAuthorFindUniqueArgs>(args: SelectSubset<T, BookAuthorFindUniqueArgs<ExtArgs>>): Prisma__BookAuthorClient<$Result.GetResult<Prisma.$BookAuthorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookAuthor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookAuthorFindUniqueOrThrowArgs} args - Arguments to find a BookAuthor
     * @example
     * // Get one BookAuthor
     * const bookAuthor = await prisma.bookAuthor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookAuthorFindUniqueOrThrowArgs>(args: SelectSubset<T, BookAuthorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookAuthorClient<$Result.GetResult<Prisma.$BookAuthorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookAuthor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAuthorFindFirstArgs} args - Arguments to find a BookAuthor
     * @example
     * // Get one BookAuthor
     * const bookAuthor = await prisma.bookAuthor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookAuthorFindFirstArgs>(args?: SelectSubset<T, BookAuthorFindFirstArgs<ExtArgs>>): Prisma__BookAuthorClient<$Result.GetResult<Prisma.$BookAuthorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookAuthor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAuthorFindFirstOrThrowArgs} args - Arguments to find a BookAuthor
     * @example
     * // Get one BookAuthor
     * const bookAuthor = await prisma.bookAuthor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookAuthorFindFirstOrThrowArgs>(args?: SelectSubset<T, BookAuthorFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookAuthorClient<$Result.GetResult<Prisma.$BookAuthorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookAuthors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAuthorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookAuthors
     * const bookAuthors = await prisma.bookAuthor.findMany()
     * 
     * // Get first 10 BookAuthors
     * const bookAuthors = await prisma.bookAuthor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookAuthorWithIdOnly = await prisma.bookAuthor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookAuthorFindManyArgs>(args?: SelectSubset<T, BookAuthorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookAuthorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookAuthor.
     * @param {BookAuthorCreateArgs} args - Arguments to create a BookAuthor.
     * @example
     * // Create one BookAuthor
     * const BookAuthor = await prisma.bookAuthor.create({
     *   data: {
     *     // ... data to create a BookAuthor
     *   }
     * })
     * 
     */
    create<T extends BookAuthorCreateArgs>(args: SelectSubset<T, BookAuthorCreateArgs<ExtArgs>>): Prisma__BookAuthorClient<$Result.GetResult<Prisma.$BookAuthorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookAuthors.
     * @param {BookAuthorCreateManyArgs} args - Arguments to create many BookAuthors.
     * @example
     * // Create many BookAuthors
     * const bookAuthor = await prisma.bookAuthor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookAuthorCreateManyArgs>(args?: SelectSubset<T, BookAuthorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BookAuthors and returns the data saved in the database.
     * @param {BookAuthorCreateManyAndReturnArgs} args - Arguments to create many BookAuthors.
     * @example
     * // Create many BookAuthors
     * const bookAuthor = await prisma.bookAuthor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BookAuthors and only return the `id`
     * const bookAuthorWithIdOnly = await prisma.bookAuthor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookAuthorCreateManyAndReturnArgs>(args?: SelectSubset<T, BookAuthorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookAuthorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BookAuthor.
     * @param {BookAuthorDeleteArgs} args - Arguments to delete one BookAuthor.
     * @example
     * // Delete one BookAuthor
     * const BookAuthor = await prisma.bookAuthor.delete({
     *   where: {
     *     // ... filter to delete one BookAuthor
     *   }
     * })
     * 
     */
    delete<T extends BookAuthorDeleteArgs>(args: SelectSubset<T, BookAuthorDeleteArgs<ExtArgs>>): Prisma__BookAuthorClient<$Result.GetResult<Prisma.$BookAuthorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookAuthor.
     * @param {BookAuthorUpdateArgs} args - Arguments to update one BookAuthor.
     * @example
     * // Update one BookAuthor
     * const bookAuthor = await prisma.bookAuthor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookAuthorUpdateArgs>(args: SelectSubset<T, BookAuthorUpdateArgs<ExtArgs>>): Prisma__BookAuthorClient<$Result.GetResult<Prisma.$BookAuthorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookAuthors.
     * @param {BookAuthorDeleteManyArgs} args - Arguments to filter BookAuthors to delete.
     * @example
     * // Delete a few BookAuthors
     * const { count } = await prisma.bookAuthor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookAuthorDeleteManyArgs>(args?: SelectSubset<T, BookAuthorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookAuthors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAuthorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookAuthors
     * const bookAuthor = await prisma.bookAuthor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookAuthorUpdateManyArgs>(args: SelectSubset<T, BookAuthorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookAuthors and returns the data updated in the database.
     * @param {BookAuthorUpdateManyAndReturnArgs} args - Arguments to update many BookAuthors.
     * @example
     * // Update many BookAuthors
     * const bookAuthor = await prisma.bookAuthor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BookAuthors and only return the `id`
     * const bookAuthorWithIdOnly = await prisma.bookAuthor.updateManyAndReturn({
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
    updateManyAndReturn<T extends BookAuthorUpdateManyAndReturnArgs>(args: SelectSubset<T, BookAuthorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookAuthorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BookAuthor.
     * @param {BookAuthorUpsertArgs} args - Arguments to update or create a BookAuthor.
     * @example
     * // Update or create a BookAuthor
     * const bookAuthor = await prisma.bookAuthor.upsert({
     *   create: {
     *     // ... data to create a BookAuthor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookAuthor we want to update
     *   }
     * })
     */
    upsert<T extends BookAuthorUpsertArgs>(args: SelectSubset<T, BookAuthorUpsertArgs<ExtArgs>>): Prisma__BookAuthorClient<$Result.GetResult<Prisma.$BookAuthorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookAuthors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAuthorCountArgs} args - Arguments to filter BookAuthors to count.
     * @example
     * // Count the number of BookAuthors
     * const count = await prisma.bookAuthor.count({
     *   where: {
     *     // ... the filter for the BookAuthors we want to count
     *   }
     * })
    **/
    count<T extends BookAuthorCountArgs>(
      args?: Subset<T, BookAuthorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookAuthorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookAuthor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAuthorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookAuthorAggregateArgs>(args: Subset<T, BookAuthorAggregateArgs>): Prisma.PrismaPromise<GetBookAuthorAggregateType<T>>

    /**
     * Group by BookAuthor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAuthorGroupByArgs} args - Group by arguments.
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
      T extends BookAuthorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookAuthorGroupByArgs['orderBy'] }
        : { orderBy?: BookAuthorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookAuthorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookAuthorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookAuthor model
   */
  readonly fields: BookAuthorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookAuthor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookAuthorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    created_by_user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    updated_by_user<T extends BookAuthor$updated_by_userArgs<ExtArgs> = {}>(args?: Subset<T, BookAuthor$updated_by_userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    author<T extends AuthorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuthorDefaultArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BookAuthor model
   */
  interface BookAuthorFieldRefs {
    readonly id: FieldRef<"BookAuthor", 'BigInt'>
    readonly created_at: FieldRef<"BookAuthor", 'DateTime'>
    readonly created_by_user_id: FieldRef<"BookAuthor", 'BigInt'>
    readonly updated_at: FieldRef<"BookAuthor", 'DateTime'>
    readonly updated_by_user_id: FieldRef<"BookAuthor", 'BigInt'>
    readonly status: FieldRef<"BookAuthor", 'StatusEnum'>
    readonly author_id: FieldRef<"BookAuthor", 'BigInt'>
    readonly book_id: FieldRef<"BookAuthor", 'BigInt'>
    readonly description: FieldRef<"BookAuthor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BookAuthor findUnique
   */
  export type BookAuthorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookAuthor
     */
    select?: BookAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookAuthor
     */
    omit?: BookAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAuthorInclude<ExtArgs> | null
    /**
     * Filter, which BookAuthor to fetch.
     */
    where: BookAuthorWhereUniqueInput
  }

  /**
   * BookAuthor findUniqueOrThrow
   */
  export type BookAuthorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookAuthor
     */
    select?: BookAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookAuthor
     */
    omit?: BookAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAuthorInclude<ExtArgs> | null
    /**
     * Filter, which BookAuthor to fetch.
     */
    where: BookAuthorWhereUniqueInput
  }

  /**
   * BookAuthor findFirst
   */
  export type BookAuthorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookAuthor
     */
    select?: BookAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookAuthor
     */
    omit?: BookAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAuthorInclude<ExtArgs> | null
    /**
     * Filter, which BookAuthor to fetch.
     */
    where?: BookAuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookAuthors to fetch.
     */
    orderBy?: BookAuthorOrderByWithRelationInput | BookAuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookAuthors.
     */
    cursor?: BookAuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookAuthors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookAuthors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookAuthors.
     */
    distinct?: BookAuthorScalarFieldEnum | BookAuthorScalarFieldEnum[]
  }

  /**
   * BookAuthor findFirstOrThrow
   */
  export type BookAuthorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookAuthor
     */
    select?: BookAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookAuthor
     */
    omit?: BookAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAuthorInclude<ExtArgs> | null
    /**
     * Filter, which BookAuthor to fetch.
     */
    where?: BookAuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookAuthors to fetch.
     */
    orderBy?: BookAuthorOrderByWithRelationInput | BookAuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookAuthors.
     */
    cursor?: BookAuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookAuthors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookAuthors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookAuthors.
     */
    distinct?: BookAuthorScalarFieldEnum | BookAuthorScalarFieldEnum[]
  }

  /**
   * BookAuthor findMany
   */
  export type BookAuthorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookAuthor
     */
    select?: BookAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookAuthor
     */
    omit?: BookAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAuthorInclude<ExtArgs> | null
    /**
     * Filter, which BookAuthors to fetch.
     */
    where?: BookAuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookAuthors to fetch.
     */
    orderBy?: BookAuthorOrderByWithRelationInput | BookAuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookAuthors.
     */
    cursor?: BookAuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookAuthors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookAuthors.
     */
    skip?: number
    distinct?: BookAuthorScalarFieldEnum | BookAuthorScalarFieldEnum[]
  }

  /**
   * BookAuthor create
   */
  export type BookAuthorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookAuthor
     */
    select?: BookAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookAuthor
     */
    omit?: BookAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAuthorInclude<ExtArgs> | null
    /**
     * The data needed to create a BookAuthor.
     */
    data: XOR<BookAuthorCreateInput, BookAuthorUncheckedCreateInput>
  }

  /**
   * BookAuthor createMany
   */
  export type BookAuthorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookAuthors.
     */
    data: BookAuthorCreateManyInput | BookAuthorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookAuthor createManyAndReturn
   */
  export type BookAuthorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookAuthor
     */
    select?: BookAuthorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookAuthor
     */
    omit?: BookAuthorOmit<ExtArgs> | null
    /**
     * The data used to create many BookAuthors.
     */
    data: BookAuthorCreateManyInput | BookAuthorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAuthorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookAuthor update
   */
  export type BookAuthorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookAuthor
     */
    select?: BookAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookAuthor
     */
    omit?: BookAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAuthorInclude<ExtArgs> | null
    /**
     * The data needed to update a BookAuthor.
     */
    data: XOR<BookAuthorUpdateInput, BookAuthorUncheckedUpdateInput>
    /**
     * Choose, which BookAuthor to update.
     */
    where: BookAuthorWhereUniqueInput
  }

  /**
   * BookAuthor updateMany
   */
  export type BookAuthorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookAuthors.
     */
    data: XOR<BookAuthorUpdateManyMutationInput, BookAuthorUncheckedUpdateManyInput>
    /**
     * Filter which BookAuthors to update
     */
    where?: BookAuthorWhereInput
    /**
     * Limit how many BookAuthors to update.
     */
    limit?: number
  }

  /**
   * BookAuthor updateManyAndReturn
   */
  export type BookAuthorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookAuthor
     */
    select?: BookAuthorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookAuthor
     */
    omit?: BookAuthorOmit<ExtArgs> | null
    /**
     * The data used to update BookAuthors.
     */
    data: XOR<BookAuthorUpdateManyMutationInput, BookAuthorUncheckedUpdateManyInput>
    /**
     * Filter which BookAuthors to update
     */
    where?: BookAuthorWhereInput
    /**
     * Limit how many BookAuthors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAuthorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookAuthor upsert
   */
  export type BookAuthorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookAuthor
     */
    select?: BookAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookAuthor
     */
    omit?: BookAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAuthorInclude<ExtArgs> | null
    /**
     * The filter to search for the BookAuthor to update in case it exists.
     */
    where: BookAuthorWhereUniqueInput
    /**
     * In case the BookAuthor found by the `where` argument doesn't exist, create a new BookAuthor with this data.
     */
    create: XOR<BookAuthorCreateInput, BookAuthorUncheckedCreateInput>
    /**
     * In case the BookAuthor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookAuthorUpdateInput, BookAuthorUncheckedUpdateInput>
  }

  /**
   * BookAuthor delete
   */
  export type BookAuthorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookAuthor
     */
    select?: BookAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookAuthor
     */
    omit?: BookAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAuthorInclude<ExtArgs> | null
    /**
     * Filter which BookAuthor to delete.
     */
    where: BookAuthorWhereUniqueInput
  }

  /**
   * BookAuthor deleteMany
   */
  export type BookAuthorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookAuthors to delete
     */
    where?: BookAuthorWhereInput
    /**
     * Limit how many BookAuthors to delete.
     */
    limit?: number
  }

  /**
   * BookAuthor.updated_by_user
   */
  export type BookAuthor$updated_by_userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * BookAuthor without action
   */
  export type BookAuthorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookAuthor
     */
    select?: BookAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookAuthor
     */
    omit?: BookAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAuthorInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagAvgAggregateOutputType = {
    id: number | null
    created_by_user_id: number | null
    updated_by_user_id: number | null
  }

  export type TagSumAggregateOutputType = {
    id: bigint | null
    created_by_user_id: bigint | null
    updated_by_user_id: bigint | null
  }

  export type TagMinAggregateOutputType = {
    id: bigint | null
    slug: string | null
    created_at: Date | null
    created_by_user_id: bigint | null
    updated_at: Date | null
    updated_by_user_id: bigint | null
    name: string | null
    status: $Enums.StatusEnum | null
    description: string | null
  }

  export type TagMaxAggregateOutputType = {
    id: bigint | null
    slug: string | null
    created_at: Date | null
    created_by_user_id: bigint | null
    updated_at: Date | null
    updated_by_user_id: bigint | null
    name: string | null
    status: $Enums.StatusEnum | null
    description: string | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    slug: number
    created_at: number
    created_by_user_id: number
    updated_at: number
    updated_by_user_id: number
    name: number
    status: number
    description: number
    _all: number
  }


  export type TagAvgAggregateInputType = {
    id?: true
    created_by_user_id?: true
    updated_by_user_id?: true
  }

  export type TagSumAggregateInputType = {
    id?: true
    created_by_user_id?: true
    updated_by_user_id?: true
  }

  export type TagMinAggregateInputType = {
    id?: true
    slug?: true
    created_at?: true
    created_by_user_id?: true
    updated_at?: true
    updated_by_user_id?: true
    name?: true
    status?: true
    description?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    slug?: true
    created_at?: true
    created_by_user_id?: true
    updated_at?: true
    updated_by_user_id?: true
    name?: true
    status?: true
    description?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    slug?: true
    created_at?: true
    created_by_user_id?: true
    updated_at?: true
    updated_by_user_id?: true
    name?: true
    status?: true
    description?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _avg?: TagAvgAggregateInputType
    _sum?: TagSumAggregateInputType
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: bigint
    slug: string
    created_at: Date
    created_by_user_id: bigint
    updated_at: Date | null
    updated_by_user_id: bigint | null
    name: string
    status: $Enums.StatusEnum
    description: string | null
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    created_at?: boolean
    created_by_user_id?: boolean
    updated_at?: boolean
    updated_by_user_id?: boolean
    name?: boolean
    status?: boolean
    description?: boolean
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
    updated_by_user?: boolean | Tag$updated_by_userArgs<ExtArgs>
    books?: boolean | Tag$booksArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    created_at?: boolean
    created_by_user_id?: boolean
    updated_at?: boolean
    updated_by_user_id?: boolean
    name?: boolean
    status?: boolean
    description?: boolean
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
    updated_by_user?: boolean | Tag$updated_by_userArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    created_at?: boolean
    created_by_user_id?: boolean
    updated_at?: boolean
    updated_by_user_id?: boolean
    name?: boolean
    status?: boolean
    description?: boolean
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
    updated_by_user?: boolean | Tag$updated_by_userArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    slug?: boolean
    created_at?: boolean
    created_by_user_id?: boolean
    updated_at?: boolean
    updated_by_user_id?: boolean
    name?: boolean
    status?: boolean
    description?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "created_at" | "created_by_user_id" | "updated_at" | "updated_by_user_id" | "name" | "status" | "description", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
    updated_by_user?: boolean | Tag$updated_by_userArgs<ExtArgs>
    books?: boolean | Tag$booksArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
    updated_by_user?: boolean | Tag$updated_by_userArgs<ExtArgs>
  }
  export type TagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
    updated_by_user?: boolean | Tag$updated_by_userArgs<ExtArgs>
  }

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      created_by_user: Prisma.$UserPayload<ExtArgs>
      updated_by_user: Prisma.$UserPayload<ExtArgs> | null
      books: Prisma.$BookTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      slug: string
      created_at: Date
      created_by_user_id: bigint
      updated_at: Date | null
      updated_by_user_id: bigint | null
      name: string
      status: $Enums.StatusEnum
      description: string | null
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
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
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
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
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    created_by_user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    updated_by_user<T extends Tag$updated_by_userArgs<ExtArgs> = {}>(args?: Subset<T, Tag$updated_by_userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    books<T extends Tag$booksArgs<ExtArgs> = {}>(args?: Subset<T, Tag$booksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'BigInt'>
    readonly slug: FieldRef<"Tag", 'String'>
    readonly created_at: FieldRef<"Tag", 'DateTime'>
    readonly created_by_user_id: FieldRef<"Tag", 'BigInt'>
    readonly updated_at: FieldRef<"Tag", 'DateTime'>
    readonly updated_by_user_id: FieldRef<"Tag", 'BigInt'>
    readonly name: FieldRef<"Tag", 'String'>
    readonly status: FieldRef<"Tag", 'StatusEnum'>
    readonly description: FieldRef<"Tag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.updated_by_user
   */
  export type Tag$updated_by_userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Tag.books
   */
  export type Tag$booksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookTag
     */
    select?: BookTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookTag
     */
    omit?: BookTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookTagInclude<ExtArgs> | null
    where?: BookTagWhereInput
    orderBy?: BookTagOrderByWithRelationInput | BookTagOrderByWithRelationInput[]
    cursor?: BookTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookTagScalarFieldEnum | BookTagScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model BookTag
   */

  export type AggregateBookTag = {
    _count: BookTagCountAggregateOutputType | null
    _avg: BookTagAvgAggregateOutputType | null
    _sum: BookTagSumAggregateOutputType | null
    _min: BookTagMinAggregateOutputType | null
    _max: BookTagMaxAggregateOutputType | null
  }

  export type BookTagAvgAggregateOutputType = {
    id: number | null
    created_by_user_id: number | null
    updated_by_user_id: number | null
    tag_id: number | null
    book_id: number | null
  }

  export type BookTagSumAggregateOutputType = {
    id: bigint | null
    created_by_user_id: bigint | null
    updated_by_user_id: bigint | null
    tag_id: bigint | null
    book_id: bigint | null
  }

  export type BookTagMinAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    created_by_user_id: bigint | null
    updated_at: Date | null
    updated_by_user_id: bigint | null
    status: $Enums.StatusEnum | null
    tag_id: bigint | null
    book_id: bigint | null
  }

  export type BookTagMaxAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    created_by_user_id: bigint | null
    updated_at: Date | null
    updated_by_user_id: bigint | null
    status: $Enums.StatusEnum | null
    tag_id: bigint | null
    book_id: bigint | null
  }

  export type BookTagCountAggregateOutputType = {
    id: number
    created_at: number
    created_by_user_id: number
    updated_at: number
    updated_by_user_id: number
    status: number
    tag_id: number
    book_id: number
    _all: number
  }


  export type BookTagAvgAggregateInputType = {
    id?: true
    created_by_user_id?: true
    updated_by_user_id?: true
    tag_id?: true
    book_id?: true
  }

  export type BookTagSumAggregateInputType = {
    id?: true
    created_by_user_id?: true
    updated_by_user_id?: true
    tag_id?: true
    book_id?: true
  }

  export type BookTagMinAggregateInputType = {
    id?: true
    created_at?: true
    created_by_user_id?: true
    updated_at?: true
    updated_by_user_id?: true
    status?: true
    tag_id?: true
    book_id?: true
  }

  export type BookTagMaxAggregateInputType = {
    id?: true
    created_at?: true
    created_by_user_id?: true
    updated_at?: true
    updated_by_user_id?: true
    status?: true
    tag_id?: true
    book_id?: true
  }

  export type BookTagCountAggregateInputType = {
    id?: true
    created_at?: true
    created_by_user_id?: true
    updated_at?: true
    updated_by_user_id?: true
    status?: true
    tag_id?: true
    book_id?: true
    _all?: true
  }

  export type BookTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookTag to aggregate.
     */
    where?: BookTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookTags to fetch.
     */
    orderBy?: BookTagOrderByWithRelationInput | BookTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookTags
    **/
    _count?: true | BookTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookTagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookTagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookTagMaxAggregateInputType
  }

  export type GetBookTagAggregateType<T extends BookTagAggregateArgs> = {
        [P in keyof T & keyof AggregateBookTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookTag[P]>
      : GetScalarType<T[P], AggregateBookTag[P]>
  }




  export type BookTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookTagWhereInput
    orderBy?: BookTagOrderByWithAggregationInput | BookTagOrderByWithAggregationInput[]
    by: BookTagScalarFieldEnum[] | BookTagScalarFieldEnum
    having?: BookTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookTagCountAggregateInputType | true
    _avg?: BookTagAvgAggregateInputType
    _sum?: BookTagSumAggregateInputType
    _min?: BookTagMinAggregateInputType
    _max?: BookTagMaxAggregateInputType
  }

  export type BookTagGroupByOutputType = {
    id: bigint
    created_at: Date
    created_by_user_id: bigint
    updated_at: Date | null
    updated_by_user_id: bigint | null
    status: $Enums.StatusEnum
    tag_id: bigint
    book_id: bigint
    _count: BookTagCountAggregateOutputType | null
    _avg: BookTagAvgAggregateOutputType | null
    _sum: BookTagSumAggregateOutputType | null
    _min: BookTagMinAggregateOutputType | null
    _max: BookTagMaxAggregateOutputType | null
  }

  type GetBookTagGroupByPayload<T extends BookTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookTagGroupByOutputType[P]>
            : GetScalarType<T[P], BookTagGroupByOutputType[P]>
        }
      >
    >


  export type BookTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    created_by_user_id?: boolean
    updated_at?: boolean
    updated_by_user_id?: boolean
    status?: boolean
    tag_id?: boolean
    book_id?: boolean
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
    updated_by_user?: boolean | BookTag$updated_by_userArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookTag"]>

  export type BookTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    created_by_user_id?: boolean
    updated_at?: boolean
    updated_by_user_id?: boolean
    status?: boolean
    tag_id?: boolean
    book_id?: boolean
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
    updated_by_user?: boolean | BookTag$updated_by_userArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookTag"]>

  export type BookTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    created_by_user_id?: boolean
    updated_at?: boolean
    updated_by_user_id?: boolean
    status?: boolean
    tag_id?: boolean
    book_id?: boolean
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
    updated_by_user?: boolean | BookTag$updated_by_userArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookTag"]>

  export type BookTagSelectScalar = {
    id?: boolean
    created_at?: boolean
    created_by_user_id?: boolean
    updated_at?: boolean
    updated_by_user_id?: boolean
    status?: boolean
    tag_id?: boolean
    book_id?: boolean
  }

  export type BookTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "created_by_user_id" | "updated_at" | "updated_by_user_id" | "status" | "tag_id" | "book_id", ExtArgs["result"]["bookTag"]>
  export type BookTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
    updated_by_user?: boolean | BookTag$updated_by_userArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type BookTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
    updated_by_user?: boolean | BookTag$updated_by_userArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type BookTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
    updated_by_user?: boolean | BookTag$updated_by_userArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }

  export type $BookTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookTag"
    objects: {
      created_by_user: Prisma.$UserPayload<ExtArgs>
      updated_by_user: Prisma.$UserPayload<ExtArgs> | null
      tag: Prisma.$TagPayload<ExtArgs>
      book: Prisma.$BookPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      created_at: Date
      created_by_user_id: bigint
      updated_at: Date | null
      updated_by_user_id: bigint | null
      status: $Enums.StatusEnum
      tag_id: bigint
      book_id: bigint
    }, ExtArgs["result"]["bookTag"]>
    composites: {}
  }

  type BookTagGetPayload<S extends boolean | null | undefined | BookTagDefaultArgs> = $Result.GetResult<Prisma.$BookTagPayload, S>

  type BookTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookTagCountAggregateInputType | true
    }

  export interface BookTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookTag'], meta: { name: 'BookTag' } }
    /**
     * Find zero or one BookTag that matches the filter.
     * @param {BookTagFindUniqueArgs} args - Arguments to find a BookTag
     * @example
     * // Get one BookTag
     * const bookTag = await prisma.bookTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookTagFindUniqueArgs>(args: SelectSubset<T, BookTagFindUniqueArgs<ExtArgs>>): Prisma__BookTagClient<$Result.GetResult<Prisma.$BookTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookTagFindUniqueOrThrowArgs} args - Arguments to find a BookTag
     * @example
     * // Get one BookTag
     * const bookTag = await prisma.bookTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookTagFindUniqueOrThrowArgs>(args: SelectSubset<T, BookTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookTagClient<$Result.GetResult<Prisma.$BookTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookTagFindFirstArgs} args - Arguments to find a BookTag
     * @example
     * // Get one BookTag
     * const bookTag = await prisma.bookTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookTagFindFirstArgs>(args?: SelectSubset<T, BookTagFindFirstArgs<ExtArgs>>): Prisma__BookTagClient<$Result.GetResult<Prisma.$BookTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookTagFindFirstOrThrowArgs} args - Arguments to find a BookTag
     * @example
     * // Get one BookTag
     * const bookTag = await prisma.bookTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookTagFindFirstOrThrowArgs>(args?: SelectSubset<T, BookTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookTagClient<$Result.GetResult<Prisma.$BookTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookTags
     * const bookTags = await prisma.bookTag.findMany()
     * 
     * // Get first 10 BookTags
     * const bookTags = await prisma.bookTag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookTagWithIdOnly = await prisma.bookTag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookTagFindManyArgs>(args?: SelectSubset<T, BookTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookTag.
     * @param {BookTagCreateArgs} args - Arguments to create a BookTag.
     * @example
     * // Create one BookTag
     * const BookTag = await prisma.bookTag.create({
     *   data: {
     *     // ... data to create a BookTag
     *   }
     * })
     * 
     */
    create<T extends BookTagCreateArgs>(args: SelectSubset<T, BookTagCreateArgs<ExtArgs>>): Prisma__BookTagClient<$Result.GetResult<Prisma.$BookTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookTags.
     * @param {BookTagCreateManyArgs} args - Arguments to create many BookTags.
     * @example
     * // Create many BookTags
     * const bookTag = await prisma.bookTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookTagCreateManyArgs>(args?: SelectSubset<T, BookTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BookTags and returns the data saved in the database.
     * @param {BookTagCreateManyAndReturnArgs} args - Arguments to create many BookTags.
     * @example
     * // Create many BookTags
     * const bookTag = await prisma.bookTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BookTags and only return the `id`
     * const bookTagWithIdOnly = await prisma.bookTag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookTagCreateManyAndReturnArgs>(args?: SelectSubset<T, BookTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BookTag.
     * @param {BookTagDeleteArgs} args - Arguments to delete one BookTag.
     * @example
     * // Delete one BookTag
     * const BookTag = await prisma.bookTag.delete({
     *   where: {
     *     // ... filter to delete one BookTag
     *   }
     * })
     * 
     */
    delete<T extends BookTagDeleteArgs>(args: SelectSubset<T, BookTagDeleteArgs<ExtArgs>>): Prisma__BookTagClient<$Result.GetResult<Prisma.$BookTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookTag.
     * @param {BookTagUpdateArgs} args - Arguments to update one BookTag.
     * @example
     * // Update one BookTag
     * const bookTag = await prisma.bookTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookTagUpdateArgs>(args: SelectSubset<T, BookTagUpdateArgs<ExtArgs>>): Prisma__BookTagClient<$Result.GetResult<Prisma.$BookTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookTags.
     * @param {BookTagDeleteManyArgs} args - Arguments to filter BookTags to delete.
     * @example
     * // Delete a few BookTags
     * const { count } = await prisma.bookTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookTagDeleteManyArgs>(args?: SelectSubset<T, BookTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookTags
     * const bookTag = await prisma.bookTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookTagUpdateManyArgs>(args: SelectSubset<T, BookTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookTags and returns the data updated in the database.
     * @param {BookTagUpdateManyAndReturnArgs} args - Arguments to update many BookTags.
     * @example
     * // Update many BookTags
     * const bookTag = await prisma.bookTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BookTags and only return the `id`
     * const bookTagWithIdOnly = await prisma.bookTag.updateManyAndReturn({
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
    updateManyAndReturn<T extends BookTagUpdateManyAndReturnArgs>(args: SelectSubset<T, BookTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BookTag.
     * @param {BookTagUpsertArgs} args - Arguments to update or create a BookTag.
     * @example
     * // Update or create a BookTag
     * const bookTag = await prisma.bookTag.upsert({
     *   create: {
     *     // ... data to create a BookTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookTag we want to update
     *   }
     * })
     */
    upsert<T extends BookTagUpsertArgs>(args: SelectSubset<T, BookTagUpsertArgs<ExtArgs>>): Prisma__BookTagClient<$Result.GetResult<Prisma.$BookTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookTagCountArgs} args - Arguments to filter BookTags to count.
     * @example
     * // Count the number of BookTags
     * const count = await prisma.bookTag.count({
     *   where: {
     *     // ... the filter for the BookTags we want to count
     *   }
     * })
    **/
    count<T extends BookTagCountArgs>(
      args?: Subset<T, BookTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookTagAggregateArgs>(args: Subset<T, BookTagAggregateArgs>): Prisma.PrismaPromise<GetBookTagAggregateType<T>>

    /**
     * Group by BookTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookTagGroupByArgs} args - Group by arguments.
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
      T extends BookTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookTagGroupByArgs['orderBy'] }
        : { orderBy?: BookTagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookTag model
   */
  readonly fields: BookTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    created_by_user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    updated_by_user<T extends BookTag$updated_by_userArgs<ExtArgs> = {}>(args?: Subset<T, BookTag$updated_by_userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BookTag model
   */
  interface BookTagFieldRefs {
    readonly id: FieldRef<"BookTag", 'BigInt'>
    readonly created_at: FieldRef<"BookTag", 'DateTime'>
    readonly created_by_user_id: FieldRef<"BookTag", 'BigInt'>
    readonly updated_at: FieldRef<"BookTag", 'DateTime'>
    readonly updated_by_user_id: FieldRef<"BookTag", 'BigInt'>
    readonly status: FieldRef<"BookTag", 'StatusEnum'>
    readonly tag_id: FieldRef<"BookTag", 'BigInt'>
    readonly book_id: FieldRef<"BookTag", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * BookTag findUnique
   */
  export type BookTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookTag
     */
    select?: BookTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookTag
     */
    omit?: BookTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookTagInclude<ExtArgs> | null
    /**
     * Filter, which BookTag to fetch.
     */
    where: BookTagWhereUniqueInput
  }

  /**
   * BookTag findUniqueOrThrow
   */
  export type BookTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookTag
     */
    select?: BookTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookTag
     */
    omit?: BookTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookTagInclude<ExtArgs> | null
    /**
     * Filter, which BookTag to fetch.
     */
    where: BookTagWhereUniqueInput
  }

  /**
   * BookTag findFirst
   */
  export type BookTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookTag
     */
    select?: BookTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookTag
     */
    omit?: BookTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookTagInclude<ExtArgs> | null
    /**
     * Filter, which BookTag to fetch.
     */
    where?: BookTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookTags to fetch.
     */
    orderBy?: BookTagOrderByWithRelationInput | BookTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookTags.
     */
    cursor?: BookTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookTags.
     */
    distinct?: BookTagScalarFieldEnum | BookTagScalarFieldEnum[]
  }

  /**
   * BookTag findFirstOrThrow
   */
  export type BookTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookTag
     */
    select?: BookTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookTag
     */
    omit?: BookTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookTagInclude<ExtArgs> | null
    /**
     * Filter, which BookTag to fetch.
     */
    where?: BookTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookTags to fetch.
     */
    orderBy?: BookTagOrderByWithRelationInput | BookTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookTags.
     */
    cursor?: BookTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookTags.
     */
    distinct?: BookTagScalarFieldEnum | BookTagScalarFieldEnum[]
  }

  /**
   * BookTag findMany
   */
  export type BookTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookTag
     */
    select?: BookTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookTag
     */
    omit?: BookTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookTagInclude<ExtArgs> | null
    /**
     * Filter, which BookTags to fetch.
     */
    where?: BookTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookTags to fetch.
     */
    orderBy?: BookTagOrderByWithRelationInput | BookTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookTags.
     */
    cursor?: BookTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookTags.
     */
    skip?: number
    distinct?: BookTagScalarFieldEnum | BookTagScalarFieldEnum[]
  }

  /**
   * BookTag create
   */
  export type BookTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookTag
     */
    select?: BookTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookTag
     */
    omit?: BookTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookTagInclude<ExtArgs> | null
    /**
     * The data needed to create a BookTag.
     */
    data: XOR<BookTagCreateInput, BookTagUncheckedCreateInput>
  }

  /**
   * BookTag createMany
   */
  export type BookTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookTags.
     */
    data: BookTagCreateManyInput | BookTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookTag createManyAndReturn
   */
  export type BookTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookTag
     */
    select?: BookTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookTag
     */
    omit?: BookTagOmit<ExtArgs> | null
    /**
     * The data used to create many BookTags.
     */
    data: BookTagCreateManyInput | BookTagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookTag update
   */
  export type BookTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookTag
     */
    select?: BookTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookTag
     */
    omit?: BookTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookTagInclude<ExtArgs> | null
    /**
     * The data needed to update a BookTag.
     */
    data: XOR<BookTagUpdateInput, BookTagUncheckedUpdateInput>
    /**
     * Choose, which BookTag to update.
     */
    where: BookTagWhereUniqueInput
  }

  /**
   * BookTag updateMany
   */
  export type BookTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookTags.
     */
    data: XOR<BookTagUpdateManyMutationInput, BookTagUncheckedUpdateManyInput>
    /**
     * Filter which BookTags to update
     */
    where?: BookTagWhereInput
    /**
     * Limit how many BookTags to update.
     */
    limit?: number
  }

  /**
   * BookTag updateManyAndReturn
   */
  export type BookTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookTag
     */
    select?: BookTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookTag
     */
    omit?: BookTagOmit<ExtArgs> | null
    /**
     * The data used to update BookTags.
     */
    data: XOR<BookTagUpdateManyMutationInput, BookTagUncheckedUpdateManyInput>
    /**
     * Filter which BookTags to update
     */
    where?: BookTagWhereInput
    /**
     * Limit how many BookTags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookTagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookTag upsert
   */
  export type BookTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookTag
     */
    select?: BookTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookTag
     */
    omit?: BookTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookTagInclude<ExtArgs> | null
    /**
     * The filter to search for the BookTag to update in case it exists.
     */
    where: BookTagWhereUniqueInput
    /**
     * In case the BookTag found by the `where` argument doesn't exist, create a new BookTag with this data.
     */
    create: XOR<BookTagCreateInput, BookTagUncheckedCreateInput>
    /**
     * In case the BookTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookTagUpdateInput, BookTagUncheckedUpdateInput>
  }

  /**
   * BookTag delete
   */
  export type BookTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookTag
     */
    select?: BookTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookTag
     */
    omit?: BookTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookTagInclude<ExtArgs> | null
    /**
     * Filter which BookTag to delete.
     */
    where: BookTagWhereUniqueInput
  }

  /**
   * BookTag deleteMany
   */
  export type BookTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookTags to delete
     */
    where?: BookTagWhereInput
    /**
     * Limit how many BookTags to delete.
     */
    limit?: number
  }

  /**
   * BookTag.updated_by_user
   */
  export type BookTag$updated_by_userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * BookTag without action
   */
  export type BookTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookTag
     */
    select?: BookTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookTag
     */
    omit?: BookTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookTagInclude<ExtArgs> | null
  }


  /**
   * Model Book
   */

  export type AggregateBook = {
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  export type BookAvgAggregateOutputType = {
    id: number | null
    created_by_user_id: number | null
    updated_by_user_id: number | null
    year: number | null
    pages: number | null
  }

  export type BookSumAggregateOutputType = {
    id: bigint | null
    created_by_user_id: bigint | null
    updated_by_user_id: bigint | null
    year: number | null
    pages: number | null
  }

  export type BookMinAggregateOutputType = {
    id: bigint | null
    slug: string | null
    created_at: Date | null
    created_by_user_id: bigint | null
    updated_at: Date | null
    updated_by_user_id: bigint | null
    title: string | null
    subtitle: string | null
    publisher: string | null
    year: number | null
    edition: string | null
    isbn: string | null
    pages: number | null
    summary: string | null
    pdf_url: string | null
    cover_url: string | null
    label: string | null
    shelf: string | null
    status: $Enums.StatusEnum | null
    description: string | null
  }

  export type BookMaxAggregateOutputType = {
    id: bigint | null
    slug: string | null
    created_at: Date | null
    created_by_user_id: bigint | null
    updated_at: Date | null
    updated_by_user_id: bigint | null
    title: string | null
    subtitle: string | null
    publisher: string | null
    year: number | null
    edition: string | null
    isbn: string | null
    pages: number | null
    summary: string | null
    pdf_url: string | null
    cover_url: string | null
    label: string | null
    shelf: string | null
    status: $Enums.StatusEnum | null
    description: string | null
  }

  export type BookCountAggregateOutputType = {
    id: number
    slug: number
    created_at: number
    created_by_user_id: number
    updated_at: number
    updated_by_user_id: number
    title: number
    subtitle: number
    publisher: number
    year: number
    edition: number
    isbn: number
    pages: number
    summary: number
    pdf_url: number
    cover_url: number
    images_url: number
    keywords: number
    label: number
    shelf: number
    status: number
    description: number
    _all: number
  }


  export type BookAvgAggregateInputType = {
    id?: true
    created_by_user_id?: true
    updated_by_user_id?: true
    year?: true
    pages?: true
  }

  export type BookSumAggregateInputType = {
    id?: true
    created_by_user_id?: true
    updated_by_user_id?: true
    year?: true
    pages?: true
  }

  export type BookMinAggregateInputType = {
    id?: true
    slug?: true
    created_at?: true
    created_by_user_id?: true
    updated_at?: true
    updated_by_user_id?: true
    title?: true
    subtitle?: true
    publisher?: true
    year?: true
    edition?: true
    isbn?: true
    pages?: true
    summary?: true
    pdf_url?: true
    cover_url?: true
    label?: true
    shelf?: true
    status?: true
    description?: true
  }

  export type BookMaxAggregateInputType = {
    id?: true
    slug?: true
    created_at?: true
    created_by_user_id?: true
    updated_at?: true
    updated_by_user_id?: true
    title?: true
    subtitle?: true
    publisher?: true
    year?: true
    edition?: true
    isbn?: true
    pages?: true
    summary?: true
    pdf_url?: true
    cover_url?: true
    label?: true
    shelf?: true
    status?: true
    description?: true
  }

  export type BookCountAggregateInputType = {
    id?: true
    slug?: true
    created_at?: true
    created_by_user_id?: true
    updated_at?: true
    updated_by_user_id?: true
    title?: true
    subtitle?: true
    publisher?: true
    year?: true
    edition?: true
    isbn?: true
    pages?: true
    summary?: true
    pdf_url?: true
    cover_url?: true
    images_url?: true
    keywords?: true
    label?: true
    shelf?: true
    status?: true
    description?: true
    _all?: true
  }

  export type BookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Book to aggregate.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Books
    **/
    _count?: true | BookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookMaxAggregateInputType
  }

  export type GetBookAggregateType<T extends BookAggregateArgs> = {
        [P in keyof T & keyof AggregateBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBook[P]>
      : GetScalarType<T[P], AggregateBook[P]>
  }




  export type BookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
    orderBy?: BookOrderByWithAggregationInput | BookOrderByWithAggregationInput[]
    by: BookScalarFieldEnum[] | BookScalarFieldEnum
    having?: BookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookCountAggregateInputType | true
    _avg?: BookAvgAggregateInputType
    _sum?: BookSumAggregateInputType
    _min?: BookMinAggregateInputType
    _max?: BookMaxAggregateInputType
  }

  export type BookGroupByOutputType = {
    id: bigint
    slug: string
    created_at: Date
    created_by_user_id: bigint
    updated_at: Date | null
    updated_by_user_id: bigint | null
    title: string
    subtitle: string | null
    publisher: string | null
    year: number | null
    edition: string | null
    isbn: string | null
    pages: number | null
    summary: string | null
    pdf_url: string | null
    cover_url: string | null
    images_url: string[]
    keywords: string[]
    label: string | null
    shelf: string | null
    status: $Enums.StatusEnum
    description: string | null
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  type GetBookGroupByPayload<T extends BookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookGroupByOutputType[P]>
            : GetScalarType<T[P], BookGroupByOutputType[P]>
        }
      >
    >


  export type BookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    created_at?: boolean
    created_by_user_id?: boolean
    updated_at?: boolean
    updated_by_user_id?: boolean
    title?: boolean
    subtitle?: boolean
    publisher?: boolean
    year?: boolean
    edition?: boolean
    isbn?: boolean
    pages?: boolean
    summary?: boolean
    pdf_url?: boolean
    cover_url?: boolean
    images_url?: boolean
    keywords?: boolean
    label?: boolean
    shelf?: boolean
    status?: boolean
    description?: boolean
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
    updated_by_user?: boolean | Book$updated_by_userArgs<ExtArgs>
    authors?: boolean | Book$authorsArgs<ExtArgs>
    tags?: boolean | Book$tagsArgs<ExtArgs>
    loans?: boolean | Book$loansArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type BookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    created_at?: boolean
    created_by_user_id?: boolean
    updated_at?: boolean
    updated_by_user_id?: boolean
    title?: boolean
    subtitle?: boolean
    publisher?: boolean
    year?: boolean
    edition?: boolean
    isbn?: boolean
    pages?: boolean
    summary?: boolean
    pdf_url?: boolean
    cover_url?: boolean
    images_url?: boolean
    keywords?: boolean
    label?: boolean
    shelf?: boolean
    status?: boolean
    description?: boolean
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
    updated_by_user?: boolean | Book$updated_by_userArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type BookSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    created_at?: boolean
    created_by_user_id?: boolean
    updated_at?: boolean
    updated_by_user_id?: boolean
    title?: boolean
    subtitle?: boolean
    publisher?: boolean
    year?: boolean
    edition?: boolean
    isbn?: boolean
    pages?: boolean
    summary?: boolean
    pdf_url?: boolean
    cover_url?: boolean
    images_url?: boolean
    keywords?: boolean
    label?: boolean
    shelf?: boolean
    status?: boolean
    description?: boolean
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
    updated_by_user?: boolean | Book$updated_by_userArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type BookSelectScalar = {
    id?: boolean
    slug?: boolean
    created_at?: boolean
    created_by_user_id?: boolean
    updated_at?: boolean
    updated_by_user_id?: boolean
    title?: boolean
    subtitle?: boolean
    publisher?: boolean
    year?: boolean
    edition?: boolean
    isbn?: boolean
    pages?: boolean
    summary?: boolean
    pdf_url?: boolean
    cover_url?: boolean
    images_url?: boolean
    keywords?: boolean
    label?: boolean
    shelf?: boolean
    status?: boolean
    description?: boolean
  }

  export type BookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "created_at" | "created_by_user_id" | "updated_at" | "updated_by_user_id" | "title" | "subtitle" | "publisher" | "year" | "edition" | "isbn" | "pages" | "summary" | "pdf_url" | "cover_url" | "images_url" | "keywords" | "label" | "shelf" | "status" | "description", ExtArgs["result"]["book"]>
  export type BookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
    updated_by_user?: boolean | Book$updated_by_userArgs<ExtArgs>
    authors?: boolean | Book$authorsArgs<ExtArgs>
    tags?: boolean | Book$tagsArgs<ExtArgs>
    loans?: boolean | Book$loansArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BookIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
    updated_by_user?: boolean | Book$updated_by_userArgs<ExtArgs>
  }
  export type BookIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
    updated_by_user?: boolean | Book$updated_by_userArgs<ExtArgs>
  }

  export type $BookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Book"
    objects: {
      created_by_user: Prisma.$UserPayload<ExtArgs>
      updated_by_user: Prisma.$UserPayload<ExtArgs> | null
      authors: Prisma.$BookAuthorPayload<ExtArgs>[]
      tags: Prisma.$BookTagPayload<ExtArgs>[]
      loans: Prisma.$LoanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      slug: string
      created_at: Date
      created_by_user_id: bigint
      updated_at: Date | null
      updated_by_user_id: bigint | null
      title: string
      subtitle: string | null
      publisher: string | null
      year: number | null
      edition: string | null
      isbn: string | null
      pages: number | null
      summary: string | null
      pdf_url: string | null
      cover_url: string | null
      images_url: string[]
      keywords: string[]
      label: string | null
      shelf: string | null
      status: $Enums.StatusEnum
      description: string | null
    }, ExtArgs["result"]["book"]>
    composites: {}
  }

  type BookGetPayload<S extends boolean | null | undefined | BookDefaultArgs> = $Result.GetResult<Prisma.$BookPayload, S>

  type BookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookCountAggregateInputType | true
    }

  export interface BookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Book'], meta: { name: 'Book' } }
    /**
     * Find zero or one Book that matches the filter.
     * @param {BookFindUniqueArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookFindUniqueArgs>(args: SelectSubset<T, BookFindUniqueArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Book that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookFindUniqueOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookFindUniqueOrThrowArgs>(args: SelectSubset<T, BookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookFindFirstArgs>(args?: SelectSubset<T, BookFindFirstArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookFindFirstOrThrowArgs>(args?: SelectSubset<T, BookFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Books
     * const books = await prisma.book.findMany()
     * 
     * // Get first 10 Books
     * const books = await prisma.book.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookWithIdOnly = await prisma.book.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookFindManyArgs>(args?: SelectSubset<T, BookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Book.
     * @param {BookCreateArgs} args - Arguments to create a Book.
     * @example
     * // Create one Book
     * const Book = await prisma.book.create({
     *   data: {
     *     // ... data to create a Book
     *   }
     * })
     * 
     */
    create<T extends BookCreateArgs>(args: SelectSubset<T, BookCreateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Books.
     * @param {BookCreateManyArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookCreateManyArgs>(args?: SelectSubset<T, BookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Books and returns the data saved in the database.
     * @param {BookCreateManyAndReturnArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Books and only return the `id`
     * const bookWithIdOnly = await prisma.book.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookCreateManyAndReturnArgs>(args?: SelectSubset<T, BookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Book.
     * @param {BookDeleteArgs} args - Arguments to delete one Book.
     * @example
     * // Delete one Book
     * const Book = await prisma.book.delete({
     *   where: {
     *     // ... filter to delete one Book
     *   }
     * })
     * 
     */
    delete<T extends BookDeleteArgs>(args: SelectSubset<T, BookDeleteArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Book.
     * @param {BookUpdateArgs} args - Arguments to update one Book.
     * @example
     * // Update one Book
     * const book = await prisma.book.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookUpdateArgs>(args: SelectSubset<T, BookUpdateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Books.
     * @param {BookDeleteManyArgs} args - Arguments to filter Books to delete.
     * @example
     * // Delete a few Books
     * const { count } = await prisma.book.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookDeleteManyArgs>(args?: SelectSubset<T, BookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookUpdateManyArgs>(args: SelectSubset<T, BookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books and returns the data updated in the database.
     * @param {BookUpdateManyAndReturnArgs} args - Arguments to update many Books.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Books and only return the `id`
     * const bookWithIdOnly = await prisma.book.updateManyAndReturn({
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
    updateManyAndReturn<T extends BookUpdateManyAndReturnArgs>(args: SelectSubset<T, BookUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Book.
     * @param {BookUpsertArgs} args - Arguments to update or create a Book.
     * @example
     * // Update or create a Book
     * const book = await prisma.book.upsert({
     *   create: {
     *     // ... data to create a Book
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Book we want to update
     *   }
     * })
     */
    upsert<T extends BookUpsertArgs>(args: SelectSubset<T, BookUpsertArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCountArgs} args - Arguments to filter Books to count.
     * @example
     * // Count the number of Books
     * const count = await prisma.book.count({
     *   where: {
     *     // ... the filter for the Books we want to count
     *   }
     * })
    **/
    count<T extends BookCountArgs>(
      args?: Subset<T, BookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookAggregateArgs>(args: Subset<T, BookAggregateArgs>): Prisma.PrismaPromise<GetBookAggregateType<T>>

    /**
     * Group by Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookGroupByArgs} args - Group by arguments.
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
      T extends BookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookGroupByArgs['orderBy'] }
        : { orderBy?: BookGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Book model
   */
  readonly fields: BookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Book.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    created_by_user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    updated_by_user<T extends Book$updated_by_userArgs<ExtArgs> = {}>(args?: Subset<T, Book$updated_by_userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    authors<T extends Book$authorsArgs<ExtArgs> = {}>(args?: Subset<T, Book$authorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookAuthorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tags<T extends Book$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Book$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    loans<T extends Book$loansArgs<ExtArgs> = {}>(args?: Subset<T, Book$loansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Book model
   */
  interface BookFieldRefs {
    readonly id: FieldRef<"Book", 'BigInt'>
    readonly slug: FieldRef<"Book", 'String'>
    readonly created_at: FieldRef<"Book", 'DateTime'>
    readonly created_by_user_id: FieldRef<"Book", 'BigInt'>
    readonly updated_at: FieldRef<"Book", 'DateTime'>
    readonly updated_by_user_id: FieldRef<"Book", 'BigInt'>
    readonly title: FieldRef<"Book", 'String'>
    readonly subtitle: FieldRef<"Book", 'String'>
    readonly publisher: FieldRef<"Book", 'String'>
    readonly year: FieldRef<"Book", 'Int'>
    readonly edition: FieldRef<"Book", 'String'>
    readonly isbn: FieldRef<"Book", 'String'>
    readonly pages: FieldRef<"Book", 'Int'>
    readonly summary: FieldRef<"Book", 'String'>
    readonly pdf_url: FieldRef<"Book", 'String'>
    readonly cover_url: FieldRef<"Book", 'String'>
    readonly images_url: FieldRef<"Book", 'String[]'>
    readonly keywords: FieldRef<"Book", 'String[]'>
    readonly label: FieldRef<"Book", 'String'>
    readonly shelf: FieldRef<"Book", 'String'>
    readonly status: FieldRef<"Book", 'StatusEnum'>
    readonly description: FieldRef<"Book", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Book findUnique
   */
  export type BookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findUniqueOrThrow
   */
  export type BookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findFirst
   */
  export type BookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findFirstOrThrow
   */
  export type BookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findMany
   */
  export type BookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Books to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book create
   */
  export type BookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to create a Book.
     */
    data: XOR<BookCreateInput, BookUncheckedCreateInput>
  }

  /**
   * Book createMany
   */
  export type BookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Books.
     */
    data: BookCreateManyInput | BookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Book createManyAndReturn
   */
  export type BookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * The data used to create many Books.
     */
    data: BookCreateManyInput | BookCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Book update
   */
  export type BookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to update a Book.
     */
    data: XOR<BookUpdateInput, BookUncheckedUpdateInput>
    /**
     * Choose, which Book to update.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book updateMany
   */
  export type BookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Books.
     */
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to update.
     */
    limit?: number
  }

  /**
   * Book updateManyAndReturn
   */
  export type BookUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * The data used to update Books.
     */
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Book upsert
   */
  export type BookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The filter to search for the Book to update in case it exists.
     */
    where: BookWhereUniqueInput
    /**
     * In case the Book found by the `where` argument doesn't exist, create a new Book with this data.
     */
    create: XOR<BookCreateInput, BookUncheckedCreateInput>
    /**
     * In case the Book was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookUpdateInput, BookUncheckedUpdateInput>
  }

  /**
   * Book delete
   */
  export type BookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter which Book to delete.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book deleteMany
   */
  export type BookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Books to delete
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to delete.
     */
    limit?: number
  }

  /**
   * Book.updated_by_user
   */
  export type Book$updated_by_userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Book.authors
   */
  export type Book$authorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookAuthor
     */
    select?: BookAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookAuthor
     */
    omit?: BookAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAuthorInclude<ExtArgs> | null
    where?: BookAuthorWhereInput
    orderBy?: BookAuthorOrderByWithRelationInput | BookAuthorOrderByWithRelationInput[]
    cursor?: BookAuthorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookAuthorScalarFieldEnum | BookAuthorScalarFieldEnum[]
  }

  /**
   * Book.tags
   */
  export type Book$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookTag
     */
    select?: BookTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookTag
     */
    omit?: BookTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookTagInclude<ExtArgs> | null
    where?: BookTagWhereInput
    orderBy?: BookTagOrderByWithRelationInput | BookTagOrderByWithRelationInput[]
    cursor?: BookTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookTagScalarFieldEnum | BookTagScalarFieldEnum[]
  }

  /**
   * Book.loans
   */
  export type Book$loansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loan
     */
    omit?: LoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    where?: LoanWhereInput
    orderBy?: LoanOrderByWithRelationInput | LoanOrderByWithRelationInput[]
    cursor?: LoanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoanScalarFieldEnum | LoanScalarFieldEnum[]
  }

  /**
   * Book without action
   */
  export type BookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
  }


  /**
   * Model Loan
   */

  export type AggregateLoan = {
    _count: LoanCountAggregateOutputType | null
    _avg: LoanAvgAggregateOutputType | null
    _sum: LoanSumAggregateOutputType | null
    _min: LoanMinAggregateOutputType | null
    _max: LoanMaxAggregateOutputType | null
  }

  export type LoanAvgAggregateOutputType = {
    id: number | null
    created_by_user_id: number | null
    updated_by_user_id: number | null
    book_id: number | null
    user_id: number | null
  }

  export type LoanSumAggregateOutputType = {
    id: bigint | null
    created_by_user_id: bigint | null
    updated_by_user_id: bigint | null
    book_id: bigint | null
    user_id: bigint | null
  }

  export type LoanMinAggregateOutputType = {
    id: bigint | null
    slug: string | null
    created_at: Date | null
    created_by_user_id: bigint | null
    updated_at: Date | null
    updated_by_user_id: bigint | null
    status: $Enums.StatusEnum | null
    loan_date: Date | null
    due_date: Date | null
    return_date: Date | null
    book_id: bigint | null
    user_id: bigint | null
  }

  export type LoanMaxAggregateOutputType = {
    id: bigint | null
    slug: string | null
    created_at: Date | null
    created_by_user_id: bigint | null
    updated_at: Date | null
    updated_by_user_id: bigint | null
    status: $Enums.StatusEnum | null
    loan_date: Date | null
    due_date: Date | null
    return_date: Date | null
    book_id: bigint | null
    user_id: bigint | null
  }

  export type LoanCountAggregateOutputType = {
    id: number
    slug: number
    created_at: number
    created_by_user_id: number
    updated_at: number
    updated_by_user_id: number
    status: number
    loan_date: number
    due_date: number
    return_date: number
    book_id: number
    user_id: number
    _all: number
  }


  export type LoanAvgAggregateInputType = {
    id?: true
    created_by_user_id?: true
    updated_by_user_id?: true
    book_id?: true
    user_id?: true
  }

  export type LoanSumAggregateInputType = {
    id?: true
    created_by_user_id?: true
    updated_by_user_id?: true
    book_id?: true
    user_id?: true
  }

  export type LoanMinAggregateInputType = {
    id?: true
    slug?: true
    created_at?: true
    created_by_user_id?: true
    updated_at?: true
    updated_by_user_id?: true
    status?: true
    loan_date?: true
    due_date?: true
    return_date?: true
    book_id?: true
    user_id?: true
  }

  export type LoanMaxAggregateInputType = {
    id?: true
    slug?: true
    created_at?: true
    created_by_user_id?: true
    updated_at?: true
    updated_by_user_id?: true
    status?: true
    loan_date?: true
    due_date?: true
    return_date?: true
    book_id?: true
    user_id?: true
  }

  export type LoanCountAggregateInputType = {
    id?: true
    slug?: true
    created_at?: true
    created_by_user_id?: true
    updated_at?: true
    updated_by_user_id?: true
    status?: true
    loan_date?: true
    due_date?: true
    return_date?: true
    book_id?: true
    user_id?: true
    _all?: true
  }

  export type LoanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Loan to aggregate.
     */
    where?: LoanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Loans to fetch.
     */
    orderBy?: LoanOrderByWithRelationInput | LoanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LoanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Loans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Loans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Loans
    **/
    _count?: true | LoanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LoanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LoanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoanMaxAggregateInputType
  }

  export type GetLoanAggregateType<T extends LoanAggregateArgs> = {
        [P in keyof T & keyof AggregateLoan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoan[P]>
      : GetScalarType<T[P], AggregateLoan[P]>
  }




  export type LoanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoanWhereInput
    orderBy?: LoanOrderByWithAggregationInput | LoanOrderByWithAggregationInput[]
    by: LoanScalarFieldEnum[] | LoanScalarFieldEnum
    having?: LoanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoanCountAggregateInputType | true
    _avg?: LoanAvgAggregateInputType
    _sum?: LoanSumAggregateInputType
    _min?: LoanMinAggregateInputType
    _max?: LoanMaxAggregateInputType
  }

  export type LoanGroupByOutputType = {
    id: bigint
    slug: string
    created_at: Date
    created_by_user_id: bigint
    updated_at: Date | null
    updated_by_user_id: bigint | null
    status: $Enums.StatusEnum
    loan_date: Date
    due_date: Date
    return_date: Date | null
    book_id: bigint
    user_id: bigint
    _count: LoanCountAggregateOutputType | null
    _avg: LoanAvgAggregateOutputType | null
    _sum: LoanSumAggregateOutputType | null
    _min: LoanMinAggregateOutputType | null
    _max: LoanMaxAggregateOutputType | null
  }

  type GetLoanGroupByPayload<T extends LoanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoanGroupByOutputType[P]>
            : GetScalarType<T[P], LoanGroupByOutputType[P]>
        }
      >
    >


  export type LoanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    created_at?: boolean
    created_by_user_id?: boolean
    updated_at?: boolean
    updated_by_user_id?: boolean
    status?: boolean
    loan_date?: boolean
    due_date?: boolean
    return_date?: boolean
    book_id?: boolean
    user_id?: boolean
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
    updated_by_user?: boolean | Loan$updated_by_userArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loan"]>

  export type LoanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    created_at?: boolean
    created_by_user_id?: boolean
    updated_at?: boolean
    updated_by_user_id?: boolean
    status?: boolean
    loan_date?: boolean
    due_date?: boolean
    return_date?: boolean
    book_id?: boolean
    user_id?: boolean
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
    updated_by_user?: boolean | Loan$updated_by_userArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loan"]>

  export type LoanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    created_at?: boolean
    created_by_user_id?: boolean
    updated_at?: boolean
    updated_by_user_id?: boolean
    status?: boolean
    loan_date?: boolean
    due_date?: boolean
    return_date?: boolean
    book_id?: boolean
    user_id?: boolean
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
    updated_by_user?: boolean | Loan$updated_by_userArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loan"]>

  export type LoanSelectScalar = {
    id?: boolean
    slug?: boolean
    created_at?: boolean
    created_by_user_id?: boolean
    updated_at?: boolean
    updated_by_user_id?: boolean
    status?: boolean
    loan_date?: boolean
    due_date?: boolean
    return_date?: boolean
    book_id?: boolean
    user_id?: boolean
  }

  export type LoanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "created_at" | "created_by_user_id" | "updated_at" | "updated_by_user_id" | "status" | "loan_date" | "due_date" | "return_date" | "book_id" | "user_id", ExtArgs["result"]["loan"]>
  export type LoanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
    updated_by_user?: boolean | Loan$updated_by_userArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LoanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
    updated_by_user?: boolean | Loan$updated_by_userArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LoanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
    updated_by_user?: boolean | Loan$updated_by_userArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LoanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Loan"
    objects: {
      created_by_user: Prisma.$UserPayload<ExtArgs>
      updated_by_user: Prisma.$UserPayload<ExtArgs> | null
      book: Prisma.$BookPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      slug: string
      created_at: Date
      created_by_user_id: bigint
      updated_at: Date | null
      updated_by_user_id: bigint | null
      status: $Enums.StatusEnum
      loan_date: Date
      due_date: Date
      return_date: Date | null
      book_id: bigint
      user_id: bigint
    }, ExtArgs["result"]["loan"]>
    composites: {}
  }

  type LoanGetPayload<S extends boolean | null | undefined | LoanDefaultArgs> = $Result.GetResult<Prisma.$LoanPayload, S>

  type LoanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LoanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LoanCountAggregateInputType | true
    }

  export interface LoanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Loan'], meta: { name: 'Loan' } }
    /**
     * Find zero or one Loan that matches the filter.
     * @param {LoanFindUniqueArgs} args - Arguments to find a Loan
     * @example
     * // Get one Loan
     * const loan = await prisma.loan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LoanFindUniqueArgs>(args: SelectSubset<T, LoanFindUniqueArgs<ExtArgs>>): Prisma__LoanClient<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Loan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LoanFindUniqueOrThrowArgs} args - Arguments to find a Loan
     * @example
     * // Get one Loan
     * const loan = await prisma.loan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LoanFindUniqueOrThrowArgs>(args: SelectSubset<T, LoanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LoanClient<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Loan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanFindFirstArgs} args - Arguments to find a Loan
     * @example
     * // Get one Loan
     * const loan = await prisma.loan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LoanFindFirstArgs>(args?: SelectSubset<T, LoanFindFirstArgs<ExtArgs>>): Prisma__LoanClient<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Loan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanFindFirstOrThrowArgs} args - Arguments to find a Loan
     * @example
     * // Get one Loan
     * const loan = await prisma.loan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LoanFindFirstOrThrowArgs>(args?: SelectSubset<T, LoanFindFirstOrThrowArgs<ExtArgs>>): Prisma__LoanClient<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Loans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Loans
     * const loans = await prisma.loan.findMany()
     * 
     * // Get first 10 Loans
     * const loans = await prisma.loan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const loanWithIdOnly = await prisma.loan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LoanFindManyArgs>(args?: SelectSubset<T, LoanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Loan.
     * @param {LoanCreateArgs} args - Arguments to create a Loan.
     * @example
     * // Create one Loan
     * const Loan = await prisma.loan.create({
     *   data: {
     *     // ... data to create a Loan
     *   }
     * })
     * 
     */
    create<T extends LoanCreateArgs>(args: SelectSubset<T, LoanCreateArgs<ExtArgs>>): Prisma__LoanClient<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Loans.
     * @param {LoanCreateManyArgs} args - Arguments to create many Loans.
     * @example
     * // Create many Loans
     * const loan = await prisma.loan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LoanCreateManyArgs>(args?: SelectSubset<T, LoanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Loans and returns the data saved in the database.
     * @param {LoanCreateManyAndReturnArgs} args - Arguments to create many Loans.
     * @example
     * // Create many Loans
     * const loan = await prisma.loan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Loans and only return the `id`
     * const loanWithIdOnly = await prisma.loan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LoanCreateManyAndReturnArgs>(args?: SelectSubset<T, LoanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Loan.
     * @param {LoanDeleteArgs} args - Arguments to delete one Loan.
     * @example
     * // Delete one Loan
     * const Loan = await prisma.loan.delete({
     *   where: {
     *     // ... filter to delete one Loan
     *   }
     * })
     * 
     */
    delete<T extends LoanDeleteArgs>(args: SelectSubset<T, LoanDeleteArgs<ExtArgs>>): Prisma__LoanClient<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Loan.
     * @param {LoanUpdateArgs} args - Arguments to update one Loan.
     * @example
     * // Update one Loan
     * const loan = await prisma.loan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LoanUpdateArgs>(args: SelectSubset<T, LoanUpdateArgs<ExtArgs>>): Prisma__LoanClient<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Loans.
     * @param {LoanDeleteManyArgs} args - Arguments to filter Loans to delete.
     * @example
     * // Delete a few Loans
     * const { count } = await prisma.loan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LoanDeleteManyArgs>(args?: SelectSubset<T, LoanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Loans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Loans
     * const loan = await prisma.loan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LoanUpdateManyArgs>(args: SelectSubset<T, LoanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Loans and returns the data updated in the database.
     * @param {LoanUpdateManyAndReturnArgs} args - Arguments to update many Loans.
     * @example
     * // Update many Loans
     * const loan = await prisma.loan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Loans and only return the `id`
     * const loanWithIdOnly = await prisma.loan.updateManyAndReturn({
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
    updateManyAndReturn<T extends LoanUpdateManyAndReturnArgs>(args: SelectSubset<T, LoanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Loan.
     * @param {LoanUpsertArgs} args - Arguments to update or create a Loan.
     * @example
     * // Update or create a Loan
     * const loan = await prisma.loan.upsert({
     *   create: {
     *     // ... data to create a Loan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Loan we want to update
     *   }
     * })
     */
    upsert<T extends LoanUpsertArgs>(args: SelectSubset<T, LoanUpsertArgs<ExtArgs>>): Prisma__LoanClient<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Loans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanCountArgs} args - Arguments to filter Loans to count.
     * @example
     * // Count the number of Loans
     * const count = await prisma.loan.count({
     *   where: {
     *     // ... the filter for the Loans we want to count
     *   }
     * })
    **/
    count<T extends LoanCountArgs>(
      args?: Subset<T, LoanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Loan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LoanAggregateArgs>(args: Subset<T, LoanAggregateArgs>): Prisma.PrismaPromise<GetLoanAggregateType<T>>

    /**
     * Group by Loan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanGroupByArgs} args - Group by arguments.
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
      T extends LoanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LoanGroupByArgs['orderBy'] }
        : { orderBy?: LoanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LoanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Loan model
   */
  readonly fields: LoanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Loan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LoanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    created_by_user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    updated_by_user<T extends Loan$updated_by_userArgs<ExtArgs> = {}>(args?: Subset<T, Loan$updated_by_userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Loan model
   */
  interface LoanFieldRefs {
    readonly id: FieldRef<"Loan", 'BigInt'>
    readonly slug: FieldRef<"Loan", 'String'>
    readonly created_at: FieldRef<"Loan", 'DateTime'>
    readonly created_by_user_id: FieldRef<"Loan", 'BigInt'>
    readonly updated_at: FieldRef<"Loan", 'DateTime'>
    readonly updated_by_user_id: FieldRef<"Loan", 'BigInt'>
    readonly status: FieldRef<"Loan", 'StatusEnum'>
    readonly loan_date: FieldRef<"Loan", 'DateTime'>
    readonly due_date: FieldRef<"Loan", 'DateTime'>
    readonly return_date: FieldRef<"Loan", 'DateTime'>
    readonly book_id: FieldRef<"Loan", 'BigInt'>
    readonly user_id: FieldRef<"Loan", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * Loan findUnique
   */
  export type LoanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loan
     */
    omit?: LoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    /**
     * Filter, which Loan to fetch.
     */
    where: LoanWhereUniqueInput
  }

  /**
   * Loan findUniqueOrThrow
   */
  export type LoanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loan
     */
    omit?: LoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    /**
     * Filter, which Loan to fetch.
     */
    where: LoanWhereUniqueInput
  }

  /**
   * Loan findFirst
   */
  export type LoanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loan
     */
    omit?: LoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    /**
     * Filter, which Loan to fetch.
     */
    where?: LoanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Loans to fetch.
     */
    orderBy?: LoanOrderByWithRelationInput | LoanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Loans.
     */
    cursor?: LoanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Loans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Loans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Loans.
     */
    distinct?: LoanScalarFieldEnum | LoanScalarFieldEnum[]
  }

  /**
   * Loan findFirstOrThrow
   */
  export type LoanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loan
     */
    omit?: LoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    /**
     * Filter, which Loan to fetch.
     */
    where?: LoanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Loans to fetch.
     */
    orderBy?: LoanOrderByWithRelationInput | LoanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Loans.
     */
    cursor?: LoanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Loans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Loans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Loans.
     */
    distinct?: LoanScalarFieldEnum | LoanScalarFieldEnum[]
  }

  /**
   * Loan findMany
   */
  export type LoanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loan
     */
    omit?: LoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    /**
     * Filter, which Loans to fetch.
     */
    where?: LoanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Loans to fetch.
     */
    orderBy?: LoanOrderByWithRelationInput | LoanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Loans.
     */
    cursor?: LoanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Loans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Loans.
     */
    skip?: number
    distinct?: LoanScalarFieldEnum | LoanScalarFieldEnum[]
  }

  /**
   * Loan create
   */
  export type LoanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loan
     */
    omit?: LoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    /**
     * The data needed to create a Loan.
     */
    data: XOR<LoanCreateInput, LoanUncheckedCreateInput>
  }

  /**
   * Loan createMany
   */
  export type LoanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Loans.
     */
    data: LoanCreateManyInput | LoanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Loan createManyAndReturn
   */
  export type LoanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Loan
     */
    omit?: LoanOmit<ExtArgs> | null
    /**
     * The data used to create many Loans.
     */
    data: LoanCreateManyInput | LoanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Loan update
   */
  export type LoanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loan
     */
    omit?: LoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    /**
     * The data needed to update a Loan.
     */
    data: XOR<LoanUpdateInput, LoanUncheckedUpdateInput>
    /**
     * Choose, which Loan to update.
     */
    where: LoanWhereUniqueInput
  }

  /**
   * Loan updateMany
   */
  export type LoanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Loans.
     */
    data: XOR<LoanUpdateManyMutationInput, LoanUncheckedUpdateManyInput>
    /**
     * Filter which Loans to update
     */
    where?: LoanWhereInput
    /**
     * Limit how many Loans to update.
     */
    limit?: number
  }

  /**
   * Loan updateManyAndReturn
   */
  export type LoanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Loan
     */
    omit?: LoanOmit<ExtArgs> | null
    /**
     * The data used to update Loans.
     */
    data: XOR<LoanUpdateManyMutationInput, LoanUncheckedUpdateManyInput>
    /**
     * Filter which Loans to update
     */
    where?: LoanWhereInput
    /**
     * Limit how many Loans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Loan upsert
   */
  export type LoanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loan
     */
    omit?: LoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    /**
     * The filter to search for the Loan to update in case it exists.
     */
    where: LoanWhereUniqueInput
    /**
     * In case the Loan found by the `where` argument doesn't exist, create a new Loan with this data.
     */
    create: XOR<LoanCreateInput, LoanUncheckedCreateInput>
    /**
     * In case the Loan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LoanUpdateInput, LoanUncheckedUpdateInput>
  }

  /**
   * Loan delete
   */
  export type LoanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loan
     */
    omit?: LoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    /**
     * Filter which Loan to delete.
     */
    where: LoanWhereUniqueInput
  }

  /**
   * Loan deleteMany
   */
  export type LoanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Loans to delete
     */
    where?: LoanWhereInput
    /**
     * Limit how many Loans to delete.
     */
    limit?: number
  }

  /**
   * Loan.updated_by_user
   */
  export type Loan$updated_by_userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Loan without action
   */
  export type LoanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loan
     */
    omit?: LoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
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
    slug: 'slug',
    created_at: 'created_at',
    name: 'name',
    display_name: 'display_name',
    sex: 'sex',
    login: 'login',
    status: 'status',
    password: 'password',
    email: 'email',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserAuthTokenScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    created_at: 'created_at',
    updated_at: 'updated_at',
    last_used_at: 'last_used_at',
    created_ip: 'created_ip',
    last_used_ip: 'last_used_ip',
    status: 'status',
    jwt_token: 'jwt_token',
    jwt_secret: 'jwt_secret',
    keep: 'keep',
    user_id: 'user_id'
  };

  export type UserAuthTokenScalarFieldEnum = (typeof UserAuthTokenScalarFieldEnum)[keyof typeof UserAuthTokenScalarFieldEnum]


  export const AuthorScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    created_at: 'created_at',
    created_by_user_id: 'created_by_user_id',
    updated_at: 'updated_at',
    updated_by_user_id: 'updated_by_user_id',
    name: 'name',
    status: 'status',
    description: 'description',
    avatar_url: 'avatar_url',
    is_spirit: 'is_spirit'
  };

  export type AuthorScalarFieldEnum = (typeof AuthorScalarFieldEnum)[keyof typeof AuthorScalarFieldEnum]


  export const BookAuthorScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    created_by_user_id: 'created_by_user_id',
    updated_at: 'updated_at',
    updated_by_user_id: 'updated_by_user_id',
    status: 'status',
    author_id: 'author_id',
    book_id: 'book_id',
    description: 'description'
  };

  export type BookAuthorScalarFieldEnum = (typeof BookAuthorScalarFieldEnum)[keyof typeof BookAuthorScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    created_at: 'created_at',
    created_by_user_id: 'created_by_user_id',
    updated_at: 'updated_at',
    updated_by_user_id: 'updated_by_user_id',
    name: 'name',
    status: 'status',
    description: 'description'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const BookTagScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    created_by_user_id: 'created_by_user_id',
    updated_at: 'updated_at',
    updated_by_user_id: 'updated_by_user_id',
    status: 'status',
    tag_id: 'tag_id',
    book_id: 'book_id'
  };

  export type BookTagScalarFieldEnum = (typeof BookTagScalarFieldEnum)[keyof typeof BookTagScalarFieldEnum]


  export const BookScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    created_at: 'created_at',
    created_by_user_id: 'created_by_user_id',
    updated_at: 'updated_at',
    updated_by_user_id: 'updated_by_user_id',
    title: 'title',
    subtitle: 'subtitle',
    publisher: 'publisher',
    year: 'year',
    edition: 'edition',
    isbn: 'isbn',
    pages: 'pages',
    summary: 'summary',
    pdf_url: 'pdf_url',
    cover_url: 'cover_url',
    images_url: 'images_url',
    keywords: 'keywords',
    label: 'label',
    shelf: 'shelf',
    status: 'status',
    description: 'description'
  };

  export type BookScalarFieldEnum = (typeof BookScalarFieldEnum)[keyof typeof BookScalarFieldEnum]


  export const LoanScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    created_at: 'created_at',
    created_by_user_id: 'created_by_user_id',
    updated_at: 'updated_at',
    updated_by_user_id: 'updated_by_user_id',
    status: 'status',
    loan_date: 'loan_date',
    due_date: 'due_date',
    return_date: 'return_date',
    book_id: 'book_id',
    user_id: 'user_id'
  };

  export type LoanScalarFieldEnum = (typeof LoanScalarFieldEnum)[keyof typeof LoanScalarFieldEnum]


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
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'SexEnum'
   */
  export type EnumSexEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SexEnum'>
    


  /**
   * Reference to a field of type 'SexEnum[]'
   */
  export type ListEnumSexEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SexEnum[]'>
    


  /**
   * Reference to a field of type 'StatusEnum'
   */
  export type EnumStatusEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusEnum'>
    


  /**
   * Reference to a field of type 'StatusEnum[]'
   */
  export type ListEnumStatusEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusEnum[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


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
    id?: BigIntFilter<"User"> | bigint | number
    slug?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    name?: StringFilter<"User"> | string
    display_name?: StringFilter<"User"> | string
    sex?: EnumSexEnumNullableFilter<"User"> | $Enums.SexEnum | null
    login?: StringFilter<"User"> | string
    status?: EnumStatusEnumFilter<"User"> | $Enums.StatusEnum
    password?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    auth_tokens?: UserAuthTokenListRelationFilter
    created_authors?: AuthorListRelationFilter
    updated_authors?: AuthorListRelationFilter
    created_books?: BookListRelationFilter
    updated_books?: BookListRelationFilter
    created_book_authors?: BookAuthorListRelationFilter
    updated_book_authors?: BookAuthorListRelationFilter
    created_tags?: TagListRelationFilter
    updated_tags?: TagListRelationFilter
    created_book_tags?: BookTagListRelationFilter
    updated_book_tags?: BookTagListRelationFilter
    created_loans?: LoanListRelationFilter
    updated_loans?: LoanListRelationFilter
    user_loans?: LoanListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    display_name?: SortOrder
    sex?: SortOrderInput | SortOrder
    login?: SortOrder
    status?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    auth_tokens?: UserAuthTokenOrderByRelationAggregateInput
    created_authors?: AuthorOrderByRelationAggregateInput
    updated_authors?: AuthorOrderByRelationAggregateInput
    created_books?: BookOrderByRelationAggregateInput
    updated_books?: BookOrderByRelationAggregateInput
    created_book_authors?: BookAuthorOrderByRelationAggregateInput
    updated_book_authors?: BookAuthorOrderByRelationAggregateInput
    created_tags?: TagOrderByRelationAggregateInput
    updated_tags?: TagOrderByRelationAggregateInput
    created_book_tags?: BookTagOrderByRelationAggregateInput
    updated_book_tags?: BookTagOrderByRelationAggregateInput
    created_loans?: LoanOrderByRelationAggregateInput
    updated_loans?: LoanOrderByRelationAggregateInput
    user_loans?: LoanOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    slug?: string
    login?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    created_at?: DateTimeFilter<"User"> | Date | string
    name?: StringFilter<"User"> | string
    display_name?: StringFilter<"User"> | string
    sex?: EnumSexEnumNullableFilter<"User"> | $Enums.SexEnum | null
    status?: EnumStatusEnumFilter<"User"> | $Enums.StatusEnum
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    auth_tokens?: UserAuthTokenListRelationFilter
    created_authors?: AuthorListRelationFilter
    updated_authors?: AuthorListRelationFilter
    created_books?: BookListRelationFilter
    updated_books?: BookListRelationFilter
    created_book_authors?: BookAuthorListRelationFilter
    updated_book_authors?: BookAuthorListRelationFilter
    created_tags?: TagListRelationFilter
    updated_tags?: TagListRelationFilter
    created_book_tags?: BookTagListRelationFilter
    updated_book_tags?: BookTagListRelationFilter
    created_loans?: LoanListRelationFilter
    updated_loans?: LoanListRelationFilter
    user_loans?: LoanListRelationFilter
  }, "id" | "id" | "slug" | "login" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    display_name?: SortOrder
    sex?: SortOrderInput | SortOrder
    login?: SortOrder
    status?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"User"> | bigint | number
    slug?: StringWithAggregatesFilter<"User"> | string
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    name?: StringWithAggregatesFilter<"User"> | string
    display_name?: StringWithAggregatesFilter<"User"> | string
    sex?: EnumSexEnumNullableWithAggregatesFilter<"User"> | $Enums.SexEnum | null
    login?: StringWithAggregatesFilter<"User"> | string
    status?: EnumStatusEnumWithAggregatesFilter<"User"> | $Enums.StatusEnum
    password?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
  }

  export type UserAuthTokenWhereInput = {
    AND?: UserAuthTokenWhereInput | UserAuthTokenWhereInput[]
    OR?: UserAuthTokenWhereInput[]
    NOT?: UserAuthTokenWhereInput | UserAuthTokenWhereInput[]
    id?: BigIntFilter<"UserAuthToken"> | bigint | number
    slug?: StringFilter<"UserAuthToken"> | string
    created_at?: DateTimeFilter<"UserAuthToken"> | Date | string
    updated_at?: DateTimeNullableFilter<"UserAuthToken"> | Date | string | null
    last_used_at?: DateTimeNullableFilter<"UserAuthToken"> | Date | string | null
    created_ip?: StringFilter<"UserAuthToken"> | string
    last_used_ip?: StringNullableFilter<"UserAuthToken"> | string | null
    status?: EnumStatusEnumFilter<"UserAuthToken"> | $Enums.StatusEnum
    jwt_token?: StringFilter<"UserAuthToken"> | string
    jwt_secret?: StringFilter<"UserAuthToken"> | string
    keep?: BoolFilter<"UserAuthToken"> | boolean
    user_id?: BigIntFilter<"UserAuthToken"> | bigint | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserAuthTokenOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    last_used_at?: SortOrderInput | SortOrder
    created_ip?: SortOrder
    last_used_ip?: SortOrderInput | SortOrder
    status?: SortOrder
    jwt_token?: SortOrder
    jwt_secret?: SortOrder
    keep?: SortOrder
    user_id?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserAuthTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    slug?: string
    AND?: UserAuthTokenWhereInput | UserAuthTokenWhereInput[]
    OR?: UserAuthTokenWhereInput[]
    NOT?: UserAuthTokenWhereInput | UserAuthTokenWhereInput[]
    created_at?: DateTimeFilter<"UserAuthToken"> | Date | string
    updated_at?: DateTimeNullableFilter<"UserAuthToken"> | Date | string | null
    last_used_at?: DateTimeNullableFilter<"UserAuthToken"> | Date | string | null
    created_ip?: StringFilter<"UserAuthToken"> | string
    last_used_ip?: StringNullableFilter<"UserAuthToken"> | string | null
    status?: EnumStatusEnumFilter<"UserAuthToken"> | $Enums.StatusEnum
    jwt_token?: StringFilter<"UserAuthToken"> | string
    jwt_secret?: StringFilter<"UserAuthToken"> | string
    keep?: BoolFilter<"UserAuthToken"> | boolean
    user_id?: BigIntFilter<"UserAuthToken"> | bigint | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "id" | "slug">

  export type UserAuthTokenOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    last_used_at?: SortOrderInput | SortOrder
    created_ip?: SortOrder
    last_used_ip?: SortOrderInput | SortOrder
    status?: SortOrder
    jwt_token?: SortOrder
    jwt_secret?: SortOrder
    keep?: SortOrder
    user_id?: SortOrder
    _count?: UserAuthTokenCountOrderByAggregateInput
    _avg?: UserAuthTokenAvgOrderByAggregateInput
    _max?: UserAuthTokenMaxOrderByAggregateInput
    _min?: UserAuthTokenMinOrderByAggregateInput
    _sum?: UserAuthTokenSumOrderByAggregateInput
  }

  export type UserAuthTokenScalarWhereWithAggregatesInput = {
    AND?: UserAuthTokenScalarWhereWithAggregatesInput | UserAuthTokenScalarWhereWithAggregatesInput[]
    OR?: UserAuthTokenScalarWhereWithAggregatesInput[]
    NOT?: UserAuthTokenScalarWhereWithAggregatesInput | UserAuthTokenScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"UserAuthToken"> | bigint | number
    slug?: StringWithAggregatesFilter<"UserAuthToken"> | string
    created_at?: DateTimeWithAggregatesFilter<"UserAuthToken"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"UserAuthToken"> | Date | string | null
    last_used_at?: DateTimeNullableWithAggregatesFilter<"UserAuthToken"> | Date | string | null
    created_ip?: StringWithAggregatesFilter<"UserAuthToken"> | string
    last_used_ip?: StringNullableWithAggregatesFilter<"UserAuthToken"> | string | null
    status?: EnumStatusEnumWithAggregatesFilter<"UserAuthToken"> | $Enums.StatusEnum
    jwt_token?: StringWithAggregatesFilter<"UserAuthToken"> | string
    jwt_secret?: StringWithAggregatesFilter<"UserAuthToken"> | string
    keep?: BoolWithAggregatesFilter<"UserAuthToken"> | boolean
    user_id?: BigIntWithAggregatesFilter<"UserAuthToken"> | bigint | number
  }

  export type AuthorWhereInput = {
    AND?: AuthorWhereInput | AuthorWhereInput[]
    OR?: AuthorWhereInput[]
    NOT?: AuthorWhereInput | AuthorWhereInput[]
    id?: BigIntFilter<"Author"> | bigint | number
    slug?: StringFilter<"Author"> | string
    created_at?: DateTimeFilter<"Author"> | Date | string
    created_by_user_id?: BigIntFilter<"Author"> | bigint | number
    updated_at?: DateTimeNullableFilter<"Author"> | Date | string | null
    updated_by_user_id?: BigIntNullableFilter<"Author"> | bigint | number | null
    name?: StringFilter<"Author"> | string
    status?: EnumStatusEnumFilter<"Author"> | $Enums.StatusEnum
    description?: StringNullableFilter<"Author"> | string | null
    avatar_url?: StringNullableFilter<"Author"> | string | null
    is_spirit?: BoolFilter<"Author"> | boolean
    created_by_user?: XOR<UserScalarRelationFilter, UserWhereInput>
    updated_by_user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    books?: BookAuthorListRelationFilter
  }

  export type AuthorOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
    created_by_user_id?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    updated_by_user_id?: SortOrderInput | SortOrder
    name?: SortOrder
    status?: SortOrder
    description?: SortOrderInput | SortOrder
    avatar_url?: SortOrderInput | SortOrder
    is_spirit?: SortOrder
    created_by_user?: UserOrderByWithRelationInput
    updated_by_user?: UserOrderByWithRelationInput
    books?: BookAuthorOrderByRelationAggregateInput
  }

  export type AuthorWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    slug?: string
    AND?: AuthorWhereInput | AuthorWhereInput[]
    OR?: AuthorWhereInput[]
    NOT?: AuthorWhereInput | AuthorWhereInput[]
    created_at?: DateTimeFilter<"Author"> | Date | string
    created_by_user_id?: BigIntFilter<"Author"> | bigint | number
    updated_at?: DateTimeNullableFilter<"Author"> | Date | string | null
    updated_by_user_id?: BigIntNullableFilter<"Author"> | bigint | number | null
    name?: StringFilter<"Author"> | string
    status?: EnumStatusEnumFilter<"Author"> | $Enums.StatusEnum
    description?: StringNullableFilter<"Author"> | string | null
    avatar_url?: StringNullableFilter<"Author"> | string | null
    is_spirit?: BoolFilter<"Author"> | boolean
    created_by_user?: XOR<UserScalarRelationFilter, UserWhereInput>
    updated_by_user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    books?: BookAuthorListRelationFilter
  }, "id" | "id" | "slug">

  export type AuthorOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
    created_by_user_id?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    updated_by_user_id?: SortOrderInput | SortOrder
    name?: SortOrder
    status?: SortOrder
    description?: SortOrderInput | SortOrder
    avatar_url?: SortOrderInput | SortOrder
    is_spirit?: SortOrder
    _count?: AuthorCountOrderByAggregateInput
    _avg?: AuthorAvgOrderByAggregateInput
    _max?: AuthorMaxOrderByAggregateInput
    _min?: AuthorMinOrderByAggregateInput
    _sum?: AuthorSumOrderByAggregateInput
  }

  export type AuthorScalarWhereWithAggregatesInput = {
    AND?: AuthorScalarWhereWithAggregatesInput | AuthorScalarWhereWithAggregatesInput[]
    OR?: AuthorScalarWhereWithAggregatesInput[]
    NOT?: AuthorScalarWhereWithAggregatesInput | AuthorScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Author"> | bigint | number
    slug?: StringWithAggregatesFilter<"Author"> | string
    created_at?: DateTimeWithAggregatesFilter<"Author"> | Date | string
    created_by_user_id?: BigIntWithAggregatesFilter<"Author"> | bigint | number
    updated_at?: DateTimeNullableWithAggregatesFilter<"Author"> | Date | string | null
    updated_by_user_id?: BigIntNullableWithAggregatesFilter<"Author"> | bigint | number | null
    name?: StringWithAggregatesFilter<"Author"> | string
    status?: EnumStatusEnumWithAggregatesFilter<"Author"> | $Enums.StatusEnum
    description?: StringNullableWithAggregatesFilter<"Author"> | string | null
    avatar_url?: StringNullableWithAggregatesFilter<"Author"> | string | null
    is_spirit?: BoolWithAggregatesFilter<"Author"> | boolean
  }

  export type BookAuthorWhereInput = {
    AND?: BookAuthorWhereInput | BookAuthorWhereInput[]
    OR?: BookAuthorWhereInput[]
    NOT?: BookAuthorWhereInput | BookAuthorWhereInput[]
    id?: BigIntFilter<"BookAuthor"> | bigint | number
    created_at?: DateTimeFilter<"BookAuthor"> | Date | string
    created_by_user_id?: BigIntFilter<"BookAuthor"> | bigint | number
    updated_at?: DateTimeNullableFilter<"BookAuthor"> | Date | string | null
    updated_by_user_id?: BigIntNullableFilter<"BookAuthor"> | bigint | number | null
    status?: EnumStatusEnumFilter<"BookAuthor"> | $Enums.StatusEnum
    author_id?: BigIntFilter<"BookAuthor"> | bigint | number
    book_id?: BigIntFilter<"BookAuthor"> | bigint | number
    description?: StringNullableFilter<"BookAuthor"> | string | null
    created_by_user?: XOR<UserScalarRelationFilter, UserWhereInput>
    updated_by_user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    author?: XOR<AuthorScalarRelationFilter, AuthorWhereInput>
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
  }

  export type BookAuthorOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    created_by_user_id?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    updated_by_user_id?: SortOrderInput | SortOrder
    status?: SortOrder
    author_id?: SortOrder
    book_id?: SortOrder
    description?: SortOrderInput | SortOrder
    created_by_user?: UserOrderByWithRelationInput
    updated_by_user?: UserOrderByWithRelationInput
    author?: AuthorOrderByWithRelationInput
    book?: BookOrderByWithRelationInput
  }

  export type BookAuthorWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: BookAuthorWhereInput | BookAuthorWhereInput[]
    OR?: BookAuthorWhereInput[]
    NOT?: BookAuthorWhereInput | BookAuthorWhereInput[]
    created_at?: DateTimeFilter<"BookAuthor"> | Date | string
    created_by_user_id?: BigIntFilter<"BookAuthor"> | bigint | number
    updated_at?: DateTimeNullableFilter<"BookAuthor"> | Date | string | null
    updated_by_user_id?: BigIntNullableFilter<"BookAuthor"> | bigint | number | null
    status?: EnumStatusEnumFilter<"BookAuthor"> | $Enums.StatusEnum
    author_id?: BigIntFilter<"BookAuthor"> | bigint | number
    book_id?: BigIntFilter<"BookAuthor"> | bigint | number
    description?: StringNullableFilter<"BookAuthor"> | string | null
    created_by_user?: XOR<UserScalarRelationFilter, UserWhereInput>
    updated_by_user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    author?: XOR<AuthorScalarRelationFilter, AuthorWhereInput>
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
  }, "id" | "id">

  export type BookAuthorOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    created_by_user_id?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    updated_by_user_id?: SortOrderInput | SortOrder
    status?: SortOrder
    author_id?: SortOrder
    book_id?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: BookAuthorCountOrderByAggregateInput
    _avg?: BookAuthorAvgOrderByAggregateInput
    _max?: BookAuthorMaxOrderByAggregateInput
    _min?: BookAuthorMinOrderByAggregateInput
    _sum?: BookAuthorSumOrderByAggregateInput
  }

  export type BookAuthorScalarWhereWithAggregatesInput = {
    AND?: BookAuthorScalarWhereWithAggregatesInput | BookAuthorScalarWhereWithAggregatesInput[]
    OR?: BookAuthorScalarWhereWithAggregatesInput[]
    NOT?: BookAuthorScalarWhereWithAggregatesInput | BookAuthorScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"BookAuthor"> | bigint | number
    created_at?: DateTimeWithAggregatesFilter<"BookAuthor"> | Date | string
    created_by_user_id?: BigIntWithAggregatesFilter<"BookAuthor"> | bigint | number
    updated_at?: DateTimeNullableWithAggregatesFilter<"BookAuthor"> | Date | string | null
    updated_by_user_id?: BigIntNullableWithAggregatesFilter<"BookAuthor"> | bigint | number | null
    status?: EnumStatusEnumWithAggregatesFilter<"BookAuthor"> | $Enums.StatusEnum
    author_id?: BigIntWithAggregatesFilter<"BookAuthor"> | bigint | number
    book_id?: BigIntWithAggregatesFilter<"BookAuthor"> | bigint | number
    description?: StringNullableWithAggregatesFilter<"BookAuthor"> | string | null
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: BigIntFilter<"Tag"> | bigint | number
    slug?: StringFilter<"Tag"> | string
    created_at?: DateTimeFilter<"Tag"> | Date | string
    created_by_user_id?: BigIntFilter<"Tag"> | bigint | number
    updated_at?: DateTimeNullableFilter<"Tag"> | Date | string | null
    updated_by_user_id?: BigIntNullableFilter<"Tag"> | bigint | number | null
    name?: StringFilter<"Tag"> | string
    status?: EnumStatusEnumFilter<"Tag"> | $Enums.StatusEnum
    description?: StringNullableFilter<"Tag"> | string | null
    created_by_user?: XOR<UserScalarRelationFilter, UserWhereInput>
    updated_by_user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    books?: BookTagListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
    created_by_user_id?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    updated_by_user_id?: SortOrderInput | SortOrder
    name?: SortOrder
    status?: SortOrder
    description?: SortOrderInput | SortOrder
    created_by_user?: UserOrderByWithRelationInput
    updated_by_user?: UserOrderByWithRelationInput
    books?: BookTagOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    slug?: string
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    created_at?: DateTimeFilter<"Tag"> | Date | string
    created_by_user_id?: BigIntFilter<"Tag"> | bigint | number
    updated_at?: DateTimeNullableFilter<"Tag"> | Date | string | null
    updated_by_user_id?: BigIntNullableFilter<"Tag"> | bigint | number | null
    name?: StringFilter<"Tag"> | string
    status?: EnumStatusEnumFilter<"Tag"> | $Enums.StatusEnum
    description?: StringNullableFilter<"Tag"> | string | null
    created_by_user?: XOR<UserScalarRelationFilter, UserWhereInput>
    updated_by_user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    books?: BookTagListRelationFilter
  }, "id" | "id" | "slug">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
    created_by_user_id?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    updated_by_user_id?: SortOrderInput | SortOrder
    name?: SortOrder
    status?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: TagCountOrderByAggregateInput
    _avg?: TagAvgOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
    _sum?: TagSumOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Tag"> | bigint | number
    slug?: StringWithAggregatesFilter<"Tag"> | string
    created_at?: DateTimeWithAggregatesFilter<"Tag"> | Date | string
    created_by_user_id?: BigIntWithAggregatesFilter<"Tag"> | bigint | number
    updated_at?: DateTimeNullableWithAggregatesFilter<"Tag"> | Date | string | null
    updated_by_user_id?: BigIntNullableWithAggregatesFilter<"Tag"> | bigint | number | null
    name?: StringWithAggregatesFilter<"Tag"> | string
    status?: EnumStatusEnumWithAggregatesFilter<"Tag"> | $Enums.StatusEnum
    description?: StringNullableWithAggregatesFilter<"Tag"> | string | null
  }

  export type BookTagWhereInput = {
    AND?: BookTagWhereInput | BookTagWhereInput[]
    OR?: BookTagWhereInput[]
    NOT?: BookTagWhereInput | BookTagWhereInput[]
    id?: BigIntFilter<"BookTag"> | bigint | number
    created_at?: DateTimeFilter<"BookTag"> | Date | string
    created_by_user_id?: BigIntFilter<"BookTag"> | bigint | number
    updated_at?: DateTimeNullableFilter<"BookTag"> | Date | string | null
    updated_by_user_id?: BigIntNullableFilter<"BookTag"> | bigint | number | null
    status?: EnumStatusEnumFilter<"BookTag"> | $Enums.StatusEnum
    tag_id?: BigIntFilter<"BookTag"> | bigint | number
    book_id?: BigIntFilter<"BookTag"> | bigint | number
    created_by_user?: XOR<UserScalarRelationFilter, UserWhereInput>
    updated_by_user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
  }

  export type BookTagOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    created_by_user_id?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    updated_by_user_id?: SortOrderInput | SortOrder
    status?: SortOrder
    tag_id?: SortOrder
    book_id?: SortOrder
    created_by_user?: UserOrderByWithRelationInput
    updated_by_user?: UserOrderByWithRelationInput
    tag?: TagOrderByWithRelationInput
    book?: BookOrderByWithRelationInput
  }

  export type BookTagWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: BookTagWhereInput | BookTagWhereInput[]
    OR?: BookTagWhereInput[]
    NOT?: BookTagWhereInput | BookTagWhereInput[]
    created_at?: DateTimeFilter<"BookTag"> | Date | string
    created_by_user_id?: BigIntFilter<"BookTag"> | bigint | number
    updated_at?: DateTimeNullableFilter<"BookTag"> | Date | string | null
    updated_by_user_id?: BigIntNullableFilter<"BookTag"> | bigint | number | null
    status?: EnumStatusEnumFilter<"BookTag"> | $Enums.StatusEnum
    tag_id?: BigIntFilter<"BookTag"> | bigint | number
    book_id?: BigIntFilter<"BookTag"> | bigint | number
    created_by_user?: XOR<UserScalarRelationFilter, UserWhereInput>
    updated_by_user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
  }, "id" | "id">

  export type BookTagOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    created_by_user_id?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    updated_by_user_id?: SortOrderInput | SortOrder
    status?: SortOrder
    tag_id?: SortOrder
    book_id?: SortOrder
    _count?: BookTagCountOrderByAggregateInput
    _avg?: BookTagAvgOrderByAggregateInput
    _max?: BookTagMaxOrderByAggregateInput
    _min?: BookTagMinOrderByAggregateInput
    _sum?: BookTagSumOrderByAggregateInput
  }

  export type BookTagScalarWhereWithAggregatesInput = {
    AND?: BookTagScalarWhereWithAggregatesInput | BookTagScalarWhereWithAggregatesInput[]
    OR?: BookTagScalarWhereWithAggregatesInput[]
    NOT?: BookTagScalarWhereWithAggregatesInput | BookTagScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"BookTag"> | bigint | number
    created_at?: DateTimeWithAggregatesFilter<"BookTag"> | Date | string
    created_by_user_id?: BigIntWithAggregatesFilter<"BookTag"> | bigint | number
    updated_at?: DateTimeNullableWithAggregatesFilter<"BookTag"> | Date | string | null
    updated_by_user_id?: BigIntNullableWithAggregatesFilter<"BookTag"> | bigint | number | null
    status?: EnumStatusEnumWithAggregatesFilter<"BookTag"> | $Enums.StatusEnum
    tag_id?: BigIntWithAggregatesFilter<"BookTag"> | bigint | number
    book_id?: BigIntWithAggregatesFilter<"BookTag"> | bigint | number
  }

  export type BookWhereInput = {
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    id?: BigIntFilter<"Book"> | bigint | number
    slug?: StringFilter<"Book"> | string
    created_at?: DateTimeFilter<"Book"> | Date | string
    created_by_user_id?: BigIntFilter<"Book"> | bigint | number
    updated_at?: DateTimeNullableFilter<"Book"> | Date | string | null
    updated_by_user_id?: BigIntNullableFilter<"Book"> | bigint | number | null
    title?: StringFilter<"Book"> | string
    subtitle?: StringNullableFilter<"Book"> | string | null
    publisher?: StringNullableFilter<"Book"> | string | null
    year?: IntNullableFilter<"Book"> | number | null
    edition?: StringNullableFilter<"Book"> | string | null
    isbn?: StringNullableFilter<"Book"> | string | null
    pages?: IntNullableFilter<"Book"> | number | null
    summary?: StringNullableFilter<"Book"> | string | null
    pdf_url?: StringNullableFilter<"Book"> | string | null
    cover_url?: StringNullableFilter<"Book"> | string | null
    images_url?: StringNullableListFilter<"Book">
    keywords?: StringNullableListFilter<"Book">
    label?: StringNullableFilter<"Book"> | string | null
    shelf?: StringNullableFilter<"Book"> | string | null
    status?: EnumStatusEnumFilter<"Book"> | $Enums.StatusEnum
    description?: StringNullableFilter<"Book"> | string | null
    created_by_user?: XOR<UserScalarRelationFilter, UserWhereInput>
    updated_by_user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    authors?: BookAuthorListRelationFilter
    tags?: BookTagListRelationFilter
    loans?: LoanListRelationFilter
  }

  export type BookOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
    created_by_user_id?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    updated_by_user_id?: SortOrderInput | SortOrder
    title?: SortOrder
    subtitle?: SortOrderInput | SortOrder
    publisher?: SortOrderInput | SortOrder
    year?: SortOrderInput | SortOrder
    edition?: SortOrderInput | SortOrder
    isbn?: SortOrderInput | SortOrder
    pages?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    pdf_url?: SortOrderInput | SortOrder
    cover_url?: SortOrderInput | SortOrder
    images_url?: SortOrder
    keywords?: SortOrder
    label?: SortOrderInput | SortOrder
    shelf?: SortOrderInput | SortOrder
    status?: SortOrder
    description?: SortOrderInput | SortOrder
    created_by_user?: UserOrderByWithRelationInput
    updated_by_user?: UserOrderByWithRelationInput
    authors?: BookAuthorOrderByRelationAggregateInput
    tags?: BookTagOrderByRelationAggregateInput
    loans?: LoanOrderByRelationAggregateInput
  }

  export type BookWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    slug?: string
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    created_at?: DateTimeFilter<"Book"> | Date | string
    created_by_user_id?: BigIntFilter<"Book"> | bigint | number
    updated_at?: DateTimeNullableFilter<"Book"> | Date | string | null
    updated_by_user_id?: BigIntNullableFilter<"Book"> | bigint | number | null
    title?: StringFilter<"Book"> | string
    subtitle?: StringNullableFilter<"Book"> | string | null
    publisher?: StringNullableFilter<"Book"> | string | null
    year?: IntNullableFilter<"Book"> | number | null
    edition?: StringNullableFilter<"Book"> | string | null
    isbn?: StringNullableFilter<"Book"> | string | null
    pages?: IntNullableFilter<"Book"> | number | null
    summary?: StringNullableFilter<"Book"> | string | null
    pdf_url?: StringNullableFilter<"Book"> | string | null
    cover_url?: StringNullableFilter<"Book"> | string | null
    images_url?: StringNullableListFilter<"Book">
    keywords?: StringNullableListFilter<"Book">
    label?: StringNullableFilter<"Book"> | string | null
    shelf?: StringNullableFilter<"Book"> | string | null
    status?: EnumStatusEnumFilter<"Book"> | $Enums.StatusEnum
    description?: StringNullableFilter<"Book"> | string | null
    created_by_user?: XOR<UserScalarRelationFilter, UserWhereInput>
    updated_by_user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    authors?: BookAuthorListRelationFilter
    tags?: BookTagListRelationFilter
    loans?: LoanListRelationFilter
  }, "id" | "id" | "slug">

  export type BookOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
    created_by_user_id?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    updated_by_user_id?: SortOrderInput | SortOrder
    title?: SortOrder
    subtitle?: SortOrderInput | SortOrder
    publisher?: SortOrderInput | SortOrder
    year?: SortOrderInput | SortOrder
    edition?: SortOrderInput | SortOrder
    isbn?: SortOrderInput | SortOrder
    pages?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    pdf_url?: SortOrderInput | SortOrder
    cover_url?: SortOrderInput | SortOrder
    images_url?: SortOrder
    keywords?: SortOrder
    label?: SortOrderInput | SortOrder
    shelf?: SortOrderInput | SortOrder
    status?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: BookCountOrderByAggregateInput
    _avg?: BookAvgOrderByAggregateInput
    _max?: BookMaxOrderByAggregateInput
    _min?: BookMinOrderByAggregateInput
    _sum?: BookSumOrderByAggregateInput
  }

  export type BookScalarWhereWithAggregatesInput = {
    AND?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    OR?: BookScalarWhereWithAggregatesInput[]
    NOT?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Book"> | bigint | number
    slug?: StringWithAggregatesFilter<"Book"> | string
    created_at?: DateTimeWithAggregatesFilter<"Book"> | Date | string
    created_by_user_id?: BigIntWithAggregatesFilter<"Book"> | bigint | number
    updated_at?: DateTimeNullableWithAggregatesFilter<"Book"> | Date | string | null
    updated_by_user_id?: BigIntNullableWithAggregatesFilter<"Book"> | bigint | number | null
    title?: StringWithAggregatesFilter<"Book"> | string
    subtitle?: StringNullableWithAggregatesFilter<"Book"> | string | null
    publisher?: StringNullableWithAggregatesFilter<"Book"> | string | null
    year?: IntNullableWithAggregatesFilter<"Book"> | number | null
    edition?: StringNullableWithAggregatesFilter<"Book"> | string | null
    isbn?: StringNullableWithAggregatesFilter<"Book"> | string | null
    pages?: IntNullableWithAggregatesFilter<"Book"> | number | null
    summary?: StringNullableWithAggregatesFilter<"Book"> | string | null
    pdf_url?: StringNullableWithAggregatesFilter<"Book"> | string | null
    cover_url?: StringNullableWithAggregatesFilter<"Book"> | string | null
    images_url?: StringNullableListFilter<"Book">
    keywords?: StringNullableListFilter<"Book">
    label?: StringNullableWithAggregatesFilter<"Book"> | string | null
    shelf?: StringNullableWithAggregatesFilter<"Book"> | string | null
    status?: EnumStatusEnumWithAggregatesFilter<"Book"> | $Enums.StatusEnum
    description?: StringNullableWithAggregatesFilter<"Book"> | string | null
  }

  export type LoanWhereInput = {
    AND?: LoanWhereInput | LoanWhereInput[]
    OR?: LoanWhereInput[]
    NOT?: LoanWhereInput | LoanWhereInput[]
    id?: BigIntFilter<"Loan"> | bigint | number
    slug?: StringFilter<"Loan"> | string
    created_at?: DateTimeFilter<"Loan"> | Date | string
    created_by_user_id?: BigIntFilter<"Loan"> | bigint | number
    updated_at?: DateTimeNullableFilter<"Loan"> | Date | string | null
    updated_by_user_id?: BigIntNullableFilter<"Loan"> | bigint | number | null
    status?: EnumStatusEnumFilter<"Loan"> | $Enums.StatusEnum
    loan_date?: DateTimeFilter<"Loan"> | Date | string
    due_date?: DateTimeFilter<"Loan"> | Date | string
    return_date?: DateTimeNullableFilter<"Loan"> | Date | string | null
    book_id?: BigIntFilter<"Loan"> | bigint | number
    user_id?: BigIntFilter<"Loan"> | bigint | number
    created_by_user?: XOR<UserScalarRelationFilter, UserWhereInput>
    updated_by_user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LoanOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
    created_by_user_id?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    updated_by_user_id?: SortOrderInput | SortOrder
    status?: SortOrder
    loan_date?: SortOrder
    due_date?: SortOrder
    return_date?: SortOrderInput | SortOrder
    book_id?: SortOrder
    user_id?: SortOrder
    created_by_user?: UserOrderByWithRelationInput
    updated_by_user?: UserOrderByWithRelationInput
    book?: BookOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type LoanWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    slug?: string
    AND?: LoanWhereInput | LoanWhereInput[]
    OR?: LoanWhereInput[]
    NOT?: LoanWhereInput | LoanWhereInput[]
    created_at?: DateTimeFilter<"Loan"> | Date | string
    created_by_user_id?: BigIntFilter<"Loan"> | bigint | number
    updated_at?: DateTimeNullableFilter<"Loan"> | Date | string | null
    updated_by_user_id?: BigIntNullableFilter<"Loan"> | bigint | number | null
    status?: EnumStatusEnumFilter<"Loan"> | $Enums.StatusEnum
    loan_date?: DateTimeFilter<"Loan"> | Date | string
    due_date?: DateTimeFilter<"Loan"> | Date | string
    return_date?: DateTimeNullableFilter<"Loan"> | Date | string | null
    book_id?: BigIntFilter<"Loan"> | bigint | number
    user_id?: BigIntFilter<"Loan"> | bigint | number
    created_by_user?: XOR<UserScalarRelationFilter, UserWhereInput>
    updated_by_user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "id" | "slug">

  export type LoanOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
    created_by_user_id?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    updated_by_user_id?: SortOrderInput | SortOrder
    status?: SortOrder
    loan_date?: SortOrder
    due_date?: SortOrder
    return_date?: SortOrderInput | SortOrder
    book_id?: SortOrder
    user_id?: SortOrder
    _count?: LoanCountOrderByAggregateInput
    _avg?: LoanAvgOrderByAggregateInput
    _max?: LoanMaxOrderByAggregateInput
    _min?: LoanMinOrderByAggregateInput
    _sum?: LoanSumOrderByAggregateInput
  }

  export type LoanScalarWhereWithAggregatesInput = {
    AND?: LoanScalarWhereWithAggregatesInput | LoanScalarWhereWithAggregatesInput[]
    OR?: LoanScalarWhereWithAggregatesInput[]
    NOT?: LoanScalarWhereWithAggregatesInput | LoanScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Loan"> | bigint | number
    slug?: StringWithAggregatesFilter<"Loan"> | string
    created_at?: DateTimeWithAggregatesFilter<"Loan"> | Date | string
    created_by_user_id?: BigIntWithAggregatesFilter<"Loan"> | bigint | number
    updated_at?: DateTimeNullableWithAggregatesFilter<"Loan"> | Date | string | null
    updated_by_user_id?: BigIntNullableWithAggregatesFilter<"Loan"> | bigint | number | null
    status?: EnumStatusEnumWithAggregatesFilter<"Loan"> | $Enums.StatusEnum
    loan_date?: DateTimeWithAggregatesFilter<"Loan"> | Date | string
    due_date?: DateTimeWithAggregatesFilter<"Loan"> | Date | string
    return_date?: DateTimeNullableWithAggregatesFilter<"Loan"> | Date | string | null
    book_id?: BigIntWithAggregatesFilter<"Loan"> | bigint | number
    user_id?: BigIntWithAggregatesFilter<"Loan"> | bigint | number
  }

  export type UserCreateInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    name: string
    display_name: string
    sex?: $Enums.SexEnum | null
    login: string
    status?: $Enums.StatusEnum
    password: string
    email: string
    role: $Enums.UserRole
    auth_tokens?: UserAuthTokenCreateNestedManyWithoutUserInput
    created_authors?: AuthorCreateNestedManyWithoutCreated_by_userInput
    updated_authors?: AuthorCreateNestedManyWithoutUpdated_by_userInput
    created_books?: BookCreateNestedManyWithoutCreated_by_userInput
    updated_books?: BookCreateNestedManyWithoutUpdated_by_userInput
    created_book_authors?: BookAuthorCreateNestedManyWithoutCreated_by_userInput
    updated_book_authors?: BookAuthorCreateNestedManyWithoutUpdated_by_userInput
    created_tags?: TagCreateNestedManyWithoutCreated_by_userInput
    updated_tags?: TagCreateNestedManyWithoutUpdated_by_userInput
    created_book_tags?: BookTagCreateNestedManyWithoutCreated_by_userInput
    updated_book_tags?: BookTagCreateNestedManyWithoutUpdated_by_userInput
    created_loans?: LoanCreateNestedManyWithoutCreated_by_userInput
    updated_loans?: LoanCreateNestedManyWithoutUpdated_by_userInput
    user_loans?: LoanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    name: string
    display_name: string
    sex?: $Enums.SexEnum | null
    login: string
    status?: $Enums.StatusEnum
    password: string
    email: string
    role: $Enums.UserRole
    auth_tokens?: UserAuthTokenUncheckedCreateNestedManyWithoutUserInput
    created_authors?: AuthorUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_authors?: AuthorUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_books?: BookUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_books?: BookUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_book_authors?: BookAuthorUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_book_authors?: BookAuthorUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_tags?: TagUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_tags?: TagUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_book_tags?: BookTagUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_book_tags?: BookTagUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_loans?: LoanUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_loans?: LoanUncheckedCreateNestedManyWithoutUpdated_by_userInput
    user_loans?: LoanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    sex?: NullableEnumSexEnumFieldUpdateOperationsInput | $Enums.SexEnum | null
    login?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    auth_tokens?: UserAuthTokenUpdateManyWithoutUserNestedInput
    created_authors?: AuthorUpdateManyWithoutCreated_by_userNestedInput
    updated_authors?: AuthorUpdateManyWithoutUpdated_by_userNestedInput
    created_books?: BookUpdateManyWithoutCreated_by_userNestedInput
    updated_books?: BookUpdateManyWithoutUpdated_by_userNestedInput
    created_book_authors?: BookAuthorUpdateManyWithoutCreated_by_userNestedInput
    updated_book_authors?: BookAuthorUpdateManyWithoutUpdated_by_userNestedInput
    created_tags?: TagUpdateManyWithoutCreated_by_userNestedInput
    updated_tags?: TagUpdateManyWithoutUpdated_by_userNestedInput
    created_book_tags?: BookTagUpdateManyWithoutCreated_by_userNestedInput
    updated_book_tags?: BookTagUpdateManyWithoutUpdated_by_userNestedInput
    created_loans?: LoanUpdateManyWithoutCreated_by_userNestedInput
    updated_loans?: LoanUpdateManyWithoutUpdated_by_userNestedInput
    user_loans?: LoanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    sex?: NullableEnumSexEnumFieldUpdateOperationsInput | $Enums.SexEnum | null
    login?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    auth_tokens?: UserAuthTokenUncheckedUpdateManyWithoutUserNestedInput
    created_authors?: AuthorUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_authors?: AuthorUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_books?: BookUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_books?: BookUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_book_authors?: BookAuthorUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_book_authors?: BookAuthorUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_tags?: TagUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_tags?: TagUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_book_tags?: BookTagUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_book_tags?: BookTagUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_loans?: LoanUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_loans?: LoanUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    user_loans?: LoanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    name: string
    display_name: string
    sex?: $Enums.SexEnum | null
    login: string
    status?: $Enums.StatusEnum
    password: string
    email: string
    role: $Enums.UserRole
  }

  export type UserUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    sex?: NullableEnumSexEnumFieldUpdateOperationsInput | $Enums.SexEnum | null
    login?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type UserUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    sex?: NullableEnumSexEnumFieldUpdateOperationsInput | $Enums.SexEnum | null
    login?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type UserAuthTokenCreateInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    last_used_at?: Date | string | null
    created_ip: string
    last_used_ip?: string | null
    status?: $Enums.StatusEnum
    jwt_token: string
    jwt_secret: string
    keep?: boolean
    user: UserCreateNestedOneWithoutAuth_tokensInput
  }

  export type UserAuthTokenUncheckedCreateInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    last_used_at?: Date | string | null
    created_ip: string
    last_used_ip?: string | null
    status?: $Enums.StatusEnum
    jwt_token: string
    jwt_secret: string
    keep?: boolean
    user_id: bigint | number
  }

  export type UserAuthTokenUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_ip?: StringFieldUpdateOperationsInput | string
    last_used_ip?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    jwt_token?: StringFieldUpdateOperationsInput | string
    jwt_secret?: StringFieldUpdateOperationsInput | string
    keep?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutAuth_tokensNestedInput
  }

  export type UserAuthTokenUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_ip?: StringFieldUpdateOperationsInput | string
    last_used_ip?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    jwt_token?: StringFieldUpdateOperationsInput | string
    jwt_secret?: StringFieldUpdateOperationsInput | string
    keep?: BoolFieldUpdateOperationsInput | boolean
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type UserAuthTokenCreateManyInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    last_used_at?: Date | string | null
    created_ip: string
    last_used_ip?: string | null
    status?: $Enums.StatusEnum
    jwt_token: string
    jwt_secret: string
    keep?: boolean
    user_id: bigint | number
  }

  export type UserAuthTokenUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_ip?: StringFieldUpdateOperationsInput | string
    last_used_ip?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    jwt_token?: StringFieldUpdateOperationsInput | string
    jwt_secret?: StringFieldUpdateOperationsInput | string
    keep?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserAuthTokenUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_ip?: StringFieldUpdateOperationsInput | string
    last_used_ip?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    jwt_token?: StringFieldUpdateOperationsInput | string
    jwt_secret?: StringFieldUpdateOperationsInput | string
    keep?: BoolFieldUpdateOperationsInput | boolean
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type AuthorCreateInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    name: string
    status?: $Enums.StatusEnum
    description?: string | null
    avatar_url?: string | null
    is_spirit?: boolean
    created_by_user: UserCreateNestedOneWithoutCreated_authorsInput
    updated_by_user?: UserCreateNestedOneWithoutUpdated_authorsInput
    books?: BookAuthorCreateNestedManyWithoutAuthorInput
  }

  export type AuthorUncheckedCreateInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    created_by_user_id: bigint | number
    updated_at?: Date | string | null
    updated_by_user_id?: bigint | number | null
    name: string
    status?: $Enums.StatusEnum
    description?: string | null
    avatar_url?: string | null
    is_spirit?: boolean
    books?: BookAuthorUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type AuthorUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_spirit?: BoolFieldUpdateOperationsInput | boolean
    created_by_user?: UserUpdateOneRequiredWithoutCreated_authorsNestedInput
    updated_by_user?: UserUpdateOneWithoutUpdated_authorsNestedInput
    books?: BookAuthorUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_spirit?: BoolFieldUpdateOperationsInput | boolean
    books?: BookAuthorUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorCreateManyInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    created_by_user_id: bigint | number
    updated_at?: Date | string | null
    updated_by_user_id?: bigint | number | null
    name: string
    status?: $Enums.StatusEnum
    description?: string | null
    avatar_url?: string | null
    is_spirit?: boolean
  }

  export type AuthorUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_spirit?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AuthorUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_spirit?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BookAuthorCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string | null
    status?: $Enums.StatusEnum
    description?: string | null
    created_by_user: UserCreateNestedOneWithoutCreated_book_authorsInput
    updated_by_user?: UserCreateNestedOneWithoutUpdated_book_authorsInput
    author: AuthorCreateNestedOneWithoutBooksInput
    book: BookCreateNestedOneWithoutAuthorsInput
  }

  export type BookAuthorUncheckedCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    created_by_user_id: bigint | number
    updated_at?: Date | string | null
    updated_by_user_id?: bigint | number | null
    status?: $Enums.StatusEnum
    author_id: bigint | number
    book_id: bigint | number
    description?: string | null
  }

  export type BookAuthorUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_by_user?: UserUpdateOneRequiredWithoutCreated_book_authorsNestedInput
    updated_by_user?: UserUpdateOneWithoutUpdated_book_authorsNestedInput
    author?: AuthorUpdateOneRequiredWithoutBooksNestedInput
    book?: BookUpdateOneRequiredWithoutAuthorsNestedInput
  }

  export type BookAuthorUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    author_id?: BigIntFieldUpdateOperationsInput | bigint | number
    book_id?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookAuthorCreateManyInput = {
    id?: bigint | number
    created_at?: Date | string
    created_by_user_id: bigint | number
    updated_at?: Date | string | null
    updated_by_user_id?: bigint | number | null
    status?: $Enums.StatusEnum
    author_id: bigint | number
    book_id: bigint | number
    description?: string | null
  }

  export type BookAuthorUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookAuthorUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    author_id?: BigIntFieldUpdateOperationsInput | bigint | number
    book_id?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TagCreateInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    name: string
    status?: $Enums.StatusEnum
    description?: string | null
    created_by_user: UserCreateNestedOneWithoutCreated_tagsInput
    updated_by_user?: UserCreateNestedOneWithoutUpdated_tagsInput
    books?: BookTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    created_by_user_id: bigint | number
    updated_at?: Date | string | null
    updated_by_user_id?: bigint | number | null
    name: string
    status?: $Enums.StatusEnum
    description?: string | null
    books?: BookTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_by_user?: UserUpdateOneRequiredWithoutCreated_tagsNestedInput
    updated_by_user?: UserUpdateOneWithoutUpdated_tagsNestedInput
    books?: BookTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    description?: NullableStringFieldUpdateOperationsInput | string | null
    books?: BookTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagCreateManyInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    created_by_user_id: bigint | number
    updated_at?: Date | string | null
    updated_by_user_id?: bigint | number | null
    name: string
    status?: $Enums.StatusEnum
    description?: string | null
  }

  export type TagUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TagUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookTagCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string | null
    status?: $Enums.StatusEnum
    created_by_user: UserCreateNestedOneWithoutCreated_book_tagsInput
    updated_by_user?: UserCreateNestedOneWithoutUpdated_book_tagsInput
    tag: TagCreateNestedOneWithoutBooksInput
    book: BookCreateNestedOneWithoutTagsInput
  }

  export type BookTagUncheckedCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    created_by_user_id: bigint | number
    updated_at?: Date | string | null
    updated_by_user_id?: bigint | number | null
    status?: $Enums.StatusEnum
    tag_id: bigint | number
    book_id: bigint | number
  }

  export type BookTagUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    created_by_user?: UserUpdateOneRequiredWithoutCreated_book_tagsNestedInput
    updated_by_user?: UserUpdateOneWithoutUpdated_book_tagsNestedInput
    tag?: TagUpdateOneRequiredWithoutBooksNestedInput
    book?: BookUpdateOneRequiredWithoutTagsNestedInput
  }

  export type BookTagUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    tag_id?: BigIntFieldUpdateOperationsInput | bigint | number
    book_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type BookTagCreateManyInput = {
    id?: bigint | number
    created_at?: Date | string
    created_by_user_id: bigint | number
    updated_at?: Date | string | null
    updated_by_user_id?: bigint | number | null
    status?: $Enums.StatusEnum
    tag_id: bigint | number
    book_id: bigint | number
  }

  export type BookTagUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
  }

  export type BookTagUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    tag_id?: BigIntFieldUpdateOperationsInput | bigint | number
    book_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type BookCreateInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    title: string
    subtitle?: string | null
    publisher?: string | null
    year?: number | null
    edition?: string | null
    isbn?: string | null
    pages?: number | null
    summary?: string | null
    pdf_url?: string | null
    cover_url?: string | null
    images_url?: BookCreateimages_urlInput | string[]
    keywords?: BookCreatekeywordsInput | string[]
    label?: string | null
    shelf?: string | null
    status?: $Enums.StatusEnum
    description?: string | null
    created_by_user: UserCreateNestedOneWithoutCreated_booksInput
    updated_by_user?: UserCreateNestedOneWithoutUpdated_booksInput
    authors?: BookAuthorCreateNestedManyWithoutBookInput
    tags?: BookTagCreateNestedManyWithoutBookInput
    loans?: LoanCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    created_by_user_id: bigint | number
    updated_at?: Date | string | null
    updated_by_user_id?: bigint | number | null
    title: string
    subtitle?: string | null
    publisher?: string | null
    year?: number | null
    edition?: string | null
    isbn?: string | null
    pages?: number | null
    summary?: string | null
    pdf_url?: string | null
    cover_url?: string | null
    images_url?: BookCreateimages_urlInput | string[]
    keywords?: BookCreatekeywordsInput | string[]
    label?: string | null
    shelf?: string | null
    status?: $Enums.StatusEnum
    description?: string | null
    authors?: BookAuthorUncheckedCreateNestedManyWithoutBookInput
    tags?: BookTagUncheckedCreateNestedManyWithoutBookInput
    loans?: LoanUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    edition?: NullableStringFieldUpdateOperationsInput | string | null
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    pages?: NullableIntFieldUpdateOperationsInput | number | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
    cover_url?: NullableStringFieldUpdateOperationsInput | string | null
    images_url?: BookUpdateimages_urlInput | string[]
    keywords?: BookUpdatekeywordsInput | string[]
    label?: NullableStringFieldUpdateOperationsInput | string | null
    shelf?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_by_user?: UserUpdateOneRequiredWithoutCreated_booksNestedInput
    updated_by_user?: UserUpdateOneWithoutUpdated_booksNestedInput
    authors?: BookAuthorUpdateManyWithoutBookNestedInput
    tags?: BookTagUpdateManyWithoutBookNestedInput
    loans?: LoanUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    edition?: NullableStringFieldUpdateOperationsInput | string | null
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    pages?: NullableIntFieldUpdateOperationsInput | number | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
    cover_url?: NullableStringFieldUpdateOperationsInput | string | null
    images_url?: BookUpdateimages_urlInput | string[]
    keywords?: BookUpdatekeywordsInput | string[]
    label?: NullableStringFieldUpdateOperationsInput | string | null
    shelf?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    description?: NullableStringFieldUpdateOperationsInput | string | null
    authors?: BookAuthorUncheckedUpdateManyWithoutBookNestedInput
    tags?: BookTagUncheckedUpdateManyWithoutBookNestedInput
    loans?: LoanUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookCreateManyInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    created_by_user_id: bigint | number
    updated_at?: Date | string | null
    updated_by_user_id?: bigint | number | null
    title: string
    subtitle?: string | null
    publisher?: string | null
    year?: number | null
    edition?: string | null
    isbn?: string | null
    pages?: number | null
    summary?: string | null
    pdf_url?: string | null
    cover_url?: string | null
    images_url?: BookCreateimages_urlInput | string[]
    keywords?: BookCreatekeywordsInput | string[]
    label?: string | null
    shelf?: string | null
    status?: $Enums.StatusEnum
    description?: string | null
  }

  export type BookUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    edition?: NullableStringFieldUpdateOperationsInput | string | null
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    pages?: NullableIntFieldUpdateOperationsInput | number | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
    cover_url?: NullableStringFieldUpdateOperationsInput | string | null
    images_url?: BookUpdateimages_urlInput | string[]
    keywords?: BookUpdatekeywordsInput | string[]
    label?: NullableStringFieldUpdateOperationsInput | string | null
    shelf?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    edition?: NullableStringFieldUpdateOperationsInput | string | null
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    pages?: NullableIntFieldUpdateOperationsInput | number | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
    cover_url?: NullableStringFieldUpdateOperationsInput | string | null
    images_url?: BookUpdateimages_urlInput | string[]
    keywords?: BookUpdatekeywordsInput | string[]
    label?: NullableStringFieldUpdateOperationsInput | string | null
    shelf?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LoanCreateInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    status?: $Enums.StatusEnum
    loan_date?: Date | string
    due_date?: Date | string
    return_date?: Date | string | null
    created_by_user: UserCreateNestedOneWithoutCreated_loansInput
    updated_by_user?: UserCreateNestedOneWithoutUpdated_loansInput
    book: BookCreateNestedOneWithoutLoansInput
    user: UserCreateNestedOneWithoutUser_loansInput
  }

  export type LoanUncheckedCreateInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    created_by_user_id: bigint | number
    updated_at?: Date | string | null
    updated_by_user_id?: bigint | number | null
    status?: $Enums.StatusEnum
    loan_date?: Date | string
    due_date?: Date | string
    return_date?: Date | string | null
    book_id: bigint | number
    user_id: bigint | number
  }

  export type LoanUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    loan_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    return_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by_user?: UserUpdateOneRequiredWithoutCreated_loansNestedInput
    updated_by_user?: UserUpdateOneWithoutUpdated_loansNestedInput
    book?: BookUpdateOneRequiredWithoutLoansNestedInput
    user?: UserUpdateOneRequiredWithoutUser_loansNestedInput
  }

  export type LoanUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    loan_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    return_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    book_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type LoanCreateManyInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    created_by_user_id: bigint | number
    updated_at?: Date | string | null
    updated_by_user_id?: bigint | number | null
    status?: $Enums.StatusEnum
    loan_date?: Date | string
    due_date?: Date | string
    return_date?: Date | string | null
    book_id: bigint | number
    user_id: bigint | number
  }

  export type LoanUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    loan_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    return_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LoanUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    loan_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    return_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    book_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type EnumSexEnumNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SexEnum | EnumSexEnumFieldRefInput<$PrismaModel> | null
    in?: $Enums.SexEnum[] | ListEnumSexEnumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SexEnum[] | ListEnumSexEnumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSexEnumNullableFilter<$PrismaModel> | $Enums.SexEnum | null
  }

  export type EnumStatusEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusEnum | EnumStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.StatusEnum[] | ListEnumStatusEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusEnum[] | ListEnumStatusEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusEnumFilter<$PrismaModel> | $Enums.StatusEnum
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type UserAuthTokenListRelationFilter = {
    every?: UserAuthTokenWhereInput
    some?: UserAuthTokenWhereInput
    none?: UserAuthTokenWhereInput
  }

  export type AuthorListRelationFilter = {
    every?: AuthorWhereInput
    some?: AuthorWhereInput
    none?: AuthorWhereInput
  }

  export type BookListRelationFilter = {
    every?: BookWhereInput
    some?: BookWhereInput
    none?: BookWhereInput
  }

  export type BookAuthorListRelationFilter = {
    every?: BookAuthorWhereInput
    some?: BookAuthorWhereInput
    none?: BookAuthorWhereInput
  }

  export type TagListRelationFilter = {
    every?: TagWhereInput
    some?: TagWhereInput
    none?: TagWhereInput
  }

  export type BookTagListRelationFilter = {
    every?: BookTagWhereInput
    some?: BookTagWhereInput
    none?: BookTagWhereInput
  }

  export type LoanListRelationFilter = {
    every?: LoanWhereInput
    some?: LoanWhereInput
    none?: LoanWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserAuthTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuthorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookAuthorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LoanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    display_name?: SortOrder
    sex?: SortOrder
    login?: SortOrder
    status?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    display_name?: SortOrder
    sex?: SortOrder
    login?: SortOrder
    status?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    display_name?: SortOrder
    sex?: SortOrder
    login?: SortOrder
    status?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type EnumSexEnumNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SexEnum | EnumSexEnumFieldRefInput<$PrismaModel> | null
    in?: $Enums.SexEnum[] | ListEnumSexEnumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SexEnum[] | ListEnumSexEnumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSexEnumNullableWithAggregatesFilter<$PrismaModel> | $Enums.SexEnum | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSexEnumNullableFilter<$PrismaModel>
    _max?: NestedEnumSexEnumNullableFilter<$PrismaModel>
  }

  export type EnumStatusEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusEnum | EnumStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.StatusEnum[] | ListEnumStatusEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusEnum[] | ListEnumStatusEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusEnumWithAggregatesFilter<$PrismaModel> | $Enums.StatusEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusEnumFilter<$PrismaModel>
    _max?: NestedEnumStatusEnumFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserAuthTokenCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    last_used_at?: SortOrder
    created_ip?: SortOrder
    last_used_ip?: SortOrder
    status?: SortOrder
    jwt_token?: SortOrder
    jwt_secret?: SortOrder
    keep?: SortOrder
    user_id?: SortOrder
  }

  export type UserAuthTokenAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type UserAuthTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    last_used_at?: SortOrder
    created_ip?: SortOrder
    last_used_ip?: SortOrder
    status?: SortOrder
    jwt_token?: SortOrder
    jwt_secret?: SortOrder
    keep?: SortOrder
    user_id?: SortOrder
  }

  export type UserAuthTokenMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    last_used_at?: SortOrder
    created_ip?: SortOrder
    last_used_ip?: SortOrder
    status?: SortOrder
    jwt_token?: SortOrder
    jwt_secret?: SortOrder
    keep?: SortOrder
    user_id?: SortOrder
  }

  export type UserAuthTokenSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type AuthorCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
    created_by_user_id?: SortOrder
    updated_at?: SortOrder
    updated_by_user_id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    description?: SortOrder
    avatar_url?: SortOrder
    is_spirit?: SortOrder
  }

  export type AuthorAvgOrderByAggregateInput = {
    id?: SortOrder
    created_by_user_id?: SortOrder
    updated_by_user_id?: SortOrder
  }

  export type AuthorMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
    created_by_user_id?: SortOrder
    updated_at?: SortOrder
    updated_by_user_id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    description?: SortOrder
    avatar_url?: SortOrder
    is_spirit?: SortOrder
  }

  export type AuthorMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
    created_by_user_id?: SortOrder
    updated_at?: SortOrder
    updated_by_user_id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    description?: SortOrder
    avatar_url?: SortOrder
    is_spirit?: SortOrder
  }

  export type AuthorSumOrderByAggregateInput = {
    id?: SortOrder
    created_by_user_id?: SortOrder
    updated_by_user_id?: SortOrder
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type AuthorScalarRelationFilter = {
    is?: AuthorWhereInput
    isNot?: AuthorWhereInput
  }

  export type BookScalarRelationFilter = {
    is?: BookWhereInput
    isNot?: BookWhereInput
  }

  export type BookAuthorCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    created_by_user_id?: SortOrder
    updated_at?: SortOrder
    updated_by_user_id?: SortOrder
    status?: SortOrder
    author_id?: SortOrder
    book_id?: SortOrder
    description?: SortOrder
  }

  export type BookAuthorAvgOrderByAggregateInput = {
    id?: SortOrder
    created_by_user_id?: SortOrder
    updated_by_user_id?: SortOrder
    author_id?: SortOrder
    book_id?: SortOrder
  }

  export type BookAuthorMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    created_by_user_id?: SortOrder
    updated_at?: SortOrder
    updated_by_user_id?: SortOrder
    status?: SortOrder
    author_id?: SortOrder
    book_id?: SortOrder
    description?: SortOrder
  }

  export type BookAuthorMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    created_by_user_id?: SortOrder
    updated_at?: SortOrder
    updated_by_user_id?: SortOrder
    status?: SortOrder
    author_id?: SortOrder
    book_id?: SortOrder
    description?: SortOrder
  }

  export type BookAuthorSumOrderByAggregateInput = {
    id?: SortOrder
    created_by_user_id?: SortOrder
    updated_by_user_id?: SortOrder
    author_id?: SortOrder
    book_id?: SortOrder
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
    created_by_user_id?: SortOrder
    updated_at?: SortOrder
    updated_by_user_id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    description?: SortOrder
  }

  export type TagAvgOrderByAggregateInput = {
    id?: SortOrder
    created_by_user_id?: SortOrder
    updated_by_user_id?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
    created_by_user_id?: SortOrder
    updated_at?: SortOrder
    updated_by_user_id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    description?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
    created_by_user_id?: SortOrder
    updated_at?: SortOrder
    updated_by_user_id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    description?: SortOrder
  }

  export type TagSumOrderByAggregateInput = {
    id?: SortOrder
    created_by_user_id?: SortOrder
    updated_by_user_id?: SortOrder
  }

  export type TagScalarRelationFilter = {
    is?: TagWhereInput
    isNot?: TagWhereInput
  }

  export type BookTagCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    created_by_user_id?: SortOrder
    updated_at?: SortOrder
    updated_by_user_id?: SortOrder
    status?: SortOrder
    tag_id?: SortOrder
    book_id?: SortOrder
  }

  export type BookTagAvgOrderByAggregateInput = {
    id?: SortOrder
    created_by_user_id?: SortOrder
    updated_by_user_id?: SortOrder
    tag_id?: SortOrder
    book_id?: SortOrder
  }

  export type BookTagMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    created_by_user_id?: SortOrder
    updated_at?: SortOrder
    updated_by_user_id?: SortOrder
    status?: SortOrder
    tag_id?: SortOrder
    book_id?: SortOrder
  }

  export type BookTagMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    created_by_user_id?: SortOrder
    updated_at?: SortOrder
    updated_by_user_id?: SortOrder
    status?: SortOrder
    tag_id?: SortOrder
    book_id?: SortOrder
  }

  export type BookTagSumOrderByAggregateInput = {
    id?: SortOrder
    created_by_user_id?: SortOrder
    updated_by_user_id?: SortOrder
    tag_id?: SortOrder
    book_id?: SortOrder
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BookCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
    created_by_user_id?: SortOrder
    updated_at?: SortOrder
    updated_by_user_id?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    publisher?: SortOrder
    year?: SortOrder
    edition?: SortOrder
    isbn?: SortOrder
    pages?: SortOrder
    summary?: SortOrder
    pdf_url?: SortOrder
    cover_url?: SortOrder
    images_url?: SortOrder
    keywords?: SortOrder
    label?: SortOrder
    shelf?: SortOrder
    status?: SortOrder
    description?: SortOrder
  }

  export type BookAvgOrderByAggregateInput = {
    id?: SortOrder
    created_by_user_id?: SortOrder
    updated_by_user_id?: SortOrder
    year?: SortOrder
    pages?: SortOrder
  }

  export type BookMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
    created_by_user_id?: SortOrder
    updated_at?: SortOrder
    updated_by_user_id?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    publisher?: SortOrder
    year?: SortOrder
    edition?: SortOrder
    isbn?: SortOrder
    pages?: SortOrder
    summary?: SortOrder
    pdf_url?: SortOrder
    cover_url?: SortOrder
    label?: SortOrder
    shelf?: SortOrder
    status?: SortOrder
    description?: SortOrder
  }

  export type BookMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
    created_by_user_id?: SortOrder
    updated_at?: SortOrder
    updated_by_user_id?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    publisher?: SortOrder
    year?: SortOrder
    edition?: SortOrder
    isbn?: SortOrder
    pages?: SortOrder
    summary?: SortOrder
    pdf_url?: SortOrder
    cover_url?: SortOrder
    label?: SortOrder
    shelf?: SortOrder
    status?: SortOrder
    description?: SortOrder
  }

  export type BookSumOrderByAggregateInput = {
    id?: SortOrder
    created_by_user_id?: SortOrder
    updated_by_user_id?: SortOrder
    year?: SortOrder
    pages?: SortOrder
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

  export type LoanCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
    created_by_user_id?: SortOrder
    updated_at?: SortOrder
    updated_by_user_id?: SortOrder
    status?: SortOrder
    loan_date?: SortOrder
    due_date?: SortOrder
    return_date?: SortOrder
    book_id?: SortOrder
    user_id?: SortOrder
  }

  export type LoanAvgOrderByAggregateInput = {
    id?: SortOrder
    created_by_user_id?: SortOrder
    updated_by_user_id?: SortOrder
    book_id?: SortOrder
    user_id?: SortOrder
  }

  export type LoanMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
    created_by_user_id?: SortOrder
    updated_at?: SortOrder
    updated_by_user_id?: SortOrder
    status?: SortOrder
    loan_date?: SortOrder
    due_date?: SortOrder
    return_date?: SortOrder
    book_id?: SortOrder
    user_id?: SortOrder
  }

  export type LoanMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
    created_by_user_id?: SortOrder
    updated_at?: SortOrder
    updated_by_user_id?: SortOrder
    status?: SortOrder
    loan_date?: SortOrder
    due_date?: SortOrder
    return_date?: SortOrder
    book_id?: SortOrder
    user_id?: SortOrder
  }

  export type LoanSumOrderByAggregateInput = {
    id?: SortOrder
    created_by_user_id?: SortOrder
    updated_by_user_id?: SortOrder
    book_id?: SortOrder
    user_id?: SortOrder
  }

  export type UserAuthTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAuthTokenCreateWithoutUserInput, UserAuthTokenUncheckedCreateWithoutUserInput> | UserAuthTokenCreateWithoutUserInput[] | UserAuthTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAuthTokenCreateOrConnectWithoutUserInput | UserAuthTokenCreateOrConnectWithoutUserInput[]
    createMany?: UserAuthTokenCreateManyUserInputEnvelope
    connect?: UserAuthTokenWhereUniqueInput | UserAuthTokenWhereUniqueInput[]
  }

  export type AuthorCreateNestedManyWithoutCreated_by_userInput = {
    create?: XOR<AuthorCreateWithoutCreated_by_userInput, AuthorUncheckedCreateWithoutCreated_by_userInput> | AuthorCreateWithoutCreated_by_userInput[] | AuthorUncheckedCreateWithoutCreated_by_userInput[]
    connectOrCreate?: AuthorCreateOrConnectWithoutCreated_by_userInput | AuthorCreateOrConnectWithoutCreated_by_userInput[]
    createMany?: AuthorCreateManyCreated_by_userInputEnvelope
    connect?: AuthorWhereUniqueInput | AuthorWhereUniqueInput[]
  }

  export type AuthorCreateNestedManyWithoutUpdated_by_userInput = {
    create?: XOR<AuthorCreateWithoutUpdated_by_userInput, AuthorUncheckedCreateWithoutUpdated_by_userInput> | AuthorCreateWithoutUpdated_by_userInput[] | AuthorUncheckedCreateWithoutUpdated_by_userInput[]
    connectOrCreate?: AuthorCreateOrConnectWithoutUpdated_by_userInput | AuthorCreateOrConnectWithoutUpdated_by_userInput[]
    createMany?: AuthorCreateManyUpdated_by_userInputEnvelope
    connect?: AuthorWhereUniqueInput | AuthorWhereUniqueInput[]
  }

  export type BookCreateNestedManyWithoutCreated_by_userInput = {
    create?: XOR<BookCreateWithoutCreated_by_userInput, BookUncheckedCreateWithoutCreated_by_userInput> | BookCreateWithoutCreated_by_userInput[] | BookUncheckedCreateWithoutCreated_by_userInput[]
    connectOrCreate?: BookCreateOrConnectWithoutCreated_by_userInput | BookCreateOrConnectWithoutCreated_by_userInput[]
    createMany?: BookCreateManyCreated_by_userInputEnvelope
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type BookCreateNestedManyWithoutUpdated_by_userInput = {
    create?: XOR<BookCreateWithoutUpdated_by_userInput, BookUncheckedCreateWithoutUpdated_by_userInput> | BookCreateWithoutUpdated_by_userInput[] | BookUncheckedCreateWithoutUpdated_by_userInput[]
    connectOrCreate?: BookCreateOrConnectWithoutUpdated_by_userInput | BookCreateOrConnectWithoutUpdated_by_userInput[]
    createMany?: BookCreateManyUpdated_by_userInputEnvelope
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type BookAuthorCreateNestedManyWithoutCreated_by_userInput = {
    create?: XOR<BookAuthorCreateWithoutCreated_by_userInput, BookAuthorUncheckedCreateWithoutCreated_by_userInput> | BookAuthorCreateWithoutCreated_by_userInput[] | BookAuthorUncheckedCreateWithoutCreated_by_userInput[]
    connectOrCreate?: BookAuthorCreateOrConnectWithoutCreated_by_userInput | BookAuthorCreateOrConnectWithoutCreated_by_userInput[]
    createMany?: BookAuthorCreateManyCreated_by_userInputEnvelope
    connect?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
  }

  export type BookAuthorCreateNestedManyWithoutUpdated_by_userInput = {
    create?: XOR<BookAuthorCreateWithoutUpdated_by_userInput, BookAuthorUncheckedCreateWithoutUpdated_by_userInput> | BookAuthorCreateWithoutUpdated_by_userInput[] | BookAuthorUncheckedCreateWithoutUpdated_by_userInput[]
    connectOrCreate?: BookAuthorCreateOrConnectWithoutUpdated_by_userInput | BookAuthorCreateOrConnectWithoutUpdated_by_userInput[]
    createMany?: BookAuthorCreateManyUpdated_by_userInputEnvelope
    connect?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
  }

  export type TagCreateNestedManyWithoutCreated_by_userInput = {
    create?: XOR<TagCreateWithoutCreated_by_userInput, TagUncheckedCreateWithoutCreated_by_userInput> | TagCreateWithoutCreated_by_userInput[] | TagUncheckedCreateWithoutCreated_by_userInput[]
    connectOrCreate?: TagCreateOrConnectWithoutCreated_by_userInput | TagCreateOrConnectWithoutCreated_by_userInput[]
    createMany?: TagCreateManyCreated_by_userInputEnvelope
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type TagCreateNestedManyWithoutUpdated_by_userInput = {
    create?: XOR<TagCreateWithoutUpdated_by_userInput, TagUncheckedCreateWithoutUpdated_by_userInput> | TagCreateWithoutUpdated_by_userInput[] | TagUncheckedCreateWithoutUpdated_by_userInput[]
    connectOrCreate?: TagCreateOrConnectWithoutUpdated_by_userInput | TagCreateOrConnectWithoutUpdated_by_userInput[]
    createMany?: TagCreateManyUpdated_by_userInputEnvelope
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type BookTagCreateNestedManyWithoutCreated_by_userInput = {
    create?: XOR<BookTagCreateWithoutCreated_by_userInput, BookTagUncheckedCreateWithoutCreated_by_userInput> | BookTagCreateWithoutCreated_by_userInput[] | BookTagUncheckedCreateWithoutCreated_by_userInput[]
    connectOrCreate?: BookTagCreateOrConnectWithoutCreated_by_userInput | BookTagCreateOrConnectWithoutCreated_by_userInput[]
    createMany?: BookTagCreateManyCreated_by_userInputEnvelope
    connect?: BookTagWhereUniqueInput | BookTagWhereUniqueInput[]
  }

  export type BookTagCreateNestedManyWithoutUpdated_by_userInput = {
    create?: XOR<BookTagCreateWithoutUpdated_by_userInput, BookTagUncheckedCreateWithoutUpdated_by_userInput> | BookTagCreateWithoutUpdated_by_userInput[] | BookTagUncheckedCreateWithoutUpdated_by_userInput[]
    connectOrCreate?: BookTagCreateOrConnectWithoutUpdated_by_userInput | BookTagCreateOrConnectWithoutUpdated_by_userInput[]
    createMany?: BookTagCreateManyUpdated_by_userInputEnvelope
    connect?: BookTagWhereUniqueInput | BookTagWhereUniqueInput[]
  }

  export type LoanCreateNestedManyWithoutCreated_by_userInput = {
    create?: XOR<LoanCreateWithoutCreated_by_userInput, LoanUncheckedCreateWithoutCreated_by_userInput> | LoanCreateWithoutCreated_by_userInput[] | LoanUncheckedCreateWithoutCreated_by_userInput[]
    connectOrCreate?: LoanCreateOrConnectWithoutCreated_by_userInput | LoanCreateOrConnectWithoutCreated_by_userInput[]
    createMany?: LoanCreateManyCreated_by_userInputEnvelope
    connect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
  }

  export type LoanCreateNestedManyWithoutUpdated_by_userInput = {
    create?: XOR<LoanCreateWithoutUpdated_by_userInput, LoanUncheckedCreateWithoutUpdated_by_userInput> | LoanCreateWithoutUpdated_by_userInput[] | LoanUncheckedCreateWithoutUpdated_by_userInput[]
    connectOrCreate?: LoanCreateOrConnectWithoutUpdated_by_userInput | LoanCreateOrConnectWithoutUpdated_by_userInput[]
    createMany?: LoanCreateManyUpdated_by_userInputEnvelope
    connect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
  }

  export type LoanCreateNestedManyWithoutUserInput = {
    create?: XOR<LoanCreateWithoutUserInput, LoanUncheckedCreateWithoutUserInput> | LoanCreateWithoutUserInput[] | LoanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoanCreateOrConnectWithoutUserInput | LoanCreateOrConnectWithoutUserInput[]
    createMany?: LoanCreateManyUserInputEnvelope
    connect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
  }

  export type UserAuthTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAuthTokenCreateWithoutUserInput, UserAuthTokenUncheckedCreateWithoutUserInput> | UserAuthTokenCreateWithoutUserInput[] | UserAuthTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAuthTokenCreateOrConnectWithoutUserInput | UserAuthTokenCreateOrConnectWithoutUserInput[]
    createMany?: UserAuthTokenCreateManyUserInputEnvelope
    connect?: UserAuthTokenWhereUniqueInput | UserAuthTokenWhereUniqueInput[]
  }

  export type AuthorUncheckedCreateNestedManyWithoutCreated_by_userInput = {
    create?: XOR<AuthorCreateWithoutCreated_by_userInput, AuthorUncheckedCreateWithoutCreated_by_userInput> | AuthorCreateWithoutCreated_by_userInput[] | AuthorUncheckedCreateWithoutCreated_by_userInput[]
    connectOrCreate?: AuthorCreateOrConnectWithoutCreated_by_userInput | AuthorCreateOrConnectWithoutCreated_by_userInput[]
    createMany?: AuthorCreateManyCreated_by_userInputEnvelope
    connect?: AuthorWhereUniqueInput | AuthorWhereUniqueInput[]
  }

  export type AuthorUncheckedCreateNestedManyWithoutUpdated_by_userInput = {
    create?: XOR<AuthorCreateWithoutUpdated_by_userInput, AuthorUncheckedCreateWithoutUpdated_by_userInput> | AuthorCreateWithoutUpdated_by_userInput[] | AuthorUncheckedCreateWithoutUpdated_by_userInput[]
    connectOrCreate?: AuthorCreateOrConnectWithoutUpdated_by_userInput | AuthorCreateOrConnectWithoutUpdated_by_userInput[]
    createMany?: AuthorCreateManyUpdated_by_userInputEnvelope
    connect?: AuthorWhereUniqueInput | AuthorWhereUniqueInput[]
  }

  export type BookUncheckedCreateNestedManyWithoutCreated_by_userInput = {
    create?: XOR<BookCreateWithoutCreated_by_userInput, BookUncheckedCreateWithoutCreated_by_userInput> | BookCreateWithoutCreated_by_userInput[] | BookUncheckedCreateWithoutCreated_by_userInput[]
    connectOrCreate?: BookCreateOrConnectWithoutCreated_by_userInput | BookCreateOrConnectWithoutCreated_by_userInput[]
    createMany?: BookCreateManyCreated_by_userInputEnvelope
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type BookUncheckedCreateNestedManyWithoutUpdated_by_userInput = {
    create?: XOR<BookCreateWithoutUpdated_by_userInput, BookUncheckedCreateWithoutUpdated_by_userInput> | BookCreateWithoutUpdated_by_userInput[] | BookUncheckedCreateWithoutUpdated_by_userInput[]
    connectOrCreate?: BookCreateOrConnectWithoutUpdated_by_userInput | BookCreateOrConnectWithoutUpdated_by_userInput[]
    createMany?: BookCreateManyUpdated_by_userInputEnvelope
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type BookAuthorUncheckedCreateNestedManyWithoutCreated_by_userInput = {
    create?: XOR<BookAuthorCreateWithoutCreated_by_userInput, BookAuthorUncheckedCreateWithoutCreated_by_userInput> | BookAuthorCreateWithoutCreated_by_userInput[] | BookAuthorUncheckedCreateWithoutCreated_by_userInput[]
    connectOrCreate?: BookAuthorCreateOrConnectWithoutCreated_by_userInput | BookAuthorCreateOrConnectWithoutCreated_by_userInput[]
    createMany?: BookAuthorCreateManyCreated_by_userInputEnvelope
    connect?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
  }

  export type BookAuthorUncheckedCreateNestedManyWithoutUpdated_by_userInput = {
    create?: XOR<BookAuthorCreateWithoutUpdated_by_userInput, BookAuthorUncheckedCreateWithoutUpdated_by_userInput> | BookAuthorCreateWithoutUpdated_by_userInput[] | BookAuthorUncheckedCreateWithoutUpdated_by_userInput[]
    connectOrCreate?: BookAuthorCreateOrConnectWithoutUpdated_by_userInput | BookAuthorCreateOrConnectWithoutUpdated_by_userInput[]
    createMany?: BookAuthorCreateManyUpdated_by_userInputEnvelope
    connect?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
  }

  export type TagUncheckedCreateNestedManyWithoutCreated_by_userInput = {
    create?: XOR<TagCreateWithoutCreated_by_userInput, TagUncheckedCreateWithoutCreated_by_userInput> | TagCreateWithoutCreated_by_userInput[] | TagUncheckedCreateWithoutCreated_by_userInput[]
    connectOrCreate?: TagCreateOrConnectWithoutCreated_by_userInput | TagCreateOrConnectWithoutCreated_by_userInput[]
    createMany?: TagCreateManyCreated_by_userInputEnvelope
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type TagUncheckedCreateNestedManyWithoutUpdated_by_userInput = {
    create?: XOR<TagCreateWithoutUpdated_by_userInput, TagUncheckedCreateWithoutUpdated_by_userInput> | TagCreateWithoutUpdated_by_userInput[] | TagUncheckedCreateWithoutUpdated_by_userInput[]
    connectOrCreate?: TagCreateOrConnectWithoutUpdated_by_userInput | TagCreateOrConnectWithoutUpdated_by_userInput[]
    createMany?: TagCreateManyUpdated_by_userInputEnvelope
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type BookTagUncheckedCreateNestedManyWithoutCreated_by_userInput = {
    create?: XOR<BookTagCreateWithoutCreated_by_userInput, BookTagUncheckedCreateWithoutCreated_by_userInput> | BookTagCreateWithoutCreated_by_userInput[] | BookTagUncheckedCreateWithoutCreated_by_userInput[]
    connectOrCreate?: BookTagCreateOrConnectWithoutCreated_by_userInput | BookTagCreateOrConnectWithoutCreated_by_userInput[]
    createMany?: BookTagCreateManyCreated_by_userInputEnvelope
    connect?: BookTagWhereUniqueInput | BookTagWhereUniqueInput[]
  }

  export type BookTagUncheckedCreateNestedManyWithoutUpdated_by_userInput = {
    create?: XOR<BookTagCreateWithoutUpdated_by_userInput, BookTagUncheckedCreateWithoutUpdated_by_userInput> | BookTagCreateWithoutUpdated_by_userInput[] | BookTagUncheckedCreateWithoutUpdated_by_userInput[]
    connectOrCreate?: BookTagCreateOrConnectWithoutUpdated_by_userInput | BookTagCreateOrConnectWithoutUpdated_by_userInput[]
    createMany?: BookTagCreateManyUpdated_by_userInputEnvelope
    connect?: BookTagWhereUniqueInput | BookTagWhereUniqueInput[]
  }

  export type LoanUncheckedCreateNestedManyWithoutCreated_by_userInput = {
    create?: XOR<LoanCreateWithoutCreated_by_userInput, LoanUncheckedCreateWithoutCreated_by_userInput> | LoanCreateWithoutCreated_by_userInput[] | LoanUncheckedCreateWithoutCreated_by_userInput[]
    connectOrCreate?: LoanCreateOrConnectWithoutCreated_by_userInput | LoanCreateOrConnectWithoutCreated_by_userInput[]
    createMany?: LoanCreateManyCreated_by_userInputEnvelope
    connect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
  }

  export type LoanUncheckedCreateNestedManyWithoutUpdated_by_userInput = {
    create?: XOR<LoanCreateWithoutUpdated_by_userInput, LoanUncheckedCreateWithoutUpdated_by_userInput> | LoanCreateWithoutUpdated_by_userInput[] | LoanUncheckedCreateWithoutUpdated_by_userInput[]
    connectOrCreate?: LoanCreateOrConnectWithoutUpdated_by_userInput | LoanCreateOrConnectWithoutUpdated_by_userInput[]
    createMany?: LoanCreateManyUpdated_by_userInputEnvelope
    connect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
  }

  export type LoanUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LoanCreateWithoutUserInput, LoanUncheckedCreateWithoutUserInput> | LoanCreateWithoutUserInput[] | LoanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoanCreateOrConnectWithoutUserInput | LoanCreateOrConnectWithoutUserInput[]
    createMany?: LoanCreateManyUserInputEnvelope
    connect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableEnumSexEnumFieldUpdateOperationsInput = {
    set?: $Enums.SexEnum | null
  }

  export type EnumStatusEnumFieldUpdateOperationsInput = {
    set?: $Enums.StatusEnum
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type UserAuthTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAuthTokenCreateWithoutUserInput, UserAuthTokenUncheckedCreateWithoutUserInput> | UserAuthTokenCreateWithoutUserInput[] | UserAuthTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAuthTokenCreateOrConnectWithoutUserInput | UserAuthTokenCreateOrConnectWithoutUserInput[]
    upsert?: UserAuthTokenUpsertWithWhereUniqueWithoutUserInput | UserAuthTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAuthTokenCreateManyUserInputEnvelope
    set?: UserAuthTokenWhereUniqueInput | UserAuthTokenWhereUniqueInput[]
    disconnect?: UserAuthTokenWhereUniqueInput | UserAuthTokenWhereUniqueInput[]
    delete?: UserAuthTokenWhereUniqueInput | UserAuthTokenWhereUniqueInput[]
    connect?: UserAuthTokenWhereUniqueInput | UserAuthTokenWhereUniqueInput[]
    update?: UserAuthTokenUpdateWithWhereUniqueWithoutUserInput | UserAuthTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAuthTokenUpdateManyWithWhereWithoutUserInput | UserAuthTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAuthTokenScalarWhereInput | UserAuthTokenScalarWhereInput[]
  }

  export type AuthorUpdateManyWithoutCreated_by_userNestedInput = {
    create?: XOR<AuthorCreateWithoutCreated_by_userInput, AuthorUncheckedCreateWithoutCreated_by_userInput> | AuthorCreateWithoutCreated_by_userInput[] | AuthorUncheckedCreateWithoutCreated_by_userInput[]
    connectOrCreate?: AuthorCreateOrConnectWithoutCreated_by_userInput | AuthorCreateOrConnectWithoutCreated_by_userInput[]
    upsert?: AuthorUpsertWithWhereUniqueWithoutCreated_by_userInput | AuthorUpsertWithWhereUniqueWithoutCreated_by_userInput[]
    createMany?: AuthorCreateManyCreated_by_userInputEnvelope
    set?: AuthorWhereUniqueInput | AuthorWhereUniqueInput[]
    disconnect?: AuthorWhereUniqueInput | AuthorWhereUniqueInput[]
    delete?: AuthorWhereUniqueInput | AuthorWhereUniqueInput[]
    connect?: AuthorWhereUniqueInput | AuthorWhereUniqueInput[]
    update?: AuthorUpdateWithWhereUniqueWithoutCreated_by_userInput | AuthorUpdateWithWhereUniqueWithoutCreated_by_userInput[]
    updateMany?: AuthorUpdateManyWithWhereWithoutCreated_by_userInput | AuthorUpdateManyWithWhereWithoutCreated_by_userInput[]
    deleteMany?: AuthorScalarWhereInput | AuthorScalarWhereInput[]
  }

  export type AuthorUpdateManyWithoutUpdated_by_userNestedInput = {
    create?: XOR<AuthorCreateWithoutUpdated_by_userInput, AuthorUncheckedCreateWithoutUpdated_by_userInput> | AuthorCreateWithoutUpdated_by_userInput[] | AuthorUncheckedCreateWithoutUpdated_by_userInput[]
    connectOrCreate?: AuthorCreateOrConnectWithoutUpdated_by_userInput | AuthorCreateOrConnectWithoutUpdated_by_userInput[]
    upsert?: AuthorUpsertWithWhereUniqueWithoutUpdated_by_userInput | AuthorUpsertWithWhereUniqueWithoutUpdated_by_userInput[]
    createMany?: AuthorCreateManyUpdated_by_userInputEnvelope
    set?: AuthorWhereUniqueInput | AuthorWhereUniqueInput[]
    disconnect?: AuthorWhereUniqueInput | AuthorWhereUniqueInput[]
    delete?: AuthorWhereUniqueInput | AuthorWhereUniqueInput[]
    connect?: AuthorWhereUniqueInput | AuthorWhereUniqueInput[]
    update?: AuthorUpdateWithWhereUniqueWithoutUpdated_by_userInput | AuthorUpdateWithWhereUniqueWithoutUpdated_by_userInput[]
    updateMany?: AuthorUpdateManyWithWhereWithoutUpdated_by_userInput | AuthorUpdateManyWithWhereWithoutUpdated_by_userInput[]
    deleteMany?: AuthorScalarWhereInput | AuthorScalarWhereInput[]
  }

  export type BookUpdateManyWithoutCreated_by_userNestedInput = {
    create?: XOR<BookCreateWithoutCreated_by_userInput, BookUncheckedCreateWithoutCreated_by_userInput> | BookCreateWithoutCreated_by_userInput[] | BookUncheckedCreateWithoutCreated_by_userInput[]
    connectOrCreate?: BookCreateOrConnectWithoutCreated_by_userInput | BookCreateOrConnectWithoutCreated_by_userInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutCreated_by_userInput | BookUpsertWithWhereUniqueWithoutCreated_by_userInput[]
    createMany?: BookCreateManyCreated_by_userInputEnvelope
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutCreated_by_userInput | BookUpdateWithWhereUniqueWithoutCreated_by_userInput[]
    updateMany?: BookUpdateManyWithWhereWithoutCreated_by_userInput | BookUpdateManyWithWhereWithoutCreated_by_userInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type BookUpdateManyWithoutUpdated_by_userNestedInput = {
    create?: XOR<BookCreateWithoutUpdated_by_userInput, BookUncheckedCreateWithoutUpdated_by_userInput> | BookCreateWithoutUpdated_by_userInput[] | BookUncheckedCreateWithoutUpdated_by_userInput[]
    connectOrCreate?: BookCreateOrConnectWithoutUpdated_by_userInput | BookCreateOrConnectWithoutUpdated_by_userInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutUpdated_by_userInput | BookUpsertWithWhereUniqueWithoutUpdated_by_userInput[]
    createMany?: BookCreateManyUpdated_by_userInputEnvelope
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutUpdated_by_userInput | BookUpdateWithWhereUniqueWithoutUpdated_by_userInput[]
    updateMany?: BookUpdateManyWithWhereWithoutUpdated_by_userInput | BookUpdateManyWithWhereWithoutUpdated_by_userInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type BookAuthorUpdateManyWithoutCreated_by_userNestedInput = {
    create?: XOR<BookAuthorCreateWithoutCreated_by_userInput, BookAuthorUncheckedCreateWithoutCreated_by_userInput> | BookAuthorCreateWithoutCreated_by_userInput[] | BookAuthorUncheckedCreateWithoutCreated_by_userInput[]
    connectOrCreate?: BookAuthorCreateOrConnectWithoutCreated_by_userInput | BookAuthorCreateOrConnectWithoutCreated_by_userInput[]
    upsert?: BookAuthorUpsertWithWhereUniqueWithoutCreated_by_userInput | BookAuthorUpsertWithWhereUniqueWithoutCreated_by_userInput[]
    createMany?: BookAuthorCreateManyCreated_by_userInputEnvelope
    set?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    disconnect?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    delete?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    connect?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    update?: BookAuthorUpdateWithWhereUniqueWithoutCreated_by_userInput | BookAuthorUpdateWithWhereUniqueWithoutCreated_by_userInput[]
    updateMany?: BookAuthorUpdateManyWithWhereWithoutCreated_by_userInput | BookAuthorUpdateManyWithWhereWithoutCreated_by_userInput[]
    deleteMany?: BookAuthorScalarWhereInput | BookAuthorScalarWhereInput[]
  }

  export type BookAuthorUpdateManyWithoutUpdated_by_userNestedInput = {
    create?: XOR<BookAuthorCreateWithoutUpdated_by_userInput, BookAuthorUncheckedCreateWithoutUpdated_by_userInput> | BookAuthorCreateWithoutUpdated_by_userInput[] | BookAuthorUncheckedCreateWithoutUpdated_by_userInput[]
    connectOrCreate?: BookAuthorCreateOrConnectWithoutUpdated_by_userInput | BookAuthorCreateOrConnectWithoutUpdated_by_userInput[]
    upsert?: BookAuthorUpsertWithWhereUniqueWithoutUpdated_by_userInput | BookAuthorUpsertWithWhereUniqueWithoutUpdated_by_userInput[]
    createMany?: BookAuthorCreateManyUpdated_by_userInputEnvelope
    set?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    disconnect?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    delete?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    connect?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    update?: BookAuthorUpdateWithWhereUniqueWithoutUpdated_by_userInput | BookAuthorUpdateWithWhereUniqueWithoutUpdated_by_userInput[]
    updateMany?: BookAuthorUpdateManyWithWhereWithoutUpdated_by_userInput | BookAuthorUpdateManyWithWhereWithoutUpdated_by_userInput[]
    deleteMany?: BookAuthorScalarWhereInput | BookAuthorScalarWhereInput[]
  }

  export type TagUpdateManyWithoutCreated_by_userNestedInput = {
    create?: XOR<TagCreateWithoutCreated_by_userInput, TagUncheckedCreateWithoutCreated_by_userInput> | TagCreateWithoutCreated_by_userInput[] | TagUncheckedCreateWithoutCreated_by_userInput[]
    connectOrCreate?: TagCreateOrConnectWithoutCreated_by_userInput | TagCreateOrConnectWithoutCreated_by_userInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutCreated_by_userInput | TagUpsertWithWhereUniqueWithoutCreated_by_userInput[]
    createMany?: TagCreateManyCreated_by_userInputEnvelope
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutCreated_by_userInput | TagUpdateWithWhereUniqueWithoutCreated_by_userInput[]
    updateMany?: TagUpdateManyWithWhereWithoutCreated_by_userInput | TagUpdateManyWithWhereWithoutCreated_by_userInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type TagUpdateManyWithoutUpdated_by_userNestedInput = {
    create?: XOR<TagCreateWithoutUpdated_by_userInput, TagUncheckedCreateWithoutUpdated_by_userInput> | TagCreateWithoutUpdated_by_userInput[] | TagUncheckedCreateWithoutUpdated_by_userInput[]
    connectOrCreate?: TagCreateOrConnectWithoutUpdated_by_userInput | TagCreateOrConnectWithoutUpdated_by_userInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutUpdated_by_userInput | TagUpsertWithWhereUniqueWithoutUpdated_by_userInput[]
    createMany?: TagCreateManyUpdated_by_userInputEnvelope
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutUpdated_by_userInput | TagUpdateWithWhereUniqueWithoutUpdated_by_userInput[]
    updateMany?: TagUpdateManyWithWhereWithoutUpdated_by_userInput | TagUpdateManyWithWhereWithoutUpdated_by_userInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type BookTagUpdateManyWithoutCreated_by_userNestedInput = {
    create?: XOR<BookTagCreateWithoutCreated_by_userInput, BookTagUncheckedCreateWithoutCreated_by_userInput> | BookTagCreateWithoutCreated_by_userInput[] | BookTagUncheckedCreateWithoutCreated_by_userInput[]
    connectOrCreate?: BookTagCreateOrConnectWithoutCreated_by_userInput | BookTagCreateOrConnectWithoutCreated_by_userInput[]
    upsert?: BookTagUpsertWithWhereUniqueWithoutCreated_by_userInput | BookTagUpsertWithWhereUniqueWithoutCreated_by_userInput[]
    createMany?: BookTagCreateManyCreated_by_userInputEnvelope
    set?: BookTagWhereUniqueInput | BookTagWhereUniqueInput[]
    disconnect?: BookTagWhereUniqueInput | BookTagWhereUniqueInput[]
    delete?: BookTagWhereUniqueInput | BookTagWhereUniqueInput[]
    connect?: BookTagWhereUniqueInput | BookTagWhereUniqueInput[]
    update?: BookTagUpdateWithWhereUniqueWithoutCreated_by_userInput | BookTagUpdateWithWhereUniqueWithoutCreated_by_userInput[]
    updateMany?: BookTagUpdateManyWithWhereWithoutCreated_by_userInput | BookTagUpdateManyWithWhereWithoutCreated_by_userInput[]
    deleteMany?: BookTagScalarWhereInput | BookTagScalarWhereInput[]
  }

  export type BookTagUpdateManyWithoutUpdated_by_userNestedInput = {
    create?: XOR<BookTagCreateWithoutUpdated_by_userInput, BookTagUncheckedCreateWithoutUpdated_by_userInput> | BookTagCreateWithoutUpdated_by_userInput[] | BookTagUncheckedCreateWithoutUpdated_by_userInput[]
    connectOrCreate?: BookTagCreateOrConnectWithoutUpdated_by_userInput | BookTagCreateOrConnectWithoutUpdated_by_userInput[]
    upsert?: BookTagUpsertWithWhereUniqueWithoutUpdated_by_userInput | BookTagUpsertWithWhereUniqueWithoutUpdated_by_userInput[]
    createMany?: BookTagCreateManyUpdated_by_userInputEnvelope
    set?: BookTagWhereUniqueInput | BookTagWhereUniqueInput[]
    disconnect?: BookTagWhereUniqueInput | BookTagWhereUniqueInput[]
    delete?: BookTagWhereUniqueInput | BookTagWhereUniqueInput[]
    connect?: BookTagWhereUniqueInput | BookTagWhereUniqueInput[]
    update?: BookTagUpdateWithWhereUniqueWithoutUpdated_by_userInput | BookTagUpdateWithWhereUniqueWithoutUpdated_by_userInput[]
    updateMany?: BookTagUpdateManyWithWhereWithoutUpdated_by_userInput | BookTagUpdateManyWithWhereWithoutUpdated_by_userInput[]
    deleteMany?: BookTagScalarWhereInput | BookTagScalarWhereInput[]
  }

  export type LoanUpdateManyWithoutCreated_by_userNestedInput = {
    create?: XOR<LoanCreateWithoutCreated_by_userInput, LoanUncheckedCreateWithoutCreated_by_userInput> | LoanCreateWithoutCreated_by_userInput[] | LoanUncheckedCreateWithoutCreated_by_userInput[]
    connectOrCreate?: LoanCreateOrConnectWithoutCreated_by_userInput | LoanCreateOrConnectWithoutCreated_by_userInput[]
    upsert?: LoanUpsertWithWhereUniqueWithoutCreated_by_userInput | LoanUpsertWithWhereUniqueWithoutCreated_by_userInput[]
    createMany?: LoanCreateManyCreated_by_userInputEnvelope
    set?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    disconnect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    delete?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    connect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    update?: LoanUpdateWithWhereUniqueWithoutCreated_by_userInput | LoanUpdateWithWhereUniqueWithoutCreated_by_userInput[]
    updateMany?: LoanUpdateManyWithWhereWithoutCreated_by_userInput | LoanUpdateManyWithWhereWithoutCreated_by_userInput[]
    deleteMany?: LoanScalarWhereInput | LoanScalarWhereInput[]
  }

  export type LoanUpdateManyWithoutUpdated_by_userNestedInput = {
    create?: XOR<LoanCreateWithoutUpdated_by_userInput, LoanUncheckedCreateWithoutUpdated_by_userInput> | LoanCreateWithoutUpdated_by_userInput[] | LoanUncheckedCreateWithoutUpdated_by_userInput[]
    connectOrCreate?: LoanCreateOrConnectWithoutUpdated_by_userInput | LoanCreateOrConnectWithoutUpdated_by_userInput[]
    upsert?: LoanUpsertWithWhereUniqueWithoutUpdated_by_userInput | LoanUpsertWithWhereUniqueWithoutUpdated_by_userInput[]
    createMany?: LoanCreateManyUpdated_by_userInputEnvelope
    set?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    disconnect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    delete?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    connect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    update?: LoanUpdateWithWhereUniqueWithoutUpdated_by_userInput | LoanUpdateWithWhereUniqueWithoutUpdated_by_userInput[]
    updateMany?: LoanUpdateManyWithWhereWithoutUpdated_by_userInput | LoanUpdateManyWithWhereWithoutUpdated_by_userInput[]
    deleteMany?: LoanScalarWhereInput | LoanScalarWhereInput[]
  }

  export type LoanUpdateManyWithoutUserNestedInput = {
    create?: XOR<LoanCreateWithoutUserInput, LoanUncheckedCreateWithoutUserInput> | LoanCreateWithoutUserInput[] | LoanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoanCreateOrConnectWithoutUserInput | LoanCreateOrConnectWithoutUserInput[]
    upsert?: LoanUpsertWithWhereUniqueWithoutUserInput | LoanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LoanCreateManyUserInputEnvelope
    set?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    disconnect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    delete?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    connect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    update?: LoanUpdateWithWhereUniqueWithoutUserInput | LoanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LoanUpdateManyWithWhereWithoutUserInput | LoanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LoanScalarWhereInput | LoanScalarWhereInput[]
  }

  export type UserAuthTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAuthTokenCreateWithoutUserInput, UserAuthTokenUncheckedCreateWithoutUserInput> | UserAuthTokenCreateWithoutUserInput[] | UserAuthTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAuthTokenCreateOrConnectWithoutUserInput | UserAuthTokenCreateOrConnectWithoutUserInput[]
    upsert?: UserAuthTokenUpsertWithWhereUniqueWithoutUserInput | UserAuthTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAuthTokenCreateManyUserInputEnvelope
    set?: UserAuthTokenWhereUniqueInput | UserAuthTokenWhereUniqueInput[]
    disconnect?: UserAuthTokenWhereUniqueInput | UserAuthTokenWhereUniqueInput[]
    delete?: UserAuthTokenWhereUniqueInput | UserAuthTokenWhereUniqueInput[]
    connect?: UserAuthTokenWhereUniqueInput | UserAuthTokenWhereUniqueInput[]
    update?: UserAuthTokenUpdateWithWhereUniqueWithoutUserInput | UserAuthTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAuthTokenUpdateManyWithWhereWithoutUserInput | UserAuthTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAuthTokenScalarWhereInput | UserAuthTokenScalarWhereInput[]
  }

  export type AuthorUncheckedUpdateManyWithoutCreated_by_userNestedInput = {
    create?: XOR<AuthorCreateWithoutCreated_by_userInput, AuthorUncheckedCreateWithoutCreated_by_userInput> | AuthorCreateWithoutCreated_by_userInput[] | AuthorUncheckedCreateWithoutCreated_by_userInput[]
    connectOrCreate?: AuthorCreateOrConnectWithoutCreated_by_userInput | AuthorCreateOrConnectWithoutCreated_by_userInput[]
    upsert?: AuthorUpsertWithWhereUniqueWithoutCreated_by_userInput | AuthorUpsertWithWhereUniqueWithoutCreated_by_userInput[]
    createMany?: AuthorCreateManyCreated_by_userInputEnvelope
    set?: AuthorWhereUniqueInput | AuthorWhereUniqueInput[]
    disconnect?: AuthorWhereUniqueInput | AuthorWhereUniqueInput[]
    delete?: AuthorWhereUniqueInput | AuthorWhereUniqueInput[]
    connect?: AuthorWhereUniqueInput | AuthorWhereUniqueInput[]
    update?: AuthorUpdateWithWhereUniqueWithoutCreated_by_userInput | AuthorUpdateWithWhereUniqueWithoutCreated_by_userInput[]
    updateMany?: AuthorUpdateManyWithWhereWithoutCreated_by_userInput | AuthorUpdateManyWithWhereWithoutCreated_by_userInput[]
    deleteMany?: AuthorScalarWhereInput | AuthorScalarWhereInput[]
  }

  export type AuthorUncheckedUpdateManyWithoutUpdated_by_userNestedInput = {
    create?: XOR<AuthorCreateWithoutUpdated_by_userInput, AuthorUncheckedCreateWithoutUpdated_by_userInput> | AuthorCreateWithoutUpdated_by_userInput[] | AuthorUncheckedCreateWithoutUpdated_by_userInput[]
    connectOrCreate?: AuthorCreateOrConnectWithoutUpdated_by_userInput | AuthorCreateOrConnectWithoutUpdated_by_userInput[]
    upsert?: AuthorUpsertWithWhereUniqueWithoutUpdated_by_userInput | AuthorUpsertWithWhereUniqueWithoutUpdated_by_userInput[]
    createMany?: AuthorCreateManyUpdated_by_userInputEnvelope
    set?: AuthorWhereUniqueInput | AuthorWhereUniqueInput[]
    disconnect?: AuthorWhereUniqueInput | AuthorWhereUniqueInput[]
    delete?: AuthorWhereUniqueInput | AuthorWhereUniqueInput[]
    connect?: AuthorWhereUniqueInput | AuthorWhereUniqueInput[]
    update?: AuthorUpdateWithWhereUniqueWithoutUpdated_by_userInput | AuthorUpdateWithWhereUniqueWithoutUpdated_by_userInput[]
    updateMany?: AuthorUpdateManyWithWhereWithoutUpdated_by_userInput | AuthorUpdateManyWithWhereWithoutUpdated_by_userInput[]
    deleteMany?: AuthorScalarWhereInput | AuthorScalarWhereInput[]
  }

  export type BookUncheckedUpdateManyWithoutCreated_by_userNestedInput = {
    create?: XOR<BookCreateWithoutCreated_by_userInput, BookUncheckedCreateWithoutCreated_by_userInput> | BookCreateWithoutCreated_by_userInput[] | BookUncheckedCreateWithoutCreated_by_userInput[]
    connectOrCreate?: BookCreateOrConnectWithoutCreated_by_userInput | BookCreateOrConnectWithoutCreated_by_userInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutCreated_by_userInput | BookUpsertWithWhereUniqueWithoutCreated_by_userInput[]
    createMany?: BookCreateManyCreated_by_userInputEnvelope
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutCreated_by_userInput | BookUpdateWithWhereUniqueWithoutCreated_by_userInput[]
    updateMany?: BookUpdateManyWithWhereWithoutCreated_by_userInput | BookUpdateManyWithWhereWithoutCreated_by_userInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type BookUncheckedUpdateManyWithoutUpdated_by_userNestedInput = {
    create?: XOR<BookCreateWithoutUpdated_by_userInput, BookUncheckedCreateWithoutUpdated_by_userInput> | BookCreateWithoutUpdated_by_userInput[] | BookUncheckedCreateWithoutUpdated_by_userInput[]
    connectOrCreate?: BookCreateOrConnectWithoutUpdated_by_userInput | BookCreateOrConnectWithoutUpdated_by_userInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutUpdated_by_userInput | BookUpsertWithWhereUniqueWithoutUpdated_by_userInput[]
    createMany?: BookCreateManyUpdated_by_userInputEnvelope
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutUpdated_by_userInput | BookUpdateWithWhereUniqueWithoutUpdated_by_userInput[]
    updateMany?: BookUpdateManyWithWhereWithoutUpdated_by_userInput | BookUpdateManyWithWhereWithoutUpdated_by_userInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type BookAuthorUncheckedUpdateManyWithoutCreated_by_userNestedInput = {
    create?: XOR<BookAuthorCreateWithoutCreated_by_userInput, BookAuthorUncheckedCreateWithoutCreated_by_userInput> | BookAuthorCreateWithoutCreated_by_userInput[] | BookAuthorUncheckedCreateWithoutCreated_by_userInput[]
    connectOrCreate?: BookAuthorCreateOrConnectWithoutCreated_by_userInput | BookAuthorCreateOrConnectWithoutCreated_by_userInput[]
    upsert?: BookAuthorUpsertWithWhereUniqueWithoutCreated_by_userInput | BookAuthorUpsertWithWhereUniqueWithoutCreated_by_userInput[]
    createMany?: BookAuthorCreateManyCreated_by_userInputEnvelope
    set?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    disconnect?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    delete?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    connect?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    update?: BookAuthorUpdateWithWhereUniqueWithoutCreated_by_userInput | BookAuthorUpdateWithWhereUniqueWithoutCreated_by_userInput[]
    updateMany?: BookAuthorUpdateManyWithWhereWithoutCreated_by_userInput | BookAuthorUpdateManyWithWhereWithoutCreated_by_userInput[]
    deleteMany?: BookAuthorScalarWhereInput | BookAuthorScalarWhereInput[]
  }

  export type BookAuthorUncheckedUpdateManyWithoutUpdated_by_userNestedInput = {
    create?: XOR<BookAuthorCreateWithoutUpdated_by_userInput, BookAuthorUncheckedCreateWithoutUpdated_by_userInput> | BookAuthorCreateWithoutUpdated_by_userInput[] | BookAuthorUncheckedCreateWithoutUpdated_by_userInput[]
    connectOrCreate?: BookAuthorCreateOrConnectWithoutUpdated_by_userInput | BookAuthorCreateOrConnectWithoutUpdated_by_userInput[]
    upsert?: BookAuthorUpsertWithWhereUniqueWithoutUpdated_by_userInput | BookAuthorUpsertWithWhereUniqueWithoutUpdated_by_userInput[]
    createMany?: BookAuthorCreateManyUpdated_by_userInputEnvelope
    set?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    disconnect?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    delete?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    connect?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    update?: BookAuthorUpdateWithWhereUniqueWithoutUpdated_by_userInput | BookAuthorUpdateWithWhereUniqueWithoutUpdated_by_userInput[]
    updateMany?: BookAuthorUpdateManyWithWhereWithoutUpdated_by_userInput | BookAuthorUpdateManyWithWhereWithoutUpdated_by_userInput[]
    deleteMany?: BookAuthorScalarWhereInput | BookAuthorScalarWhereInput[]
  }

  export type TagUncheckedUpdateManyWithoutCreated_by_userNestedInput = {
    create?: XOR<TagCreateWithoutCreated_by_userInput, TagUncheckedCreateWithoutCreated_by_userInput> | TagCreateWithoutCreated_by_userInput[] | TagUncheckedCreateWithoutCreated_by_userInput[]
    connectOrCreate?: TagCreateOrConnectWithoutCreated_by_userInput | TagCreateOrConnectWithoutCreated_by_userInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutCreated_by_userInput | TagUpsertWithWhereUniqueWithoutCreated_by_userInput[]
    createMany?: TagCreateManyCreated_by_userInputEnvelope
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutCreated_by_userInput | TagUpdateWithWhereUniqueWithoutCreated_by_userInput[]
    updateMany?: TagUpdateManyWithWhereWithoutCreated_by_userInput | TagUpdateManyWithWhereWithoutCreated_by_userInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type TagUncheckedUpdateManyWithoutUpdated_by_userNestedInput = {
    create?: XOR<TagCreateWithoutUpdated_by_userInput, TagUncheckedCreateWithoutUpdated_by_userInput> | TagCreateWithoutUpdated_by_userInput[] | TagUncheckedCreateWithoutUpdated_by_userInput[]
    connectOrCreate?: TagCreateOrConnectWithoutUpdated_by_userInput | TagCreateOrConnectWithoutUpdated_by_userInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutUpdated_by_userInput | TagUpsertWithWhereUniqueWithoutUpdated_by_userInput[]
    createMany?: TagCreateManyUpdated_by_userInputEnvelope
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutUpdated_by_userInput | TagUpdateWithWhereUniqueWithoutUpdated_by_userInput[]
    updateMany?: TagUpdateManyWithWhereWithoutUpdated_by_userInput | TagUpdateManyWithWhereWithoutUpdated_by_userInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type BookTagUncheckedUpdateManyWithoutCreated_by_userNestedInput = {
    create?: XOR<BookTagCreateWithoutCreated_by_userInput, BookTagUncheckedCreateWithoutCreated_by_userInput> | BookTagCreateWithoutCreated_by_userInput[] | BookTagUncheckedCreateWithoutCreated_by_userInput[]
    connectOrCreate?: BookTagCreateOrConnectWithoutCreated_by_userInput | BookTagCreateOrConnectWithoutCreated_by_userInput[]
    upsert?: BookTagUpsertWithWhereUniqueWithoutCreated_by_userInput | BookTagUpsertWithWhereUniqueWithoutCreated_by_userInput[]
    createMany?: BookTagCreateManyCreated_by_userInputEnvelope
    set?: BookTagWhereUniqueInput | BookTagWhereUniqueInput[]
    disconnect?: BookTagWhereUniqueInput | BookTagWhereUniqueInput[]
    delete?: BookTagWhereUniqueInput | BookTagWhereUniqueInput[]
    connect?: BookTagWhereUniqueInput | BookTagWhereUniqueInput[]
    update?: BookTagUpdateWithWhereUniqueWithoutCreated_by_userInput | BookTagUpdateWithWhereUniqueWithoutCreated_by_userInput[]
    updateMany?: BookTagUpdateManyWithWhereWithoutCreated_by_userInput | BookTagUpdateManyWithWhereWithoutCreated_by_userInput[]
    deleteMany?: BookTagScalarWhereInput | BookTagScalarWhereInput[]
  }

  export type BookTagUncheckedUpdateManyWithoutUpdated_by_userNestedInput = {
    create?: XOR<BookTagCreateWithoutUpdated_by_userInput, BookTagUncheckedCreateWithoutUpdated_by_userInput> | BookTagCreateWithoutUpdated_by_userInput[] | BookTagUncheckedCreateWithoutUpdated_by_userInput[]
    connectOrCreate?: BookTagCreateOrConnectWithoutUpdated_by_userInput | BookTagCreateOrConnectWithoutUpdated_by_userInput[]
    upsert?: BookTagUpsertWithWhereUniqueWithoutUpdated_by_userInput | BookTagUpsertWithWhereUniqueWithoutUpdated_by_userInput[]
    createMany?: BookTagCreateManyUpdated_by_userInputEnvelope
    set?: BookTagWhereUniqueInput | BookTagWhereUniqueInput[]
    disconnect?: BookTagWhereUniqueInput | BookTagWhereUniqueInput[]
    delete?: BookTagWhereUniqueInput | BookTagWhereUniqueInput[]
    connect?: BookTagWhereUniqueInput | BookTagWhereUniqueInput[]
    update?: BookTagUpdateWithWhereUniqueWithoutUpdated_by_userInput | BookTagUpdateWithWhereUniqueWithoutUpdated_by_userInput[]
    updateMany?: BookTagUpdateManyWithWhereWithoutUpdated_by_userInput | BookTagUpdateManyWithWhereWithoutUpdated_by_userInput[]
    deleteMany?: BookTagScalarWhereInput | BookTagScalarWhereInput[]
  }

  export type LoanUncheckedUpdateManyWithoutCreated_by_userNestedInput = {
    create?: XOR<LoanCreateWithoutCreated_by_userInput, LoanUncheckedCreateWithoutCreated_by_userInput> | LoanCreateWithoutCreated_by_userInput[] | LoanUncheckedCreateWithoutCreated_by_userInput[]
    connectOrCreate?: LoanCreateOrConnectWithoutCreated_by_userInput | LoanCreateOrConnectWithoutCreated_by_userInput[]
    upsert?: LoanUpsertWithWhereUniqueWithoutCreated_by_userInput | LoanUpsertWithWhereUniqueWithoutCreated_by_userInput[]
    createMany?: LoanCreateManyCreated_by_userInputEnvelope
    set?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    disconnect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    delete?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    connect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    update?: LoanUpdateWithWhereUniqueWithoutCreated_by_userInput | LoanUpdateWithWhereUniqueWithoutCreated_by_userInput[]
    updateMany?: LoanUpdateManyWithWhereWithoutCreated_by_userInput | LoanUpdateManyWithWhereWithoutCreated_by_userInput[]
    deleteMany?: LoanScalarWhereInput | LoanScalarWhereInput[]
  }

  export type LoanUncheckedUpdateManyWithoutUpdated_by_userNestedInput = {
    create?: XOR<LoanCreateWithoutUpdated_by_userInput, LoanUncheckedCreateWithoutUpdated_by_userInput> | LoanCreateWithoutUpdated_by_userInput[] | LoanUncheckedCreateWithoutUpdated_by_userInput[]
    connectOrCreate?: LoanCreateOrConnectWithoutUpdated_by_userInput | LoanCreateOrConnectWithoutUpdated_by_userInput[]
    upsert?: LoanUpsertWithWhereUniqueWithoutUpdated_by_userInput | LoanUpsertWithWhereUniqueWithoutUpdated_by_userInput[]
    createMany?: LoanCreateManyUpdated_by_userInputEnvelope
    set?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    disconnect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    delete?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    connect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    update?: LoanUpdateWithWhereUniqueWithoutUpdated_by_userInput | LoanUpdateWithWhereUniqueWithoutUpdated_by_userInput[]
    updateMany?: LoanUpdateManyWithWhereWithoutUpdated_by_userInput | LoanUpdateManyWithWhereWithoutUpdated_by_userInput[]
    deleteMany?: LoanScalarWhereInput | LoanScalarWhereInput[]
  }

  export type LoanUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LoanCreateWithoutUserInput, LoanUncheckedCreateWithoutUserInput> | LoanCreateWithoutUserInput[] | LoanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoanCreateOrConnectWithoutUserInput | LoanCreateOrConnectWithoutUserInput[]
    upsert?: LoanUpsertWithWhereUniqueWithoutUserInput | LoanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LoanCreateManyUserInputEnvelope
    set?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    disconnect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    delete?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    connect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    update?: LoanUpdateWithWhereUniqueWithoutUserInput | LoanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LoanUpdateManyWithWhereWithoutUserInput | LoanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LoanScalarWhereInput | LoanScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAuth_tokensInput = {
    create?: XOR<UserCreateWithoutAuth_tokensInput, UserUncheckedCreateWithoutAuth_tokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuth_tokensInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutAuth_tokensNestedInput = {
    create?: XOR<UserCreateWithoutAuth_tokensInput, UserUncheckedCreateWithoutAuth_tokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuth_tokensInput
    upsert?: UserUpsertWithoutAuth_tokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuth_tokensInput, UserUpdateWithoutAuth_tokensInput>, UserUncheckedUpdateWithoutAuth_tokensInput>
  }

  export type UserCreateNestedOneWithoutCreated_authorsInput = {
    create?: XOR<UserCreateWithoutCreated_authorsInput, UserUncheckedCreateWithoutCreated_authorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreated_authorsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUpdated_authorsInput = {
    create?: XOR<UserCreateWithoutUpdated_authorsInput, UserUncheckedCreateWithoutUpdated_authorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdated_authorsInput
    connect?: UserWhereUniqueInput
  }

  export type BookAuthorCreateNestedManyWithoutAuthorInput = {
    create?: XOR<BookAuthorCreateWithoutAuthorInput, BookAuthorUncheckedCreateWithoutAuthorInput> | BookAuthorCreateWithoutAuthorInput[] | BookAuthorUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BookAuthorCreateOrConnectWithoutAuthorInput | BookAuthorCreateOrConnectWithoutAuthorInput[]
    createMany?: BookAuthorCreateManyAuthorInputEnvelope
    connect?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
  }

  export type BookAuthorUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<BookAuthorCreateWithoutAuthorInput, BookAuthorUncheckedCreateWithoutAuthorInput> | BookAuthorCreateWithoutAuthorInput[] | BookAuthorUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BookAuthorCreateOrConnectWithoutAuthorInput | BookAuthorCreateOrConnectWithoutAuthorInput[]
    createMany?: BookAuthorCreateManyAuthorInputEnvelope
    connect?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCreated_authorsNestedInput = {
    create?: XOR<UserCreateWithoutCreated_authorsInput, UserUncheckedCreateWithoutCreated_authorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreated_authorsInput
    upsert?: UserUpsertWithoutCreated_authorsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreated_authorsInput, UserUpdateWithoutCreated_authorsInput>, UserUncheckedUpdateWithoutCreated_authorsInput>
  }

  export type UserUpdateOneWithoutUpdated_authorsNestedInput = {
    create?: XOR<UserCreateWithoutUpdated_authorsInput, UserUncheckedCreateWithoutUpdated_authorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdated_authorsInput
    upsert?: UserUpsertWithoutUpdated_authorsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUpdated_authorsInput, UserUpdateWithoutUpdated_authorsInput>, UserUncheckedUpdateWithoutUpdated_authorsInput>
  }

  export type BookAuthorUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<BookAuthorCreateWithoutAuthorInput, BookAuthorUncheckedCreateWithoutAuthorInput> | BookAuthorCreateWithoutAuthorInput[] | BookAuthorUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BookAuthorCreateOrConnectWithoutAuthorInput | BookAuthorCreateOrConnectWithoutAuthorInput[]
    upsert?: BookAuthorUpsertWithWhereUniqueWithoutAuthorInput | BookAuthorUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: BookAuthorCreateManyAuthorInputEnvelope
    set?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    disconnect?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    delete?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    connect?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    update?: BookAuthorUpdateWithWhereUniqueWithoutAuthorInput | BookAuthorUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: BookAuthorUpdateManyWithWhereWithoutAuthorInput | BookAuthorUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: BookAuthorScalarWhereInput | BookAuthorScalarWhereInput[]
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type BookAuthorUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<BookAuthorCreateWithoutAuthorInput, BookAuthorUncheckedCreateWithoutAuthorInput> | BookAuthorCreateWithoutAuthorInput[] | BookAuthorUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BookAuthorCreateOrConnectWithoutAuthorInput | BookAuthorCreateOrConnectWithoutAuthorInput[]
    upsert?: BookAuthorUpsertWithWhereUniqueWithoutAuthorInput | BookAuthorUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: BookAuthorCreateManyAuthorInputEnvelope
    set?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    disconnect?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    delete?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    connect?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    update?: BookAuthorUpdateWithWhereUniqueWithoutAuthorInput | BookAuthorUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: BookAuthorUpdateManyWithWhereWithoutAuthorInput | BookAuthorUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: BookAuthorScalarWhereInput | BookAuthorScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCreated_book_authorsInput = {
    create?: XOR<UserCreateWithoutCreated_book_authorsInput, UserUncheckedCreateWithoutCreated_book_authorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreated_book_authorsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUpdated_book_authorsInput = {
    create?: XOR<UserCreateWithoutUpdated_book_authorsInput, UserUncheckedCreateWithoutUpdated_book_authorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdated_book_authorsInput
    connect?: UserWhereUniqueInput
  }

  export type AuthorCreateNestedOneWithoutBooksInput = {
    create?: XOR<AuthorCreateWithoutBooksInput, AuthorUncheckedCreateWithoutBooksInput>
    connectOrCreate?: AuthorCreateOrConnectWithoutBooksInput
    connect?: AuthorWhereUniqueInput
  }

  export type BookCreateNestedOneWithoutAuthorsInput = {
    create?: XOR<BookCreateWithoutAuthorsInput, BookUncheckedCreateWithoutAuthorsInput>
    connectOrCreate?: BookCreateOrConnectWithoutAuthorsInput
    connect?: BookWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCreated_book_authorsNestedInput = {
    create?: XOR<UserCreateWithoutCreated_book_authorsInput, UserUncheckedCreateWithoutCreated_book_authorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreated_book_authorsInput
    upsert?: UserUpsertWithoutCreated_book_authorsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreated_book_authorsInput, UserUpdateWithoutCreated_book_authorsInput>, UserUncheckedUpdateWithoutCreated_book_authorsInput>
  }

  export type UserUpdateOneWithoutUpdated_book_authorsNestedInput = {
    create?: XOR<UserCreateWithoutUpdated_book_authorsInput, UserUncheckedCreateWithoutUpdated_book_authorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdated_book_authorsInput
    upsert?: UserUpsertWithoutUpdated_book_authorsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUpdated_book_authorsInput, UserUpdateWithoutUpdated_book_authorsInput>, UserUncheckedUpdateWithoutUpdated_book_authorsInput>
  }

  export type AuthorUpdateOneRequiredWithoutBooksNestedInput = {
    create?: XOR<AuthorCreateWithoutBooksInput, AuthorUncheckedCreateWithoutBooksInput>
    connectOrCreate?: AuthorCreateOrConnectWithoutBooksInput
    upsert?: AuthorUpsertWithoutBooksInput
    connect?: AuthorWhereUniqueInput
    update?: XOR<XOR<AuthorUpdateToOneWithWhereWithoutBooksInput, AuthorUpdateWithoutBooksInput>, AuthorUncheckedUpdateWithoutBooksInput>
  }

  export type BookUpdateOneRequiredWithoutAuthorsNestedInput = {
    create?: XOR<BookCreateWithoutAuthorsInput, BookUncheckedCreateWithoutAuthorsInput>
    connectOrCreate?: BookCreateOrConnectWithoutAuthorsInput
    upsert?: BookUpsertWithoutAuthorsInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutAuthorsInput, BookUpdateWithoutAuthorsInput>, BookUncheckedUpdateWithoutAuthorsInput>
  }

  export type UserCreateNestedOneWithoutCreated_tagsInput = {
    create?: XOR<UserCreateWithoutCreated_tagsInput, UserUncheckedCreateWithoutCreated_tagsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreated_tagsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUpdated_tagsInput = {
    create?: XOR<UserCreateWithoutUpdated_tagsInput, UserUncheckedCreateWithoutUpdated_tagsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdated_tagsInput
    connect?: UserWhereUniqueInput
  }

  export type BookTagCreateNestedManyWithoutTagInput = {
    create?: XOR<BookTagCreateWithoutTagInput, BookTagUncheckedCreateWithoutTagInput> | BookTagCreateWithoutTagInput[] | BookTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: BookTagCreateOrConnectWithoutTagInput | BookTagCreateOrConnectWithoutTagInput[]
    createMany?: BookTagCreateManyTagInputEnvelope
    connect?: BookTagWhereUniqueInput | BookTagWhereUniqueInput[]
  }

  export type BookTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<BookTagCreateWithoutTagInput, BookTagUncheckedCreateWithoutTagInput> | BookTagCreateWithoutTagInput[] | BookTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: BookTagCreateOrConnectWithoutTagInput | BookTagCreateOrConnectWithoutTagInput[]
    createMany?: BookTagCreateManyTagInputEnvelope
    connect?: BookTagWhereUniqueInput | BookTagWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCreated_tagsNestedInput = {
    create?: XOR<UserCreateWithoutCreated_tagsInput, UserUncheckedCreateWithoutCreated_tagsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreated_tagsInput
    upsert?: UserUpsertWithoutCreated_tagsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreated_tagsInput, UserUpdateWithoutCreated_tagsInput>, UserUncheckedUpdateWithoutCreated_tagsInput>
  }

  export type UserUpdateOneWithoutUpdated_tagsNestedInput = {
    create?: XOR<UserCreateWithoutUpdated_tagsInput, UserUncheckedCreateWithoutUpdated_tagsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdated_tagsInput
    upsert?: UserUpsertWithoutUpdated_tagsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUpdated_tagsInput, UserUpdateWithoutUpdated_tagsInput>, UserUncheckedUpdateWithoutUpdated_tagsInput>
  }

  export type BookTagUpdateManyWithoutTagNestedInput = {
    create?: XOR<BookTagCreateWithoutTagInput, BookTagUncheckedCreateWithoutTagInput> | BookTagCreateWithoutTagInput[] | BookTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: BookTagCreateOrConnectWithoutTagInput | BookTagCreateOrConnectWithoutTagInput[]
    upsert?: BookTagUpsertWithWhereUniqueWithoutTagInput | BookTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: BookTagCreateManyTagInputEnvelope
    set?: BookTagWhereUniqueInput | BookTagWhereUniqueInput[]
    disconnect?: BookTagWhereUniqueInput | BookTagWhereUniqueInput[]
    delete?: BookTagWhereUniqueInput | BookTagWhereUniqueInput[]
    connect?: BookTagWhereUniqueInput | BookTagWhereUniqueInput[]
    update?: BookTagUpdateWithWhereUniqueWithoutTagInput | BookTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: BookTagUpdateManyWithWhereWithoutTagInput | BookTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: BookTagScalarWhereInput | BookTagScalarWhereInput[]
  }

  export type BookTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<BookTagCreateWithoutTagInput, BookTagUncheckedCreateWithoutTagInput> | BookTagCreateWithoutTagInput[] | BookTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: BookTagCreateOrConnectWithoutTagInput | BookTagCreateOrConnectWithoutTagInput[]
    upsert?: BookTagUpsertWithWhereUniqueWithoutTagInput | BookTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: BookTagCreateManyTagInputEnvelope
    set?: BookTagWhereUniqueInput | BookTagWhereUniqueInput[]
    disconnect?: BookTagWhereUniqueInput | BookTagWhereUniqueInput[]
    delete?: BookTagWhereUniqueInput | BookTagWhereUniqueInput[]
    connect?: BookTagWhereUniqueInput | BookTagWhereUniqueInput[]
    update?: BookTagUpdateWithWhereUniqueWithoutTagInput | BookTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: BookTagUpdateManyWithWhereWithoutTagInput | BookTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: BookTagScalarWhereInput | BookTagScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCreated_book_tagsInput = {
    create?: XOR<UserCreateWithoutCreated_book_tagsInput, UserUncheckedCreateWithoutCreated_book_tagsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreated_book_tagsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUpdated_book_tagsInput = {
    create?: XOR<UserCreateWithoutUpdated_book_tagsInput, UserUncheckedCreateWithoutUpdated_book_tagsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdated_book_tagsInput
    connect?: UserWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutBooksInput = {
    create?: XOR<TagCreateWithoutBooksInput, TagUncheckedCreateWithoutBooksInput>
    connectOrCreate?: TagCreateOrConnectWithoutBooksInput
    connect?: TagWhereUniqueInput
  }

  export type BookCreateNestedOneWithoutTagsInput = {
    create?: XOR<BookCreateWithoutTagsInput, BookUncheckedCreateWithoutTagsInput>
    connectOrCreate?: BookCreateOrConnectWithoutTagsInput
    connect?: BookWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCreated_book_tagsNestedInput = {
    create?: XOR<UserCreateWithoutCreated_book_tagsInput, UserUncheckedCreateWithoutCreated_book_tagsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreated_book_tagsInput
    upsert?: UserUpsertWithoutCreated_book_tagsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreated_book_tagsInput, UserUpdateWithoutCreated_book_tagsInput>, UserUncheckedUpdateWithoutCreated_book_tagsInput>
  }

  export type UserUpdateOneWithoutUpdated_book_tagsNestedInput = {
    create?: XOR<UserCreateWithoutUpdated_book_tagsInput, UserUncheckedCreateWithoutUpdated_book_tagsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdated_book_tagsInput
    upsert?: UserUpsertWithoutUpdated_book_tagsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUpdated_book_tagsInput, UserUpdateWithoutUpdated_book_tagsInput>, UserUncheckedUpdateWithoutUpdated_book_tagsInput>
  }

  export type TagUpdateOneRequiredWithoutBooksNestedInput = {
    create?: XOR<TagCreateWithoutBooksInput, TagUncheckedCreateWithoutBooksInput>
    connectOrCreate?: TagCreateOrConnectWithoutBooksInput
    upsert?: TagUpsertWithoutBooksInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutBooksInput, TagUpdateWithoutBooksInput>, TagUncheckedUpdateWithoutBooksInput>
  }

  export type BookUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<BookCreateWithoutTagsInput, BookUncheckedCreateWithoutTagsInput>
    connectOrCreate?: BookCreateOrConnectWithoutTagsInput
    upsert?: BookUpsertWithoutTagsInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutTagsInput, BookUpdateWithoutTagsInput>, BookUncheckedUpdateWithoutTagsInput>
  }

  export type BookCreateimages_urlInput = {
    set: string[]
  }

  export type BookCreatekeywordsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutCreated_booksInput = {
    create?: XOR<UserCreateWithoutCreated_booksInput, UserUncheckedCreateWithoutCreated_booksInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreated_booksInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUpdated_booksInput = {
    create?: XOR<UserCreateWithoutUpdated_booksInput, UserUncheckedCreateWithoutUpdated_booksInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdated_booksInput
    connect?: UserWhereUniqueInput
  }

  export type BookAuthorCreateNestedManyWithoutBookInput = {
    create?: XOR<BookAuthorCreateWithoutBookInput, BookAuthorUncheckedCreateWithoutBookInput> | BookAuthorCreateWithoutBookInput[] | BookAuthorUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookAuthorCreateOrConnectWithoutBookInput | BookAuthorCreateOrConnectWithoutBookInput[]
    createMany?: BookAuthorCreateManyBookInputEnvelope
    connect?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
  }

  export type BookTagCreateNestedManyWithoutBookInput = {
    create?: XOR<BookTagCreateWithoutBookInput, BookTagUncheckedCreateWithoutBookInput> | BookTagCreateWithoutBookInput[] | BookTagUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookTagCreateOrConnectWithoutBookInput | BookTagCreateOrConnectWithoutBookInput[]
    createMany?: BookTagCreateManyBookInputEnvelope
    connect?: BookTagWhereUniqueInput | BookTagWhereUniqueInput[]
  }

  export type LoanCreateNestedManyWithoutBookInput = {
    create?: XOR<LoanCreateWithoutBookInput, LoanUncheckedCreateWithoutBookInput> | LoanCreateWithoutBookInput[] | LoanUncheckedCreateWithoutBookInput[]
    connectOrCreate?: LoanCreateOrConnectWithoutBookInput | LoanCreateOrConnectWithoutBookInput[]
    createMany?: LoanCreateManyBookInputEnvelope
    connect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
  }

  export type BookAuthorUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<BookAuthorCreateWithoutBookInput, BookAuthorUncheckedCreateWithoutBookInput> | BookAuthorCreateWithoutBookInput[] | BookAuthorUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookAuthorCreateOrConnectWithoutBookInput | BookAuthorCreateOrConnectWithoutBookInput[]
    createMany?: BookAuthorCreateManyBookInputEnvelope
    connect?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
  }

  export type BookTagUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<BookTagCreateWithoutBookInput, BookTagUncheckedCreateWithoutBookInput> | BookTagCreateWithoutBookInput[] | BookTagUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookTagCreateOrConnectWithoutBookInput | BookTagCreateOrConnectWithoutBookInput[]
    createMany?: BookTagCreateManyBookInputEnvelope
    connect?: BookTagWhereUniqueInput | BookTagWhereUniqueInput[]
  }

  export type LoanUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<LoanCreateWithoutBookInput, LoanUncheckedCreateWithoutBookInput> | LoanCreateWithoutBookInput[] | LoanUncheckedCreateWithoutBookInput[]
    connectOrCreate?: LoanCreateOrConnectWithoutBookInput | LoanCreateOrConnectWithoutBookInput[]
    createMany?: LoanCreateManyBookInputEnvelope
    connect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BookUpdateimages_urlInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BookUpdatekeywordsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutCreated_booksNestedInput = {
    create?: XOR<UserCreateWithoutCreated_booksInput, UserUncheckedCreateWithoutCreated_booksInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreated_booksInput
    upsert?: UserUpsertWithoutCreated_booksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreated_booksInput, UserUpdateWithoutCreated_booksInput>, UserUncheckedUpdateWithoutCreated_booksInput>
  }

  export type UserUpdateOneWithoutUpdated_booksNestedInput = {
    create?: XOR<UserCreateWithoutUpdated_booksInput, UserUncheckedCreateWithoutUpdated_booksInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdated_booksInput
    upsert?: UserUpsertWithoutUpdated_booksInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUpdated_booksInput, UserUpdateWithoutUpdated_booksInput>, UserUncheckedUpdateWithoutUpdated_booksInput>
  }

  export type BookAuthorUpdateManyWithoutBookNestedInput = {
    create?: XOR<BookAuthorCreateWithoutBookInput, BookAuthorUncheckedCreateWithoutBookInput> | BookAuthorCreateWithoutBookInput[] | BookAuthorUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookAuthorCreateOrConnectWithoutBookInput | BookAuthorCreateOrConnectWithoutBookInput[]
    upsert?: BookAuthorUpsertWithWhereUniqueWithoutBookInput | BookAuthorUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: BookAuthorCreateManyBookInputEnvelope
    set?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    disconnect?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    delete?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    connect?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    update?: BookAuthorUpdateWithWhereUniqueWithoutBookInput | BookAuthorUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: BookAuthorUpdateManyWithWhereWithoutBookInput | BookAuthorUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: BookAuthorScalarWhereInput | BookAuthorScalarWhereInput[]
  }

  export type BookTagUpdateManyWithoutBookNestedInput = {
    create?: XOR<BookTagCreateWithoutBookInput, BookTagUncheckedCreateWithoutBookInput> | BookTagCreateWithoutBookInput[] | BookTagUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookTagCreateOrConnectWithoutBookInput | BookTagCreateOrConnectWithoutBookInput[]
    upsert?: BookTagUpsertWithWhereUniqueWithoutBookInput | BookTagUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: BookTagCreateManyBookInputEnvelope
    set?: BookTagWhereUniqueInput | BookTagWhereUniqueInput[]
    disconnect?: BookTagWhereUniqueInput | BookTagWhereUniqueInput[]
    delete?: BookTagWhereUniqueInput | BookTagWhereUniqueInput[]
    connect?: BookTagWhereUniqueInput | BookTagWhereUniqueInput[]
    update?: BookTagUpdateWithWhereUniqueWithoutBookInput | BookTagUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: BookTagUpdateManyWithWhereWithoutBookInput | BookTagUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: BookTagScalarWhereInput | BookTagScalarWhereInput[]
  }

  export type LoanUpdateManyWithoutBookNestedInput = {
    create?: XOR<LoanCreateWithoutBookInput, LoanUncheckedCreateWithoutBookInput> | LoanCreateWithoutBookInput[] | LoanUncheckedCreateWithoutBookInput[]
    connectOrCreate?: LoanCreateOrConnectWithoutBookInput | LoanCreateOrConnectWithoutBookInput[]
    upsert?: LoanUpsertWithWhereUniqueWithoutBookInput | LoanUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: LoanCreateManyBookInputEnvelope
    set?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    disconnect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    delete?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    connect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    update?: LoanUpdateWithWhereUniqueWithoutBookInput | LoanUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: LoanUpdateManyWithWhereWithoutBookInput | LoanUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: LoanScalarWhereInput | LoanScalarWhereInput[]
  }

  export type BookAuthorUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<BookAuthorCreateWithoutBookInput, BookAuthorUncheckedCreateWithoutBookInput> | BookAuthorCreateWithoutBookInput[] | BookAuthorUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookAuthorCreateOrConnectWithoutBookInput | BookAuthorCreateOrConnectWithoutBookInput[]
    upsert?: BookAuthorUpsertWithWhereUniqueWithoutBookInput | BookAuthorUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: BookAuthorCreateManyBookInputEnvelope
    set?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    disconnect?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    delete?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    connect?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    update?: BookAuthorUpdateWithWhereUniqueWithoutBookInput | BookAuthorUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: BookAuthorUpdateManyWithWhereWithoutBookInput | BookAuthorUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: BookAuthorScalarWhereInput | BookAuthorScalarWhereInput[]
  }

  export type BookTagUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<BookTagCreateWithoutBookInput, BookTagUncheckedCreateWithoutBookInput> | BookTagCreateWithoutBookInput[] | BookTagUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookTagCreateOrConnectWithoutBookInput | BookTagCreateOrConnectWithoutBookInput[]
    upsert?: BookTagUpsertWithWhereUniqueWithoutBookInput | BookTagUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: BookTagCreateManyBookInputEnvelope
    set?: BookTagWhereUniqueInput | BookTagWhereUniqueInput[]
    disconnect?: BookTagWhereUniqueInput | BookTagWhereUniqueInput[]
    delete?: BookTagWhereUniqueInput | BookTagWhereUniqueInput[]
    connect?: BookTagWhereUniqueInput | BookTagWhereUniqueInput[]
    update?: BookTagUpdateWithWhereUniqueWithoutBookInput | BookTagUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: BookTagUpdateManyWithWhereWithoutBookInput | BookTagUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: BookTagScalarWhereInput | BookTagScalarWhereInput[]
  }

  export type LoanUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<LoanCreateWithoutBookInput, LoanUncheckedCreateWithoutBookInput> | LoanCreateWithoutBookInput[] | LoanUncheckedCreateWithoutBookInput[]
    connectOrCreate?: LoanCreateOrConnectWithoutBookInput | LoanCreateOrConnectWithoutBookInput[]
    upsert?: LoanUpsertWithWhereUniqueWithoutBookInput | LoanUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: LoanCreateManyBookInputEnvelope
    set?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    disconnect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    delete?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    connect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    update?: LoanUpdateWithWhereUniqueWithoutBookInput | LoanUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: LoanUpdateManyWithWhereWithoutBookInput | LoanUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: LoanScalarWhereInput | LoanScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCreated_loansInput = {
    create?: XOR<UserCreateWithoutCreated_loansInput, UserUncheckedCreateWithoutCreated_loansInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreated_loansInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUpdated_loansInput = {
    create?: XOR<UserCreateWithoutUpdated_loansInput, UserUncheckedCreateWithoutUpdated_loansInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdated_loansInput
    connect?: UserWhereUniqueInput
  }

  export type BookCreateNestedOneWithoutLoansInput = {
    create?: XOR<BookCreateWithoutLoansInput, BookUncheckedCreateWithoutLoansInput>
    connectOrCreate?: BookCreateOrConnectWithoutLoansInput
    connect?: BookWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUser_loansInput = {
    create?: XOR<UserCreateWithoutUser_loansInput, UserUncheckedCreateWithoutUser_loansInput>
    connectOrCreate?: UserCreateOrConnectWithoutUser_loansInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCreated_loansNestedInput = {
    create?: XOR<UserCreateWithoutCreated_loansInput, UserUncheckedCreateWithoutCreated_loansInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreated_loansInput
    upsert?: UserUpsertWithoutCreated_loansInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreated_loansInput, UserUpdateWithoutCreated_loansInput>, UserUncheckedUpdateWithoutCreated_loansInput>
  }

  export type UserUpdateOneWithoutUpdated_loansNestedInput = {
    create?: XOR<UserCreateWithoutUpdated_loansInput, UserUncheckedCreateWithoutUpdated_loansInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdated_loansInput
    upsert?: UserUpsertWithoutUpdated_loansInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUpdated_loansInput, UserUpdateWithoutUpdated_loansInput>, UserUncheckedUpdateWithoutUpdated_loansInput>
  }

  export type BookUpdateOneRequiredWithoutLoansNestedInput = {
    create?: XOR<BookCreateWithoutLoansInput, BookUncheckedCreateWithoutLoansInput>
    connectOrCreate?: BookCreateOrConnectWithoutLoansInput
    upsert?: BookUpsertWithoutLoansInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutLoansInput, BookUpdateWithoutLoansInput>, BookUncheckedUpdateWithoutLoansInput>
  }

  export type UserUpdateOneRequiredWithoutUser_loansNestedInput = {
    create?: XOR<UserCreateWithoutUser_loansInput, UserUncheckedCreateWithoutUser_loansInput>
    connectOrCreate?: UserCreateOrConnectWithoutUser_loansInput
    upsert?: UserUpsertWithoutUser_loansInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUser_loansInput, UserUpdateWithoutUser_loansInput>, UserUncheckedUpdateWithoutUser_loansInput>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type NestedEnumSexEnumNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SexEnum | EnumSexEnumFieldRefInput<$PrismaModel> | null
    in?: $Enums.SexEnum[] | ListEnumSexEnumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SexEnum[] | ListEnumSexEnumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSexEnumNullableFilter<$PrismaModel> | $Enums.SexEnum | null
  }

  export type NestedEnumStatusEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusEnum | EnumStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.StatusEnum[] | ListEnumStatusEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusEnum[] | ListEnumStatusEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusEnumFilter<$PrismaModel> | $Enums.StatusEnum
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type NestedEnumSexEnumNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SexEnum | EnumSexEnumFieldRefInput<$PrismaModel> | null
    in?: $Enums.SexEnum[] | ListEnumSexEnumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SexEnum[] | ListEnumSexEnumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSexEnumNullableWithAggregatesFilter<$PrismaModel> | $Enums.SexEnum | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSexEnumNullableFilter<$PrismaModel>
    _max?: NestedEnumSexEnumNullableFilter<$PrismaModel>
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

  export type NestedEnumStatusEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusEnum | EnumStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.StatusEnum[] | ListEnumStatusEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusEnum[] | ListEnumStatusEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusEnumWithAggregatesFilter<$PrismaModel> | $Enums.StatusEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusEnumFilter<$PrismaModel>
    _max?: NestedEnumStatusEnumFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
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

  export type UserAuthTokenCreateWithoutUserInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    last_used_at?: Date | string | null
    created_ip: string
    last_used_ip?: string | null
    status?: $Enums.StatusEnum
    jwt_token: string
    jwt_secret: string
    keep?: boolean
  }

  export type UserAuthTokenUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    last_used_at?: Date | string | null
    created_ip: string
    last_used_ip?: string | null
    status?: $Enums.StatusEnum
    jwt_token: string
    jwt_secret: string
    keep?: boolean
  }

  export type UserAuthTokenCreateOrConnectWithoutUserInput = {
    where: UserAuthTokenWhereUniqueInput
    create: XOR<UserAuthTokenCreateWithoutUserInput, UserAuthTokenUncheckedCreateWithoutUserInput>
  }

  export type UserAuthTokenCreateManyUserInputEnvelope = {
    data: UserAuthTokenCreateManyUserInput | UserAuthTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AuthorCreateWithoutCreated_by_userInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    name: string
    status?: $Enums.StatusEnum
    description?: string | null
    avatar_url?: string | null
    is_spirit?: boolean
    updated_by_user?: UserCreateNestedOneWithoutUpdated_authorsInput
    books?: BookAuthorCreateNestedManyWithoutAuthorInput
  }

  export type AuthorUncheckedCreateWithoutCreated_by_userInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    updated_by_user_id?: bigint | number | null
    name: string
    status?: $Enums.StatusEnum
    description?: string | null
    avatar_url?: string | null
    is_spirit?: boolean
    books?: BookAuthorUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type AuthorCreateOrConnectWithoutCreated_by_userInput = {
    where: AuthorWhereUniqueInput
    create: XOR<AuthorCreateWithoutCreated_by_userInput, AuthorUncheckedCreateWithoutCreated_by_userInput>
  }

  export type AuthorCreateManyCreated_by_userInputEnvelope = {
    data: AuthorCreateManyCreated_by_userInput | AuthorCreateManyCreated_by_userInput[]
    skipDuplicates?: boolean
  }

  export type AuthorCreateWithoutUpdated_by_userInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    name: string
    status?: $Enums.StatusEnum
    description?: string | null
    avatar_url?: string | null
    is_spirit?: boolean
    created_by_user: UserCreateNestedOneWithoutCreated_authorsInput
    books?: BookAuthorCreateNestedManyWithoutAuthorInput
  }

  export type AuthorUncheckedCreateWithoutUpdated_by_userInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    created_by_user_id: bigint | number
    updated_at?: Date | string | null
    name: string
    status?: $Enums.StatusEnum
    description?: string | null
    avatar_url?: string | null
    is_spirit?: boolean
    books?: BookAuthorUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type AuthorCreateOrConnectWithoutUpdated_by_userInput = {
    where: AuthorWhereUniqueInput
    create: XOR<AuthorCreateWithoutUpdated_by_userInput, AuthorUncheckedCreateWithoutUpdated_by_userInput>
  }

  export type AuthorCreateManyUpdated_by_userInputEnvelope = {
    data: AuthorCreateManyUpdated_by_userInput | AuthorCreateManyUpdated_by_userInput[]
    skipDuplicates?: boolean
  }

  export type BookCreateWithoutCreated_by_userInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    title: string
    subtitle?: string | null
    publisher?: string | null
    year?: number | null
    edition?: string | null
    isbn?: string | null
    pages?: number | null
    summary?: string | null
    pdf_url?: string | null
    cover_url?: string | null
    images_url?: BookCreateimages_urlInput | string[]
    keywords?: BookCreatekeywordsInput | string[]
    label?: string | null
    shelf?: string | null
    status?: $Enums.StatusEnum
    description?: string | null
    updated_by_user?: UserCreateNestedOneWithoutUpdated_booksInput
    authors?: BookAuthorCreateNestedManyWithoutBookInput
    tags?: BookTagCreateNestedManyWithoutBookInput
    loans?: LoanCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutCreated_by_userInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    updated_by_user_id?: bigint | number | null
    title: string
    subtitle?: string | null
    publisher?: string | null
    year?: number | null
    edition?: string | null
    isbn?: string | null
    pages?: number | null
    summary?: string | null
    pdf_url?: string | null
    cover_url?: string | null
    images_url?: BookCreateimages_urlInput | string[]
    keywords?: BookCreatekeywordsInput | string[]
    label?: string | null
    shelf?: string | null
    status?: $Enums.StatusEnum
    description?: string | null
    authors?: BookAuthorUncheckedCreateNestedManyWithoutBookInput
    tags?: BookTagUncheckedCreateNestedManyWithoutBookInput
    loans?: LoanUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutCreated_by_userInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutCreated_by_userInput, BookUncheckedCreateWithoutCreated_by_userInput>
  }

  export type BookCreateManyCreated_by_userInputEnvelope = {
    data: BookCreateManyCreated_by_userInput | BookCreateManyCreated_by_userInput[]
    skipDuplicates?: boolean
  }

  export type BookCreateWithoutUpdated_by_userInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    title: string
    subtitle?: string | null
    publisher?: string | null
    year?: number | null
    edition?: string | null
    isbn?: string | null
    pages?: number | null
    summary?: string | null
    pdf_url?: string | null
    cover_url?: string | null
    images_url?: BookCreateimages_urlInput | string[]
    keywords?: BookCreatekeywordsInput | string[]
    label?: string | null
    shelf?: string | null
    status?: $Enums.StatusEnum
    description?: string | null
    created_by_user: UserCreateNestedOneWithoutCreated_booksInput
    authors?: BookAuthorCreateNestedManyWithoutBookInput
    tags?: BookTagCreateNestedManyWithoutBookInput
    loans?: LoanCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutUpdated_by_userInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    created_by_user_id: bigint | number
    updated_at?: Date | string | null
    title: string
    subtitle?: string | null
    publisher?: string | null
    year?: number | null
    edition?: string | null
    isbn?: string | null
    pages?: number | null
    summary?: string | null
    pdf_url?: string | null
    cover_url?: string | null
    images_url?: BookCreateimages_urlInput | string[]
    keywords?: BookCreatekeywordsInput | string[]
    label?: string | null
    shelf?: string | null
    status?: $Enums.StatusEnum
    description?: string | null
    authors?: BookAuthorUncheckedCreateNestedManyWithoutBookInput
    tags?: BookTagUncheckedCreateNestedManyWithoutBookInput
    loans?: LoanUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutUpdated_by_userInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutUpdated_by_userInput, BookUncheckedCreateWithoutUpdated_by_userInput>
  }

  export type BookCreateManyUpdated_by_userInputEnvelope = {
    data: BookCreateManyUpdated_by_userInput | BookCreateManyUpdated_by_userInput[]
    skipDuplicates?: boolean
  }

  export type BookAuthorCreateWithoutCreated_by_userInput = {
    id?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string | null
    status?: $Enums.StatusEnum
    description?: string | null
    updated_by_user?: UserCreateNestedOneWithoutUpdated_book_authorsInput
    author: AuthorCreateNestedOneWithoutBooksInput
    book: BookCreateNestedOneWithoutAuthorsInput
  }

  export type BookAuthorUncheckedCreateWithoutCreated_by_userInput = {
    id?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string | null
    updated_by_user_id?: bigint | number | null
    status?: $Enums.StatusEnum
    author_id: bigint | number
    book_id: bigint | number
    description?: string | null
  }

  export type BookAuthorCreateOrConnectWithoutCreated_by_userInput = {
    where: BookAuthorWhereUniqueInput
    create: XOR<BookAuthorCreateWithoutCreated_by_userInput, BookAuthorUncheckedCreateWithoutCreated_by_userInput>
  }

  export type BookAuthorCreateManyCreated_by_userInputEnvelope = {
    data: BookAuthorCreateManyCreated_by_userInput | BookAuthorCreateManyCreated_by_userInput[]
    skipDuplicates?: boolean
  }

  export type BookAuthorCreateWithoutUpdated_by_userInput = {
    id?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string | null
    status?: $Enums.StatusEnum
    description?: string | null
    created_by_user: UserCreateNestedOneWithoutCreated_book_authorsInput
    author: AuthorCreateNestedOneWithoutBooksInput
    book: BookCreateNestedOneWithoutAuthorsInput
  }

  export type BookAuthorUncheckedCreateWithoutUpdated_by_userInput = {
    id?: bigint | number
    created_at?: Date | string
    created_by_user_id: bigint | number
    updated_at?: Date | string | null
    status?: $Enums.StatusEnum
    author_id: bigint | number
    book_id: bigint | number
    description?: string | null
  }

  export type BookAuthorCreateOrConnectWithoutUpdated_by_userInput = {
    where: BookAuthorWhereUniqueInput
    create: XOR<BookAuthorCreateWithoutUpdated_by_userInput, BookAuthorUncheckedCreateWithoutUpdated_by_userInput>
  }

  export type BookAuthorCreateManyUpdated_by_userInputEnvelope = {
    data: BookAuthorCreateManyUpdated_by_userInput | BookAuthorCreateManyUpdated_by_userInput[]
    skipDuplicates?: boolean
  }

  export type TagCreateWithoutCreated_by_userInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    name: string
    status?: $Enums.StatusEnum
    description?: string | null
    updated_by_user?: UserCreateNestedOneWithoutUpdated_tagsInput
    books?: BookTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateWithoutCreated_by_userInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    updated_by_user_id?: bigint | number | null
    name: string
    status?: $Enums.StatusEnum
    description?: string | null
    books?: BookTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagCreateOrConnectWithoutCreated_by_userInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutCreated_by_userInput, TagUncheckedCreateWithoutCreated_by_userInput>
  }

  export type TagCreateManyCreated_by_userInputEnvelope = {
    data: TagCreateManyCreated_by_userInput | TagCreateManyCreated_by_userInput[]
    skipDuplicates?: boolean
  }

  export type TagCreateWithoutUpdated_by_userInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    name: string
    status?: $Enums.StatusEnum
    description?: string | null
    created_by_user: UserCreateNestedOneWithoutCreated_tagsInput
    books?: BookTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateWithoutUpdated_by_userInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    created_by_user_id: bigint | number
    updated_at?: Date | string | null
    name: string
    status?: $Enums.StatusEnum
    description?: string | null
    books?: BookTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagCreateOrConnectWithoutUpdated_by_userInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutUpdated_by_userInput, TagUncheckedCreateWithoutUpdated_by_userInput>
  }

  export type TagCreateManyUpdated_by_userInputEnvelope = {
    data: TagCreateManyUpdated_by_userInput | TagCreateManyUpdated_by_userInput[]
    skipDuplicates?: boolean
  }

  export type BookTagCreateWithoutCreated_by_userInput = {
    id?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string | null
    status?: $Enums.StatusEnum
    updated_by_user?: UserCreateNestedOneWithoutUpdated_book_tagsInput
    tag: TagCreateNestedOneWithoutBooksInput
    book: BookCreateNestedOneWithoutTagsInput
  }

  export type BookTagUncheckedCreateWithoutCreated_by_userInput = {
    id?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string | null
    updated_by_user_id?: bigint | number | null
    status?: $Enums.StatusEnum
    tag_id: bigint | number
    book_id: bigint | number
  }

  export type BookTagCreateOrConnectWithoutCreated_by_userInput = {
    where: BookTagWhereUniqueInput
    create: XOR<BookTagCreateWithoutCreated_by_userInput, BookTagUncheckedCreateWithoutCreated_by_userInput>
  }

  export type BookTagCreateManyCreated_by_userInputEnvelope = {
    data: BookTagCreateManyCreated_by_userInput | BookTagCreateManyCreated_by_userInput[]
    skipDuplicates?: boolean
  }

  export type BookTagCreateWithoutUpdated_by_userInput = {
    id?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string | null
    status?: $Enums.StatusEnum
    created_by_user: UserCreateNestedOneWithoutCreated_book_tagsInput
    tag: TagCreateNestedOneWithoutBooksInput
    book: BookCreateNestedOneWithoutTagsInput
  }

  export type BookTagUncheckedCreateWithoutUpdated_by_userInput = {
    id?: bigint | number
    created_at?: Date | string
    created_by_user_id: bigint | number
    updated_at?: Date | string | null
    status?: $Enums.StatusEnum
    tag_id: bigint | number
    book_id: bigint | number
  }

  export type BookTagCreateOrConnectWithoutUpdated_by_userInput = {
    where: BookTagWhereUniqueInput
    create: XOR<BookTagCreateWithoutUpdated_by_userInput, BookTagUncheckedCreateWithoutUpdated_by_userInput>
  }

  export type BookTagCreateManyUpdated_by_userInputEnvelope = {
    data: BookTagCreateManyUpdated_by_userInput | BookTagCreateManyUpdated_by_userInput[]
    skipDuplicates?: boolean
  }

  export type LoanCreateWithoutCreated_by_userInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    status?: $Enums.StatusEnum
    loan_date?: Date | string
    due_date?: Date | string
    return_date?: Date | string | null
    updated_by_user?: UserCreateNestedOneWithoutUpdated_loansInput
    book: BookCreateNestedOneWithoutLoansInput
    user: UserCreateNestedOneWithoutUser_loansInput
  }

  export type LoanUncheckedCreateWithoutCreated_by_userInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    updated_by_user_id?: bigint | number | null
    status?: $Enums.StatusEnum
    loan_date?: Date | string
    due_date?: Date | string
    return_date?: Date | string | null
    book_id: bigint | number
    user_id: bigint | number
  }

  export type LoanCreateOrConnectWithoutCreated_by_userInput = {
    where: LoanWhereUniqueInput
    create: XOR<LoanCreateWithoutCreated_by_userInput, LoanUncheckedCreateWithoutCreated_by_userInput>
  }

  export type LoanCreateManyCreated_by_userInputEnvelope = {
    data: LoanCreateManyCreated_by_userInput | LoanCreateManyCreated_by_userInput[]
    skipDuplicates?: boolean
  }

  export type LoanCreateWithoutUpdated_by_userInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    status?: $Enums.StatusEnum
    loan_date?: Date | string
    due_date?: Date | string
    return_date?: Date | string | null
    created_by_user: UserCreateNestedOneWithoutCreated_loansInput
    book: BookCreateNestedOneWithoutLoansInput
    user: UserCreateNestedOneWithoutUser_loansInput
  }

  export type LoanUncheckedCreateWithoutUpdated_by_userInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    created_by_user_id: bigint | number
    updated_at?: Date | string | null
    status?: $Enums.StatusEnum
    loan_date?: Date | string
    due_date?: Date | string
    return_date?: Date | string | null
    book_id: bigint | number
    user_id: bigint | number
  }

  export type LoanCreateOrConnectWithoutUpdated_by_userInput = {
    where: LoanWhereUniqueInput
    create: XOR<LoanCreateWithoutUpdated_by_userInput, LoanUncheckedCreateWithoutUpdated_by_userInput>
  }

  export type LoanCreateManyUpdated_by_userInputEnvelope = {
    data: LoanCreateManyUpdated_by_userInput | LoanCreateManyUpdated_by_userInput[]
    skipDuplicates?: boolean
  }

  export type LoanCreateWithoutUserInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    status?: $Enums.StatusEnum
    loan_date?: Date | string
    due_date?: Date | string
    return_date?: Date | string | null
    created_by_user: UserCreateNestedOneWithoutCreated_loansInput
    updated_by_user?: UserCreateNestedOneWithoutUpdated_loansInput
    book: BookCreateNestedOneWithoutLoansInput
  }

  export type LoanUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    created_by_user_id: bigint | number
    updated_at?: Date | string | null
    updated_by_user_id?: bigint | number | null
    status?: $Enums.StatusEnum
    loan_date?: Date | string
    due_date?: Date | string
    return_date?: Date | string | null
    book_id: bigint | number
  }

  export type LoanCreateOrConnectWithoutUserInput = {
    where: LoanWhereUniqueInput
    create: XOR<LoanCreateWithoutUserInput, LoanUncheckedCreateWithoutUserInput>
  }

  export type LoanCreateManyUserInputEnvelope = {
    data: LoanCreateManyUserInput | LoanCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserAuthTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: UserAuthTokenWhereUniqueInput
    update: XOR<UserAuthTokenUpdateWithoutUserInput, UserAuthTokenUncheckedUpdateWithoutUserInput>
    create: XOR<UserAuthTokenCreateWithoutUserInput, UserAuthTokenUncheckedCreateWithoutUserInput>
  }

  export type UserAuthTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: UserAuthTokenWhereUniqueInput
    data: XOR<UserAuthTokenUpdateWithoutUserInput, UserAuthTokenUncheckedUpdateWithoutUserInput>
  }

  export type UserAuthTokenUpdateManyWithWhereWithoutUserInput = {
    where: UserAuthTokenScalarWhereInput
    data: XOR<UserAuthTokenUpdateManyMutationInput, UserAuthTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type UserAuthTokenScalarWhereInput = {
    AND?: UserAuthTokenScalarWhereInput | UserAuthTokenScalarWhereInput[]
    OR?: UserAuthTokenScalarWhereInput[]
    NOT?: UserAuthTokenScalarWhereInput | UserAuthTokenScalarWhereInput[]
    id?: BigIntFilter<"UserAuthToken"> | bigint | number
    slug?: StringFilter<"UserAuthToken"> | string
    created_at?: DateTimeFilter<"UserAuthToken"> | Date | string
    updated_at?: DateTimeNullableFilter<"UserAuthToken"> | Date | string | null
    last_used_at?: DateTimeNullableFilter<"UserAuthToken"> | Date | string | null
    created_ip?: StringFilter<"UserAuthToken"> | string
    last_used_ip?: StringNullableFilter<"UserAuthToken"> | string | null
    status?: EnumStatusEnumFilter<"UserAuthToken"> | $Enums.StatusEnum
    jwt_token?: StringFilter<"UserAuthToken"> | string
    jwt_secret?: StringFilter<"UserAuthToken"> | string
    keep?: BoolFilter<"UserAuthToken"> | boolean
    user_id?: BigIntFilter<"UserAuthToken"> | bigint | number
  }

  export type AuthorUpsertWithWhereUniqueWithoutCreated_by_userInput = {
    where: AuthorWhereUniqueInput
    update: XOR<AuthorUpdateWithoutCreated_by_userInput, AuthorUncheckedUpdateWithoutCreated_by_userInput>
    create: XOR<AuthorCreateWithoutCreated_by_userInput, AuthorUncheckedCreateWithoutCreated_by_userInput>
  }

  export type AuthorUpdateWithWhereUniqueWithoutCreated_by_userInput = {
    where: AuthorWhereUniqueInput
    data: XOR<AuthorUpdateWithoutCreated_by_userInput, AuthorUncheckedUpdateWithoutCreated_by_userInput>
  }

  export type AuthorUpdateManyWithWhereWithoutCreated_by_userInput = {
    where: AuthorScalarWhereInput
    data: XOR<AuthorUpdateManyMutationInput, AuthorUncheckedUpdateManyWithoutCreated_by_userInput>
  }

  export type AuthorScalarWhereInput = {
    AND?: AuthorScalarWhereInput | AuthorScalarWhereInput[]
    OR?: AuthorScalarWhereInput[]
    NOT?: AuthorScalarWhereInput | AuthorScalarWhereInput[]
    id?: BigIntFilter<"Author"> | bigint | number
    slug?: StringFilter<"Author"> | string
    created_at?: DateTimeFilter<"Author"> | Date | string
    created_by_user_id?: BigIntFilter<"Author"> | bigint | number
    updated_at?: DateTimeNullableFilter<"Author"> | Date | string | null
    updated_by_user_id?: BigIntNullableFilter<"Author"> | bigint | number | null
    name?: StringFilter<"Author"> | string
    status?: EnumStatusEnumFilter<"Author"> | $Enums.StatusEnum
    description?: StringNullableFilter<"Author"> | string | null
    avatar_url?: StringNullableFilter<"Author"> | string | null
    is_spirit?: BoolFilter<"Author"> | boolean
  }

  export type AuthorUpsertWithWhereUniqueWithoutUpdated_by_userInput = {
    where: AuthorWhereUniqueInput
    update: XOR<AuthorUpdateWithoutUpdated_by_userInput, AuthorUncheckedUpdateWithoutUpdated_by_userInput>
    create: XOR<AuthorCreateWithoutUpdated_by_userInput, AuthorUncheckedCreateWithoutUpdated_by_userInput>
  }

  export type AuthorUpdateWithWhereUniqueWithoutUpdated_by_userInput = {
    where: AuthorWhereUniqueInput
    data: XOR<AuthorUpdateWithoutUpdated_by_userInput, AuthorUncheckedUpdateWithoutUpdated_by_userInput>
  }

  export type AuthorUpdateManyWithWhereWithoutUpdated_by_userInput = {
    where: AuthorScalarWhereInput
    data: XOR<AuthorUpdateManyMutationInput, AuthorUncheckedUpdateManyWithoutUpdated_by_userInput>
  }

  export type BookUpsertWithWhereUniqueWithoutCreated_by_userInput = {
    where: BookWhereUniqueInput
    update: XOR<BookUpdateWithoutCreated_by_userInput, BookUncheckedUpdateWithoutCreated_by_userInput>
    create: XOR<BookCreateWithoutCreated_by_userInput, BookUncheckedCreateWithoutCreated_by_userInput>
  }

  export type BookUpdateWithWhereUniqueWithoutCreated_by_userInput = {
    where: BookWhereUniqueInput
    data: XOR<BookUpdateWithoutCreated_by_userInput, BookUncheckedUpdateWithoutCreated_by_userInput>
  }

  export type BookUpdateManyWithWhereWithoutCreated_by_userInput = {
    where: BookScalarWhereInput
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyWithoutCreated_by_userInput>
  }

  export type BookScalarWhereInput = {
    AND?: BookScalarWhereInput | BookScalarWhereInput[]
    OR?: BookScalarWhereInput[]
    NOT?: BookScalarWhereInput | BookScalarWhereInput[]
    id?: BigIntFilter<"Book"> | bigint | number
    slug?: StringFilter<"Book"> | string
    created_at?: DateTimeFilter<"Book"> | Date | string
    created_by_user_id?: BigIntFilter<"Book"> | bigint | number
    updated_at?: DateTimeNullableFilter<"Book"> | Date | string | null
    updated_by_user_id?: BigIntNullableFilter<"Book"> | bigint | number | null
    title?: StringFilter<"Book"> | string
    subtitle?: StringNullableFilter<"Book"> | string | null
    publisher?: StringNullableFilter<"Book"> | string | null
    year?: IntNullableFilter<"Book"> | number | null
    edition?: StringNullableFilter<"Book"> | string | null
    isbn?: StringNullableFilter<"Book"> | string | null
    pages?: IntNullableFilter<"Book"> | number | null
    summary?: StringNullableFilter<"Book"> | string | null
    pdf_url?: StringNullableFilter<"Book"> | string | null
    cover_url?: StringNullableFilter<"Book"> | string | null
    images_url?: StringNullableListFilter<"Book">
    keywords?: StringNullableListFilter<"Book">
    label?: StringNullableFilter<"Book"> | string | null
    shelf?: StringNullableFilter<"Book"> | string | null
    status?: EnumStatusEnumFilter<"Book"> | $Enums.StatusEnum
    description?: StringNullableFilter<"Book"> | string | null
  }

  export type BookUpsertWithWhereUniqueWithoutUpdated_by_userInput = {
    where: BookWhereUniqueInput
    update: XOR<BookUpdateWithoutUpdated_by_userInput, BookUncheckedUpdateWithoutUpdated_by_userInput>
    create: XOR<BookCreateWithoutUpdated_by_userInput, BookUncheckedCreateWithoutUpdated_by_userInput>
  }

  export type BookUpdateWithWhereUniqueWithoutUpdated_by_userInput = {
    where: BookWhereUniqueInput
    data: XOR<BookUpdateWithoutUpdated_by_userInput, BookUncheckedUpdateWithoutUpdated_by_userInput>
  }

  export type BookUpdateManyWithWhereWithoutUpdated_by_userInput = {
    where: BookScalarWhereInput
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyWithoutUpdated_by_userInput>
  }

  export type BookAuthorUpsertWithWhereUniqueWithoutCreated_by_userInput = {
    where: BookAuthorWhereUniqueInput
    update: XOR<BookAuthorUpdateWithoutCreated_by_userInput, BookAuthorUncheckedUpdateWithoutCreated_by_userInput>
    create: XOR<BookAuthorCreateWithoutCreated_by_userInput, BookAuthorUncheckedCreateWithoutCreated_by_userInput>
  }

  export type BookAuthorUpdateWithWhereUniqueWithoutCreated_by_userInput = {
    where: BookAuthorWhereUniqueInput
    data: XOR<BookAuthorUpdateWithoutCreated_by_userInput, BookAuthorUncheckedUpdateWithoutCreated_by_userInput>
  }

  export type BookAuthorUpdateManyWithWhereWithoutCreated_by_userInput = {
    where: BookAuthorScalarWhereInput
    data: XOR<BookAuthorUpdateManyMutationInput, BookAuthorUncheckedUpdateManyWithoutCreated_by_userInput>
  }

  export type BookAuthorScalarWhereInput = {
    AND?: BookAuthorScalarWhereInput | BookAuthorScalarWhereInput[]
    OR?: BookAuthorScalarWhereInput[]
    NOT?: BookAuthorScalarWhereInput | BookAuthorScalarWhereInput[]
    id?: BigIntFilter<"BookAuthor"> | bigint | number
    created_at?: DateTimeFilter<"BookAuthor"> | Date | string
    created_by_user_id?: BigIntFilter<"BookAuthor"> | bigint | number
    updated_at?: DateTimeNullableFilter<"BookAuthor"> | Date | string | null
    updated_by_user_id?: BigIntNullableFilter<"BookAuthor"> | bigint | number | null
    status?: EnumStatusEnumFilter<"BookAuthor"> | $Enums.StatusEnum
    author_id?: BigIntFilter<"BookAuthor"> | bigint | number
    book_id?: BigIntFilter<"BookAuthor"> | bigint | number
    description?: StringNullableFilter<"BookAuthor"> | string | null
  }

  export type BookAuthorUpsertWithWhereUniqueWithoutUpdated_by_userInput = {
    where: BookAuthorWhereUniqueInput
    update: XOR<BookAuthorUpdateWithoutUpdated_by_userInput, BookAuthorUncheckedUpdateWithoutUpdated_by_userInput>
    create: XOR<BookAuthorCreateWithoutUpdated_by_userInput, BookAuthorUncheckedCreateWithoutUpdated_by_userInput>
  }

  export type BookAuthorUpdateWithWhereUniqueWithoutUpdated_by_userInput = {
    where: BookAuthorWhereUniqueInput
    data: XOR<BookAuthorUpdateWithoutUpdated_by_userInput, BookAuthorUncheckedUpdateWithoutUpdated_by_userInput>
  }

  export type BookAuthorUpdateManyWithWhereWithoutUpdated_by_userInput = {
    where: BookAuthorScalarWhereInput
    data: XOR<BookAuthorUpdateManyMutationInput, BookAuthorUncheckedUpdateManyWithoutUpdated_by_userInput>
  }

  export type TagUpsertWithWhereUniqueWithoutCreated_by_userInput = {
    where: TagWhereUniqueInput
    update: XOR<TagUpdateWithoutCreated_by_userInput, TagUncheckedUpdateWithoutCreated_by_userInput>
    create: XOR<TagCreateWithoutCreated_by_userInput, TagUncheckedCreateWithoutCreated_by_userInput>
  }

  export type TagUpdateWithWhereUniqueWithoutCreated_by_userInput = {
    where: TagWhereUniqueInput
    data: XOR<TagUpdateWithoutCreated_by_userInput, TagUncheckedUpdateWithoutCreated_by_userInput>
  }

  export type TagUpdateManyWithWhereWithoutCreated_by_userInput = {
    where: TagScalarWhereInput
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyWithoutCreated_by_userInput>
  }

  export type TagScalarWhereInput = {
    AND?: TagScalarWhereInput | TagScalarWhereInput[]
    OR?: TagScalarWhereInput[]
    NOT?: TagScalarWhereInput | TagScalarWhereInput[]
    id?: BigIntFilter<"Tag"> | bigint | number
    slug?: StringFilter<"Tag"> | string
    created_at?: DateTimeFilter<"Tag"> | Date | string
    created_by_user_id?: BigIntFilter<"Tag"> | bigint | number
    updated_at?: DateTimeNullableFilter<"Tag"> | Date | string | null
    updated_by_user_id?: BigIntNullableFilter<"Tag"> | bigint | number | null
    name?: StringFilter<"Tag"> | string
    status?: EnumStatusEnumFilter<"Tag"> | $Enums.StatusEnum
    description?: StringNullableFilter<"Tag"> | string | null
  }

  export type TagUpsertWithWhereUniqueWithoutUpdated_by_userInput = {
    where: TagWhereUniqueInput
    update: XOR<TagUpdateWithoutUpdated_by_userInput, TagUncheckedUpdateWithoutUpdated_by_userInput>
    create: XOR<TagCreateWithoutUpdated_by_userInput, TagUncheckedCreateWithoutUpdated_by_userInput>
  }

  export type TagUpdateWithWhereUniqueWithoutUpdated_by_userInput = {
    where: TagWhereUniqueInput
    data: XOR<TagUpdateWithoutUpdated_by_userInput, TagUncheckedUpdateWithoutUpdated_by_userInput>
  }

  export type TagUpdateManyWithWhereWithoutUpdated_by_userInput = {
    where: TagScalarWhereInput
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyWithoutUpdated_by_userInput>
  }

  export type BookTagUpsertWithWhereUniqueWithoutCreated_by_userInput = {
    where: BookTagWhereUniqueInput
    update: XOR<BookTagUpdateWithoutCreated_by_userInput, BookTagUncheckedUpdateWithoutCreated_by_userInput>
    create: XOR<BookTagCreateWithoutCreated_by_userInput, BookTagUncheckedCreateWithoutCreated_by_userInput>
  }

  export type BookTagUpdateWithWhereUniqueWithoutCreated_by_userInput = {
    where: BookTagWhereUniqueInput
    data: XOR<BookTagUpdateWithoutCreated_by_userInput, BookTagUncheckedUpdateWithoutCreated_by_userInput>
  }

  export type BookTagUpdateManyWithWhereWithoutCreated_by_userInput = {
    where: BookTagScalarWhereInput
    data: XOR<BookTagUpdateManyMutationInput, BookTagUncheckedUpdateManyWithoutCreated_by_userInput>
  }

  export type BookTagScalarWhereInput = {
    AND?: BookTagScalarWhereInput | BookTagScalarWhereInput[]
    OR?: BookTagScalarWhereInput[]
    NOT?: BookTagScalarWhereInput | BookTagScalarWhereInput[]
    id?: BigIntFilter<"BookTag"> | bigint | number
    created_at?: DateTimeFilter<"BookTag"> | Date | string
    created_by_user_id?: BigIntFilter<"BookTag"> | bigint | number
    updated_at?: DateTimeNullableFilter<"BookTag"> | Date | string | null
    updated_by_user_id?: BigIntNullableFilter<"BookTag"> | bigint | number | null
    status?: EnumStatusEnumFilter<"BookTag"> | $Enums.StatusEnum
    tag_id?: BigIntFilter<"BookTag"> | bigint | number
    book_id?: BigIntFilter<"BookTag"> | bigint | number
  }

  export type BookTagUpsertWithWhereUniqueWithoutUpdated_by_userInput = {
    where: BookTagWhereUniqueInput
    update: XOR<BookTagUpdateWithoutUpdated_by_userInput, BookTagUncheckedUpdateWithoutUpdated_by_userInput>
    create: XOR<BookTagCreateWithoutUpdated_by_userInput, BookTagUncheckedCreateWithoutUpdated_by_userInput>
  }

  export type BookTagUpdateWithWhereUniqueWithoutUpdated_by_userInput = {
    where: BookTagWhereUniqueInput
    data: XOR<BookTagUpdateWithoutUpdated_by_userInput, BookTagUncheckedUpdateWithoutUpdated_by_userInput>
  }

  export type BookTagUpdateManyWithWhereWithoutUpdated_by_userInput = {
    where: BookTagScalarWhereInput
    data: XOR<BookTagUpdateManyMutationInput, BookTagUncheckedUpdateManyWithoutUpdated_by_userInput>
  }

  export type LoanUpsertWithWhereUniqueWithoutCreated_by_userInput = {
    where: LoanWhereUniqueInput
    update: XOR<LoanUpdateWithoutCreated_by_userInput, LoanUncheckedUpdateWithoutCreated_by_userInput>
    create: XOR<LoanCreateWithoutCreated_by_userInput, LoanUncheckedCreateWithoutCreated_by_userInput>
  }

  export type LoanUpdateWithWhereUniqueWithoutCreated_by_userInput = {
    where: LoanWhereUniqueInput
    data: XOR<LoanUpdateWithoutCreated_by_userInput, LoanUncheckedUpdateWithoutCreated_by_userInput>
  }

  export type LoanUpdateManyWithWhereWithoutCreated_by_userInput = {
    where: LoanScalarWhereInput
    data: XOR<LoanUpdateManyMutationInput, LoanUncheckedUpdateManyWithoutCreated_by_userInput>
  }

  export type LoanScalarWhereInput = {
    AND?: LoanScalarWhereInput | LoanScalarWhereInput[]
    OR?: LoanScalarWhereInput[]
    NOT?: LoanScalarWhereInput | LoanScalarWhereInput[]
    id?: BigIntFilter<"Loan"> | bigint | number
    slug?: StringFilter<"Loan"> | string
    created_at?: DateTimeFilter<"Loan"> | Date | string
    created_by_user_id?: BigIntFilter<"Loan"> | bigint | number
    updated_at?: DateTimeNullableFilter<"Loan"> | Date | string | null
    updated_by_user_id?: BigIntNullableFilter<"Loan"> | bigint | number | null
    status?: EnumStatusEnumFilter<"Loan"> | $Enums.StatusEnum
    loan_date?: DateTimeFilter<"Loan"> | Date | string
    due_date?: DateTimeFilter<"Loan"> | Date | string
    return_date?: DateTimeNullableFilter<"Loan"> | Date | string | null
    book_id?: BigIntFilter<"Loan"> | bigint | number
    user_id?: BigIntFilter<"Loan"> | bigint | number
  }

  export type LoanUpsertWithWhereUniqueWithoutUpdated_by_userInput = {
    where: LoanWhereUniqueInput
    update: XOR<LoanUpdateWithoutUpdated_by_userInput, LoanUncheckedUpdateWithoutUpdated_by_userInput>
    create: XOR<LoanCreateWithoutUpdated_by_userInput, LoanUncheckedCreateWithoutUpdated_by_userInput>
  }

  export type LoanUpdateWithWhereUniqueWithoutUpdated_by_userInput = {
    where: LoanWhereUniqueInput
    data: XOR<LoanUpdateWithoutUpdated_by_userInput, LoanUncheckedUpdateWithoutUpdated_by_userInput>
  }

  export type LoanUpdateManyWithWhereWithoutUpdated_by_userInput = {
    where: LoanScalarWhereInput
    data: XOR<LoanUpdateManyMutationInput, LoanUncheckedUpdateManyWithoutUpdated_by_userInput>
  }

  export type LoanUpsertWithWhereUniqueWithoutUserInput = {
    where: LoanWhereUniqueInput
    update: XOR<LoanUpdateWithoutUserInput, LoanUncheckedUpdateWithoutUserInput>
    create: XOR<LoanCreateWithoutUserInput, LoanUncheckedCreateWithoutUserInput>
  }

  export type LoanUpdateWithWhereUniqueWithoutUserInput = {
    where: LoanWhereUniqueInput
    data: XOR<LoanUpdateWithoutUserInput, LoanUncheckedUpdateWithoutUserInput>
  }

  export type LoanUpdateManyWithWhereWithoutUserInput = {
    where: LoanScalarWhereInput
    data: XOR<LoanUpdateManyMutationInput, LoanUncheckedUpdateManyWithoutUserInput>
  }

  export type UserCreateWithoutAuth_tokensInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    name: string
    display_name: string
    sex?: $Enums.SexEnum | null
    login: string
    status?: $Enums.StatusEnum
    password: string
    email: string
    role: $Enums.UserRole
    created_authors?: AuthorCreateNestedManyWithoutCreated_by_userInput
    updated_authors?: AuthorCreateNestedManyWithoutUpdated_by_userInput
    created_books?: BookCreateNestedManyWithoutCreated_by_userInput
    updated_books?: BookCreateNestedManyWithoutUpdated_by_userInput
    created_book_authors?: BookAuthorCreateNestedManyWithoutCreated_by_userInput
    updated_book_authors?: BookAuthorCreateNestedManyWithoutUpdated_by_userInput
    created_tags?: TagCreateNestedManyWithoutCreated_by_userInput
    updated_tags?: TagCreateNestedManyWithoutUpdated_by_userInput
    created_book_tags?: BookTagCreateNestedManyWithoutCreated_by_userInput
    updated_book_tags?: BookTagCreateNestedManyWithoutUpdated_by_userInput
    created_loans?: LoanCreateNestedManyWithoutCreated_by_userInput
    updated_loans?: LoanCreateNestedManyWithoutUpdated_by_userInput
    user_loans?: LoanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAuth_tokensInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    name: string
    display_name: string
    sex?: $Enums.SexEnum | null
    login: string
    status?: $Enums.StatusEnum
    password: string
    email: string
    role: $Enums.UserRole
    created_authors?: AuthorUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_authors?: AuthorUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_books?: BookUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_books?: BookUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_book_authors?: BookAuthorUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_book_authors?: BookAuthorUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_tags?: TagUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_tags?: TagUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_book_tags?: BookTagUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_book_tags?: BookTagUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_loans?: LoanUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_loans?: LoanUncheckedCreateNestedManyWithoutUpdated_by_userInput
    user_loans?: LoanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAuth_tokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuth_tokensInput, UserUncheckedCreateWithoutAuth_tokensInput>
  }

  export type UserUpsertWithoutAuth_tokensInput = {
    update: XOR<UserUpdateWithoutAuth_tokensInput, UserUncheckedUpdateWithoutAuth_tokensInput>
    create: XOR<UserCreateWithoutAuth_tokensInput, UserUncheckedCreateWithoutAuth_tokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuth_tokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuth_tokensInput, UserUncheckedUpdateWithoutAuth_tokensInput>
  }

  export type UserUpdateWithoutAuth_tokensInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    sex?: NullableEnumSexEnumFieldUpdateOperationsInput | $Enums.SexEnum | null
    login?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    created_authors?: AuthorUpdateManyWithoutCreated_by_userNestedInput
    updated_authors?: AuthorUpdateManyWithoutUpdated_by_userNestedInput
    created_books?: BookUpdateManyWithoutCreated_by_userNestedInput
    updated_books?: BookUpdateManyWithoutUpdated_by_userNestedInput
    created_book_authors?: BookAuthorUpdateManyWithoutCreated_by_userNestedInput
    updated_book_authors?: BookAuthorUpdateManyWithoutUpdated_by_userNestedInput
    created_tags?: TagUpdateManyWithoutCreated_by_userNestedInput
    updated_tags?: TagUpdateManyWithoutUpdated_by_userNestedInput
    created_book_tags?: BookTagUpdateManyWithoutCreated_by_userNestedInput
    updated_book_tags?: BookTagUpdateManyWithoutUpdated_by_userNestedInput
    created_loans?: LoanUpdateManyWithoutCreated_by_userNestedInput
    updated_loans?: LoanUpdateManyWithoutUpdated_by_userNestedInput
    user_loans?: LoanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAuth_tokensInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    sex?: NullableEnumSexEnumFieldUpdateOperationsInput | $Enums.SexEnum | null
    login?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    created_authors?: AuthorUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_authors?: AuthorUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_books?: BookUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_books?: BookUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_book_authors?: BookAuthorUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_book_authors?: BookAuthorUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_tags?: TagUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_tags?: TagUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_book_tags?: BookTagUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_book_tags?: BookTagUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_loans?: LoanUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_loans?: LoanUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    user_loans?: LoanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutCreated_authorsInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    name: string
    display_name: string
    sex?: $Enums.SexEnum | null
    login: string
    status?: $Enums.StatusEnum
    password: string
    email: string
    role: $Enums.UserRole
    auth_tokens?: UserAuthTokenCreateNestedManyWithoutUserInput
    updated_authors?: AuthorCreateNestedManyWithoutUpdated_by_userInput
    created_books?: BookCreateNestedManyWithoutCreated_by_userInput
    updated_books?: BookCreateNestedManyWithoutUpdated_by_userInput
    created_book_authors?: BookAuthorCreateNestedManyWithoutCreated_by_userInput
    updated_book_authors?: BookAuthorCreateNestedManyWithoutUpdated_by_userInput
    created_tags?: TagCreateNestedManyWithoutCreated_by_userInput
    updated_tags?: TagCreateNestedManyWithoutUpdated_by_userInput
    created_book_tags?: BookTagCreateNestedManyWithoutCreated_by_userInput
    updated_book_tags?: BookTagCreateNestedManyWithoutUpdated_by_userInput
    created_loans?: LoanCreateNestedManyWithoutCreated_by_userInput
    updated_loans?: LoanCreateNestedManyWithoutUpdated_by_userInput
    user_loans?: LoanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreated_authorsInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    name: string
    display_name: string
    sex?: $Enums.SexEnum | null
    login: string
    status?: $Enums.StatusEnum
    password: string
    email: string
    role: $Enums.UserRole
    auth_tokens?: UserAuthTokenUncheckedCreateNestedManyWithoutUserInput
    updated_authors?: AuthorUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_books?: BookUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_books?: BookUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_book_authors?: BookAuthorUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_book_authors?: BookAuthorUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_tags?: TagUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_tags?: TagUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_book_tags?: BookTagUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_book_tags?: BookTagUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_loans?: LoanUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_loans?: LoanUncheckedCreateNestedManyWithoutUpdated_by_userInput
    user_loans?: LoanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreated_authorsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreated_authorsInput, UserUncheckedCreateWithoutCreated_authorsInput>
  }

  export type UserCreateWithoutUpdated_authorsInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    name: string
    display_name: string
    sex?: $Enums.SexEnum | null
    login: string
    status?: $Enums.StatusEnum
    password: string
    email: string
    role: $Enums.UserRole
    auth_tokens?: UserAuthTokenCreateNestedManyWithoutUserInput
    created_authors?: AuthorCreateNestedManyWithoutCreated_by_userInput
    created_books?: BookCreateNestedManyWithoutCreated_by_userInput
    updated_books?: BookCreateNestedManyWithoutUpdated_by_userInput
    created_book_authors?: BookAuthorCreateNestedManyWithoutCreated_by_userInput
    updated_book_authors?: BookAuthorCreateNestedManyWithoutUpdated_by_userInput
    created_tags?: TagCreateNestedManyWithoutCreated_by_userInput
    updated_tags?: TagCreateNestedManyWithoutUpdated_by_userInput
    created_book_tags?: BookTagCreateNestedManyWithoutCreated_by_userInput
    updated_book_tags?: BookTagCreateNestedManyWithoutUpdated_by_userInput
    created_loans?: LoanCreateNestedManyWithoutCreated_by_userInput
    updated_loans?: LoanCreateNestedManyWithoutUpdated_by_userInput
    user_loans?: LoanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUpdated_authorsInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    name: string
    display_name: string
    sex?: $Enums.SexEnum | null
    login: string
    status?: $Enums.StatusEnum
    password: string
    email: string
    role: $Enums.UserRole
    auth_tokens?: UserAuthTokenUncheckedCreateNestedManyWithoutUserInput
    created_authors?: AuthorUncheckedCreateNestedManyWithoutCreated_by_userInput
    created_books?: BookUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_books?: BookUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_book_authors?: BookAuthorUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_book_authors?: BookAuthorUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_tags?: TagUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_tags?: TagUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_book_tags?: BookTagUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_book_tags?: BookTagUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_loans?: LoanUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_loans?: LoanUncheckedCreateNestedManyWithoutUpdated_by_userInput
    user_loans?: LoanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUpdated_authorsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUpdated_authorsInput, UserUncheckedCreateWithoutUpdated_authorsInput>
  }

  export type BookAuthorCreateWithoutAuthorInput = {
    id?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string | null
    status?: $Enums.StatusEnum
    description?: string | null
    created_by_user: UserCreateNestedOneWithoutCreated_book_authorsInput
    updated_by_user?: UserCreateNestedOneWithoutUpdated_book_authorsInput
    book: BookCreateNestedOneWithoutAuthorsInput
  }

  export type BookAuthorUncheckedCreateWithoutAuthorInput = {
    id?: bigint | number
    created_at?: Date | string
    created_by_user_id: bigint | number
    updated_at?: Date | string | null
    updated_by_user_id?: bigint | number | null
    status?: $Enums.StatusEnum
    book_id: bigint | number
    description?: string | null
  }

  export type BookAuthorCreateOrConnectWithoutAuthorInput = {
    where: BookAuthorWhereUniqueInput
    create: XOR<BookAuthorCreateWithoutAuthorInput, BookAuthorUncheckedCreateWithoutAuthorInput>
  }

  export type BookAuthorCreateManyAuthorInputEnvelope = {
    data: BookAuthorCreateManyAuthorInput | BookAuthorCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCreated_authorsInput = {
    update: XOR<UserUpdateWithoutCreated_authorsInput, UserUncheckedUpdateWithoutCreated_authorsInput>
    create: XOR<UserCreateWithoutCreated_authorsInput, UserUncheckedCreateWithoutCreated_authorsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreated_authorsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreated_authorsInput, UserUncheckedUpdateWithoutCreated_authorsInput>
  }

  export type UserUpdateWithoutCreated_authorsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    sex?: NullableEnumSexEnumFieldUpdateOperationsInput | $Enums.SexEnum | null
    login?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    auth_tokens?: UserAuthTokenUpdateManyWithoutUserNestedInput
    updated_authors?: AuthorUpdateManyWithoutUpdated_by_userNestedInput
    created_books?: BookUpdateManyWithoutCreated_by_userNestedInput
    updated_books?: BookUpdateManyWithoutUpdated_by_userNestedInput
    created_book_authors?: BookAuthorUpdateManyWithoutCreated_by_userNestedInput
    updated_book_authors?: BookAuthorUpdateManyWithoutUpdated_by_userNestedInput
    created_tags?: TagUpdateManyWithoutCreated_by_userNestedInput
    updated_tags?: TagUpdateManyWithoutUpdated_by_userNestedInput
    created_book_tags?: BookTagUpdateManyWithoutCreated_by_userNestedInput
    updated_book_tags?: BookTagUpdateManyWithoutUpdated_by_userNestedInput
    created_loans?: LoanUpdateManyWithoutCreated_by_userNestedInput
    updated_loans?: LoanUpdateManyWithoutUpdated_by_userNestedInput
    user_loans?: LoanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreated_authorsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    sex?: NullableEnumSexEnumFieldUpdateOperationsInput | $Enums.SexEnum | null
    login?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    auth_tokens?: UserAuthTokenUncheckedUpdateManyWithoutUserNestedInput
    updated_authors?: AuthorUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_books?: BookUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_books?: BookUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_book_authors?: BookAuthorUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_book_authors?: BookAuthorUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_tags?: TagUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_tags?: TagUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_book_tags?: BookTagUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_book_tags?: BookTagUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_loans?: LoanUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_loans?: LoanUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    user_loans?: LoanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutUpdated_authorsInput = {
    update: XOR<UserUpdateWithoutUpdated_authorsInput, UserUncheckedUpdateWithoutUpdated_authorsInput>
    create: XOR<UserCreateWithoutUpdated_authorsInput, UserUncheckedCreateWithoutUpdated_authorsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUpdated_authorsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUpdated_authorsInput, UserUncheckedUpdateWithoutUpdated_authorsInput>
  }

  export type UserUpdateWithoutUpdated_authorsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    sex?: NullableEnumSexEnumFieldUpdateOperationsInput | $Enums.SexEnum | null
    login?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    auth_tokens?: UserAuthTokenUpdateManyWithoutUserNestedInput
    created_authors?: AuthorUpdateManyWithoutCreated_by_userNestedInput
    created_books?: BookUpdateManyWithoutCreated_by_userNestedInput
    updated_books?: BookUpdateManyWithoutUpdated_by_userNestedInput
    created_book_authors?: BookAuthorUpdateManyWithoutCreated_by_userNestedInput
    updated_book_authors?: BookAuthorUpdateManyWithoutUpdated_by_userNestedInput
    created_tags?: TagUpdateManyWithoutCreated_by_userNestedInput
    updated_tags?: TagUpdateManyWithoutUpdated_by_userNestedInput
    created_book_tags?: BookTagUpdateManyWithoutCreated_by_userNestedInput
    updated_book_tags?: BookTagUpdateManyWithoutUpdated_by_userNestedInput
    created_loans?: LoanUpdateManyWithoutCreated_by_userNestedInput
    updated_loans?: LoanUpdateManyWithoutUpdated_by_userNestedInput
    user_loans?: LoanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUpdated_authorsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    sex?: NullableEnumSexEnumFieldUpdateOperationsInput | $Enums.SexEnum | null
    login?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    auth_tokens?: UserAuthTokenUncheckedUpdateManyWithoutUserNestedInput
    created_authors?: AuthorUncheckedUpdateManyWithoutCreated_by_userNestedInput
    created_books?: BookUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_books?: BookUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_book_authors?: BookAuthorUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_book_authors?: BookAuthorUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_tags?: TagUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_tags?: TagUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_book_tags?: BookTagUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_book_tags?: BookTagUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_loans?: LoanUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_loans?: LoanUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    user_loans?: LoanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BookAuthorUpsertWithWhereUniqueWithoutAuthorInput = {
    where: BookAuthorWhereUniqueInput
    update: XOR<BookAuthorUpdateWithoutAuthorInput, BookAuthorUncheckedUpdateWithoutAuthorInput>
    create: XOR<BookAuthorCreateWithoutAuthorInput, BookAuthorUncheckedCreateWithoutAuthorInput>
  }

  export type BookAuthorUpdateWithWhereUniqueWithoutAuthorInput = {
    where: BookAuthorWhereUniqueInput
    data: XOR<BookAuthorUpdateWithoutAuthorInput, BookAuthorUncheckedUpdateWithoutAuthorInput>
  }

  export type BookAuthorUpdateManyWithWhereWithoutAuthorInput = {
    where: BookAuthorScalarWhereInput
    data: XOR<BookAuthorUpdateManyMutationInput, BookAuthorUncheckedUpdateManyWithoutAuthorInput>
  }

  export type UserCreateWithoutCreated_book_authorsInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    name: string
    display_name: string
    sex?: $Enums.SexEnum | null
    login: string
    status?: $Enums.StatusEnum
    password: string
    email: string
    role: $Enums.UserRole
    auth_tokens?: UserAuthTokenCreateNestedManyWithoutUserInput
    created_authors?: AuthorCreateNestedManyWithoutCreated_by_userInput
    updated_authors?: AuthorCreateNestedManyWithoutUpdated_by_userInput
    created_books?: BookCreateNestedManyWithoutCreated_by_userInput
    updated_books?: BookCreateNestedManyWithoutUpdated_by_userInput
    updated_book_authors?: BookAuthorCreateNestedManyWithoutUpdated_by_userInput
    created_tags?: TagCreateNestedManyWithoutCreated_by_userInput
    updated_tags?: TagCreateNestedManyWithoutUpdated_by_userInput
    created_book_tags?: BookTagCreateNestedManyWithoutCreated_by_userInput
    updated_book_tags?: BookTagCreateNestedManyWithoutUpdated_by_userInput
    created_loans?: LoanCreateNestedManyWithoutCreated_by_userInput
    updated_loans?: LoanCreateNestedManyWithoutUpdated_by_userInput
    user_loans?: LoanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreated_book_authorsInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    name: string
    display_name: string
    sex?: $Enums.SexEnum | null
    login: string
    status?: $Enums.StatusEnum
    password: string
    email: string
    role: $Enums.UserRole
    auth_tokens?: UserAuthTokenUncheckedCreateNestedManyWithoutUserInput
    created_authors?: AuthorUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_authors?: AuthorUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_books?: BookUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_books?: BookUncheckedCreateNestedManyWithoutUpdated_by_userInput
    updated_book_authors?: BookAuthorUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_tags?: TagUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_tags?: TagUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_book_tags?: BookTagUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_book_tags?: BookTagUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_loans?: LoanUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_loans?: LoanUncheckedCreateNestedManyWithoutUpdated_by_userInput
    user_loans?: LoanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreated_book_authorsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreated_book_authorsInput, UserUncheckedCreateWithoutCreated_book_authorsInput>
  }

  export type UserCreateWithoutUpdated_book_authorsInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    name: string
    display_name: string
    sex?: $Enums.SexEnum | null
    login: string
    status?: $Enums.StatusEnum
    password: string
    email: string
    role: $Enums.UserRole
    auth_tokens?: UserAuthTokenCreateNestedManyWithoutUserInput
    created_authors?: AuthorCreateNestedManyWithoutCreated_by_userInput
    updated_authors?: AuthorCreateNestedManyWithoutUpdated_by_userInput
    created_books?: BookCreateNestedManyWithoutCreated_by_userInput
    updated_books?: BookCreateNestedManyWithoutUpdated_by_userInput
    created_book_authors?: BookAuthorCreateNestedManyWithoutCreated_by_userInput
    created_tags?: TagCreateNestedManyWithoutCreated_by_userInput
    updated_tags?: TagCreateNestedManyWithoutUpdated_by_userInput
    created_book_tags?: BookTagCreateNestedManyWithoutCreated_by_userInput
    updated_book_tags?: BookTagCreateNestedManyWithoutUpdated_by_userInput
    created_loans?: LoanCreateNestedManyWithoutCreated_by_userInput
    updated_loans?: LoanCreateNestedManyWithoutUpdated_by_userInput
    user_loans?: LoanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUpdated_book_authorsInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    name: string
    display_name: string
    sex?: $Enums.SexEnum | null
    login: string
    status?: $Enums.StatusEnum
    password: string
    email: string
    role: $Enums.UserRole
    auth_tokens?: UserAuthTokenUncheckedCreateNestedManyWithoutUserInput
    created_authors?: AuthorUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_authors?: AuthorUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_books?: BookUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_books?: BookUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_book_authors?: BookAuthorUncheckedCreateNestedManyWithoutCreated_by_userInput
    created_tags?: TagUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_tags?: TagUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_book_tags?: BookTagUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_book_tags?: BookTagUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_loans?: LoanUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_loans?: LoanUncheckedCreateNestedManyWithoutUpdated_by_userInput
    user_loans?: LoanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUpdated_book_authorsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUpdated_book_authorsInput, UserUncheckedCreateWithoutUpdated_book_authorsInput>
  }

  export type AuthorCreateWithoutBooksInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    name: string
    status?: $Enums.StatusEnum
    description?: string | null
    avatar_url?: string | null
    is_spirit?: boolean
    created_by_user: UserCreateNestedOneWithoutCreated_authorsInput
    updated_by_user?: UserCreateNestedOneWithoutUpdated_authorsInput
  }

  export type AuthorUncheckedCreateWithoutBooksInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    created_by_user_id: bigint | number
    updated_at?: Date | string | null
    updated_by_user_id?: bigint | number | null
    name: string
    status?: $Enums.StatusEnum
    description?: string | null
    avatar_url?: string | null
    is_spirit?: boolean
  }

  export type AuthorCreateOrConnectWithoutBooksInput = {
    where: AuthorWhereUniqueInput
    create: XOR<AuthorCreateWithoutBooksInput, AuthorUncheckedCreateWithoutBooksInput>
  }

  export type BookCreateWithoutAuthorsInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    title: string
    subtitle?: string | null
    publisher?: string | null
    year?: number | null
    edition?: string | null
    isbn?: string | null
    pages?: number | null
    summary?: string | null
    pdf_url?: string | null
    cover_url?: string | null
    images_url?: BookCreateimages_urlInput | string[]
    keywords?: BookCreatekeywordsInput | string[]
    label?: string | null
    shelf?: string | null
    status?: $Enums.StatusEnum
    description?: string | null
    created_by_user: UserCreateNestedOneWithoutCreated_booksInput
    updated_by_user?: UserCreateNestedOneWithoutUpdated_booksInput
    tags?: BookTagCreateNestedManyWithoutBookInput
    loans?: LoanCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutAuthorsInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    created_by_user_id: bigint | number
    updated_at?: Date | string | null
    updated_by_user_id?: bigint | number | null
    title: string
    subtitle?: string | null
    publisher?: string | null
    year?: number | null
    edition?: string | null
    isbn?: string | null
    pages?: number | null
    summary?: string | null
    pdf_url?: string | null
    cover_url?: string | null
    images_url?: BookCreateimages_urlInput | string[]
    keywords?: BookCreatekeywordsInput | string[]
    label?: string | null
    shelf?: string | null
    status?: $Enums.StatusEnum
    description?: string | null
    tags?: BookTagUncheckedCreateNestedManyWithoutBookInput
    loans?: LoanUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutAuthorsInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutAuthorsInput, BookUncheckedCreateWithoutAuthorsInput>
  }

  export type UserUpsertWithoutCreated_book_authorsInput = {
    update: XOR<UserUpdateWithoutCreated_book_authorsInput, UserUncheckedUpdateWithoutCreated_book_authorsInput>
    create: XOR<UserCreateWithoutCreated_book_authorsInput, UserUncheckedCreateWithoutCreated_book_authorsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreated_book_authorsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreated_book_authorsInput, UserUncheckedUpdateWithoutCreated_book_authorsInput>
  }

  export type UserUpdateWithoutCreated_book_authorsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    sex?: NullableEnumSexEnumFieldUpdateOperationsInput | $Enums.SexEnum | null
    login?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    auth_tokens?: UserAuthTokenUpdateManyWithoutUserNestedInput
    created_authors?: AuthorUpdateManyWithoutCreated_by_userNestedInput
    updated_authors?: AuthorUpdateManyWithoutUpdated_by_userNestedInput
    created_books?: BookUpdateManyWithoutCreated_by_userNestedInput
    updated_books?: BookUpdateManyWithoutUpdated_by_userNestedInput
    updated_book_authors?: BookAuthorUpdateManyWithoutUpdated_by_userNestedInput
    created_tags?: TagUpdateManyWithoutCreated_by_userNestedInput
    updated_tags?: TagUpdateManyWithoutUpdated_by_userNestedInput
    created_book_tags?: BookTagUpdateManyWithoutCreated_by_userNestedInput
    updated_book_tags?: BookTagUpdateManyWithoutUpdated_by_userNestedInput
    created_loans?: LoanUpdateManyWithoutCreated_by_userNestedInput
    updated_loans?: LoanUpdateManyWithoutUpdated_by_userNestedInput
    user_loans?: LoanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreated_book_authorsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    sex?: NullableEnumSexEnumFieldUpdateOperationsInput | $Enums.SexEnum | null
    login?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    auth_tokens?: UserAuthTokenUncheckedUpdateManyWithoutUserNestedInput
    created_authors?: AuthorUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_authors?: AuthorUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_books?: BookUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_books?: BookUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    updated_book_authors?: BookAuthorUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_tags?: TagUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_tags?: TagUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_book_tags?: BookTagUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_book_tags?: BookTagUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_loans?: LoanUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_loans?: LoanUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    user_loans?: LoanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutUpdated_book_authorsInput = {
    update: XOR<UserUpdateWithoutUpdated_book_authorsInput, UserUncheckedUpdateWithoutUpdated_book_authorsInput>
    create: XOR<UserCreateWithoutUpdated_book_authorsInput, UserUncheckedCreateWithoutUpdated_book_authorsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUpdated_book_authorsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUpdated_book_authorsInput, UserUncheckedUpdateWithoutUpdated_book_authorsInput>
  }

  export type UserUpdateWithoutUpdated_book_authorsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    sex?: NullableEnumSexEnumFieldUpdateOperationsInput | $Enums.SexEnum | null
    login?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    auth_tokens?: UserAuthTokenUpdateManyWithoutUserNestedInput
    created_authors?: AuthorUpdateManyWithoutCreated_by_userNestedInput
    updated_authors?: AuthorUpdateManyWithoutUpdated_by_userNestedInput
    created_books?: BookUpdateManyWithoutCreated_by_userNestedInput
    updated_books?: BookUpdateManyWithoutUpdated_by_userNestedInput
    created_book_authors?: BookAuthorUpdateManyWithoutCreated_by_userNestedInput
    created_tags?: TagUpdateManyWithoutCreated_by_userNestedInput
    updated_tags?: TagUpdateManyWithoutUpdated_by_userNestedInput
    created_book_tags?: BookTagUpdateManyWithoutCreated_by_userNestedInput
    updated_book_tags?: BookTagUpdateManyWithoutUpdated_by_userNestedInput
    created_loans?: LoanUpdateManyWithoutCreated_by_userNestedInput
    updated_loans?: LoanUpdateManyWithoutUpdated_by_userNestedInput
    user_loans?: LoanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUpdated_book_authorsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    sex?: NullableEnumSexEnumFieldUpdateOperationsInput | $Enums.SexEnum | null
    login?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    auth_tokens?: UserAuthTokenUncheckedUpdateManyWithoutUserNestedInput
    created_authors?: AuthorUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_authors?: AuthorUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_books?: BookUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_books?: BookUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_book_authors?: BookAuthorUncheckedUpdateManyWithoutCreated_by_userNestedInput
    created_tags?: TagUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_tags?: TagUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_book_tags?: BookTagUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_book_tags?: BookTagUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_loans?: LoanUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_loans?: LoanUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    user_loans?: LoanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AuthorUpsertWithoutBooksInput = {
    update: XOR<AuthorUpdateWithoutBooksInput, AuthorUncheckedUpdateWithoutBooksInput>
    create: XOR<AuthorCreateWithoutBooksInput, AuthorUncheckedCreateWithoutBooksInput>
    where?: AuthorWhereInput
  }

  export type AuthorUpdateToOneWithWhereWithoutBooksInput = {
    where?: AuthorWhereInput
    data: XOR<AuthorUpdateWithoutBooksInput, AuthorUncheckedUpdateWithoutBooksInput>
  }

  export type AuthorUpdateWithoutBooksInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_spirit?: BoolFieldUpdateOperationsInput | boolean
    created_by_user?: UserUpdateOneRequiredWithoutCreated_authorsNestedInput
    updated_by_user?: UserUpdateOneWithoutUpdated_authorsNestedInput
  }

  export type AuthorUncheckedUpdateWithoutBooksInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_spirit?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BookUpsertWithoutAuthorsInput = {
    update: XOR<BookUpdateWithoutAuthorsInput, BookUncheckedUpdateWithoutAuthorsInput>
    create: XOR<BookCreateWithoutAuthorsInput, BookUncheckedCreateWithoutAuthorsInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutAuthorsInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutAuthorsInput, BookUncheckedUpdateWithoutAuthorsInput>
  }

  export type BookUpdateWithoutAuthorsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    edition?: NullableStringFieldUpdateOperationsInput | string | null
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    pages?: NullableIntFieldUpdateOperationsInput | number | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
    cover_url?: NullableStringFieldUpdateOperationsInput | string | null
    images_url?: BookUpdateimages_urlInput | string[]
    keywords?: BookUpdatekeywordsInput | string[]
    label?: NullableStringFieldUpdateOperationsInput | string | null
    shelf?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_by_user?: UserUpdateOneRequiredWithoutCreated_booksNestedInput
    updated_by_user?: UserUpdateOneWithoutUpdated_booksNestedInput
    tags?: BookTagUpdateManyWithoutBookNestedInput
    loans?: LoanUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutAuthorsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    edition?: NullableStringFieldUpdateOperationsInput | string | null
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    pages?: NullableIntFieldUpdateOperationsInput | number | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
    cover_url?: NullableStringFieldUpdateOperationsInput | string | null
    images_url?: BookUpdateimages_urlInput | string[]
    keywords?: BookUpdatekeywordsInput | string[]
    label?: NullableStringFieldUpdateOperationsInput | string | null
    shelf?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: BookTagUncheckedUpdateManyWithoutBookNestedInput
    loans?: LoanUncheckedUpdateManyWithoutBookNestedInput
  }

  export type UserCreateWithoutCreated_tagsInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    name: string
    display_name: string
    sex?: $Enums.SexEnum | null
    login: string
    status?: $Enums.StatusEnum
    password: string
    email: string
    role: $Enums.UserRole
    auth_tokens?: UserAuthTokenCreateNestedManyWithoutUserInput
    created_authors?: AuthorCreateNestedManyWithoutCreated_by_userInput
    updated_authors?: AuthorCreateNestedManyWithoutUpdated_by_userInput
    created_books?: BookCreateNestedManyWithoutCreated_by_userInput
    updated_books?: BookCreateNestedManyWithoutUpdated_by_userInput
    created_book_authors?: BookAuthorCreateNestedManyWithoutCreated_by_userInput
    updated_book_authors?: BookAuthorCreateNestedManyWithoutUpdated_by_userInput
    updated_tags?: TagCreateNestedManyWithoutUpdated_by_userInput
    created_book_tags?: BookTagCreateNestedManyWithoutCreated_by_userInput
    updated_book_tags?: BookTagCreateNestedManyWithoutUpdated_by_userInput
    created_loans?: LoanCreateNestedManyWithoutCreated_by_userInput
    updated_loans?: LoanCreateNestedManyWithoutUpdated_by_userInput
    user_loans?: LoanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreated_tagsInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    name: string
    display_name: string
    sex?: $Enums.SexEnum | null
    login: string
    status?: $Enums.StatusEnum
    password: string
    email: string
    role: $Enums.UserRole
    auth_tokens?: UserAuthTokenUncheckedCreateNestedManyWithoutUserInput
    created_authors?: AuthorUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_authors?: AuthorUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_books?: BookUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_books?: BookUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_book_authors?: BookAuthorUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_book_authors?: BookAuthorUncheckedCreateNestedManyWithoutUpdated_by_userInput
    updated_tags?: TagUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_book_tags?: BookTagUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_book_tags?: BookTagUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_loans?: LoanUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_loans?: LoanUncheckedCreateNestedManyWithoutUpdated_by_userInput
    user_loans?: LoanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreated_tagsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreated_tagsInput, UserUncheckedCreateWithoutCreated_tagsInput>
  }

  export type UserCreateWithoutUpdated_tagsInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    name: string
    display_name: string
    sex?: $Enums.SexEnum | null
    login: string
    status?: $Enums.StatusEnum
    password: string
    email: string
    role: $Enums.UserRole
    auth_tokens?: UserAuthTokenCreateNestedManyWithoutUserInput
    created_authors?: AuthorCreateNestedManyWithoutCreated_by_userInput
    updated_authors?: AuthorCreateNestedManyWithoutUpdated_by_userInput
    created_books?: BookCreateNestedManyWithoutCreated_by_userInput
    updated_books?: BookCreateNestedManyWithoutUpdated_by_userInput
    created_book_authors?: BookAuthorCreateNestedManyWithoutCreated_by_userInput
    updated_book_authors?: BookAuthorCreateNestedManyWithoutUpdated_by_userInput
    created_tags?: TagCreateNestedManyWithoutCreated_by_userInput
    created_book_tags?: BookTagCreateNestedManyWithoutCreated_by_userInput
    updated_book_tags?: BookTagCreateNestedManyWithoutUpdated_by_userInput
    created_loans?: LoanCreateNestedManyWithoutCreated_by_userInput
    updated_loans?: LoanCreateNestedManyWithoutUpdated_by_userInput
    user_loans?: LoanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUpdated_tagsInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    name: string
    display_name: string
    sex?: $Enums.SexEnum | null
    login: string
    status?: $Enums.StatusEnum
    password: string
    email: string
    role: $Enums.UserRole
    auth_tokens?: UserAuthTokenUncheckedCreateNestedManyWithoutUserInput
    created_authors?: AuthorUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_authors?: AuthorUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_books?: BookUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_books?: BookUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_book_authors?: BookAuthorUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_book_authors?: BookAuthorUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_tags?: TagUncheckedCreateNestedManyWithoutCreated_by_userInput
    created_book_tags?: BookTagUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_book_tags?: BookTagUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_loans?: LoanUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_loans?: LoanUncheckedCreateNestedManyWithoutUpdated_by_userInput
    user_loans?: LoanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUpdated_tagsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUpdated_tagsInput, UserUncheckedCreateWithoutUpdated_tagsInput>
  }

  export type BookTagCreateWithoutTagInput = {
    id?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string | null
    status?: $Enums.StatusEnum
    created_by_user: UserCreateNestedOneWithoutCreated_book_tagsInput
    updated_by_user?: UserCreateNestedOneWithoutUpdated_book_tagsInput
    book: BookCreateNestedOneWithoutTagsInput
  }

  export type BookTagUncheckedCreateWithoutTagInput = {
    id?: bigint | number
    created_at?: Date | string
    created_by_user_id: bigint | number
    updated_at?: Date | string | null
    updated_by_user_id?: bigint | number | null
    status?: $Enums.StatusEnum
    book_id: bigint | number
  }

  export type BookTagCreateOrConnectWithoutTagInput = {
    where: BookTagWhereUniqueInput
    create: XOR<BookTagCreateWithoutTagInput, BookTagUncheckedCreateWithoutTagInput>
  }

  export type BookTagCreateManyTagInputEnvelope = {
    data: BookTagCreateManyTagInput | BookTagCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCreated_tagsInput = {
    update: XOR<UserUpdateWithoutCreated_tagsInput, UserUncheckedUpdateWithoutCreated_tagsInput>
    create: XOR<UserCreateWithoutCreated_tagsInput, UserUncheckedCreateWithoutCreated_tagsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreated_tagsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreated_tagsInput, UserUncheckedUpdateWithoutCreated_tagsInput>
  }

  export type UserUpdateWithoutCreated_tagsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    sex?: NullableEnumSexEnumFieldUpdateOperationsInput | $Enums.SexEnum | null
    login?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    auth_tokens?: UserAuthTokenUpdateManyWithoutUserNestedInput
    created_authors?: AuthorUpdateManyWithoutCreated_by_userNestedInput
    updated_authors?: AuthorUpdateManyWithoutUpdated_by_userNestedInput
    created_books?: BookUpdateManyWithoutCreated_by_userNestedInput
    updated_books?: BookUpdateManyWithoutUpdated_by_userNestedInput
    created_book_authors?: BookAuthorUpdateManyWithoutCreated_by_userNestedInput
    updated_book_authors?: BookAuthorUpdateManyWithoutUpdated_by_userNestedInput
    updated_tags?: TagUpdateManyWithoutUpdated_by_userNestedInput
    created_book_tags?: BookTagUpdateManyWithoutCreated_by_userNestedInput
    updated_book_tags?: BookTagUpdateManyWithoutUpdated_by_userNestedInput
    created_loans?: LoanUpdateManyWithoutCreated_by_userNestedInput
    updated_loans?: LoanUpdateManyWithoutUpdated_by_userNestedInput
    user_loans?: LoanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreated_tagsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    sex?: NullableEnumSexEnumFieldUpdateOperationsInput | $Enums.SexEnum | null
    login?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    auth_tokens?: UserAuthTokenUncheckedUpdateManyWithoutUserNestedInput
    created_authors?: AuthorUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_authors?: AuthorUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_books?: BookUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_books?: BookUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_book_authors?: BookAuthorUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_book_authors?: BookAuthorUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    updated_tags?: TagUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_book_tags?: BookTagUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_book_tags?: BookTagUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_loans?: LoanUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_loans?: LoanUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    user_loans?: LoanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutUpdated_tagsInput = {
    update: XOR<UserUpdateWithoutUpdated_tagsInput, UserUncheckedUpdateWithoutUpdated_tagsInput>
    create: XOR<UserCreateWithoutUpdated_tagsInput, UserUncheckedCreateWithoutUpdated_tagsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUpdated_tagsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUpdated_tagsInput, UserUncheckedUpdateWithoutUpdated_tagsInput>
  }

  export type UserUpdateWithoutUpdated_tagsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    sex?: NullableEnumSexEnumFieldUpdateOperationsInput | $Enums.SexEnum | null
    login?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    auth_tokens?: UserAuthTokenUpdateManyWithoutUserNestedInput
    created_authors?: AuthorUpdateManyWithoutCreated_by_userNestedInput
    updated_authors?: AuthorUpdateManyWithoutUpdated_by_userNestedInput
    created_books?: BookUpdateManyWithoutCreated_by_userNestedInput
    updated_books?: BookUpdateManyWithoutUpdated_by_userNestedInput
    created_book_authors?: BookAuthorUpdateManyWithoutCreated_by_userNestedInput
    updated_book_authors?: BookAuthorUpdateManyWithoutUpdated_by_userNestedInput
    created_tags?: TagUpdateManyWithoutCreated_by_userNestedInput
    created_book_tags?: BookTagUpdateManyWithoutCreated_by_userNestedInput
    updated_book_tags?: BookTagUpdateManyWithoutUpdated_by_userNestedInput
    created_loans?: LoanUpdateManyWithoutCreated_by_userNestedInput
    updated_loans?: LoanUpdateManyWithoutUpdated_by_userNestedInput
    user_loans?: LoanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUpdated_tagsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    sex?: NullableEnumSexEnumFieldUpdateOperationsInput | $Enums.SexEnum | null
    login?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    auth_tokens?: UserAuthTokenUncheckedUpdateManyWithoutUserNestedInput
    created_authors?: AuthorUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_authors?: AuthorUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_books?: BookUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_books?: BookUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_book_authors?: BookAuthorUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_book_authors?: BookAuthorUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_tags?: TagUncheckedUpdateManyWithoutCreated_by_userNestedInput
    created_book_tags?: BookTagUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_book_tags?: BookTagUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_loans?: LoanUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_loans?: LoanUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    user_loans?: LoanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BookTagUpsertWithWhereUniqueWithoutTagInput = {
    where: BookTagWhereUniqueInput
    update: XOR<BookTagUpdateWithoutTagInput, BookTagUncheckedUpdateWithoutTagInput>
    create: XOR<BookTagCreateWithoutTagInput, BookTagUncheckedCreateWithoutTagInput>
  }

  export type BookTagUpdateWithWhereUniqueWithoutTagInput = {
    where: BookTagWhereUniqueInput
    data: XOR<BookTagUpdateWithoutTagInput, BookTagUncheckedUpdateWithoutTagInput>
  }

  export type BookTagUpdateManyWithWhereWithoutTagInput = {
    where: BookTagScalarWhereInput
    data: XOR<BookTagUpdateManyMutationInput, BookTagUncheckedUpdateManyWithoutTagInput>
  }

  export type UserCreateWithoutCreated_book_tagsInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    name: string
    display_name: string
    sex?: $Enums.SexEnum | null
    login: string
    status?: $Enums.StatusEnum
    password: string
    email: string
    role: $Enums.UserRole
    auth_tokens?: UserAuthTokenCreateNestedManyWithoutUserInput
    created_authors?: AuthorCreateNestedManyWithoutCreated_by_userInput
    updated_authors?: AuthorCreateNestedManyWithoutUpdated_by_userInput
    created_books?: BookCreateNestedManyWithoutCreated_by_userInput
    updated_books?: BookCreateNestedManyWithoutUpdated_by_userInput
    created_book_authors?: BookAuthorCreateNestedManyWithoutCreated_by_userInput
    updated_book_authors?: BookAuthorCreateNestedManyWithoutUpdated_by_userInput
    created_tags?: TagCreateNestedManyWithoutCreated_by_userInput
    updated_tags?: TagCreateNestedManyWithoutUpdated_by_userInput
    updated_book_tags?: BookTagCreateNestedManyWithoutUpdated_by_userInput
    created_loans?: LoanCreateNestedManyWithoutCreated_by_userInput
    updated_loans?: LoanCreateNestedManyWithoutUpdated_by_userInput
    user_loans?: LoanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreated_book_tagsInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    name: string
    display_name: string
    sex?: $Enums.SexEnum | null
    login: string
    status?: $Enums.StatusEnum
    password: string
    email: string
    role: $Enums.UserRole
    auth_tokens?: UserAuthTokenUncheckedCreateNestedManyWithoutUserInput
    created_authors?: AuthorUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_authors?: AuthorUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_books?: BookUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_books?: BookUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_book_authors?: BookAuthorUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_book_authors?: BookAuthorUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_tags?: TagUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_tags?: TagUncheckedCreateNestedManyWithoutUpdated_by_userInput
    updated_book_tags?: BookTagUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_loans?: LoanUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_loans?: LoanUncheckedCreateNestedManyWithoutUpdated_by_userInput
    user_loans?: LoanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreated_book_tagsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreated_book_tagsInput, UserUncheckedCreateWithoutCreated_book_tagsInput>
  }

  export type UserCreateWithoutUpdated_book_tagsInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    name: string
    display_name: string
    sex?: $Enums.SexEnum | null
    login: string
    status?: $Enums.StatusEnum
    password: string
    email: string
    role: $Enums.UserRole
    auth_tokens?: UserAuthTokenCreateNestedManyWithoutUserInput
    created_authors?: AuthorCreateNestedManyWithoutCreated_by_userInput
    updated_authors?: AuthorCreateNestedManyWithoutUpdated_by_userInput
    created_books?: BookCreateNestedManyWithoutCreated_by_userInput
    updated_books?: BookCreateNestedManyWithoutUpdated_by_userInput
    created_book_authors?: BookAuthorCreateNestedManyWithoutCreated_by_userInput
    updated_book_authors?: BookAuthorCreateNestedManyWithoutUpdated_by_userInput
    created_tags?: TagCreateNestedManyWithoutCreated_by_userInput
    updated_tags?: TagCreateNestedManyWithoutUpdated_by_userInput
    created_book_tags?: BookTagCreateNestedManyWithoutCreated_by_userInput
    created_loans?: LoanCreateNestedManyWithoutCreated_by_userInput
    updated_loans?: LoanCreateNestedManyWithoutUpdated_by_userInput
    user_loans?: LoanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUpdated_book_tagsInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    name: string
    display_name: string
    sex?: $Enums.SexEnum | null
    login: string
    status?: $Enums.StatusEnum
    password: string
    email: string
    role: $Enums.UserRole
    auth_tokens?: UserAuthTokenUncheckedCreateNestedManyWithoutUserInput
    created_authors?: AuthorUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_authors?: AuthorUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_books?: BookUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_books?: BookUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_book_authors?: BookAuthorUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_book_authors?: BookAuthorUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_tags?: TagUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_tags?: TagUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_book_tags?: BookTagUncheckedCreateNestedManyWithoutCreated_by_userInput
    created_loans?: LoanUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_loans?: LoanUncheckedCreateNestedManyWithoutUpdated_by_userInput
    user_loans?: LoanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUpdated_book_tagsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUpdated_book_tagsInput, UserUncheckedCreateWithoutUpdated_book_tagsInput>
  }

  export type TagCreateWithoutBooksInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    name: string
    status?: $Enums.StatusEnum
    description?: string | null
    created_by_user: UserCreateNestedOneWithoutCreated_tagsInput
    updated_by_user?: UserCreateNestedOneWithoutUpdated_tagsInput
  }

  export type TagUncheckedCreateWithoutBooksInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    created_by_user_id: bigint | number
    updated_at?: Date | string | null
    updated_by_user_id?: bigint | number | null
    name: string
    status?: $Enums.StatusEnum
    description?: string | null
  }

  export type TagCreateOrConnectWithoutBooksInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutBooksInput, TagUncheckedCreateWithoutBooksInput>
  }

  export type BookCreateWithoutTagsInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    title: string
    subtitle?: string | null
    publisher?: string | null
    year?: number | null
    edition?: string | null
    isbn?: string | null
    pages?: number | null
    summary?: string | null
    pdf_url?: string | null
    cover_url?: string | null
    images_url?: BookCreateimages_urlInput | string[]
    keywords?: BookCreatekeywordsInput | string[]
    label?: string | null
    shelf?: string | null
    status?: $Enums.StatusEnum
    description?: string | null
    created_by_user: UserCreateNestedOneWithoutCreated_booksInput
    updated_by_user?: UserCreateNestedOneWithoutUpdated_booksInput
    authors?: BookAuthorCreateNestedManyWithoutBookInput
    loans?: LoanCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutTagsInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    created_by_user_id: bigint | number
    updated_at?: Date | string | null
    updated_by_user_id?: bigint | number | null
    title: string
    subtitle?: string | null
    publisher?: string | null
    year?: number | null
    edition?: string | null
    isbn?: string | null
    pages?: number | null
    summary?: string | null
    pdf_url?: string | null
    cover_url?: string | null
    images_url?: BookCreateimages_urlInput | string[]
    keywords?: BookCreatekeywordsInput | string[]
    label?: string | null
    shelf?: string | null
    status?: $Enums.StatusEnum
    description?: string | null
    authors?: BookAuthorUncheckedCreateNestedManyWithoutBookInput
    loans?: LoanUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutTagsInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutTagsInput, BookUncheckedCreateWithoutTagsInput>
  }

  export type UserUpsertWithoutCreated_book_tagsInput = {
    update: XOR<UserUpdateWithoutCreated_book_tagsInput, UserUncheckedUpdateWithoutCreated_book_tagsInput>
    create: XOR<UserCreateWithoutCreated_book_tagsInput, UserUncheckedCreateWithoutCreated_book_tagsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreated_book_tagsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreated_book_tagsInput, UserUncheckedUpdateWithoutCreated_book_tagsInput>
  }

  export type UserUpdateWithoutCreated_book_tagsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    sex?: NullableEnumSexEnumFieldUpdateOperationsInput | $Enums.SexEnum | null
    login?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    auth_tokens?: UserAuthTokenUpdateManyWithoutUserNestedInput
    created_authors?: AuthorUpdateManyWithoutCreated_by_userNestedInput
    updated_authors?: AuthorUpdateManyWithoutUpdated_by_userNestedInput
    created_books?: BookUpdateManyWithoutCreated_by_userNestedInput
    updated_books?: BookUpdateManyWithoutUpdated_by_userNestedInput
    created_book_authors?: BookAuthorUpdateManyWithoutCreated_by_userNestedInput
    updated_book_authors?: BookAuthorUpdateManyWithoutUpdated_by_userNestedInput
    created_tags?: TagUpdateManyWithoutCreated_by_userNestedInput
    updated_tags?: TagUpdateManyWithoutUpdated_by_userNestedInput
    updated_book_tags?: BookTagUpdateManyWithoutUpdated_by_userNestedInput
    created_loans?: LoanUpdateManyWithoutCreated_by_userNestedInput
    updated_loans?: LoanUpdateManyWithoutUpdated_by_userNestedInput
    user_loans?: LoanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreated_book_tagsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    sex?: NullableEnumSexEnumFieldUpdateOperationsInput | $Enums.SexEnum | null
    login?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    auth_tokens?: UserAuthTokenUncheckedUpdateManyWithoutUserNestedInput
    created_authors?: AuthorUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_authors?: AuthorUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_books?: BookUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_books?: BookUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_book_authors?: BookAuthorUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_book_authors?: BookAuthorUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_tags?: TagUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_tags?: TagUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    updated_book_tags?: BookTagUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_loans?: LoanUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_loans?: LoanUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    user_loans?: LoanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutUpdated_book_tagsInput = {
    update: XOR<UserUpdateWithoutUpdated_book_tagsInput, UserUncheckedUpdateWithoutUpdated_book_tagsInput>
    create: XOR<UserCreateWithoutUpdated_book_tagsInput, UserUncheckedCreateWithoutUpdated_book_tagsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUpdated_book_tagsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUpdated_book_tagsInput, UserUncheckedUpdateWithoutUpdated_book_tagsInput>
  }

  export type UserUpdateWithoutUpdated_book_tagsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    sex?: NullableEnumSexEnumFieldUpdateOperationsInput | $Enums.SexEnum | null
    login?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    auth_tokens?: UserAuthTokenUpdateManyWithoutUserNestedInput
    created_authors?: AuthorUpdateManyWithoutCreated_by_userNestedInput
    updated_authors?: AuthorUpdateManyWithoutUpdated_by_userNestedInput
    created_books?: BookUpdateManyWithoutCreated_by_userNestedInput
    updated_books?: BookUpdateManyWithoutUpdated_by_userNestedInput
    created_book_authors?: BookAuthorUpdateManyWithoutCreated_by_userNestedInput
    updated_book_authors?: BookAuthorUpdateManyWithoutUpdated_by_userNestedInput
    created_tags?: TagUpdateManyWithoutCreated_by_userNestedInput
    updated_tags?: TagUpdateManyWithoutUpdated_by_userNestedInput
    created_book_tags?: BookTagUpdateManyWithoutCreated_by_userNestedInput
    created_loans?: LoanUpdateManyWithoutCreated_by_userNestedInput
    updated_loans?: LoanUpdateManyWithoutUpdated_by_userNestedInput
    user_loans?: LoanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUpdated_book_tagsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    sex?: NullableEnumSexEnumFieldUpdateOperationsInput | $Enums.SexEnum | null
    login?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    auth_tokens?: UserAuthTokenUncheckedUpdateManyWithoutUserNestedInput
    created_authors?: AuthorUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_authors?: AuthorUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_books?: BookUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_books?: BookUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_book_authors?: BookAuthorUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_book_authors?: BookAuthorUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_tags?: TagUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_tags?: TagUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_book_tags?: BookTagUncheckedUpdateManyWithoutCreated_by_userNestedInput
    created_loans?: LoanUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_loans?: LoanUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    user_loans?: LoanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TagUpsertWithoutBooksInput = {
    update: XOR<TagUpdateWithoutBooksInput, TagUncheckedUpdateWithoutBooksInput>
    create: XOR<TagCreateWithoutBooksInput, TagUncheckedCreateWithoutBooksInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutBooksInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutBooksInput, TagUncheckedUpdateWithoutBooksInput>
  }

  export type TagUpdateWithoutBooksInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_by_user?: UserUpdateOneRequiredWithoutCreated_tagsNestedInput
    updated_by_user?: UserUpdateOneWithoutUpdated_tagsNestedInput
  }

  export type TagUncheckedUpdateWithoutBooksInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookUpsertWithoutTagsInput = {
    update: XOR<BookUpdateWithoutTagsInput, BookUncheckedUpdateWithoutTagsInput>
    create: XOR<BookCreateWithoutTagsInput, BookUncheckedCreateWithoutTagsInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutTagsInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutTagsInput, BookUncheckedUpdateWithoutTagsInput>
  }

  export type BookUpdateWithoutTagsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    edition?: NullableStringFieldUpdateOperationsInput | string | null
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    pages?: NullableIntFieldUpdateOperationsInput | number | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
    cover_url?: NullableStringFieldUpdateOperationsInput | string | null
    images_url?: BookUpdateimages_urlInput | string[]
    keywords?: BookUpdatekeywordsInput | string[]
    label?: NullableStringFieldUpdateOperationsInput | string | null
    shelf?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_by_user?: UserUpdateOneRequiredWithoutCreated_booksNestedInput
    updated_by_user?: UserUpdateOneWithoutUpdated_booksNestedInput
    authors?: BookAuthorUpdateManyWithoutBookNestedInput
    loans?: LoanUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutTagsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    edition?: NullableStringFieldUpdateOperationsInput | string | null
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    pages?: NullableIntFieldUpdateOperationsInput | number | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
    cover_url?: NullableStringFieldUpdateOperationsInput | string | null
    images_url?: BookUpdateimages_urlInput | string[]
    keywords?: BookUpdatekeywordsInput | string[]
    label?: NullableStringFieldUpdateOperationsInput | string | null
    shelf?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    description?: NullableStringFieldUpdateOperationsInput | string | null
    authors?: BookAuthorUncheckedUpdateManyWithoutBookNestedInput
    loans?: LoanUncheckedUpdateManyWithoutBookNestedInput
  }

  export type UserCreateWithoutCreated_booksInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    name: string
    display_name: string
    sex?: $Enums.SexEnum | null
    login: string
    status?: $Enums.StatusEnum
    password: string
    email: string
    role: $Enums.UserRole
    auth_tokens?: UserAuthTokenCreateNestedManyWithoutUserInput
    created_authors?: AuthorCreateNestedManyWithoutCreated_by_userInput
    updated_authors?: AuthorCreateNestedManyWithoutUpdated_by_userInput
    updated_books?: BookCreateNestedManyWithoutUpdated_by_userInput
    created_book_authors?: BookAuthorCreateNestedManyWithoutCreated_by_userInput
    updated_book_authors?: BookAuthorCreateNestedManyWithoutUpdated_by_userInput
    created_tags?: TagCreateNestedManyWithoutCreated_by_userInput
    updated_tags?: TagCreateNestedManyWithoutUpdated_by_userInput
    created_book_tags?: BookTagCreateNestedManyWithoutCreated_by_userInput
    updated_book_tags?: BookTagCreateNestedManyWithoutUpdated_by_userInput
    created_loans?: LoanCreateNestedManyWithoutCreated_by_userInput
    updated_loans?: LoanCreateNestedManyWithoutUpdated_by_userInput
    user_loans?: LoanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreated_booksInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    name: string
    display_name: string
    sex?: $Enums.SexEnum | null
    login: string
    status?: $Enums.StatusEnum
    password: string
    email: string
    role: $Enums.UserRole
    auth_tokens?: UserAuthTokenUncheckedCreateNestedManyWithoutUserInput
    created_authors?: AuthorUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_authors?: AuthorUncheckedCreateNestedManyWithoutUpdated_by_userInput
    updated_books?: BookUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_book_authors?: BookAuthorUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_book_authors?: BookAuthorUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_tags?: TagUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_tags?: TagUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_book_tags?: BookTagUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_book_tags?: BookTagUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_loans?: LoanUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_loans?: LoanUncheckedCreateNestedManyWithoutUpdated_by_userInput
    user_loans?: LoanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreated_booksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreated_booksInput, UserUncheckedCreateWithoutCreated_booksInput>
  }

  export type UserCreateWithoutUpdated_booksInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    name: string
    display_name: string
    sex?: $Enums.SexEnum | null
    login: string
    status?: $Enums.StatusEnum
    password: string
    email: string
    role: $Enums.UserRole
    auth_tokens?: UserAuthTokenCreateNestedManyWithoutUserInput
    created_authors?: AuthorCreateNestedManyWithoutCreated_by_userInput
    updated_authors?: AuthorCreateNestedManyWithoutUpdated_by_userInput
    created_books?: BookCreateNestedManyWithoutCreated_by_userInput
    created_book_authors?: BookAuthorCreateNestedManyWithoutCreated_by_userInput
    updated_book_authors?: BookAuthorCreateNestedManyWithoutUpdated_by_userInput
    created_tags?: TagCreateNestedManyWithoutCreated_by_userInput
    updated_tags?: TagCreateNestedManyWithoutUpdated_by_userInput
    created_book_tags?: BookTagCreateNestedManyWithoutCreated_by_userInput
    updated_book_tags?: BookTagCreateNestedManyWithoutUpdated_by_userInput
    created_loans?: LoanCreateNestedManyWithoutCreated_by_userInput
    updated_loans?: LoanCreateNestedManyWithoutUpdated_by_userInput
    user_loans?: LoanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUpdated_booksInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    name: string
    display_name: string
    sex?: $Enums.SexEnum | null
    login: string
    status?: $Enums.StatusEnum
    password: string
    email: string
    role: $Enums.UserRole
    auth_tokens?: UserAuthTokenUncheckedCreateNestedManyWithoutUserInput
    created_authors?: AuthorUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_authors?: AuthorUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_books?: BookUncheckedCreateNestedManyWithoutCreated_by_userInput
    created_book_authors?: BookAuthorUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_book_authors?: BookAuthorUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_tags?: TagUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_tags?: TagUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_book_tags?: BookTagUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_book_tags?: BookTagUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_loans?: LoanUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_loans?: LoanUncheckedCreateNestedManyWithoutUpdated_by_userInput
    user_loans?: LoanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUpdated_booksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUpdated_booksInput, UserUncheckedCreateWithoutUpdated_booksInput>
  }

  export type BookAuthorCreateWithoutBookInput = {
    id?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string | null
    status?: $Enums.StatusEnum
    description?: string | null
    created_by_user: UserCreateNestedOneWithoutCreated_book_authorsInput
    updated_by_user?: UserCreateNestedOneWithoutUpdated_book_authorsInput
    author: AuthorCreateNestedOneWithoutBooksInput
  }

  export type BookAuthorUncheckedCreateWithoutBookInput = {
    id?: bigint | number
    created_at?: Date | string
    created_by_user_id: bigint | number
    updated_at?: Date | string | null
    updated_by_user_id?: bigint | number | null
    status?: $Enums.StatusEnum
    author_id: bigint | number
    description?: string | null
  }

  export type BookAuthorCreateOrConnectWithoutBookInput = {
    where: BookAuthorWhereUniqueInput
    create: XOR<BookAuthorCreateWithoutBookInput, BookAuthorUncheckedCreateWithoutBookInput>
  }

  export type BookAuthorCreateManyBookInputEnvelope = {
    data: BookAuthorCreateManyBookInput | BookAuthorCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type BookTagCreateWithoutBookInput = {
    id?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string | null
    status?: $Enums.StatusEnum
    created_by_user: UserCreateNestedOneWithoutCreated_book_tagsInput
    updated_by_user?: UserCreateNestedOneWithoutUpdated_book_tagsInput
    tag: TagCreateNestedOneWithoutBooksInput
  }

  export type BookTagUncheckedCreateWithoutBookInput = {
    id?: bigint | number
    created_at?: Date | string
    created_by_user_id: bigint | number
    updated_at?: Date | string | null
    updated_by_user_id?: bigint | number | null
    status?: $Enums.StatusEnum
    tag_id: bigint | number
  }

  export type BookTagCreateOrConnectWithoutBookInput = {
    where: BookTagWhereUniqueInput
    create: XOR<BookTagCreateWithoutBookInput, BookTagUncheckedCreateWithoutBookInput>
  }

  export type BookTagCreateManyBookInputEnvelope = {
    data: BookTagCreateManyBookInput | BookTagCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type LoanCreateWithoutBookInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    status?: $Enums.StatusEnum
    loan_date?: Date | string
    due_date?: Date | string
    return_date?: Date | string | null
    created_by_user: UserCreateNestedOneWithoutCreated_loansInput
    updated_by_user?: UserCreateNestedOneWithoutUpdated_loansInput
    user: UserCreateNestedOneWithoutUser_loansInput
  }

  export type LoanUncheckedCreateWithoutBookInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    created_by_user_id: bigint | number
    updated_at?: Date | string | null
    updated_by_user_id?: bigint | number | null
    status?: $Enums.StatusEnum
    loan_date?: Date | string
    due_date?: Date | string
    return_date?: Date | string | null
    user_id: bigint | number
  }

  export type LoanCreateOrConnectWithoutBookInput = {
    where: LoanWhereUniqueInput
    create: XOR<LoanCreateWithoutBookInput, LoanUncheckedCreateWithoutBookInput>
  }

  export type LoanCreateManyBookInputEnvelope = {
    data: LoanCreateManyBookInput | LoanCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCreated_booksInput = {
    update: XOR<UserUpdateWithoutCreated_booksInput, UserUncheckedUpdateWithoutCreated_booksInput>
    create: XOR<UserCreateWithoutCreated_booksInput, UserUncheckedCreateWithoutCreated_booksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreated_booksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreated_booksInput, UserUncheckedUpdateWithoutCreated_booksInput>
  }

  export type UserUpdateWithoutCreated_booksInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    sex?: NullableEnumSexEnumFieldUpdateOperationsInput | $Enums.SexEnum | null
    login?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    auth_tokens?: UserAuthTokenUpdateManyWithoutUserNestedInput
    created_authors?: AuthorUpdateManyWithoutCreated_by_userNestedInput
    updated_authors?: AuthorUpdateManyWithoutUpdated_by_userNestedInput
    updated_books?: BookUpdateManyWithoutUpdated_by_userNestedInput
    created_book_authors?: BookAuthorUpdateManyWithoutCreated_by_userNestedInput
    updated_book_authors?: BookAuthorUpdateManyWithoutUpdated_by_userNestedInput
    created_tags?: TagUpdateManyWithoutCreated_by_userNestedInput
    updated_tags?: TagUpdateManyWithoutUpdated_by_userNestedInput
    created_book_tags?: BookTagUpdateManyWithoutCreated_by_userNestedInput
    updated_book_tags?: BookTagUpdateManyWithoutUpdated_by_userNestedInput
    created_loans?: LoanUpdateManyWithoutCreated_by_userNestedInput
    updated_loans?: LoanUpdateManyWithoutUpdated_by_userNestedInput
    user_loans?: LoanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreated_booksInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    sex?: NullableEnumSexEnumFieldUpdateOperationsInput | $Enums.SexEnum | null
    login?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    auth_tokens?: UserAuthTokenUncheckedUpdateManyWithoutUserNestedInput
    created_authors?: AuthorUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_authors?: AuthorUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    updated_books?: BookUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_book_authors?: BookAuthorUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_book_authors?: BookAuthorUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_tags?: TagUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_tags?: TagUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_book_tags?: BookTagUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_book_tags?: BookTagUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_loans?: LoanUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_loans?: LoanUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    user_loans?: LoanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutUpdated_booksInput = {
    update: XOR<UserUpdateWithoutUpdated_booksInput, UserUncheckedUpdateWithoutUpdated_booksInput>
    create: XOR<UserCreateWithoutUpdated_booksInput, UserUncheckedCreateWithoutUpdated_booksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUpdated_booksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUpdated_booksInput, UserUncheckedUpdateWithoutUpdated_booksInput>
  }

  export type UserUpdateWithoutUpdated_booksInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    sex?: NullableEnumSexEnumFieldUpdateOperationsInput | $Enums.SexEnum | null
    login?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    auth_tokens?: UserAuthTokenUpdateManyWithoutUserNestedInput
    created_authors?: AuthorUpdateManyWithoutCreated_by_userNestedInput
    updated_authors?: AuthorUpdateManyWithoutUpdated_by_userNestedInput
    created_books?: BookUpdateManyWithoutCreated_by_userNestedInput
    created_book_authors?: BookAuthorUpdateManyWithoutCreated_by_userNestedInput
    updated_book_authors?: BookAuthorUpdateManyWithoutUpdated_by_userNestedInput
    created_tags?: TagUpdateManyWithoutCreated_by_userNestedInput
    updated_tags?: TagUpdateManyWithoutUpdated_by_userNestedInput
    created_book_tags?: BookTagUpdateManyWithoutCreated_by_userNestedInput
    updated_book_tags?: BookTagUpdateManyWithoutUpdated_by_userNestedInput
    created_loans?: LoanUpdateManyWithoutCreated_by_userNestedInput
    updated_loans?: LoanUpdateManyWithoutUpdated_by_userNestedInput
    user_loans?: LoanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUpdated_booksInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    sex?: NullableEnumSexEnumFieldUpdateOperationsInput | $Enums.SexEnum | null
    login?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    auth_tokens?: UserAuthTokenUncheckedUpdateManyWithoutUserNestedInput
    created_authors?: AuthorUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_authors?: AuthorUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_books?: BookUncheckedUpdateManyWithoutCreated_by_userNestedInput
    created_book_authors?: BookAuthorUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_book_authors?: BookAuthorUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_tags?: TagUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_tags?: TagUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_book_tags?: BookTagUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_book_tags?: BookTagUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_loans?: LoanUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_loans?: LoanUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    user_loans?: LoanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BookAuthorUpsertWithWhereUniqueWithoutBookInput = {
    where: BookAuthorWhereUniqueInput
    update: XOR<BookAuthorUpdateWithoutBookInput, BookAuthorUncheckedUpdateWithoutBookInput>
    create: XOR<BookAuthorCreateWithoutBookInput, BookAuthorUncheckedCreateWithoutBookInput>
  }

  export type BookAuthorUpdateWithWhereUniqueWithoutBookInput = {
    where: BookAuthorWhereUniqueInput
    data: XOR<BookAuthorUpdateWithoutBookInput, BookAuthorUncheckedUpdateWithoutBookInput>
  }

  export type BookAuthorUpdateManyWithWhereWithoutBookInput = {
    where: BookAuthorScalarWhereInput
    data: XOR<BookAuthorUpdateManyMutationInput, BookAuthorUncheckedUpdateManyWithoutBookInput>
  }

  export type BookTagUpsertWithWhereUniqueWithoutBookInput = {
    where: BookTagWhereUniqueInput
    update: XOR<BookTagUpdateWithoutBookInput, BookTagUncheckedUpdateWithoutBookInput>
    create: XOR<BookTagCreateWithoutBookInput, BookTagUncheckedCreateWithoutBookInput>
  }

  export type BookTagUpdateWithWhereUniqueWithoutBookInput = {
    where: BookTagWhereUniqueInput
    data: XOR<BookTagUpdateWithoutBookInput, BookTagUncheckedUpdateWithoutBookInput>
  }

  export type BookTagUpdateManyWithWhereWithoutBookInput = {
    where: BookTagScalarWhereInput
    data: XOR<BookTagUpdateManyMutationInput, BookTagUncheckedUpdateManyWithoutBookInput>
  }

  export type LoanUpsertWithWhereUniqueWithoutBookInput = {
    where: LoanWhereUniqueInput
    update: XOR<LoanUpdateWithoutBookInput, LoanUncheckedUpdateWithoutBookInput>
    create: XOR<LoanCreateWithoutBookInput, LoanUncheckedCreateWithoutBookInput>
  }

  export type LoanUpdateWithWhereUniqueWithoutBookInput = {
    where: LoanWhereUniqueInput
    data: XOR<LoanUpdateWithoutBookInput, LoanUncheckedUpdateWithoutBookInput>
  }

  export type LoanUpdateManyWithWhereWithoutBookInput = {
    where: LoanScalarWhereInput
    data: XOR<LoanUpdateManyMutationInput, LoanUncheckedUpdateManyWithoutBookInput>
  }

  export type UserCreateWithoutCreated_loansInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    name: string
    display_name: string
    sex?: $Enums.SexEnum | null
    login: string
    status?: $Enums.StatusEnum
    password: string
    email: string
    role: $Enums.UserRole
    auth_tokens?: UserAuthTokenCreateNestedManyWithoutUserInput
    created_authors?: AuthorCreateNestedManyWithoutCreated_by_userInput
    updated_authors?: AuthorCreateNestedManyWithoutUpdated_by_userInput
    created_books?: BookCreateNestedManyWithoutCreated_by_userInput
    updated_books?: BookCreateNestedManyWithoutUpdated_by_userInput
    created_book_authors?: BookAuthorCreateNestedManyWithoutCreated_by_userInput
    updated_book_authors?: BookAuthorCreateNestedManyWithoutUpdated_by_userInput
    created_tags?: TagCreateNestedManyWithoutCreated_by_userInput
    updated_tags?: TagCreateNestedManyWithoutUpdated_by_userInput
    created_book_tags?: BookTagCreateNestedManyWithoutCreated_by_userInput
    updated_book_tags?: BookTagCreateNestedManyWithoutUpdated_by_userInput
    updated_loans?: LoanCreateNestedManyWithoutUpdated_by_userInput
    user_loans?: LoanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreated_loansInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    name: string
    display_name: string
    sex?: $Enums.SexEnum | null
    login: string
    status?: $Enums.StatusEnum
    password: string
    email: string
    role: $Enums.UserRole
    auth_tokens?: UserAuthTokenUncheckedCreateNestedManyWithoutUserInput
    created_authors?: AuthorUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_authors?: AuthorUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_books?: BookUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_books?: BookUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_book_authors?: BookAuthorUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_book_authors?: BookAuthorUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_tags?: TagUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_tags?: TagUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_book_tags?: BookTagUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_book_tags?: BookTagUncheckedCreateNestedManyWithoutUpdated_by_userInput
    updated_loans?: LoanUncheckedCreateNestedManyWithoutUpdated_by_userInput
    user_loans?: LoanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreated_loansInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreated_loansInput, UserUncheckedCreateWithoutCreated_loansInput>
  }

  export type UserCreateWithoutUpdated_loansInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    name: string
    display_name: string
    sex?: $Enums.SexEnum | null
    login: string
    status?: $Enums.StatusEnum
    password: string
    email: string
    role: $Enums.UserRole
    auth_tokens?: UserAuthTokenCreateNestedManyWithoutUserInput
    created_authors?: AuthorCreateNestedManyWithoutCreated_by_userInput
    updated_authors?: AuthorCreateNestedManyWithoutUpdated_by_userInput
    created_books?: BookCreateNestedManyWithoutCreated_by_userInput
    updated_books?: BookCreateNestedManyWithoutUpdated_by_userInput
    created_book_authors?: BookAuthorCreateNestedManyWithoutCreated_by_userInput
    updated_book_authors?: BookAuthorCreateNestedManyWithoutUpdated_by_userInput
    created_tags?: TagCreateNestedManyWithoutCreated_by_userInput
    updated_tags?: TagCreateNestedManyWithoutUpdated_by_userInput
    created_book_tags?: BookTagCreateNestedManyWithoutCreated_by_userInput
    updated_book_tags?: BookTagCreateNestedManyWithoutUpdated_by_userInput
    created_loans?: LoanCreateNestedManyWithoutCreated_by_userInput
    user_loans?: LoanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUpdated_loansInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    name: string
    display_name: string
    sex?: $Enums.SexEnum | null
    login: string
    status?: $Enums.StatusEnum
    password: string
    email: string
    role: $Enums.UserRole
    auth_tokens?: UserAuthTokenUncheckedCreateNestedManyWithoutUserInput
    created_authors?: AuthorUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_authors?: AuthorUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_books?: BookUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_books?: BookUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_book_authors?: BookAuthorUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_book_authors?: BookAuthorUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_tags?: TagUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_tags?: TagUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_book_tags?: BookTagUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_book_tags?: BookTagUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_loans?: LoanUncheckedCreateNestedManyWithoutCreated_by_userInput
    user_loans?: LoanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUpdated_loansInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUpdated_loansInput, UserUncheckedCreateWithoutUpdated_loansInput>
  }

  export type BookCreateWithoutLoansInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    title: string
    subtitle?: string | null
    publisher?: string | null
    year?: number | null
    edition?: string | null
    isbn?: string | null
    pages?: number | null
    summary?: string | null
    pdf_url?: string | null
    cover_url?: string | null
    images_url?: BookCreateimages_urlInput | string[]
    keywords?: BookCreatekeywordsInput | string[]
    label?: string | null
    shelf?: string | null
    status?: $Enums.StatusEnum
    description?: string | null
    created_by_user: UserCreateNestedOneWithoutCreated_booksInput
    updated_by_user?: UserCreateNestedOneWithoutUpdated_booksInput
    authors?: BookAuthorCreateNestedManyWithoutBookInput
    tags?: BookTagCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutLoansInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    created_by_user_id: bigint | number
    updated_at?: Date | string | null
    updated_by_user_id?: bigint | number | null
    title: string
    subtitle?: string | null
    publisher?: string | null
    year?: number | null
    edition?: string | null
    isbn?: string | null
    pages?: number | null
    summary?: string | null
    pdf_url?: string | null
    cover_url?: string | null
    images_url?: BookCreateimages_urlInput | string[]
    keywords?: BookCreatekeywordsInput | string[]
    label?: string | null
    shelf?: string | null
    status?: $Enums.StatusEnum
    description?: string | null
    authors?: BookAuthorUncheckedCreateNestedManyWithoutBookInput
    tags?: BookTagUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutLoansInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutLoansInput, BookUncheckedCreateWithoutLoansInput>
  }

  export type UserCreateWithoutUser_loansInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    name: string
    display_name: string
    sex?: $Enums.SexEnum | null
    login: string
    status?: $Enums.StatusEnum
    password: string
    email: string
    role: $Enums.UserRole
    auth_tokens?: UserAuthTokenCreateNestedManyWithoutUserInput
    created_authors?: AuthorCreateNestedManyWithoutCreated_by_userInput
    updated_authors?: AuthorCreateNestedManyWithoutUpdated_by_userInput
    created_books?: BookCreateNestedManyWithoutCreated_by_userInput
    updated_books?: BookCreateNestedManyWithoutUpdated_by_userInput
    created_book_authors?: BookAuthorCreateNestedManyWithoutCreated_by_userInput
    updated_book_authors?: BookAuthorCreateNestedManyWithoutUpdated_by_userInput
    created_tags?: TagCreateNestedManyWithoutCreated_by_userInput
    updated_tags?: TagCreateNestedManyWithoutUpdated_by_userInput
    created_book_tags?: BookTagCreateNestedManyWithoutCreated_by_userInput
    updated_book_tags?: BookTagCreateNestedManyWithoutUpdated_by_userInput
    created_loans?: LoanCreateNestedManyWithoutCreated_by_userInput
    updated_loans?: LoanCreateNestedManyWithoutUpdated_by_userInput
  }

  export type UserUncheckedCreateWithoutUser_loansInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    name: string
    display_name: string
    sex?: $Enums.SexEnum | null
    login: string
    status?: $Enums.StatusEnum
    password: string
    email: string
    role: $Enums.UserRole
    auth_tokens?: UserAuthTokenUncheckedCreateNestedManyWithoutUserInput
    created_authors?: AuthorUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_authors?: AuthorUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_books?: BookUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_books?: BookUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_book_authors?: BookAuthorUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_book_authors?: BookAuthorUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_tags?: TagUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_tags?: TagUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_book_tags?: BookTagUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_book_tags?: BookTagUncheckedCreateNestedManyWithoutUpdated_by_userInput
    created_loans?: LoanUncheckedCreateNestedManyWithoutCreated_by_userInput
    updated_loans?: LoanUncheckedCreateNestedManyWithoutUpdated_by_userInput
  }

  export type UserCreateOrConnectWithoutUser_loansInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUser_loansInput, UserUncheckedCreateWithoutUser_loansInput>
  }

  export type UserUpsertWithoutCreated_loansInput = {
    update: XOR<UserUpdateWithoutCreated_loansInput, UserUncheckedUpdateWithoutCreated_loansInput>
    create: XOR<UserCreateWithoutCreated_loansInput, UserUncheckedCreateWithoutCreated_loansInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreated_loansInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreated_loansInput, UserUncheckedUpdateWithoutCreated_loansInput>
  }

  export type UserUpdateWithoutCreated_loansInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    sex?: NullableEnumSexEnumFieldUpdateOperationsInput | $Enums.SexEnum | null
    login?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    auth_tokens?: UserAuthTokenUpdateManyWithoutUserNestedInput
    created_authors?: AuthorUpdateManyWithoutCreated_by_userNestedInput
    updated_authors?: AuthorUpdateManyWithoutUpdated_by_userNestedInput
    created_books?: BookUpdateManyWithoutCreated_by_userNestedInput
    updated_books?: BookUpdateManyWithoutUpdated_by_userNestedInput
    created_book_authors?: BookAuthorUpdateManyWithoutCreated_by_userNestedInput
    updated_book_authors?: BookAuthorUpdateManyWithoutUpdated_by_userNestedInput
    created_tags?: TagUpdateManyWithoutCreated_by_userNestedInput
    updated_tags?: TagUpdateManyWithoutUpdated_by_userNestedInput
    created_book_tags?: BookTagUpdateManyWithoutCreated_by_userNestedInput
    updated_book_tags?: BookTagUpdateManyWithoutUpdated_by_userNestedInput
    updated_loans?: LoanUpdateManyWithoutUpdated_by_userNestedInput
    user_loans?: LoanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreated_loansInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    sex?: NullableEnumSexEnumFieldUpdateOperationsInput | $Enums.SexEnum | null
    login?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    auth_tokens?: UserAuthTokenUncheckedUpdateManyWithoutUserNestedInput
    created_authors?: AuthorUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_authors?: AuthorUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_books?: BookUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_books?: BookUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_book_authors?: BookAuthorUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_book_authors?: BookAuthorUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_tags?: TagUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_tags?: TagUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_book_tags?: BookTagUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_book_tags?: BookTagUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    updated_loans?: LoanUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    user_loans?: LoanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutUpdated_loansInput = {
    update: XOR<UserUpdateWithoutUpdated_loansInput, UserUncheckedUpdateWithoutUpdated_loansInput>
    create: XOR<UserCreateWithoutUpdated_loansInput, UserUncheckedCreateWithoutUpdated_loansInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUpdated_loansInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUpdated_loansInput, UserUncheckedUpdateWithoutUpdated_loansInput>
  }

  export type UserUpdateWithoutUpdated_loansInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    sex?: NullableEnumSexEnumFieldUpdateOperationsInput | $Enums.SexEnum | null
    login?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    auth_tokens?: UserAuthTokenUpdateManyWithoutUserNestedInput
    created_authors?: AuthorUpdateManyWithoutCreated_by_userNestedInput
    updated_authors?: AuthorUpdateManyWithoutUpdated_by_userNestedInput
    created_books?: BookUpdateManyWithoutCreated_by_userNestedInput
    updated_books?: BookUpdateManyWithoutUpdated_by_userNestedInput
    created_book_authors?: BookAuthorUpdateManyWithoutCreated_by_userNestedInput
    updated_book_authors?: BookAuthorUpdateManyWithoutUpdated_by_userNestedInput
    created_tags?: TagUpdateManyWithoutCreated_by_userNestedInput
    updated_tags?: TagUpdateManyWithoutUpdated_by_userNestedInput
    created_book_tags?: BookTagUpdateManyWithoutCreated_by_userNestedInput
    updated_book_tags?: BookTagUpdateManyWithoutUpdated_by_userNestedInput
    created_loans?: LoanUpdateManyWithoutCreated_by_userNestedInput
    user_loans?: LoanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUpdated_loansInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    sex?: NullableEnumSexEnumFieldUpdateOperationsInput | $Enums.SexEnum | null
    login?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    auth_tokens?: UserAuthTokenUncheckedUpdateManyWithoutUserNestedInput
    created_authors?: AuthorUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_authors?: AuthorUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_books?: BookUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_books?: BookUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_book_authors?: BookAuthorUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_book_authors?: BookAuthorUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_tags?: TagUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_tags?: TagUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_book_tags?: BookTagUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_book_tags?: BookTagUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_loans?: LoanUncheckedUpdateManyWithoutCreated_by_userNestedInput
    user_loans?: LoanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BookUpsertWithoutLoansInput = {
    update: XOR<BookUpdateWithoutLoansInput, BookUncheckedUpdateWithoutLoansInput>
    create: XOR<BookCreateWithoutLoansInput, BookUncheckedCreateWithoutLoansInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutLoansInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutLoansInput, BookUncheckedUpdateWithoutLoansInput>
  }

  export type BookUpdateWithoutLoansInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    edition?: NullableStringFieldUpdateOperationsInput | string | null
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    pages?: NullableIntFieldUpdateOperationsInput | number | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
    cover_url?: NullableStringFieldUpdateOperationsInput | string | null
    images_url?: BookUpdateimages_urlInput | string[]
    keywords?: BookUpdatekeywordsInput | string[]
    label?: NullableStringFieldUpdateOperationsInput | string | null
    shelf?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_by_user?: UserUpdateOneRequiredWithoutCreated_booksNestedInput
    updated_by_user?: UserUpdateOneWithoutUpdated_booksNestedInput
    authors?: BookAuthorUpdateManyWithoutBookNestedInput
    tags?: BookTagUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutLoansInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    edition?: NullableStringFieldUpdateOperationsInput | string | null
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    pages?: NullableIntFieldUpdateOperationsInput | number | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
    cover_url?: NullableStringFieldUpdateOperationsInput | string | null
    images_url?: BookUpdateimages_urlInput | string[]
    keywords?: BookUpdatekeywordsInput | string[]
    label?: NullableStringFieldUpdateOperationsInput | string | null
    shelf?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    description?: NullableStringFieldUpdateOperationsInput | string | null
    authors?: BookAuthorUncheckedUpdateManyWithoutBookNestedInput
    tags?: BookTagUncheckedUpdateManyWithoutBookNestedInput
  }

  export type UserUpsertWithoutUser_loansInput = {
    update: XOR<UserUpdateWithoutUser_loansInput, UserUncheckedUpdateWithoutUser_loansInput>
    create: XOR<UserCreateWithoutUser_loansInput, UserUncheckedCreateWithoutUser_loansInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUser_loansInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUser_loansInput, UserUncheckedUpdateWithoutUser_loansInput>
  }

  export type UserUpdateWithoutUser_loansInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    sex?: NullableEnumSexEnumFieldUpdateOperationsInput | $Enums.SexEnum | null
    login?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    auth_tokens?: UserAuthTokenUpdateManyWithoutUserNestedInput
    created_authors?: AuthorUpdateManyWithoutCreated_by_userNestedInput
    updated_authors?: AuthorUpdateManyWithoutUpdated_by_userNestedInput
    created_books?: BookUpdateManyWithoutCreated_by_userNestedInput
    updated_books?: BookUpdateManyWithoutUpdated_by_userNestedInput
    created_book_authors?: BookAuthorUpdateManyWithoutCreated_by_userNestedInput
    updated_book_authors?: BookAuthorUpdateManyWithoutUpdated_by_userNestedInput
    created_tags?: TagUpdateManyWithoutCreated_by_userNestedInput
    updated_tags?: TagUpdateManyWithoutUpdated_by_userNestedInput
    created_book_tags?: BookTagUpdateManyWithoutCreated_by_userNestedInput
    updated_book_tags?: BookTagUpdateManyWithoutUpdated_by_userNestedInput
    created_loans?: LoanUpdateManyWithoutCreated_by_userNestedInput
    updated_loans?: LoanUpdateManyWithoutUpdated_by_userNestedInput
  }

  export type UserUncheckedUpdateWithoutUser_loansInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    sex?: NullableEnumSexEnumFieldUpdateOperationsInput | $Enums.SexEnum | null
    login?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    auth_tokens?: UserAuthTokenUncheckedUpdateManyWithoutUserNestedInput
    created_authors?: AuthorUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_authors?: AuthorUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_books?: BookUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_books?: BookUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_book_authors?: BookAuthorUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_book_authors?: BookAuthorUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_tags?: TagUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_tags?: TagUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_book_tags?: BookTagUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_book_tags?: BookTagUncheckedUpdateManyWithoutUpdated_by_userNestedInput
    created_loans?: LoanUncheckedUpdateManyWithoutCreated_by_userNestedInput
    updated_loans?: LoanUncheckedUpdateManyWithoutUpdated_by_userNestedInput
  }

  export type UserAuthTokenCreateManyUserInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    last_used_at?: Date | string | null
    created_ip: string
    last_used_ip?: string | null
    status?: $Enums.StatusEnum
    jwt_token: string
    jwt_secret: string
    keep?: boolean
  }

  export type AuthorCreateManyCreated_by_userInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    updated_by_user_id?: bigint | number | null
    name: string
    status?: $Enums.StatusEnum
    description?: string | null
    avatar_url?: string | null
    is_spirit?: boolean
  }

  export type AuthorCreateManyUpdated_by_userInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    created_by_user_id: bigint | number
    updated_at?: Date | string | null
    name: string
    status?: $Enums.StatusEnum
    description?: string | null
    avatar_url?: string | null
    is_spirit?: boolean
  }

  export type BookCreateManyCreated_by_userInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    updated_by_user_id?: bigint | number | null
    title: string
    subtitle?: string | null
    publisher?: string | null
    year?: number | null
    edition?: string | null
    isbn?: string | null
    pages?: number | null
    summary?: string | null
    pdf_url?: string | null
    cover_url?: string | null
    images_url?: BookCreateimages_urlInput | string[]
    keywords?: BookCreatekeywordsInput | string[]
    label?: string | null
    shelf?: string | null
    status?: $Enums.StatusEnum
    description?: string | null
  }

  export type BookCreateManyUpdated_by_userInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    created_by_user_id: bigint | number
    updated_at?: Date | string | null
    title: string
    subtitle?: string | null
    publisher?: string | null
    year?: number | null
    edition?: string | null
    isbn?: string | null
    pages?: number | null
    summary?: string | null
    pdf_url?: string | null
    cover_url?: string | null
    images_url?: BookCreateimages_urlInput | string[]
    keywords?: BookCreatekeywordsInput | string[]
    label?: string | null
    shelf?: string | null
    status?: $Enums.StatusEnum
    description?: string | null
  }

  export type BookAuthorCreateManyCreated_by_userInput = {
    id?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string | null
    updated_by_user_id?: bigint | number | null
    status?: $Enums.StatusEnum
    author_id: bigint | number
    book_id: bigint | number
    description?: string | null
  }

  export type BookAuthorCreateManyUpdated_by_userInput = {
    id?: bigint | number
    created_at?: Date | string
    created_by_user_id: bigint | number
    updated_at?: Date | string | null
    status?: $Enums.StatusEnum
    author_id: bigint | number
    book_id: bigint | number
    description?: string | null
  }

  export type TagCreateManyCreated_by_userInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    updated_by_user_id?: bigint | number | null
    name: string
    status?: $Enums.StatusEnum
    description?: string | null
  }

  export type TagCreateManyUpdated_by_userInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    created_by_user_id: bigint | number
    updated_at?: Date | string | null
    name: string
    status?: $Enums.StatusEnum
    description?: string | null
  }

  export type BookTagCreateManyCreated_by_userInput = {
    id?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string | null
    updated_by_user_id?: bigint | number | null
    status?: $Enums.StatusEnum
    tag_id: bigint | number
    book_id: bigint | number
  }

  export type BookTagCreateManyUpdated_by_userInput = {
    id?: bigint | number
    created_at?: Date | string
    created_by_user_id: bigint | number
    updated_at?: Date | string | null
    status?: $Enums.StatusEnum
    tag_id: bigint | number
    book_id: bigint | number
  }

  export type LoanCreateManyCreated_by_userInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    updated_by_user_id?: bigint | number | null
    status?: $Enums.StatusEnum
    loan_date?: Date | string
    due_date?: Date | string
    return_date?: Date | string | null
    book_id: bigint | number
    user_id: bigint | number
  }

  export type LoanCreateManyUpdated_by_userInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    created_by_user_id: bigint | number
    updated_at?: Date | string | null
    status?: $Enums.StatusEnum
    loan_date?: Date | string
    due_date?: Date | string
    return_date?: Date | string | null
    book_id: bigint | number
    user_id: bigint | number
  }

  export type LoanCreateManyUserInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    created_by_user_id: bigint | number
    updated_at?: Date | string | null
    updated_by_user_id?: bigint | number | null
    status?: $Enums.StatusEnum
    loan_date?: Date | string
    due_date?: Date | string
    return_date?: Date | string | null
    book_id: bigint | number
  }

  export type UserAuthTokenUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_ip?: StringFieldUpdateOperationsInput | string
    last_used_ip?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    jwt_token?: StringFieldUpdateOperationsInput | string
    jwt_secret?: StringFieldUpdateOperationsInput | string
    keep?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserAuthTokenUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_ip?: StringFieldUpdateOperationsInput | string
    last_used_ip?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    jwt_token?: StringFieldUpdateOperationsInput | string
    jwt_secret?: StringFieldUpdateOperationsInput | string
    keep?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserAuthTokenUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_ip?: StringFieldUpdateOperationsInput | string
    last_used_ip?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    jwt_token?: StringFieldUpdateOperationsInput | string
    jwt_secret?: StringFieldUpdateOperationsInput | string
    keep?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AuthorUpdateWithoutCreated_by_userInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_spirit?: BoolFieldUpdateOperationsInput | boolean
    updated_by_user?: UserUpdateOneWithoutUpdated_authorsNestedInput
    books?: BookAuthorUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorUncheckedUpdateWithoutCreated_by_userInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_spirit?: BoolFieldUpdateOperationsInput | boolean
    books?: BookAuthorUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorUncheckedUpdateManyWithoutCreated_by_userInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_spirit?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AuthorUpdateWithoutUpdated_by_userInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_spirit?: BoolFieldUpdateOperationsInput | boolean
    created_by_user?: UserUpdateOneRequiredWithoutCreated_authorsNestedInput
    books?: BookAuthorUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorUncheckedUpdateWithoutUpdated_by_userInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_spirit?: BoolFieldUpdateOperationsInput | boolean
    books?: BookAuthorUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorUncheckedUpdateManyWithoutUpdated_by_userInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_spirit?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BookUpdateWithoutCreated_by_userInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    edition?: NullableStringFieldUpdateOperationsInput | string | null
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    pages?: NullableIntFieldUpdateOperationsInput | number | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
    cover_url?: NullableStringFieldUpdateOperationsInput | string | null
    images_url?: BookUpdateimages_urlInput | string[]
    keywords?: BookUpdatekeywordsInput | string[]
    label?: NullableStringFieldUpdateOperationsInput | string | null
    shelf?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by_user?: UserUpdateOneWithoutUpdated_booksNestedInput
    authors?: BookAuthorUpdateManyWithoutBookNestedInput
    tags?: BookTagUpdateManyWithoutBookNestedInput
    loans?: LoanUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutCreated_by_userInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    edition?: NullableStringFieldUpdateOperationsInput | string | null
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    pages?: NullableIntFieldUpdateOperationsInput | number | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
    cover_url?: NullableStringFieldUpdateOperationsInput | string | null
    images_url?: BookUpdateimages_urlInput | string[]
    keywords?: BookUpdatekeywordsInput | string[]
    label?: NullableStringFieldUpdateOperationsInput | string | null
    shelf?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    description?: NullableStringFieldUpdateOperationsInput | string | null
    authors?: BookAuthorUncheckedUpdateManyWithoutBookNestedInput
    tags?: BookTagUncheckedUpdateManyWithoutBookNestedInput
    loans?: LoanUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateManyWithoutCreated_by_userInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    edition?: NullableStringFieldUpdateOperationsInput | string | null
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    pages?: NullableIntFieldUpdateOperationsInput | number | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
    cover_url?: NullableStringFieldUpdateOperationsInput | string | null
    images_url?: BookUpdateimages_urlInput | string[]
    keywords?: BookUpdatekeywordsInput | string[]
    label?: NullableStringFieldUpdateOperationsInput | string | null
    shelf?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookUpdateWithoutUpdated_by_userInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    edition?: NullableStringFieldUpdateOperationsInput | string | null
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    pages?: NullableIntFieldUpdateOperationsInput | number | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
    cover_url?: NullableStringFieldUpdateOperationsInput | string | null
    images_url?: BookUpdateimages_urlInput | string[]
    keywords?: BookUpdatekeywordsInput | string[]
    label?: NullableStringFieldUpdateOperationsInput | string | null
    shelf?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_by_user?: UserUpdateOneRequiredWithoutCreated_booksNestedInput
    authors?: BookAuthorUpdateManyWithoutBookNestedInput
    tags?: BookTagUpdateManyWithoutBookNestedInput
    loans?: LoanUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutUpdated_by_userInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    edition?: NullableStringFieldUpdateOperationsInput | string | null
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    pages?: NullableIntFieldUpdateOperationsInput | number | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
    cover_url?: NullableStringFieldUpdateOperationsInput | string | null
    images_url?: BookUpdateimages_urlInput | string[]
    keywords?: BookUpdatekeywordsInput | string[]
    label?: NullableStringFieldUpdateOperationsInput | string | null
    shelf?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    description?: NullableStringFieldUpdateOperationsInput | string | null
    authors?: BookAuthorUncheckedUpdateManyWithoutBookNestedInput
    tags?: BookTagUncheckedUpdateManyWithoutBookNestedInput
    loans?: LoanUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateManyWithoutUpdated_by_userInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    edition?: NullableStringFieldUpdateOperationsInput | string | null
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    pages?: NullableIntFieldUpdateOperationsInput | number | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
    cover_url?: NullableStringFieldUpdateOperationsInput | string | null
    images_url?: BookUpdateimages_urlInput | string[]
    keywords?: BookUpdatekeywordsInput | string[]
    label?: NullableStringFieldUpdateOperationsInput | string | null
    shelf?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookAuthorUpdateWithoutCreated_by_userInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by_user?: UserUpdateOneWithoutUpdated_book_authorsNestedInput
    author?: AuthorUpdateOneRequiredWithoutBooksNestedInput
    book?: BookUpdateOneRequiredWithoutAuthorsNestedInput
  }

  export type BookAuthorUncheckedUpdateWithoutCreated_by_userInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    author_id?: BigIntFieldUpdateOperationsInput | bigint | number
    book_id?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookAuthorUncheckedUpdateManyWithoutCreated_by_userInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    author_id?: BigIntFieldUpdateOperationsInput | bigint | number
    book_id?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookAuthorUpdateWithoutUpdated_by_userInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_by_user?: UserUpdateOneRequiredWithoutCreated_book_authorsNestedInput
    author?: AuthorUpdateOneRequiredWithoutBooksNestedInput
    book?: BookUpdateOneRequiredWithoutAuthorsNestedInput
  }

  export type BookAuthorUncheckedUpdateWithoutUpdated_by_userInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    author_id?: BigIntFieldUpdateOperationsInput | bigint | number
    book_id?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookAuthorUncheckedUpdateManyWithoutUpdated_by_userInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    author_id?: BigIntFieldUpdateOperationsInput | bigint | number
    book_id?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TagUpdateWithoutCreated_by_userInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by_user?: UserUpdateOneWithoutUpdated_tagsNestedInput
    books?: BookTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateWithoutCreated_by_userInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    description?: NullableStringFieldUpdateOperationsInput | string | null
    books?: BookTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateManyWithoutCreated_by_userInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TagUpdateWithoutUpdated_by_userInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_by_user?: UserUpdateOneRequiredWithoutCreated_tagsNestedInput
    books?: BookTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateWithoutUpdated_by_userInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    description?: NullableStringFieldUpdateOperationsInput | string | null
    books?: BookTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateManyWithoutUpdated_by_userInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookTagUpdateWithoutCreated_by_userInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    updated_by_user?: UserUpdateOneWithoutUpdated_book_tagsNestedInput
    tag?: TagUpdateOneRequiredWithoutBooksNestedInput
    book?: BookUpdateOneRequiredWithoutTagsNestedInput
  }

  export type BookTagUncheckedUpdateWithoutCreated_by_userInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    tag_id?: BigIntFieldUpdateOperationsInput | bigint | number
    book_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type BookTagUncheckedUpdateManyWithoutCreated_by_userInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    tag_id?: BigIntFieldUpdateOperationsInput | bigint | number
    book_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type BookTagUpdateWithoutUpdated_by_userInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    created_by_user?: UserUpdateOneRequiredWithoutCreated_book_tagsNestedInput
    tag?: TagUpdateOneRequiredWithoutBooksNestedInput
    book?: BookUpdateOneRequiredWithoutTagsNestedInput
  }

  export type BookTagUncheckedUpdateWithoutUpdated_by_userInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    tag_id?: BigIntFieldUpdateOperationsInput | bigint | number
    book_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type BookTagUncheckedUpdateManyWithoutUpdated_by_userInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    tag_id?: BigIntFieldUpdateOperationsInput | bigint | number
    book_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type LoanUpdateWithoutCreated_by_userInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    loan_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    return_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by_user?: UserUpdateOneWithoutUpdated_loansNestedInput
    book?: BookUpdateOneRequiredWithoutLoansNestedInput
    user?: UserUpdateOneRequiredWithoutUser_loansNestedInput
  }

  export type LoanUncheckedUpdateWithoutCreated_by_userInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    loan_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    return_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    book_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type LoanUncheckedUpdateManyWithoutCreated_by_userInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    loan_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    return_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    book_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type LoanUpdateWithoutUpdated_by_userInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    loan_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    return_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by_user?: UserUpdateOneRequiredWithoutCreated_loansNestedInput
    book?: BookUpdateOneRequiredWithoutLoansNestedInput
    user?: UserUpdateOneRequiredWithoutUser_loansNestedInput
  }

  export type LoanUncheckedUpdateWithoutUpdated_by_userInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    loan_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    return_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    book_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type LoanUncheckedUpdateManyWithoutUpdated_by_userInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    loan_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    return_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    book_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type LoanUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    loan_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    return_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by_user?: UserUpdateOneRequiredWithoutCreated_loansNestedInput
    updated_by_user?: UserUpdateOneWithoutUpdated_loansNestedInput
    book?: BookUpdateOneRequiredWithoutLoansNestedInput
  }

  export type LoanUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    loan_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    return_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    book_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type LoanUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    loan_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    return_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    book_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type BookAuthorCreateManyAuthorInput = {
    id?: bigint | number
    created_at?: Date | string
    created_by_user_id: bigint | number
    updated_at?: Date | string | null
    updated_by_user_id?: bigint | number | null
    status?: $Enums.StatusEnum
    book_id: bigint | number
    description?: string | null
  }

  export type BookAuthorUpdateWithoutAuthorInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_by_user?: UserUpdateOneRequiredWithoutCreated_book_authorsNestedInput
    updated_by_user?: UserUpdateOneWithoutUpdated_book_authorsNestedInput
    book?: BookUpdateOneRequiredWithoutAuthorsNestedInput
  }

  export type BookAuthorUncheckedUpdateWithoutAuthorInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    book_id?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookAuthorUncheckedUpdateManyWithoutAuthorInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    book_id?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookTagCreateManyTagInput = {
    id?: bigint | number
    created_at?: Date | string
    created_by_user_id: bigint | number
    updated_at?: Date | string | null
    updated_by_user_id?: bigint | number | null
    status?: $Enums.StatusEnum
    book_id: bigint | number
  }

  export type BookTagUpdateWithoutTagInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    created_by_user?: UserUpdateOneRequiredWithoutCreated_book_tagsNestedInput
    updated_by_user?: UserUpdateOneWithoutUpdated_book_tagsNestedInput
    book?: BookUpdateOneRequiredWithoutTagsNestedInput
  }

  export type BookTagUncheckedUpdateWithoutTagInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    book_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type BookTagUncheckedUpdateManyWithoutTagInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    book_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type BookAuthorCreateManyBookInput = {
    id?: bigint | number
    created_at?: Date | string
    created_by_user_id: bigint | number
    updated_at?: Date | string | null
    updated_by_user_id?: bigint | number | null
    status?: $Enums.StatusEnum
    author_id: bigint | number
    description?: string | null
  }

  export type BookTagCreateManyBookInput = {
    id?: bigint | number
    created_at?: Date | string
    created_by_user_id: bigint | number
    updated_at?: Date | string | null
    updated_by_user_id?: bigint | number | null
    status?: $Enums.StatusEnum
    tag_id: bigint | number
  }

  export type LoanCreateManyBookInput = {
    id?: bigint | number
    slug?: string
    created_at?: Date | string
    created_by_user_id: bigint | number
    updated_at?: Date | string | null
    updated_by_user_id?: bigint | number | null
    status?: $Enums.StatusEnum
    loan_date?: Date | string
    due_date?: Date | string
    return_date?: Date | string | null
    user_id: bigint | number
  }

  export type BookAuthorUpdateWithoutBookInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_by_user?: UserUpdateOneRequiredWithoutCreated_book_authorsNestedInput
    updated_by_user?: UserUpdateOneWithoutUpdated_book_authorsNestedInput
    author?: AuthorUpdateOneRequiredWithoutBooksNestedInput
  }

  export type BookAuthorUncheckedUpdateWithoutBookInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    author_id?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookAuthorUncheckedUpdateManyWithoutBookInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    author_id?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookTagUpdateWithoutBookInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    created_by_user?: UserUpdateOneRequiredWithoutCreated_book_tagsNestedInput
    updated_by_user?: UserUpdateOneWithoutUpdated_book_tagsNestedInput
    tag?: TagUpdateOneRequiredWithoutBooksNestedInput
  }

  export type BookTagUncheckedUpdateWithoutBookInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    tag_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type BookTagUncheckedUpdateManyWithoutBookInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    tag_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type LoanUpdateWithoutBookInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    loan_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    return_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by_user?: UserUpdateOneRequiredWithoutCreated_loansNestedInput
    updated_by_user?: UserUpdateOneWithoutUpdated_loansNestedInput
    user?: UserUpdateOneRequiredWithoutUser_loansNestedInput
  }

  export type LoanUncheckedUpdateWithoutBookInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    loan_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    return_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type LoanUncheckedUpdateManyWithoutBookInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
    loan_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    return_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
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