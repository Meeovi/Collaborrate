import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TrainingsCreateWithoutCountriesInput } from "../inputs/TrainingsCreateWithoutCountriesInput";
import { TrainingsUpdateWithoutCountriesInput } from "../inputs/TrainingsUpdateWithoutCountriesInput";
import { TrainingsWhereUniqueInput } from "../inputs/TrainingsWhereUniqueInput";

@TypeGraphQL.InputType("TrainingsUpsertWithWhereUniqueWithoutCountriesInput", {
  isAbstract: true
})
export class TrainingsUpsertWithWhereUniqueWithoutCountriesInput {
  @TypeGraphQL.Field(_type => TrainingsWhereUniqueInput, {
    nullable: false
  })
  where!: TrainingsWhereUniqueInput;

  @TypeGraphQL.Field(_type => TrainingsUpdateWithoutCountriesInput, {
    nullable: false
  })
  update!: TrainingsUpdateWithoutCountriesInput;

  @TypeGraphQL.Field(_type => TrainingsCreateWithoutCountriesInput, {
    nullable: false
  })
  create!: TrainingsCreateWithoutCountriesInput;
}
