import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RatingUpdateWithoutProductsInput } from "../inputs/RatingUpdateWithoutProductsInput";
import { RatingWhereUniqueInput } from "../inputs/RatingWhereUniqueInput";

@TypeGraphQL.InputType("RatingUpdateWithWhereUniqueWithoutProductsInput", {
  isAbstract: true
})
export class RatingUpdateWithWhereUniqueWithoutProductsInput {
  @TypeGraphQL.Field(_type => RatingWhereUniqueInput, {
    nullable: false
  })
  where!: RatingWhereUniqueInput;

  @TypeGraphQL.Field(_type => RatingUpdateWithoutProductsInput, {
    nullable: false
  })
  data!: RatingUpdateWithoutProductsInput;
}
