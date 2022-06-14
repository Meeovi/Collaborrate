import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("Surveys", {
  isAbstract: true
})
export class Surveys {
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
  name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  assigned_to?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  question?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  answer?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  submit_text?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  satisfied_text?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  neither_text?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dissatisfied_text?: string | null;
}
