import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Project_templatesOrderByWithRelationInput } from "../../../inputs/Project_templatesOrderByWithRelationInput";
import { Project_templatesWhereInput } from "../../../inputs/Project_templatesWhereInput";
import { Project_templatesWhereUniqueInput } from "../../../inputs/Project_templatesWhereUniqueInput";
import { Project_templatesScalarFieldEnum } from "../../../../enums/Project_templatesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyProject_templatesArgs {
  @TypeGraphQL.Field(_type => Project_templatesWhereInput, {
    nullable: true
  })
  where?: Project_templatesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Project_templatesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: Project_templatesOrderByWithRelationInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [Project_templatesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "status" | "consider_working_days" | "priority" | "project_manager" | "resource" | "content"> | undefined;
}
