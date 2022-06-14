import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DashboardsCreateInput } from "../../../inputs/DashboardsCreateInput";
import { DashboardsUpdateInput } from "../../../inputs/DashboardsUpdateInput";
import { DashboardsWhereUniqueInput } from "../../../inputs/DashboardsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertDashboardsArgs {
  @TypeGraphQL.Field(_type => DashboardsWhereUniqueInput, {
    nullable: false
  })
  where!: DashboardsWhereUniqueInput;

  @TypeGraphQL.Field(_type => DashboardsCreateInput, {
    nullable: false
  })
  create!: DashboardsCreateInput;

  @TypeGraphQL.Field(_type => DashboardsUpdateInput, {
    nullable: false
  })
  update!: DashboardsUpdateInput;
}
