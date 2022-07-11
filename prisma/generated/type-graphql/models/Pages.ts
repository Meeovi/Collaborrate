import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("Pages", {
  isAbstract: true
})
export class Pages {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  enable_page?: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  content_title?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  content?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  url_key?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_title?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_keywords?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_description?: string | null;
}
