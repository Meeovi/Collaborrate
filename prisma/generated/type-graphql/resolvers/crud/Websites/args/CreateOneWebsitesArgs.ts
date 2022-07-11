import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WebsitesCreateInput } from "../../../inputs/WebsitesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneWebsitesArgs {
  @TypeGraphQL.Field(_type => WebsitesCreateInput, {
    nullable: false
  })
  data!: WebsitesCreateInput;
}
