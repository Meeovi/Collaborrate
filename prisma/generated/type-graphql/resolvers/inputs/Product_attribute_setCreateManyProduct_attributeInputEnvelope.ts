import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_attribute_setCreateManyProduct_attributeInput } from "../inputs/Product_attribute_setCreateManyProduct_attributeInput";

@TypeGraphQL.InputType("Product_attribute_setCreateManyProduct_attributeInputEnvelope", {
  isAbstract: true
})
export class Product_attribute_setCreateManyProduct_attributeInputEnvelope {
  @TypeGraphQL.Field(_type => [Product_attribute_setCreateManyProduct_attributeInput], {
    nullable: false
  })
  data!: Product_attribute_setCreateManyProduct_attributeInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
