import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VisitsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/VisitsOrderByWithRelationAndSearchRelevanceInput";
import { VisitsWhereInput } from "../../../inputs/VisitsWhereInput";
import { VisitsWhereUniqueInput } from "../../../inputs/VisitsWhereUniqueInput";
import { VisitsScalarFieldEnum } from "../../../../enums/VisitsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyVisitsArgs {
  @TypeGraphQL.Field(_type => VisitsWhereInput, {
    nullable: true
  })
  where?: VisitsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [VisitsOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: VisitsOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => VisitsWhereUniqueInput, {
    nullable: true
  })
  cursor?: VisitsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [VisitsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "created_at" | "location" | "username" | "reason" | "content" | "emergency" | "start_date" | "end_date" | "task" | "meeting"> | undefined;
}
