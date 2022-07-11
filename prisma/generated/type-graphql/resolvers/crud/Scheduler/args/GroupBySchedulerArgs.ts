import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SchedulerOrderByWithAggregationInput } from "../../../inputs/SchedulerOrderByWithAggregationInput";
import { SchedulerScalarWhereWithAggregatesInput } from "../../../inputs/SchedulerScalarWhereWithAggregatesInput";
import { SchedulerWhereInput } from "../../../inputs/SchedulerWhereInput";
import { SchedulerScalarFieldEnum } from "../../../../enums/SchedulerScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySchedulerArgs {
  @TypeGraphQL.Field(_type => SchedulerWhereInput, {
    nullable: true
  })
  where?: SchedulerWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SchedulerOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SchedulerOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SchedulerScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "created_at" | "end_date" | "level" | "login" | "notes" | "start_date" | "whid">;

  @TypeGraphQL.Field(_type => SchedulerScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SchedulerScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
