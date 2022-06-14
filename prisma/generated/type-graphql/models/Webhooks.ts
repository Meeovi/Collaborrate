import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("Webhooks", {
  isAbstract: true
})
export class Webhooks {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  id!: bigint;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  url!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  headers?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  create?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  retrieve?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  update?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  delete?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  publish?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  unpublish?: string | null;
}
