import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("Email_templatesCreateInput", {
  isAbstract: true
})
export class Email_templatesCreateInput {
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
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  assigned_to?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  type?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  active?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  insert_variable?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  subject?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  content?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  header?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  footer?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  width?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  height?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  media?: string | undefined;
}
