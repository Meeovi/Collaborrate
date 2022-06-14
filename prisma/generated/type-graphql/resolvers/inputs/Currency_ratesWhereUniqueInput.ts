import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("Currency_ratesWhereUniqueInput", {
  isAbstract: true
})
export class Currency_ratesWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  import_service?: string | undefined;
}
