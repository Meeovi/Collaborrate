import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TrainingsUpdateWithoutProducts_productsTotrainingsInput } from "../inputs/TrainingsUpdateWithoutProducts_productsTotrainingsInput";
import { TrainingsWhereUniqueInput } from "../inputs/TrainingsWhereUniqueInput";

@TypeGraphQL.InputType("TrainingsUpdateWithWhereUniqueWithoutProducts_productsTotrainingsInput", {
  isAbstract: true
})
export class TrainingsUpdateWithWhereUniqueWithoutProducts_productsTotrainingsInput {
  @TypeGraphQL.Field(_type => TrainingsWhereUniqueInput, {
    nullable: false
  })
  where!: TrainingsWhereUniqueInput;

  @TypeGraphQL.Field(_type => TrainingsUpdateWithoutProducts_productsTotrainingsInput, {
    nullable: false
  })
  data!: TrainingsUpdateWithoutProducts_productsTotrainingsInput;
}
