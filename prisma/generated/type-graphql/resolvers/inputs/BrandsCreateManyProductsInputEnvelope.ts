import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BrandsCreateManyProductsInput } from "../inputs/BrandsCreateManyProductsInput";

@TypeGraphQL.InputType("BrandsCreateManyProductsInputEnvelope", {
  isAbstract: true
})
export class BrandsCreateManyProductsInputEnvelope {
  @TypeGraphQL.Field(_type => [BrandsCreateManyProductsInput], {
    nullable: false
  })
  data!: BrandsCreateManyProductsInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
