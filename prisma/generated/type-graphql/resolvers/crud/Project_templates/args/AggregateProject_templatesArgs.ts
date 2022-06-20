import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Project_templatesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Project_templatesOrderByWithRelationAndSearchRelevanceInput";
import { Project_templatesWhereInput } from "../../../inputs/Project_templatesWhereInput";
import { Project_templatesWhereUniqueInput } from "../../../inputs/Project_templatesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateProject_templatesArgs {
  @TypeGraphQL.Field(_type => Project_templatesWhereInput, {
    nullable: true
  })
  where?: Project_templatesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Project_templatesOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Project_templatesOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Project_templatesWhereUniqueInput, {
    nullable: true
  })
  cursor?: Project_templatesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
