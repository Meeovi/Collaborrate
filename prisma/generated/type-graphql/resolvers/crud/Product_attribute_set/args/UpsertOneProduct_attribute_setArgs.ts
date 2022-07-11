import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_attribute_setCreateInput } from "../../../inputs/Product_attribute_setCreateInput";
import { Product_attribute_setUpdateInput } from "../../../inputs/Product_attribute_setUpdateInput";
import { Product_attribute_setWhereUniqueInput } from "../../../inputs/Product_attribute_setWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneProduct_attribute_setArgs {
  @TypeGraphQL.Field(_type => Product_attribute_setWhereUniqueInput, {
    nullable: false
  })
  where!: Product_attribute_setWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_attribute_setCreateInput, {
    nullable: false
  })
  create!: Product_attribute_setCreateInput;

  @TypeGraphQL.Field(_type => Product_attribute_setUpdateInput, {
    nullable: false
  })
  update!: Product_attribute_setUpdateInput;
}
