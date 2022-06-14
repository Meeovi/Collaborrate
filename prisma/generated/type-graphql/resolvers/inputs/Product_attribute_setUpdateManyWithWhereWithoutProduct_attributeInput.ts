import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_attribute_setScalarWhereInput } from "../inputs/Product_attribute_setScalarWhereInput";
import { Product_attribute_setUpdateManyMutationInput } from "../inputs/Product_attribute_setUpdateManyMutationInput";

@TypeGraphQL.InputType("Product_attribute_setUpdateManyWithWhereWithoutProduct_attributeInput", {
  isAbstract: true
})
export class Product_attribute_setUpdateManyWithWhereWithoutProduct_attributeInput {
  @TypeGraphQL.Field(_type => Product_attribute_setScalarWhereInput, {
    nullable: false
  })
  where!: Product_attribute_setScalarWhereInput;

  @TypeGraphQL.Field(_type => Product_attribute_setUpdateManyMutationInput, {
    nullable: false
  })
  data!: Product_attribute_setUpdateManyMutationInput;
}
