import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_attributeUpdateInput } from "../../../inputs/Product_attributeUpdateInput";
import { Product_attributeWhereUniqueInput } from "../../../inputs/Product_attributeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneProduct_attributeArgs {
  @TypeGraphQL.Field(_type => Product_attributeUpdateInput, {
    nullable: false
  })
  data!: Product_attributeUpdateInput;

  @TypeGraphQL.Field(_type => Product_attributeWhereUniqueInput, {
    nullable: false
  })
  where!: Product_attributeWhereUniqueInput;
}
