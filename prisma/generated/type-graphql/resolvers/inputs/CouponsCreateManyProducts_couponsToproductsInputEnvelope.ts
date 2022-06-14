import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CouponsCreateManyProducts_couponsToproductsInput } from "../inputs/CouponsCreateManyProducts_couponsToproductsInput";

@TypeGraphQL.InputType("CouponsCreateManyProducts_couponsToproductsInputEnvelope", {
  isAbstract: true
})
export class CouponsCreateManyProducts_couponsToproductsInputEnvelope {
  @TypeGraphQL.Field(_type => [CouponsCreateManyProducts_couponsToproductsInput], {
    nullable: false
  })
  data!: CouponsCreateManyProducts_couponsToproductsInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
