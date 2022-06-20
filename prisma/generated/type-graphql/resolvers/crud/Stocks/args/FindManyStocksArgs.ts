import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StocksOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/StocksOrderByWithRelationAndSearchRelevanceInput";
import { StocksWhereInput } from "../../../inputs/StocksWhereInput";
import { StocksWhereUniqueInput } from "../../../inputs/StocksWhereUniqueInput";
import { StocksScalarFieldEnum } from "../../../../enums/StocksScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyStocksArgs {
  @TypeGraphQL.Field(_type => StocksWhereInput, {
    nullable: true
  })
  where?: StocksWhereInput | undefined;

  @TypeGraphQL.Field(_type => [StocksOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: StocksOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => StocksWhereUniqueInput, {
    nullable: true
  })
  cursor?: StocksWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [StocksScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "enabled" | "description" | "website" | "sources"> | undefined;
}
