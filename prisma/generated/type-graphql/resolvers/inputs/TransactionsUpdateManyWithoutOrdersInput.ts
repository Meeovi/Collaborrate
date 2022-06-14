import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TransactionsCreateManyOrdersInputEnvelope } from "../inputs/TransactionsCreateManyOrdersInputEnvelope";
import { TransactionsCreateOrConnectWithoutOrdersInput } from "../inputs/TransactionsCreateOrConnectWithoutOrdersInput";
import { TransactionsCreateWithoutOrdersInput } from "../inputs/TransactionsCreateWithoutOrdersInput";
import { TransactionsScalarWhereInput } from "../inputs/TransactionsScalarWhereInput";
import { TransactionsUpdateManyWithWhereWithoutOrdersInput } from "../inputs/TransactionsUpdateManyWithWhereWithoutOrdersInput";
import { TransactionsUpdateWithWhereUniqueWithoutOrdersInput } from "../inputs/TransactionsUpdateWithWhereUniqueWithoutOrdersInput";
import { TransactionsUpsertWithWhereUniqueWithoutOrdersInput } from "../inputs/TransactionsUpsertWithWhereUniqueWithoutOrdersInput";
import { TransactionsWhereUniqueInput } from "../inputs/TransactionsWhereUniqueInput";

@TypeGraphQL.InputType("TransactionsUpdateManyWithoutOrdersInput", {
  isAbstract: true
})
export class TransactionsUpdateManyWithoutOrdersInput {
  @TypeGraphQL.Field(_type => [TransactionsCreateWithoutOrdersInput], {
    nullable: true
  })
  create?: TransactionsCreateWithoutOrdersInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionsCreateOrConnectWithoutOrdersInput], {
    nullable: true
  })
  connectOrCreate?: TransactionsCreateOrConnectWithoutOrdersInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionsUpsertWithWhereUniqueWithoutOrdersInput], {
    nullable: true
  })
  upsert?: TransactionsUpsertWithWhereUniqueWithoutOrdersInput[] | undefined;

  @TypeGraphQL.Field(_type => TransactionsCreateManyOrdersInputEnvelope, {
    nullable: true
  })
  createMany?: TransactionsCreateManyOrdersInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [TransactionsUpdateWithWhereUniqueWithoutOrdersInput], {
    nullable: true
  })
  update?: TransactionsUpdateWithWhereUniqueWithoutOrdersInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionsUpdateManyWithWhereWithoutOrdersInput], {
    nullable: true
  })
  updateMany?: TransactionsUpdateManyWithWhereWithoutOrdersInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TransactionsScalarWhereInput[] | undefined;
}
