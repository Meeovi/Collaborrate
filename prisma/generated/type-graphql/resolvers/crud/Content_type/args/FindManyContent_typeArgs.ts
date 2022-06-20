import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Content_typeOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Content_typeOrderByWithRelationAndSearchRelevanceInput";
import { Content_typeWhereInput } from "../../../inputs/Content_typeWhereInput";
import { Content_typeWhereUniqueInput } from "../../../inputs/Content_typeWhereUniqueInput";
import { Content_typeScalarFieldEnum } from "../../../../enums/Content_typeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyContent_typeArgs {
  @TypeGraphQL.Field(_type => Content_typeWhereInput, {
    nullable: true
  })
  where?: Content_typeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Content_typeOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Content_typeOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Content_typeWhereUniqueInput, {
    nullable: true
  })
  cursor?: Content_typeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Content_typeScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "created_at" | "text" | "number" | "json" | "link" | "email" | "uid" | "date" | "time" | "timestamp" | "boolean" | "rich_text" | "password" | "media" | "database_name"> | undefined;
}
