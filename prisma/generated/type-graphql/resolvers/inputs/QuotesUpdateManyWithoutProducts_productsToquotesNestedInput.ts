import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { QuotesCreateManyProducts_productsToquotesInputEnvelope } from "../inputs/QuotesCreateManyProducts_productsToquotesInputEnvelope";
import { QuotesCreateOrConnectWithoutProducts_productsToquotesInput } from "../inputs/QuotesCreateOrConnectWithoutProducts_productsToquotesInput";
import { QuotesCreateWithoutProducts_productsToquotesInput } from "../inputs/QuotesCreateWithoutProducts_productsToquotesInput";
import { QuotesScalarWhereInput } from "../inputs/QuotesScalarWhereInput";
import { QuotesUpdateManyWithWhereWithoutProducts_productsToquotesInput } from "../inputs/QuotesUpdateManyWithWhereWithoutProducts_productsToquotesInput";
import { QuotesUpdateWithWhereUniqueWithoutProducts_productsToquotesInput } from "../inputs/QuotesUpdateWithWhereUniqueWithoutProducts_productsToquotesInput";
import { QuotesUpsertWithWhereUniqueWithoutProducts_productsToquotesInput } from "../inputs/QuotesUpsertWithWhereUniqueWithoutProducts_productsToquotesInput";
import { QuotesWhereUniqueInput } from "../inputs/QuotesWhereUniqueInput";

@TypeGraphQL.InputType("QuotesUpdateManyWithoutProducts_productsToquotesNestedInput", {
  isAbstract: true
})
export class QuotesUpdateManyWithoutProducts_productsToquotesNestedInput {
  @TypeGraphQL.Field(_type => [QuotesCreateWithoutProducts_productsToquotesInput], {
    nullable: true
  })
  create?: QuotesCreateWithoutProducts_productsToquotesInput[] | undefined;

  @TypeGraphQL.Field(_type => [QuotesCreateOrConnectWithoutProducts_productsToquotesInput], {
    nullable: true
  })
  connectOrCreate?: QuotesCreateOrConnectWithoutProducts_productsToquotesInput[] | undefined;

  @TypeGraphQL.Field(_type => [QuotesUpsertWithWhereUniqueWithoutProducts_productsToquotesInput], {
    nullable: true
  })
  upsert?: QuotesUpsertWithWhereUniqueWithoutProducts_productsToquotesInput[] | undefined;

  @TypeGraphQL.Field(_type => QuotesCreateManyProducts_productsToquotesInputEnvelope, {
    nullable: true
  })
  createMany?: QuotesCreateManyProducts_productsToquotesInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [QuotesUpdateWithWhereUniqueWithoutProducts_productsToquotesInput], {
    nullable: true
  })
  update?: QuotesUpdateWithWhereUniqueWithoutProducts_productsToquotesInput[] | undefined;

  @TypeGraphQL.Field(_type => [QuotesUpdateManyWithWhereWithoutProducts_productsToquotesInput], {
    nullable: true
  })
  updateMany?: QuotesUpdateManyWithWhereWithoutProducts_productsToquotesInput[] | undefined;

  @TypeGraphQL.Field(_type => [QuotesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: QuotesScalarWhereInput[] | undefined;
}
