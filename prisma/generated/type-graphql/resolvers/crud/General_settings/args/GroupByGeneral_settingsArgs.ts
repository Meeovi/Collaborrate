import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { General_settingsOrderByWithAggregationInput } from "../../../inputs/General_settingsOrderByWithAggregationInput";
import { General_settingsScalarWhereWithAggregatesInput } from "../../../inputs/General_settingsScalarWhereWithAggregatesInput";
import { General_settingsWhereInput } from "../../../inputs/General_settingsWhereInput";
import { General_settingsScalarFieldEnum } from "../../../../enums/General_settingsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByGeneral_settingsArgs {
  @TypeGraphQL.Field(_type => General_settingsWhereInput, {
    nullable: true
  })
  where?: General_settingsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [General_settingsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: General_settingsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [General_settingsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "created_at" | "title" | "tagline" | "url" | "email" | "access_restrictions" | "restriction_mode" | "startup_page" | "landing_page" | "http_response" | "store_email" | "store_contact" | "store_contact_two" | "customer_support">;

  @TypeGraphQL.Field(_type => General_settingsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: General_settingsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
