import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectsOrderByWithRelationInput } from "../../../inputs/ProjectsOrderByWithRelationInput";
import { ProjectsWhereInput } from "../../../inputs/ProjectsWhereInput";
import { ProjectsWhereUniqueInput } from "../../../inputs/ProjectsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateProjectsArgs {
  @TypeGraphQL.Field(_type => ProjectsWhereInput, {
    nullable: true
  })
  where?: ProjectsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProjectsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ProjectsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ProjectsWhereUniqueInput, {
    nullable: true
  })
  cursor?: ProjectsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
