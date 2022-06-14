import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReportsOrderByWithAggregationInput } from "../../../inputs/ReportsOrderByWithAggregationInput";
import { ReportsScalarWhereWithAggregatesInput } from "../../../inputs/ReportsScalarWhereWithAggregatesInput";
import { ReportsWhereInput } from "../../../inputs/ReportsWhereInput";
import { ReportsScalarFieldEnum } from "../../../../enums/ReportsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByReportsArgs {
  @TypeGraphQL.Field(_type => ReportsWhereInput, {
    nullable: true
  })
  where?: ReportsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ReportsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ReportsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReportsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "customer" | "email" | "products" | "quantity" | "subtotal" | "applied_coupon" | "created" | "updated" | "ip_address">;

  @TypeGraphQL.Field(_type => ReportsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ReportsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
