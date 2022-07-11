import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WebsitesUpdateInput } from "../../../inputs/WebsitesUpdateInput";
import { WebsitesWhereUniqueInput } from "../../../inputs/WebsitesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneWebsitesArgs {
  @TypeGraphQL.Field(_type => WebsitesUpdateInput, {
    nullable: false
  })
  data!: WebsitesUpdateInput;

  @TypeGraphQL.Field(_type => WebsitesWhereUniqueInput, {
    nullable: false
  })
  where!: WebsitesWhereUniqueInput;
}
