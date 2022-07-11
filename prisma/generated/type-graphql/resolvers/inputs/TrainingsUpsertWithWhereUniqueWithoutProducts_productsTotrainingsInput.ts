import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TrainingsCreateWithoutProducts_productsTotrainingsInput } from "../inputs/TrainingsCreateWithoutProducts_productsTotrainingsInput";
import { TrainingsUpdateWithoutProducts_productsTotrainingsInput } from "../inputs/TrainingsUpdateWithoutProducts_productsTotrainingsInput";
import { TrainingsWhereUniqueInput } from "../inputs/TrainingsWhereUniqueInput";

@TypeGraphQL.InputType("TrainingsUpsertWithWhereUniqueWithoutProducts_productsTotrainingsInput", {
  isAbstract: true
})
export class TrainingsUpsertWithWhereUniqueWithoutProducts_productsTotrainingsInput {
  @TypeGraphQL.Field(_type => TrainingsWhereUniqueInput, {
    nullable: false
  })
  where!: TrainingsWhereUniqueInput;

  @TypeGraphQL.Field(_type => TrainingsUpdateWithoutProducts_productsTotrainingsInput, {
    nullable: false
  })
  update!: TrainingsUpdateWithoutProducts_productsTotrainingsInput;

  @TypeGraphQL.Field(_type => TrainingsCreateWithoutProducts_productsTotrainingsInput, {
    nullable: false
  })
  create!: TrainingsCreateWithoutProducts_productsTotrainingsInput;
}
