import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProvidersOrderByWithAggregationInput } from "../../../inputs/ProvidersOrderByWithAggregationInput";
import { ProvidersScalarWhereWithAggregatesInput } from "../../../inputs/ProvidersScalarWhereWithAggregatesInput";
import { ProvidersWhereInput } from "../../../inputs/ProvidersWhereInput";
import { ProvidersScalarFieldEnum } from "../../../../enums/ProvidersScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProvidersArgs {
  @TypeGraphQL.Field(_type => ProvidersWhereInput, {
    nullable: true
  })
  where?: ProvidersWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProvidersOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ProvidersOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProvidersScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "created_at" | "client_id" | "client_secret" | "host_uri" | "redirect_url" | "redirect_url_app" | "icon" | "name" | "active">;

  @TypeGraphQL.Field(_type => ProvidersScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ProvidersScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
