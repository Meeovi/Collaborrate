import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("SettingscustomersMaxAggregate", {
  isAbstract: true
})
export class SettingscustomersMaxAggregate {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  id!: bigint | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  login_as_customer!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  share_customer_accounts!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  online_minutes_interval!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customer_data_lifetime!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email_after_registration!: string | null;
}
