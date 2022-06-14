import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChecklistOrderByWithAggregationInput } from "../../../inputs/ChecklistOrderByWithAggregationInput";
import { ChecklistScalarWhereWithAggregatesInput } from "../../../inputs/ChecklistScalarWhereWithAggregatesInput";
import { ChecklistWhereInput } from "../../../inputs/ChecklistWhereInput";
import { ChecklistScalarFieldEnum } from "../../../../enums/ChecklistScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByChecklistArgs {
  @TypeGraphQL.Field(_type => ChecklistWhereInput, {
    nullable: true
  })
  where?: ChecklistWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ChecklistOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ChecklistOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChecklistScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "created_at" | "username" | "location" | "regional_manager" | "manager" | "description" | "ticket" | "project" | "region" | "country" | "media" | "prod_id">;

  @TypeGraphQL.Field(_type => ChecklistScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ChecklistScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
