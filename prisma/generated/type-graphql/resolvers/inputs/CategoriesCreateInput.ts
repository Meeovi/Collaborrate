import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkspacesCreateNestedManyWithoutCategoriesInput } from "../inputs/WorkspacesCreateNestedManyWithoutCategoriesInput";

@TypeGraphQL.InputType("CategoriesCreateInput", {
  isAbstract: true
})
export class CategoriesCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  thumbnail?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  visibility?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  status?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  websites?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  product?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  country?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  content?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_title?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_keywords?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_description?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_url?: string | undefined;

  @TypeGraphQL.Field(_type => WorkspacesCreateNestedManyWithoutCategoriesInput, {
    nullable: true
  })
  workspaces?: WorkspacesCreateNestedManyWithoutCategoriesInput | undefined;
}
