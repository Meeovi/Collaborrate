import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TransactionsCreateWithoutOrdersInput } from "../inputs/TransactionsCreateWithoutOrdersInput";
import { TransactionsUpdateWithoutOrdersInput } from "../inputs/TransactionsUpdateWithoutOrdersInput";
import { TransactionsWhereUniqueInput } from "../inputs/TransactionsWhereUniqueInput";

@TypeGraphQL.InputType("TransactionsUpsertWithWhereUniqueWithoutOrdersInput", {
  isAbstract: true
})
export class TransactionsUpsertWithWhereUniqueWithoutOrdersInput {
  @TypeGraphQL.Field(_type => TransactionsWhereUniqueInput, {
    nullable: false
  })
  where!: TransactionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => TransactionsUpdateWithoutOrdersInput, {
    nullable: false
  })
  update!: TransactionsUpdateWithoutOrdersInput;

  @TypeGraphQL.Field(_type => TransactionsCreateWithoutOrdersInput, {
    nullable: false
  })
  create!: TransactionsCreateWithoutOrdersInput;
}
