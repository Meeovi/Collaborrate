import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("UserMaxAggregate", {
  isAbstract: true
})
export class UserMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  objectId!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  username!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  emailVerified!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  hashed_password!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  email_verify_token_expires_at!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email_verify_token!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  account_lockout_expires_at!: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  failed_login_count!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  perishable_token!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  perishable_token_expires_at!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  password_changed_at!: Date | null;
}
