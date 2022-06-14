import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Websites } from "../models/Websites";

@TypeGraphQL.ObjectType("Themes", {
  isAbstract: true
})
export class Themes {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  parent_theme?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  theme_path?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  action?: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  website_id!: bigint;

  websites?: Websites;
}
