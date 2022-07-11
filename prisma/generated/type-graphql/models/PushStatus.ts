import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("PushStatus", {
  isAbstract: true
})
export class PushStatus {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  objectId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  pushTime?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  source?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  query?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  payload?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  expiry?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  expiration_interval?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  numSent?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  numFailed?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  pushHash?: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  errorMessage?: Prisma.JsonValue | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  sentPerType?: Prisma.JsonValue | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  failedPerType?: Prisma.JsonValue | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  sentPerUTCOffset?: Prisma.JsonValue | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  failedPerUTCOffset?: Prisma.JsonValue | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  count?: number | null;

  @TypeGraphQL.Field(_type => [String], {
    nullable: false
  })
  rperm!: string[];

  @TypeGraphQL.Field(_type => [String], {
    nullable: false
  })
  wperm!: string[];
}
