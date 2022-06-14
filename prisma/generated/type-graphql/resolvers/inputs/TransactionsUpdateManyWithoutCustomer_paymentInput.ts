import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TransactionsCreateManyCustomer_paymentInputEnvelope } from "../inputs/TransactionsCreateManyCustomer_paymentInputEnvelope";
import { TransactionsCreateOrConnectWithoutCustomer_paymentInput } from "../inputs/TransactionsCreateOrConnectWithoutCustomer_paymentInput";
import { TransactionsCreateWithoutCustomer_paymentInput } from "../inputs/TransactionsCreateWithoutCustomer_paymentInput";
import { TransactionsScalarWhereInput } from "../inputs/TransactionsScalarWhereInput";
import { TransactionsUpdateManyWithWhereWithoutCustomer_paymentInput } from "../inputs/TransactionsUpdateManyWithWhereWithoutCustomer_paymentInput";
import { TransactionsUpdateWithWhereUniqueWithoutCustomer_paymentInput } from "../inputs/TransactionsUpdateWithWhereUniqueWithoutCustomer_paymentInput";
import { TransactionsUpsertWithWhereUniqueWithoutCustomer_paymentInput } from "../inputs/TransactionsUpsertWithWhereUniqueWithoutCustomer_paymentInput";
import { TransactionsWhereUniqueInput } from "../inputs/TransactionsWhereUniqueInput";

@TypeGraphQL.InputType("TransactionsUpdateManyWithoutCustomer_paymentInput", {
  isAbstract: true
})
export class TransactionsUpdateManyWithoutCustomer_paymentInput {
  @TypeGraphQL.Field(_type => [TransactionsCreateWithoutCustomer_paymentInput], {
    nullable: true
  })
  create?: TransactionsCreateWithoutCustomer_paymentInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionsCreateOrConnectWithoutCustomer_paymentInput], {
    nullable: true
  })
  connectOrCreate?: TransactionsCreateOrConnectWithoutCustomer_paymentInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionsUpsertWithWhereUniqueWithoutCustomer_paymentInput], {
    nullable: true
  })
  upsert?: TransactionsUpsertWithWhereUniqueWithoutCustomer_paymentInput[] | undefined;

  @TypeGraphQL.Field(_type => TransactionsCreateManyCustomer_paymentInputEnvelope, {
    nullable: true
  })
  createMany?: TransactionsCreateManyCustomer_paymentInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TransactionsWhereUniqueInput], {
    nullable: true
  })
  set?: TransactionsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TransactionsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionsWhereUniqueInput], {
    nullable: true
  })
  delete?: TransactionsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionsWhereUniqueInput], {
    nullable: true
  })
  connect?: TransactionsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionsUpdateWithWhereUniqueWithoutCustomer_paymentInput], {
    nullable: true
  })
  update?: TransactionsUpdateWithWhereUniqueWithoutCustomer_paymentInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionsUpdateManyWithWhereWithoutCustomer_paymentInput], {
    nullable: true
  })
  updateMany?: TransactionsUpdateManyWithWhereWithoutCustomer_paymentInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TransactionsScalarWhereInput[] | undefined;
}
