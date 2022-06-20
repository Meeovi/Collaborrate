import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WorkspacesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/WorkspacesOrderByWithRelationAndSearchRelevanceInput";
import { WorkspacesWhereInput } from "../../../inputs/WorkspacesWhereInput";
import { WorkspacesWhereUniqueInput } from "../../../inputs/WorkspacesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateWorkspacesArgs {
  @TypeGraphQL.Field(_type => WorkspacesWhereInput, {
    nullable: true
  })
  where?: WorkspacesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: WorkspacesOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => WorkspacesWhereUniqueInput, {
    nullable: true
  })
  cursor?: WorkspacesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
