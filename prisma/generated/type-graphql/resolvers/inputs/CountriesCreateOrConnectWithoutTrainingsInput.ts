import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountriesCreateWithoutTrainingsInput } from "../inputs/CountriesCreateWithoutTrainingsInput";
import { CountriesWhereUniqueInput } from "../inputs/CountriesWhereUniqueInput";

@TypeGraphQL.InputType("CountriesCreateOrConnectWithoutTrainingsInput", {
  isAbstract: true
})
export class CountriesCreateOrConnectWithoutTrainingsInput {
  @TypeGraphQL.Field(_type => CountriesWhereUniqueInput, {
    nullable: false
  })
  where!: CountriesWhereUniqueInput;

  @TypeGraphQL.Field(_type => CountriesCreateWithoutTrainingsInput, {
    nullable: false
  })
  create!: CountriesCreateWithoutTrainingsInput;
}
