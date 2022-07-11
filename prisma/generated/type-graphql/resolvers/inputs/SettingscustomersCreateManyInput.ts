import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("SettingscustomersCreateManyInput", {
  isAbstract: true
})
export class SettingscustomersCreateManyInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  id?: bigint | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  login_as_customer?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  share_customer_accounts?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  online_minutes_interval?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customer_data_lifetime?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email_after_registration?: string | undefined;
}
