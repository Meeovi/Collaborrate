import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WebsitesOrderByWithRelationInput } from "../../../inputs/WebsitesOrderByWithRelationInput";
import { WebsitesWhereInput } from "../../../inputs/WebsitesWhereInput";
import { WebsitesWhereUniqueInput } from "../../../inputs/WebsitesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateWebsitesArgs {
  @TypeGraphQL.Field(_type => WebsitesWhereInput, {
    nullable: true
  })
  where?: WebsitesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [WebsitesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: WebsitesOrderByWithRelationInput[] | undefined;

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
}
