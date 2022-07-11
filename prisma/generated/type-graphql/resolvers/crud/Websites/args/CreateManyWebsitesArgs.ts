import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WebsitesCreateManyInput } from "../../../inputs/WebsitesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyWebsitesArgs {
  @TypeGraphQL.Field(_type => [WebsitesCreateManyInput], {
    nullable: false
  })
  data!: WebsitesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
