import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { QuotesCreateManyCustomers_customersToquotesInputEnvelope } from "../inputs/QuotesCreateManyCustomers_customersToquotesInputEnvelope";
import { QuotesCreateOrConnectWithoutCustomers_customersToquotesInput } from "../inputs/QuotesCreateOrConnectWithoutCustomers_customersToquotesInput";
import { QuotesCreateWithoutCustomers_customersToquotesInput } from "../inputs/QuotesCreateWithoutCustomers_customersToquotesInput";
import { QuotesScalarWhereInput } from "../inputs/QuotesScalarWhereInput";
import { QuotesUpdateManyWithWhereWithoutCustomers_customersToquotesInput } from "../inputs/QuotesUpdateManyWithWhereWithoutCustomers_customersToquotesInput";
import { QuotesUpdateWithWhereUniqueWithoutCustomers_customersToquotesInput } from "../inputs/QuotesUpdateWithWhereUniqueWithoutCustomers_customersToquotesInput";
import { QuotesUpsertWithWhereUniqueWithoutCustomers_customersToquotesInput } from "../inputs/QuotesUpsertWithWhereUniqueWithoutCustomers_customersToquotesInput";
import { QuotesWhereUniqueInput } from "../inputs/QuotesWhereUniqueInput";

@TypeGraphQL.InputType("QuotesUpdateManyWithoutCustomers_customersToquotesInput", {
  isAbstract: true
})
export class QuotesUpdateManyWithoutCustomers_customersToquotesInput {
  @TypeGraphQL.Field(_type => [QuotesCreateWithoutCustomers_customersToquotesInput], {
    nullable: true
  })
  create?: QuotesCreateWithoutCustomers_customersToquotesInput[] | undefined;

  @TypeGraphQL.Field(_type => [QuotesCreateOrConnectWithoutCustomers_customersToquotesInput], {
    nullable: true
  })
  connectOrCreate?: QuotesCreateOrConnectWithoutCustomers_customersToquotesInput[] | undefined;

  @TypeGraphQL.Field(_type => [QuotesUpsertWithWhereUniqueWithoutCustomers_customersToquotesInput], {
    nullable: true
  })
  upsert?: QuotesUpsertWithWhereUniqueWithoutCustomers_customersToquotesInput[] | undefined;

  @TypeGraphQL.Field(_type => QuotesCreateManyCustomers_customersToquotesInputEnvelope, {
    nullable: true
  })
  createMany?: QuotesCreateManyCustomers_customersToquotesInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [QuotesUpdateWithWhereUniqueWithoutCustomers_customersToquotesInput], {
    nullable: true
  })
  update?: QuotesUpdateWithWhereUniqueWithoutCustomers_customersToquotesInput[] | undefined;

  @TypeGraphQL.Field(_type => [QuotesUpdateManyWithWhereWithoutCustomers_customersToquotesInput], {
    nullable: true
  })
  updateMany?: QuotesUpdateManyWithWhereWithoutCustomers_customersToquotesInput[] | undefined;

  @TypeGraphQL.Field(_type => [QuotesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: QuotesScalarWhereInput[] | undefined;
}
