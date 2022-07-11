import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountriesWhereInput } from "../inputs/CountriesWhereInput";

@TypeGraphQL.InputType("CountriesRelationFilter", {
  isAbstract: true
})
export class CountriesRelationFilter {
  @TypeGraphQL.Field(_type => CountriesWhereInput, {
    nullable: true
  })
  is?: CountriesWhereInput | undefined;

  @TypeGraphQL.Field(_type => CountriesWhereInput, {
    nullable: true
  })
  isNot?: CountriesWhereInput | undefined;
}
