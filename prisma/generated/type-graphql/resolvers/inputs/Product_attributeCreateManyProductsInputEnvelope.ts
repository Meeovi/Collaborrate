import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_attributeCreateManyProductsInput } from "../inputs/Product_attributeCreateManyProductsInput";

@TypeGraphQL.InputType("Product_attributeCreateManyProductsInputEnvelope", {
  isAbstract: true
})
export class Product_attributeCreateManyProductsInputEnvelope {
  @TypeGraphQL.Field(_type => [Product_attributeCreateManyProductsInput], {
    nullable: false
  })
  data!: Product_attributeCreateManyProductsInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
