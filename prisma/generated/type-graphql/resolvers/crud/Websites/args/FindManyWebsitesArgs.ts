import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WebsitesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/WebsitesOrderByWithRelationAndSearchRelevanceInput";
import { WebsitesWhereInput } from "../../../inputs/WebsitesWhereInput";
import { WebsitesWhereUniqueInput } from "../../../inputs/WebsitesWhereUniqueInput";
import { WebsitesScalarFieldEnum } from "../../../../enums/WebsitesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyWebsitesArgs {
  @TypeGraphQL.Field(_type => WebsitesWhereInput, {
    nullable: true
  })
  where?: WebsitesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [WebsitesOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: WebsitesOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => WebsitesWhereUniqueInput, {
    nullable: true
  })
  cursor?: WebsitesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [WebsitesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "created_at" | "name" | "url" | "shop" | "store"> | undefined;
}
