import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MessagesOrderByWithAggregationInput } from "../../../inputs/MessagesOrderByWithAggregationInput";
import { MessagesScalarWhereWithAggregatesInput } from "../../../inputs/MessagesScalarWhereWithAggregatesInput";
import { MessagesWhereInput } from "../../../inputs/MessagesWhereInput";
import { MessagesScalarFieldEnum } from "../../../../enums/MessagesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMessagesArgs {
  @TypeGraphQL.Field(_type => MessagesWhereInput, {
    nullable: true
  })
  where?: MessagesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MessagesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MessagesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessagesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "from" | "created_at" | "subject" | "content" | "sender" | "cust_id" | "media" | "staff_id">;

  @TypeGraphQL.Field(_type => MessagesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MessagesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
