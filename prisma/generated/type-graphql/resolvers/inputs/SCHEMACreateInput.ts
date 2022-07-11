import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("SCHEMACreateInput", {
  isAbstract: true
})
export class SCHEMACreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  className!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  schema?: Prisma.InputJsonValue | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isParseClass?: boolean | undefined;
}
