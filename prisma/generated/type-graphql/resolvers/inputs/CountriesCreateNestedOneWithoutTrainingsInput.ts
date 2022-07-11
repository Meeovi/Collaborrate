import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountriesCreateOrConnectWithoutTrainingsInput } from "../inputs/CountriesCreateOrConnectWithoutTrainingsInput";
import { CountriesCreateWithoutTrainingsInput } from "../inputs/CountriesCreateWithoutTrainingsInput";
import { CountriesWhereUniqueInput } from "../inputs/CountriesWhereUniqueInput";

@TypeGraphQL.InputType("CountriesCreateNestedOneWithoutTrainingsInput", {
  isAbstract: true
})
export class CountriesCreateNestedOneWithoutTrainingsInput {
  @TypeGraphQL.Field(_type => CountriesCreateWithoutTrainingsInput, {
    nullable: true
  })
  create?: CountriesCreateWithoutTrainingsInput | undefined;

  @TypeGraphQL.Field(_type => CountriesCreateOrConnectWithoutTrainingsInput, {
    nullable: true
  })
  connectOrCreate?: CountriesCreateOrConnectWithoutTrainingsInput | undefined;

  @TypeGraphQL.Field(_type => CountriesWhereUniqueInput, {
    nullable: true
  })
  connect?: CountriesWhereUniqueInput | undefined;
}
