import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReturnsOrderByWithAggregationInput } from "../../../inputs/ReturnsOrderByWithAggregationInput";
import { ReturnsScalarWhereWithAggregatesInput } from "../../../inputs/ReturnsScalarWhereWithAggregatesInput";
import { ReturnsWhereInput } from "../../../inputs/ReturnsWhereInput";
import { ReturnsScalarFieldEnum } from "../../../../enums/ReturnsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByReturnsArgs {
  @TypeGraphQL.Field(_type => ReturnsWhereInput, {
    nullable: true
  })
  where?: ReturnsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ReturnsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ReturnsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReturnsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "created_at" | "name" | "validity" | "return_prefix" | "prod_id" | "cust_id">;

  @TypeGraphQL.Field(_type => ReturnsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ReturnsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
