import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TrainingsCreateManyProducts_productsTotrainingsInputEnvelope } from "../inputs/TrainingsCreateManyProducts_productsTotrainingsInputEnvelope";
import { TrainingsCreateOrConnectWithoutProducts_productsTotrainingsInput } from "../inputs/TrainingsCreateOrConnectWithoutProducts_productsTotrainingsInput";
import { TrainingsCreateWithoutProducts_productsTotrainingsInput } from "../inputs/TrainingsCreateWithoutProducts_productsTotrainingsInput";
import { TrainingsWhereUniqueInput } from "../inputs/TrainingsWhereUniqueInput";

@TypeGraphQL.InputType("TrainingsCreateNestedManyWithoutProducts_productsTotrainingsInput", {
  isAbstract: true
})
export class TrainingsCreateNestedManyWithoutProducts_productsTotrainingsInput {
  @TypeGraphQL.Field(_type => [TrainingsCreateWithoutProducts_productsTotrainingsInput], {
    nullable: true
  })
  create?: TrainingsCreateWithoutProducts_productsTotrainingsInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrainingsCreateOrConnectWithoutProducts_productsTotrainingsInput], {
    nullable: true
  })
  connectOrCreate?: TrainingsCreateOrConnectWithoutProducts_productsTotrainingsInput[] | undefined;

  @TypeGraphQL.Field(_type => TrainingsCreateManyProducts_productsTotrainingsInputEnvelope, {
    nullable: true
  })
  createMany?: TrainingsCreateManyProducts_productsTotrainingsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TrainingsWhereUniqueInput], {
    nullable: true
  })
  connect?: TrainingsWhereUniqueInput[] | undefined;
}
