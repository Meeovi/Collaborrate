import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("ThemesMinAggregate", {
  isAbstract: true
})
export class ThemesMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  parent_theme!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  theme_path!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  action!: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  website_id!: bigint | null;
}
