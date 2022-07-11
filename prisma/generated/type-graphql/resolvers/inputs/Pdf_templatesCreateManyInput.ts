import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("Pdf_templatesCreateManyInput", {
  isAbstract: true
})
export class Pdf_templatesCreateManyInput {
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
  page_size?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  orientation?: string | undefined;

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
  margin_left?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  margin_right?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  margin_top?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  margin_bottom?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  margin_header?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  margin_footer?: string | undefined;
}
