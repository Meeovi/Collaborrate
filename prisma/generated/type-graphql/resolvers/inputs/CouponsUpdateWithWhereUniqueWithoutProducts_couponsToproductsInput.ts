import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CouponsUpdateWithoutProducts_couponsToproductsInput } from "../inputs/CouponsUpdateWithoutProducts_couponsToproductsInput";
import { CouponsWhereUniqueInput } from "../inputs/CouponsWhereUniqueInput";

@TypeGraphQL.InputType("CouponsUpdateWithWhereUniqueWithoutProducts_couponsToproductsInput", {
  isAbstract: true
})
export class CouponsUpdateWithWhereUniqueWithoutProducts_couponsToproductsInput {
  @TypeGraphQL.Field(_type => CouponsWhereUniqueInput, {
    nullable: false
  })
  where!: CouponsWhereUniqueInput;

  @TypeGraphQL.Field(_type => CouponsUpdateWithoutProducts_couponsToproductsInput, {
    nullable: false
  })
  data!: CouponsUpdateWithoutProducts_couponsToproductsInput;
}
