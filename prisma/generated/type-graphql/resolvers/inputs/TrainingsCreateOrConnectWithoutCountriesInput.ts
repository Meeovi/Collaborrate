import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TrainingsCreateWithoutCountriesInput } from "../inputs/TrainingsCreateWithoutCountriesInput";
import { TrainingsWhereUniqueInput } from "../inputs/TrainingsWhereUniqueInput";

@TypeGraphQL.InputType("TrainingsCreateOrConnectWithoutCountriesInput", {
  isAbstract: true
})
export class TrainingsCreateOrConnectWithoutCountriesInput {
  @TypeGraphQL.Field(_type => TrainingsWhereUniqueInput, {
    nullable: false
  })
  where!: TrainingsWhereUniqueInput;

  @TypeGraphQL.Field(_type => TrainingsCreateWithoutCountriesInput, {
    nullable: false
  })
  create!: TrainingsCreateWithoutCountriesInput;
}
