import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("Currency_symbolsCreateManyInput", {
  isAbstract: true
})
export class Currency_symbolsCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  symbol!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  use_standard?: boolean | undefined;
}
