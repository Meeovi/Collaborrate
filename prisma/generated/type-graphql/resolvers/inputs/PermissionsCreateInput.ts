import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("PermissionsCreateInput", {
  isAbstract: true
})
export class PermissionsCreateInput {
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
  content?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  role?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  create?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  read?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  update?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  delete?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  users?: string | undefined;
}
