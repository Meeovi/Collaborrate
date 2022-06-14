import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TransactionsCreateManyOrdersInputEnvelope } from "../inputs/TransactionsCreateManyOrdersInputEnvelope";
import { TransactionsCreateOrConnectWithoutOrdersInput } from "../inputs/TransactionsCreateOrConnectWithoutOrdersInput";
import { TransactionsCreateWithoutOrdersInput } from "../inputs/TransactionsCreateWithoutOrdersInput";
import { TransactionsWhereUniqueInput } from "../inputs/TransactionsWhereUniqueInput";

@TypeGraphQL.InputType("TransactionsCreateNestedManyWithoutOrdersInput", {
  isAbstract: true
})
export class TransactionsCreateNestedManyWithoutOrdersInput {
  @TypeGraphQL.Field(_type => [TransactionsCreateWithoutOrdersInput], {
    nullable: true
  })
  create?: TransactionsCreateWithoutOrdersInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionsCreateOrConnectWithoutOrdersInput], {
    nullable: true
  })
  connectOrCreate?: TransactionsCreateOrConnectWithoutOrdersInput[] | undefined;

  @TypeGraphQL.Field(_type => TransactionsCreateManyOrdersInputEnvelope, {
    nullable: true
  })
  createMany?: TransactionsCreateManyOrdersInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TransactionsWhereUniqueInput], {
    nullable: true
  })
  connect?: TransactionsWhereUniqueInput[] | undefined;
}
