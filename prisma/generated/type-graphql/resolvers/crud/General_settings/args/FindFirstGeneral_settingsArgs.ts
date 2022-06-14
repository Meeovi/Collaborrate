import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { General_settingsOrderByWithRelationInput } from "../../../inputs/General_settingsOrderByWithRelationInput";
import { General_settingsWhereInput } from "../../../inputs/General_settingsWhereInput";
import { General_settingsWhereUniqueInput } from "../../../inputs/General_settingsWhereUniqueInput";
import { General_settingsScalarFieldEnum } from "../../../../enums/General_settingsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstGeneral_settingsArgs {
  @TypeGraphQL.Field(_type => General_settingsWhereInput, {
    nullable: true
  })
  where?: General_settingsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [General_settingsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: General_settingsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => General_settingsWhereUniqueInput, {
    nullable: true
  })
  cursor?: General_settingsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [General_settingsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "created_at" | "title" | "tagline" | "url" | "email" | "access_restrictions" | "restriction_mode" | "startup_page" | "landing_page" | "http_response" | "store_email" | "store_contact" | "store_contact_two" | "customer_support"> | undefined;
}
