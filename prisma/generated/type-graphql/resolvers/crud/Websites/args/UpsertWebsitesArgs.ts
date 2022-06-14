import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WebsitesCreateInput } from "../../../inputs/WebsitesCreateInput";
import { WebsitesUpdateInput } from "../../../inputs/WebsitesUpdateInput";
import { WebsitesWhereUniqueInput } from "../../../inputs/WebsitesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertWebsitesArgs {
  @TypeGraphQL.Field(_type => WebsitesWhereUniqueInput, {
    nullable: false
  })
  where!: WebsitesWhereUniqueInput;

  @TypeGraphQL.Field(_type => WebsitesCreateInput, {
    nullable: false
  })
  create!: WebsitesCreateInput;

  @TypeGraphQL.Field(_type => WebsitesUpdateInput, {
    nullable: false
  })
  update!: WebsitesUpdateInput;
}
