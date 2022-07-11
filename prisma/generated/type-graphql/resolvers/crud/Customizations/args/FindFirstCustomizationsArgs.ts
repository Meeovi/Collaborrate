import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustomizationsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/CustomizationsOrderByWithRelationAndSearchRelevanceInput";
import { CustomizationsWhereInput } from "../../../inputs/CustomizationsWhereInput";
import { CustomizationsWhereUniqueInput } from "../../../inputs/CustomizationsWhereUniqueInput";
import { CustomizationsScalarFieldEnum } from "../../../../enums/CustomizationsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstCustomizationsArgs {
  @TypeGraphQL.Field(_type => CustomizationsWhereInput, {
    nullable: true
  })
  where?: CustomizationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CustomizationsOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: CustomizationsOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => CustomizationsWhereUniqueInput, {
    nullable: true
  })
  cursor?: CustomizationsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CustomizationsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "created_at" | "site_name" | "nav_link" | "notification" | "banner" | "footer_link" | "announcement" | "email" | "site_url" | "allow_signup"> | undefined;
}
