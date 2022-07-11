import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustomizationsOrderByWithAggregationInput } from "../../../inputs/CustomizationsOrderByWithAggregationInput";
import { CustomizationsScalarWhereWithAggregatesInput } from "../../../inputs/CustomizationsScalarWhereWithAggregatesInput";
import { CustomizationsWhereInput } from "../../../inputs/CustomizationsWhereInput";
import { CustomizationsScalarFieldEnum } from "../../../../enums/CustomizationsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCustomizationsArgs {
  @TypeGraphQL.Field(_type => CustomizationsWhereInput, {
    nullable: true
  })
  where?: CustomizationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CustomizationsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: CustomizationsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomizationsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "created_at" | "site_name" | "nav_link" | "notification" | "banner" | "footer_link" | "announcement" | "email" | "site_url" | "allow_signup">;

  @TypeGraphQL.Field(_type => CustomizationsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CustomizationsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
