import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TrainingsUpdateWithoutCountriesInput } from "../inputs/TrainingsUpdateWithoutCountriesInput";
import { TrainingsWhereUniqueInput } from "../inputs/TrainingsWhereUniqueInput";

@TypeGraphQL.InputType("TrainingsUpdateWithWhereUniqueWithoutCountriesInput", {
  isAbstract: true
})
export class TrainingsUpdateWithWhereUniqueWithoutCountriesInput {
  @TypeGraphQL.Field(_type => TrainingsWhereUniqueInput, {
    nullable: false
  })
  where!: TrainingsWhereUniqueInput;

  @TypeGraphQL.Field(_type => TrainingsUpdateWithoutCountriesInput, {
    nullable: false
  })
  data!: TrainingsUpdateWithoutCountriesInput;
}
