import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { KnowledgebaseOrderByWithAggregationInput } from "../../../inputs/KnowledgebaseOrderByWithAggregationInput";
import { KnowledgebaseScalarWhereWithAggregatesInput } from "../../../inputs/KnowledgebaseScalarWhereWithAggregatesInput";
import { KnowledgebaseWhereInput } from "../../../inputs/KnowledgebaseWhereInput";
import { KnowledgebaseScalarFieldEnum } from "../../../../enums/KnowledgebaseScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByKnowledgebaseArgs {
  @TypeGraphQL.Field(_type => KnowledgebaseWhereInput, {
    nullable: true
  })
  where?: KnowledgebaseWhereInput | undefined;

  @TypeGraphQL.Field(_type => [KnowledgebaseOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: KnowledgebaseOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [KnowledgebaseScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "created_at" | "name" | "status" | "revision" | "content" | "resolution" | "author" | "approver" | "date_modified">;

  @TypeGraphQL.Field(_type => KnowledgebaseScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: KnowledgebaseScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
