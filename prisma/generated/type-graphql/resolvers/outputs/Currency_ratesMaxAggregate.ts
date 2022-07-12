import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("Currency_ratesMaxAggregate", {
  isAbstract: true
})
export class Currency_ratesMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  import_service!: string | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  usd!: Prisma.Decimal | null;
}