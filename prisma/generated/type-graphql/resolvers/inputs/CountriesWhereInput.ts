import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TrainingsListRelationFilter } from "../inputs/TrainingsListRelationFilter";

@TypeGraphQL.InputType("CountriesWhereInput", {
  isAbstract: true
})
export class CountriesWhereInput {
  @TypeGraphQL.Field(_type => [CountriesWhereInput], {
    nullable: true
  })
  AND?: CountriesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CountriesWhereInput], {
    nullable: true
  })
  OR?: CountriesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CountriesWhereInput], {
    nullable: true
  })
  NOT?: CountriesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  image?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  region?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => TrainingsListRelationFilter, {
    nullable: true
  })
  trainings?: TrainingsListRelationFilter | undefined;
}
