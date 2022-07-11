import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("Core_storeCreateInput", {
  isAbstract: true
})
export class Core_storeCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  key?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  value?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  type?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  environment?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tag?: string | undefined;
}
