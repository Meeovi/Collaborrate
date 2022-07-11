import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("EndofshiftCreateInput", {
  isAbstract: true
})
export class EndofshiftCreateInput {
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
  content?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  login?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  mcms?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  next_shift?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  projects?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tickets?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  whid?: string | undefined;
}
