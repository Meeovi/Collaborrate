import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreaterpermInput } from "../inputs/UserCreaterpermInput";
import { UserCreatewpermInput } from "../inputs/UserCreatewpermInput";

@TypeGraphQL.InputType("UserCreateManyInput", {
  isAbstract: true
})
export class UserCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  objectId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  username?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  emailVerified?: boolean | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  authData?: Prisma.InputJsonValue | undefined;

  @TypeGraphQL.Field(_type => UserCreaterpermInput, {
    nullable: true
  })
  rperm?: UserCreaterpermInput | undefined;

  @TypeGraphQL.Field(_type => UserCreatewpermInput, {
    nullable: true
  })
  wperm?: UserCreatewpermInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  hashed_password?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  email_verify_token_expires_at?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email_verify_token?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  account_lockout_expires_at?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  failed_login_count?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  perishable_token?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  perishable_token_expires_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  password_changed_at?: Date | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  password_history?: Prisma.InputJsonValue | undefined;
}
