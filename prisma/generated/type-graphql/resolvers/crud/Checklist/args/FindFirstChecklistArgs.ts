import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChecklistOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/ChecklistOrderByWithRelationAndSearchRelevanceInput";
import { ChecklistWhereInput } from "../../../inputs/ChecklistWhereInput";
import { ChecklistWhereUniqueInput } from "../../../inputs/ChecklistWhereUniqueInput";
import { ChecklistScalarFieldEnum } from "../../../../enums/ChecklistScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstChecklistArgs {
  @TypeGraphQL.Field(_type => ChecklistWhereInput, {
    nullable: true
  })
  where?: ChecklistWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ChecklistOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: ChecklistOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => ChecklistWhereUniqueInput, {
    nullable: true
  })
  cursor?: ChecklistWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ChecklistScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "created_at" | "username" | "location" | "regional_manager" | "manager" | "description" | "ticket" | "project" | "region" | "country" | "media" | "prod_id"> | undefined;
}