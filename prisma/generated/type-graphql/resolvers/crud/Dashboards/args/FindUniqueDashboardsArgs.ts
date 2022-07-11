import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DashboardsWhereUniqueInput } from "../../../inputs/DashboardsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueDashboardsArgs {
  @TypeGraphQL.Field(_type => DashboardsWhereUniqueInput, {
    nullable: false
  })
  where!: DashboardsWhereUniqueInput;
}
