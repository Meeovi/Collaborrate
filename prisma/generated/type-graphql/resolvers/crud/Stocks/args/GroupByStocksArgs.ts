import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StocksOrderByWithAggregationInput } from "../../../inputs/StocksOrderByWithAggregationInput";
import { StocksScalarWhereWithAggregatesInput } from "../../../inputs/StocksScalarWhereWithAggregatesInput";
import { StocksWhereInput } from "../../../inputs/StocksWhereInput";
import { StocksScalarFieldEnum } from "../../../../enums/StocksScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByStocksArgs {
  @TypeGraphQL.Field(_type => StocksWhereInput, {
    nullable: true
  })
  where?: StocksWhereInput | undefined;

  @TypeGraphQL.Field(_type => [StocksOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: StocksOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [StocksScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "enabled" | "description" | "website" | "sources">;

  @TypeGraphQL.Field(_type => StocksScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: StocksScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
