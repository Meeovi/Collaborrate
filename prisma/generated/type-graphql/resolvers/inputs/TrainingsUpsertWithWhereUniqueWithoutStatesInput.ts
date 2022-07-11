import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TrainingsCreateWithoutStatesInput } from "../inputs/TrainingsCreateWithoutStatesInput";
import { TrainingsUpdateWithoutStatesInput } from "../inputs/TrainingsUpdateWithoutStatesInput";
import { TrainingsWhereUniqueInput } from "../inputs/TrainingsWhereUniqueInput";

@TypeGraphQL.InputType("TrainingsUpsertWithWhereUniqueWithoutStatesInput", {
  isAbstract: true
})
export class TrainingsUpsertWithWhereUniqueWithoutStatesInput {
  @TypeGraphQL.Field(_type => TrainingsWhereUniqueInput, {
    nullable: false
  })
  where!: TrainingsWhereUniqueInput;

  @TypeGraphQL.Field(_type => TrainingsUpdateWithoutStatesInput, {
    nullable: false
  })
  update!: TrainingsUpdateWithoutStatesInput;

  @TypeGraphQL.Field(_type => TrainingsCreateWithoutStatesInput, {
    nullable: false
  })
  create!: TrainingsCreateWithoutStatesInput;
}
