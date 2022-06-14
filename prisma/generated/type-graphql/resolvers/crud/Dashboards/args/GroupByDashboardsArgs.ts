import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DashboardsOrderByWithAggregationInput } from "../../../inputs/DashboardsOrderByWithAggregationInput";
import { DashboardsScalarWhereWithAggregatesInput } from "../../../inputs/DashboardsScalarWhereWithAggregatesInput";
import { DashboardsWhereInput } from "../../../inputs/DashboardsWhereInput";
import { DashboardsScalarFieldEnum } from "../../../../enums/DashboardsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByDashboardsArgs {
  @TypeGraphQL.Field(_type => DashboardsWhereInput, {
    nullable: true
  })
  where?: DashboardsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [DashboardsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: DashboardsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [DashboardsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "created_at" | "name" | "client_id" | "client_secret" | "privacy" | "category" | "url" | "media" | "task" | "reports" | "tasks" | "projects" | "tickets" | "customers" | "checklists" | "visits" | "users" | "products" | "articles" | "sales">;

  @TypeGraphQL.Field(_type => DashboardsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: DashboardsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
