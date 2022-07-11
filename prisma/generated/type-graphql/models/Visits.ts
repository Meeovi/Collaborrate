import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("Visits", {
  isAbstract: true
})
export class Visits {
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
  location?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  username?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  reason?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  content?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  emergency?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  start_date?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  end_date?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  task?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meeting?: string | null;
}
