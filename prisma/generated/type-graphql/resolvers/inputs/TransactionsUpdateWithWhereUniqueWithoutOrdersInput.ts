import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TransactionsUpdateWithoutOrdersInput } from "../inputs/TransactionsUpdateWithoutOrdersInput";
import { TransactionsWhereUniqueInput } from "../inputs/TransactionsWhereUniqueInput";

@TypeGraphQL.InputType("TransactionsUpdateWithWhereUniqueWithoutOrdersInput", {
  isAbstract: true
})
export class TransactionsUpdateWithWhereUniqueWithoutOrdersInput {
  @TypeGraphQL.Field(_type => TransactionsWhereUniqueInput, {
    nullable: false
  })
  where!: TransactionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => TransactionsUpdateWithoutOrdersInput, {
    nullable: false
  })
  data!: TransactionsUpdateWithoutOrdersInput;
}
