import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CountriesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/CountriesOrderByWithRelationAndSearchRelevanceInput";
import { CountriesWhereInput } from "../../../inputs/CountriesWhereInput";
import { CountriesWhereUniqueInput } from "../../../inputs/CountriesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCountriesArgs {
  @TypeGraphQL.Field(_type => CountriesWhereInput, {
    nullable: true
  })
  where?: CountriesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CountriesOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: CountriesOrderByWithRelationAndSearchRelevanceInput[] | undefined;

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
}
