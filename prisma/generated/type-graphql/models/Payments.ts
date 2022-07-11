import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("Payments", {
  isAbstract: true
})
export class Payments {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  id!: bigint;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  client_id?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  client_secret?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  host_uri?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  redirect_url?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  redirect_url_app?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  icon?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  active?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  country?: string | null;
}
