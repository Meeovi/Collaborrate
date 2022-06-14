import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DashboardsWhereInput } from "../../../inputs/DashboardsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyDashboardsArgs {
  @TypeGraphQL.Field(_type => DashboardsWhereInput, {
    nullable: true
  })
  where?: DashboardsWhereInput | undefined;
}
