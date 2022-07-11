import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("Pdf_templatesMaxAggregate", {
  isAbstract: true
})
export class Pdf_templatesMaxAggregate {
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
  name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  assigned_to!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  type!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  active!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  page_size!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  orientation!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  content!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  header!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  footer!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  margin_left!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  margin_right!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  margin_top!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  margin_bottom!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  margin_header!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  margin_footer!: string | null;
}
