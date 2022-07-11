import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("Email_templates", {
  isAbstract: true
})
export class Email_templates {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  id!: bigint;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  assigned_to?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  type?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  active?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  insert_variable?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  subject?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  content?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  header?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  footer?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  width?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  height?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  media?: string | null;
}
