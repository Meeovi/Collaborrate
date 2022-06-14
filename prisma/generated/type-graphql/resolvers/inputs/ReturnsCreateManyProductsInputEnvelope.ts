import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReturnsCreateManyProductsInput } from "../inputs/ReturnsCreateManyProductsInput";

@TypeGraphQL.InputType("ReturnsCreateManyProductsInputEnvelope", {
  isAbstract: true
})
export class ReturnsCreateManyProductsInputEnvelope {
  @TypeGraphQL.Field(_type => [ReturnsCreateManyProductsInput], {
    nullable: false
  })
  data!: ReturnsCreateManyProductsInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
