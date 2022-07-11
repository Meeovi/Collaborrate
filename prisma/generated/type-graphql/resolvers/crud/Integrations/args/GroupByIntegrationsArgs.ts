import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IntegrationsOrderByWithAggregationInput } from "../../../inputs/IntegrationsOrderByWithAggregationInput";
import { IntegrationsScalarWhereWithAggregatesInput } from "../../../inputs/IntegrationsScalarWhereWithAggregatesInput";
import { IntegrationsWhereInput } from "../../../inputs/IntegrationsWhereInput";
import { IntegrationsScalarFieldEnum } from "../../../../enums/IntegrationsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByIntegrationsArgs {
  @TypeGraphQL.Field(_type => IntegrationsWhereInput, {
    nullable: true
  })
  where?: IntegrationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [IntegrationsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: IntegrationsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "created_at" | "name" | "content" | "media" | "location" | "category">;

  @TypeGraphQL.Field(_type => IntegrationsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: IntegrationsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
