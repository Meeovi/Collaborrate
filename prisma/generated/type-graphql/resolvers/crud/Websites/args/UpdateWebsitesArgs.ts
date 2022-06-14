import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WebsitesUpdateInput } from "../../../inputs/WebsitesUpdateInput";
import { WebsitesWhereUniqueInput } from "../../../inputs/WebsitesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateWebsitesArgs {
  @TypeGraphQL.Field(_type => WebsitesUpdateInput, {
    nullable: false
  })
  data!: WebsitesUpdateInput;

  @TypeGraphQL.Field(_type => WebsitesWhereUniqueInput, {
    nullable: false
  })
  where!: WebsitesWhereUniqueInput;
}
