import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("Currency_ratesCreateInput", {
  isAbstract: true
})
export class Currency_ratesCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  import_service!: string;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  usd?: Prisma.Decimal | undefined;
}
