import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WebsitesUpdateManyMutationInput } from "../../../inputs/WebsitesUpdateManyMutationInput";
import { WebsitesWhereInput } from "../../../inputs/WebsitesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyWebsitesArgs {
  @TypeGraphQL.Field(_type => WebsitesUpdateManyMutationInput, {
    nullable: false
  })
  data!: WebsitesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => WebsitesWhereInput, {
    nullable: true
  })
  where?: WebsitesWhereInput | undefined;
}
