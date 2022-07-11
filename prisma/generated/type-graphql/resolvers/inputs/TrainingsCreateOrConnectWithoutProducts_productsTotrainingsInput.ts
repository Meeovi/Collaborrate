import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TrainingsCreateWithoutProducts_productsTotrainingsInput } from "../inputs/TrainingsCreateWithoutProducts_productsTotrainingsInput";
import { TrainingsWhereUniqueInput } from "../inputs/TrainingsWhereUniqueInput";

@TypeGraphQL.InputType("TrainingsCreateOrConnectWithoutProducts_productsTotrainingsInput", {
  isAbstract: true
})
export class TrainingsCreateOrConnectWithoutProducts_productsTotrainingsInput {
  @TypeGraphQL.Field(_type => TrainingsWhereUniqueInput, {
    nullable: false
  })
  where!: TrainingsWhereUniqueInput;

  @TypeGraphQL.Field(_type => TrainingsCreateWithoutProducts_productsTotrainingsInput, {
    nullable: false
  })
  create!: TrainingsCreateWithoutProducts_productsTotrainingsInput;
}
