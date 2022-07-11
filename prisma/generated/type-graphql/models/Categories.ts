import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Workspaces } from "../models/Workspaces";
import { CategoriesCount } from "../resolvers/outputs/CategoriesCount";

@TypeGraphQL.ObjectType("Categories", {
  isAbstract: true
})
export class Categories {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  thumbnail?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  visibility?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  status?: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  websites?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  product?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  country?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  content?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image?: string | null;

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

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_url?: string | null;

  workspaces?: Workspaces[];

  @TypeGraphQL.Field(_type => CategoriesCount, {
    nullable: true
  })
  _count?: CategoriesCount | null;
}
