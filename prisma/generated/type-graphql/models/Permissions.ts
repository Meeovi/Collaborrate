import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("Permissions", {
  isAbstract: true
})
export class Permissions {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  id!: bigint;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  content?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  role?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  create?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  read?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  update?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  delete?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  users?: string | null;
}
