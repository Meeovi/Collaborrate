import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("ArticlesCreateManyInput", {
  isAbstract: true
})
export class ArticlesCreateManyInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  excerpt!: string;

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
  categories?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customers?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  users?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  published?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  cust_id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  isPublic?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_description?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_url?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tags?: string | undefined;
}
