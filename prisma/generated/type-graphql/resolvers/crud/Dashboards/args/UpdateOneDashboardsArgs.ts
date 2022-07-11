import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DashboardsUpdateInput } from "../../../inputs/DashboardsUpdateInput";
import { DashboardsWhereUniqueInput } from "../../../inputs/DashboardsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneDashboardsArgs {
  @TypeGraphQL.Field(_type => DashboardsUpdateInput, {
    nullable: false
  })
  data!: DashboardsUpdateInput;

  @TypeGraphQL.Field(_type => DashboardsWhereUniqueInput, {
    nullable: false
  })
  where!: DashboardsWhereUniqueInput;
}
