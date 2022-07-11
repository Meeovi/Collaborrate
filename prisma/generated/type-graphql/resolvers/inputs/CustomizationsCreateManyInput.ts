import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("CustomizationsCreateManyInput", {
  isAbstract: true
})
export class CustomizationsCreateManyInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  site_name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  nav_link?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  notification?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  banner?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  footer_link?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  announcement?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  site_url?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  allow_signup?: string | undefined;
}
