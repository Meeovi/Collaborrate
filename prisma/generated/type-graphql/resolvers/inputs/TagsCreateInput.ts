import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("TagsCreateInput", {
  isAbstract: true
})
export class TagsCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  excerpt?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  categories?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  articles?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  products?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customers?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  users?: string | undefined;
}