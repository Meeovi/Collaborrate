import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_attributeScalarWhereInput } from "../inputs/Product_attributeScalarWhereInput";
import { Product_attributeUpdateManyMutationInput } from "../inputs/Product_attributeUpdateManyMutationInput";

@TypeGraphQL.InputType("Product_attributeUpdateManyWithWhereWithoutProductsInput", {
  isAbstract: true
})
export class Product_attributeUpdateManyWithWhereWithoutProductsInput {
  @TypeGraphQL.Field(_type => Product_attributeScalarWhereInput, {
    nullable: false
  })
  where!: Product_attributeScalarWhereInput;

  @TypeGraphQL.Field(_type => Product_attributeUpdateManyMutationInput, {
    nullable: false
  })
  data!: Product_attributeUpdateManyMutationInput;
}
