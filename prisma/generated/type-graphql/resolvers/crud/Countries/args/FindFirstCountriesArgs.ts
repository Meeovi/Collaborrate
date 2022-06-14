import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CountriesOrderByWithRelationInput } from "../../../inputs/CountriesOrderByWithRelationInput";
import { CountriesWhereInput } from "../../../inputs/CountriesWhereInput";
import { CountriesWhereUniqueInput } from "../../../inputs/CountriesWhereUniqueInput";
import { CountriesScalarFieldEnum } from "../../../../enums/CountriesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstCountriesArgs {
  @TypeGraphQL.Field(_type => CountriesWhereInput, {
    nullable: true
  })
  where?: CountriesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CountriesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: CountriesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => CountriesWhereUniqueInput, {
    nullable: true
  })
  cursor?: CountriesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CountriesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "description" | "image" | "region"> | undefined;
}
