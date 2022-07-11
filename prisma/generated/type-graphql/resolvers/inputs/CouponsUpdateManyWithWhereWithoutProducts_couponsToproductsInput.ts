import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CouponsScalarWhereInput } from "../inputs/CouponsScalarWhereInput";
import { CouponsUpdateManyMutationInput } from "../inputs/CouponsUpdateManyMutationInput";

@TypeGraphQL.InputType("CouponsUpdateManyWithWhereWithoutProducts_couponsToproductsInput", {
  isAbstract: true
})
export class CouponsUpdateManyWithWhereWithoutProducts_couponsToproductsInput {
  @TypeGraphQL.Field(_type => CouponsScalarWhereInput, {
    nullable: false
  })
  where!: CouponsScalarWhereInput;

  @TypeGraphQL.Field(_type => CouponsUpdateManyMutationInput, {
    nullable: false
  })
  data!: CouponsUpdateManyMutationInput;
}
