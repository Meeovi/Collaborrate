import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RatingCreateWithoutProductsInput } from "../inputs/RatingCreateWithoutProductsInput";
import { RatingUpdateWithoutProductsInput } from "../inputs/RatingUpdateWithoutProductsInput";
import { RatingWhereUniqueInput } from "../inputs/RatingWhereUniqueInput";

@TypeGraphQL.InputType("RatingUpsertWithWhereUniqueWithoutProductsInput", {
  isAbstract: true
})
export class RatingUpsertWithWhereUniqueWithoutProductsInput {
  @TypeGraphQL.Field(_type => RatingWhereUniqueInput, {
    nullable: false
  })
  where!: RatingWhereUniqueInput;

  @TypeGraphQL.Field(_type => RatingUpdateWithoutProductsInput, {
    nullable: false
  })
  update!: RatingUpdateWithoutProductsInput;

  @TypeGraphQL.Field(_type => RatingCreateWithoutProductsInput, {
    nullable: false
  })
  create!: RatingCreateWithoutProductsInput;
}
