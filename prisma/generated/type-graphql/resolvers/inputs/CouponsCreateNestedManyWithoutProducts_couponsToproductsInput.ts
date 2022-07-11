import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CouponsCreateManyProducts_couponsToproductsInputEnvelope } from "../inputs/CouponsCreateManyProducts_couponsToproductsInputEnvelope";
import { CouponsCreateOrConnectWithoutProducts_couponsToproductsInput } from "../inputs/CouponsCreateOrConnectWithoutProducts_couponsToproductsInput";
import { CouponsCreateWithoutProducts_couponsToproductsInput } from "../inputs/CouponsCreateWithoutProducts_couponsToproductsInput";
import { CouponsWhereUniqueInput } from "../inputs/CouponsWhereUniqueInput";

@TypeGraphQL.InputType("CouponsCreateNestedManyWithoutProducts_couponsToproductsInput", {
  isAbstract: true
})
export class CouponsCreateNestedManyWithoutProducts_couponsToproductsInput {
  @TypeGraphQL.Field(_type => [CouponsCreateWithoutProducts_couponsToproductsInput], {
    nullable: true
  })
  create?: CouponsCreateWithoutProducts_couponsToproductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [CouponsCreateOrConnectWithoutProducts_couponsToproductsInput], {
    nullable: true
  })
  connectOrCreate?: CouponsCreateOrConnectWithoutProducts_couponsToproductsInput[] | undefined;

  @TypeGraphQL.Field(_type => CouponsCreateManyProducts_couponsToproductsInputEnvelope, {
    nullable: true
  })
  createMany?: CouponsCreateManyProducts_couponsToproductsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CouponsWhereUniqueInput], {
    nullable: true
  })
  connect?: CouponsWhereUniqueInput[] | undefined;
}
