import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DashboardsOrderByWithRelationInput } from "../../../inputs/DashboardsOrderByWithRelationInput";
import { DashboardsWhereInput } from "../../../inputs/DashboardsWhereInput";
import { DashboardsWhereUniqueInput } from "../../../inputs/DashboardsWhereUniqueInput";
import { DashboardsScalarFieldEnum } from "../../../../enums/DashboardsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyDashboardsArgs {
  @TypeGraphQL.Field(_type => DashboardsWhereInput, {
    nullable: true
  })
  where?: DashboardsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [DashboardsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: DashboardsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => DashboardsWhereUniqueInput, {
    nullable: true
  })
  cursor?: DashboardsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [DashboardsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "created_at" | "name" | "client_id" | "client_secret" | "privacy" | "category" | "url" | "media" | "task" | "reports" | "tasks" | "projects" | "tickets" | "customers" | "checklists" | "visits" | "users" | "products" | "articles" | "sales"> | undefined;
}
