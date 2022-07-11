import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_attributeCreateInput } from "../../../inputs/Product_attributeCreateInput";
import { Product_attributeUpdateInput } from "../../../inputs/Product_attributeUpdateInput";
import { Product_attributeWhereUniqueInput } from "../../../inputs/Product_attributeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneProduct_attributeArgs {
  @TypeGraphQL.Field(_type => Product_attributeWhereUniqueInput, {
    nullable: false
  })
  where!: Product_attributeWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_attributeCreateInput, {
    nullable: false
  })
  create!: Product_attributeCreateInput;

  @TypeGraphQL.Field(_type => Product_attributeUpdateInput, {
    nullable: false
  })
  update!: Product_attributeUpdateInput;
}
