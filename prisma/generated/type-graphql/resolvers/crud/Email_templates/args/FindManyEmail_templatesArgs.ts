import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Email_templatesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Email_templatesOrderByWithRelationAndSearchRelevanceInput";
import { Email_templatesWhereInput } from "../../../inputs/Email_templatesWhereInput";
import { Email_templatesWhereUniqueInput } from "../../../inputs/Email_templatesWhereUniqueInput";
import { Email_templatesScalarFieldEnum } from "../../../../enums/Email_templatesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyEmail_templatesArgs {
  @TypeGraphQL.Field(_type => Email_templatesWhereInput, {
    nullable: true
  })
  where?: Email_templatesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Email_templatesOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Email_templatesOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Email_templatesWhereUniqueInput, {
    nullable: true
  })
  cursor?: Email_templatesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Email_templatesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "created_at" | "name" | "assigned_to" | "type" | "active" | "insert_variable" | "subject" | "content" | "header" | "footer" | "width" | "height" | "media"> | undefined;
}
