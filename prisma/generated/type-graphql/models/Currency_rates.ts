import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("Currency_rates", {
  isAbstract: true
})
export class Currency_rates {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  import_service!: string;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  usd?: Prisma.Decimal | null;
}
