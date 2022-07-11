import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DashboardsCreateManyInput } from "../../../inputs/DashboardsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyDashboardsArgs {
  @TypeGraphQL.Field(_type => [DashboardsCreateManyInput], {
    nullable: false
  })
  data!: DashboardsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
