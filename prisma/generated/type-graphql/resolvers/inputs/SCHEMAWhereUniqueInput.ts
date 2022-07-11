import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("SCHEMAWhereUniqueInput", {
  isAbstract: true
})
export class SCHEMAWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  className?: string | undefined;
}
