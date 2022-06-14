import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VisitsOrderByWithAggregationInput } from "../../../inputs/VisitsOrderByWithAggregationInput";
import { VisitsScalarWhereWithAggregatesInput } from "../../../inputs/VisitsScalarWhereWithAggregatesInput";
import { VisitsWhereInput } from "../../../inputs/VisitsWhereInput";
import { VisitsScalarFieldEnum } from "../../../../enums/VisitsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByVisitsArgs {
  @TypeGraphQL.Field(_type => VisitsWhereInput, {
    nullable: true
  })
  where?: VisitsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [VisitsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: VisitsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [VisitsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "created_at" | "location" | "username" | "reason" | "content" | "emergency" | "start_date" | "end_date" | "task" | "meeting">;

  @TypeGraphQL.Field(_type => VisitsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: VisitsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
