import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RatingCreateWithoutProductsInput } from "../inputs/RatingCreateWithoutProductsInput";
import { RatingWhereUniqueInput } from "../inputs/RatingWhereUniqueInput";

@TypeGraphQL.InputType("RatingCreateOrConnectWithoutProductsInput", {
  isAbstract: true
})
export class RatingCreateOrConnectWithoutProductsInput {
  @TypeGraphQL.Field(_type => RatingWhereUniqueInput, {
    nullable: false
  })
  where!: RatingWhereUniqueInput;

  @TypeGraphQL.Field(_type => RatingCreateWithoutProductsInput, {
    nullable: false
  })
  create!: RatingCreateWithoutProductsInput;
}
