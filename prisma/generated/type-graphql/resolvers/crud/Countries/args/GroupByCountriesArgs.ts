import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CountriesOrderByWithAggregationInput } from "../../../inputs/CountriesOrderByWithAggregationInput";
import { CountriesScalarWhereWithAggregatesInput } from "../../../inputs/CountriesScalarWhereWithAggregatesInput";
import { CountriesWhereInput } from "../../../inputs/CountriesWhereInput";
import { CountriesScalarFieldEnum } from "../../../../enums/CountriesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCountriesArgs {
  @TypeGraphQL.Field(_type => CountriesWhereInput, {
    nullable: true
  })
  where?: CountriesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CountriesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: CountriesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CountriesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "description" | "image" | "region">;

  @TypeGraphQL.Field(_type => CountriesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CountriesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
