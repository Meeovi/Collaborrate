import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WebsitesWhereInput } from "../../../inputs/WebsitesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyWebsitesArgs {
  @TypeGraphQL.Field(_type => WebsitesWhereInput, {
    nullable: true
  })
  where?: WebsitesWhereInput | undefined;
}
