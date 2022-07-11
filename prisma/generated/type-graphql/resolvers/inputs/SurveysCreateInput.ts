import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("SurveysCreateInput", {
  isAbstract: true
})
export class SurveysCreateInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  id?: bigint | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  assigned_to?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  question?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  answer?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  submit_text?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  satisfied_text?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  neither_text?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dissatisfied_text?: string | undefined;
}
