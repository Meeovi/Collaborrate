import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("DeepdiveCreateManyInput", {
  isAbstract: true
})
export class DeepdiveCreateManyInput {
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
  end_date?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  content?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  attendees?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  login?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  start_date?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  whid?: string | undefined;
}
