import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TrainingsCreateNestedManyWithoutCountriesInput } from "../inputs/TrainingsCreateNestedManyWithoutCountriesInput";

@TypeGraphQL.InputType("CountriesCreateInput", {
  isAbstract: true
})
export class CountriesCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  region?: string | undefined;

  @TypeGraphQL.Field(_type => TrainingsCreateNestedManyWithoutCountriesInput, {
    nullable: true
  })
  trainings?: TrainingsCreateNestedManyWithoutCountriesInput | undefined;
}
