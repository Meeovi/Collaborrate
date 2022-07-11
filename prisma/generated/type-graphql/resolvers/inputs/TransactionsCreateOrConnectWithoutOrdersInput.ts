import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TransactionsCreateWithoutOrdersInput } from "../inputs/TransactionsCreateWithoutOrdersInput";
import { TransactionsWhereUniqueInput } from "../inputs/TransactionsWhereUniqueInput";

@TypeGraphQL.InputType("TransactionsCreateOrConnectWithoutOrdersInput", {
  isAbstract: true
})
export class TransactionsCreateOrConnectWithoutOrdersInput {
  @TypeGraphQL.Field(_type => TransactionsWhereUniqueInput, {
    nullable: false
  })
  where!: TransactionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => TransactionsCreateWithoutOrdersInput, {
    nullable: false
  })
  create!: TransactionsCreateWithoutOrdersInput;
}
