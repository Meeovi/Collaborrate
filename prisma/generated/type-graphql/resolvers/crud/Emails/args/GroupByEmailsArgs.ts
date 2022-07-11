import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EmailsOrderByWithAggregationInput } from "../../../inputs/EmailsOrderByWithAggregationInput";
import { EmailsScalarWhereWithAggregatesInput } from "../../../inputs/EmailsScalarWhereWithAggregatesInput";
import { EmailsWhereInput } from "../../../inputs/EmailsWhereInput";
import { EmailsScalarFieldEnum } from "../../../../enums/EmailsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByEmailsArgs {
  @TypeGraphQL.Field(_type => EmailsWhereInput, {
    nullable: true
  })
  where?: EmailsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EmailsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: EmailsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmailsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "created_at" | "subject" | "content" | "cust_id" | "bcc" | "cc" | "from" | "media" | "staff_id">;

  @TypeGraphQL.Field(_type => EmailsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: EmailsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
