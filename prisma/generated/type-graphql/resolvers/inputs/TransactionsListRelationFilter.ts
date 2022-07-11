import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TransactionsWhereInput } from "../inputs/TransactionsWhereInput";

@TypeGraphQL.InputType("TransactionsListRelationFilter", {
  isAbstract: true
})
export class TransactionsListRelationFilter {
  @TypeGraphQL.Field(_type => TransactionsWhereInput, {
    nullable: true
  })
  every?: TransactionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => TransactionsWhereInput, {
    nullable: true
  })
  some?: TransactionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => TransactionsWhereInput, {
    nullable: true
  })
  none?: TransactionsWhereInput | undefined;
}
