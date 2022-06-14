import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReturnsCreateManyCustomersInput } from "../inputs/ReturnsCreateManyCustomersInput";

@TypeGraphQL.InputType("ReturnsCreateManyCustomersInputEnvelope", {
  isAbstract: true
})
export class ReturnsCreateManyCustomersInputEnvelope {
  @TypeGraphQL.Field(_type => [ReturnsCreateManyCustomersInput], {
    nullable: false
  })
  data!: ReturnsCreateManyCustomersInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
