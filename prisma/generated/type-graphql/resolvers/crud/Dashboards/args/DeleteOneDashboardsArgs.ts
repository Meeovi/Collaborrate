import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DashboardsWhereUniqueInput } from "../../../inputs/DashboardsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneDashboardsArgs {
  @TypeGraphQL.Field(_type => DashboardsWhereUniqueInput, {
    nullable: false
  })
  where!: DashboardsWhereUniqueInput;
}
