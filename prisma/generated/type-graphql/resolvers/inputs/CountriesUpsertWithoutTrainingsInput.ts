import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountriesCreateWithoutTrainingsInput } from "../inputs/CountriesCreateWithoutTrainingsInput";
import { CountriesUpdateWithoutTrainingsInput } from "../inputs/CountriesUpdateWithoutTrainingsInput";

@TypeGraphQL.InputType("CountriesUpsertWithoutTrainingsInput", {
  isAbstract: true
})
export class CountriesUpsertWithoutTrainingsInput {
  @TypeGraphQL.Field(_type => CountriesUpdateWithoutTrainingsInput, {
    nullable: false
  })
  update!: CountriesUpdateWithoutTrainingsInput;

  @TypeGraphQL.Field(_type => CountriesCreateWithoutTrainingsInput, {
    nullable: false
  })
  create!: CountriesCreateWithoutTrainingsInput;
}
