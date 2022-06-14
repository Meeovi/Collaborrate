import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("VisitsCreateManyInput", {
  isAbstract: true
})
export class VisitsCreateManyInput {
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
  location?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  username?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  reason?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  content?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  emergency?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  start_date?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  end_date?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  task?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meeting?: string | undefined;
}
