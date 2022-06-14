import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DashboardsCreateInput } from "../../../inputs/DashboardsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateDashboardsArgs {
  @TypeGraphQL.Field(_type => DashboardsCreateInput, {
    nullable: false
  })
  data!: DashboardsCreateInput;
}
