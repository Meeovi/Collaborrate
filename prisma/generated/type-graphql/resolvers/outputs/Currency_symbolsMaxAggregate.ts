import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("Currency_symbolsMaxAggregate", {
  isAbstract: true
})
export class Currency_symbolsMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  symbol!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  use_standard!: boolean | null;
}
