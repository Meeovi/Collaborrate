import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CouponsCreateManyProducts_couponsToproductsInputEnvelope } from "../inputs/CouponsCreateManyProducts_couponsToproductsInputEnvelope";
import { CouponsCreateOrConnectWithoutProducts_couponsToproductsInput } from "../inputs/CouponsCreateOrConnectWithoutProducts_couponsToproductsInput";
import { CouponsCreateWithoutProducts_couponsToproductsInput } from "../inputs/CouponsCreateWithoutProducts_couponsToproductsInput";
import { CouponsScalarWhereInput } from "../inputs/CouponsScalarWhereInput";
import { CouponsUpdateManyWithWhereWithoutProducts_couponsToproductsInput } from "../inputs/CouponsUpdateManyWithWhereWithoutProducts_couponsToproductsInput";
import { CouponsUpdateWithWhereUniqueWithoutProducts_couponsToproductsInput } from "../inputs/CouponsUpdateWithWhereUniqueWithoutProducts_couponsToproductsInput";
import { CouponsUpsertWithWhereUniqueWithoutProducts_couponsToproductsInput } from "../inputs/CouponsUpsertWithWhereUniqueWithoutProducts_couponsToproductsInput";
import { CouponsWhereUniqueInput } from "../inputs/CouponsWhereUniqueInput";

@TypeGraphQL.InputType("CouponsUpdateManyWithoutProducts_couponsToproductsNestedInput", {
  isAbstract: true
})
export class CouponsUpdateManyWithoutProducts_couponsToproductsNestedInput {
  @TypeGraphQL.Field(_type => [CouponsCreateWithoutProducts_couponsToproductsInput], {
    nullable: true
  })
  create?: CouponsCreateWithoutProducts_couponsToproductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [CouponsCreateOrConnectWithoutProducts_couponsToproductsInput], {
    nullable: true
  })
  connectOrCreate?: CouponsCreateOrConnectWithoutProducts_couponsToproductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [CouponsUpsertWithWhereUniqueWithoutProducts_couponsToproductsInput], {
    nullable: true
  })
  upsert?: CouponsUpsertWithWhereUniqueWithoutProducts_couponsToproductsInput[] | undefined;

  @TypeGraphQL.Field(_type => CouponsCreateManyProducts_couponsToproductsInputEnvelope, {
    nullable: true
  })
  createMany?: CouponsCreateManyProducts_couponsToproductsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CouponsWhereUniqueInput], {
    nullable: true
  })
  set?: CouponsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CouponsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CouponsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CouponsWhereUniqueInput], {
    nullable: true
  })
  delete?: CouponsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CouponsWhereUniqueInput], {
    nullable: true
  })
  connect?: CouponsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CouponsUpdateWithWhereUniqueWithoutProducts_couponsToproductsInput], {
    nullable: true
  })
  update?: CouponsUpdateWithWhereUniqueWithoutProducts_couponsToproductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [CouponsUpdateManyWithWhereWithoutProducts_couponsToproductsInput], {
    nullable: true
  })
  updateMany?: CouponsUpdateManyWithWhereWithoutProducts_couponsToproductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [CouponsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CouponsScalarWhereInput[] | undefined;
}
