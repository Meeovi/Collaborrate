import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DashboardsUpdateManyMutationInput } from "../../../inputs/DashboardsUpdateManyMutationInput";
import { DashboardsWhereInput } from "../../../inputs/DashboardsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyDashboardsArgs {
  @TypeGraphQL.Field(_type => DashboardsUpdateManyMutationInput, {
    nullable: false
  })
  data!: DashboardsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => DashboardsWhereInput, {
    nullable: true
  })
  where?: DashboardsWhereInput | undefined;
}
