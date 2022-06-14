import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Email_templatesOrderByWithAggregationInput } from "../../../inputs/Email_templatesOrderByWithAggregationInput";
import { Email_templatesScalarWhereWithAggregatesInput } from "../../../inputs/Email_templatesScalarWhereWithAggregatesInput";
import { Email_templatesWhereInput } from "../../../inputs/Email_templatesWhereInput";
import { Email_templatesScalarFieldEnum } from "../../../../enums/Email_templatesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByEmail_templatesArgs {
  @TypeGraphQL.Field(_type => Email_templatesWhereInput, {
    nullable: true
  })
  where?: Email_templatesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Email_templatesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Email_templatesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Email_templatesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "created_at" | "name" | "assigned_to" | "type" | "active" | "insert_variable" | "subject" | "content" | "header" | "footer" | "width" | "height" | "media">;

  @TypeGraphQL.Field(_type => Email_templatesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Email_templatesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
