import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Content_typeOrderByWithAggregationInput } from "../../../inputs/Content_typeOrderByWithAggregationInput";
import { Content_typeScalarWhereWithAggregatesInput } from "../../../inputs/Content_typeScalarWhereWithAggregatesInput";
import { Content_typeWhereInput } from "../../../inputs/Content_typeWhereInput";
import { Content_typeScalarFieldEnum } from "../../../../enums/Content_typeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByContent_typeArgs {
  @TypeGraphQL.Field(_type => Content_typeWhereInput, {
    nullable: true
  })
  where?: Content_typeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Content_typeOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Content_typeOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Content_typeScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "created_at" | "text" | "number" | "json" | "link" | "email" | "uid" | "date" | "time" | "timestamp" | "boolean" | "rich_text" | "password" | "media" | "database_name">;

  @TypeGraphQL.Field(_type => Content_typeScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Content_typeScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
