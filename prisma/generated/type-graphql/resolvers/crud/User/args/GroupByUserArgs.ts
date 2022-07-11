import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserOrderByWithAggregationInput } from "../../../inputs/UserOrderByWithAggregationInput";
import { UserScalarWhereWithAggregatesInput } from "../../../inputs/UserScalarWhereWithAggregatesInput";
import { UserWhereInput } from "../../../inputs/UserWhereInput";
import { UserScalarFieldEnum } from "../../../../enums/UserScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByUserArgs {
  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UserOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: UserOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"objectId" | "createdAt" | "updatedAt" | "username" | "email" | "emailVerified" | "authData" | "rperm" | "wperm" | "hashed_password" | "email_verify_token_expires_at" | "email_verify_token" | "account_lockout_expires_at" | "failed_login_count" | "perishable_token" | "perishable_token_expires_at" | "password_changed_at" | "password_history">;

  @TypeGraphQL.Field(_type => UserScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: UserScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
