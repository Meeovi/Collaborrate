import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { QuotesCreateManyOrdersInputEnvelope } from "../inputs/QuotesCreateManyOrdersInputEnvelope";
import { QuotesCreateOrConnectWithoutOrdersInput } from "../inputs/QuotesCreateOrConnectWithoutOrdersInput";
import { QuotesCreateWithoutOrdersInput } from "../inputs/QuotesCreateWithoutOrdersInput";
import { QuotesScalarWhereInput } from "../inputs/QuotesScalarWhereInput";
import { QuotesUpdateManyWithWhereWithoutOrdersInput } from "../inputs/QuotesUpdateManyWithWhereWithoutOrdersInput";
import { QuotesUpdateWithWhereUniqueWithoutOrdersInput } from "../inputs/QuotesUpdateWithWhereUniqueWithoutOrdersInput";
import { QuotesUpsertWithWhereUniqueWithoutOrdersInput } from "../inputs/QuotesUpsertWithWhereUniqueWithoutOrdersInput";
import { QuotesWhereUniqueInput } from "../inputs/QuotesWhereUniqueInput";

@TypeGraphQL.InputType("QuotesUpdateManyWithoutOrdersInput", {
  isAbstract: true
})
export class QuotesUpdateManyWithoutOrdersInput {
  @TypeGraphQL.Field(_type => [QuotesCreateWithoutOrdersInput], {
    nullable: true
  })
  create?: QuotesCreateWithoutOrdersInput[] | undefined;

  @TypeGraphQL.Field(_type => [QuotesCreateOrConnectWithoutOrdersInput], {
    nullable: true
  })
  connectOrCreate?: QuotesCreateOrConnectWithoutOrdersInput[] | undefined;

  @TypeGraphQL.Field(_type => [QuotesUpsertWithWhereUniqueWithoutOrdersInput], {
    nullable: true
  })
  upsert?: QuotesUpsertWithWhereUniqueWithoutOrdersInput[] | undefined;

  @TypeGraphQL.Field(_type => QuotesCreateManyOrdersInputEnvelope, {
    nullable: true
  })
  createMany?: QuotesCreateManyOrdersInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [QuotesWhereUniqueInput], {
    nullable: true
  })
  set?: QuotesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [QuotesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: QuotesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [QuotesWhereUniqueInput], {
    nullable: true
  })
  delete?: QuotesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [QuotesWhereUniqueInput], {
    nullable: true
  })
  connect?: QuotesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [QuotesUpdateWithWhereUniqueWithoutOrdersInput], {
    nullable: true
  })
  update?: QuotesUpdateWithWhereUniqueWithoutOrdersInput[] | undefined;

  @TypeGraphQL.Field(_type => [QuotesUpdateManyWithWhereWithoutOrdersInput], {
    nullable: true
  })
  updateMany?: QuotesUpdateManyWithWhereWithoutOrdersInput[] | undefined;

  @TypeGraphQL.Field(_type => [QuotesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: QuotesScalarWhereInput[] | undefined;
}
