import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TrainingsUpdateWithoutStatesInput } from "../inputs/TrainingsUpdateWithoutStatesInput";
import { TrainingsWhereUniqueInput } from "../inputs/TrainingsWhereUniqueInput";

@TypeGraphQL.InputType("TrainingsUpdateWithWhereUniqueWithoutStatesInput", {
  isAbstract: true
})
export class TrainingsUpdateWithWhereUniqueWithoutStatesInput {
  @TypeGraphQL.Field(_type => TrainingsWhereUniqueInput, {
    nullable: false
  })
  where!: TrainingsWhereUniqueInput;

  @TypeGraphQL.Field(_type => TrainingsUpdateWithoutStatesInput, {
    nullable: false
  })
  data!: TrainingsUpdateWithoutStatesInput;
}
