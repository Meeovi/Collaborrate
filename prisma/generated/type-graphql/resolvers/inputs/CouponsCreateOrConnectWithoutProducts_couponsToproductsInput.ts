import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CouponsCreateWithoutProducts_couponsToproductsInput } from "../inputs/CouponsCreateWithoutProducts_couponsToproductsInput";
import { CouponsWhereUniqueInput } from "../inputs/CouponsWhereUniqueInput";

@TypeGraphQL.InputType("CouponsCreateOrConnectWithoutProducts_couponsToproductsInput", {
  isAbstract: true
})
export class CouponsCreateOrConnectWithoutProducts_couponsToproductsInput {
  @TypeGraphQL.Field(_type => CouponsWhereUniqueInput, {
    nullable: false
  })
  where!: CouponsWhereUniqueInput;

  @TypeGraphQL.Field(_type => CouponsCreateWithoutProducts_couponsToproductsInput, {
    nullable: false
  })
  create!: CouponsCreateWithoutProducts_couponsToproductsInput;
}
