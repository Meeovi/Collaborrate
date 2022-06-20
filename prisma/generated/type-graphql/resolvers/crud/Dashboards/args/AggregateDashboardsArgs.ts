import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DashboardsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/DashboardsOrderByWithRelationAndSearchRelevanceInput";
import { DashboardsWhereInput } from "../../../inputs/DashboardsWhereInput";
import { DashboardsWhereUniqueInput } from "../../../inputs/DashboardsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateDashboardsArgs {
  @TypeGraphQL.Field(_type => DashboardsWhereInput, {
    nullable: true
  })
  where?: DashboardsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [DashboardsOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: DashboardsOrderByWithRelationAndSearchRelevanceInput[] | undefined;

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
}
