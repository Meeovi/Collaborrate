import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_attribute_setUpdateInput } from "../../../inputs/Product_attribute_setUpdateInput";
import { Product_attribute_setWhereUniqueInput } from "../../../inputs/Product_attribute_setWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneProduct_attribute_setArgs {
  @TypeGraphQL.Field(_type => Product_attribute_setUpdateInput, {
    nullable: false
  })
  data!: Product_attribute_setUpdateInput;

  @TypeGraphQL.Field(_type => Product_attribute_setWhereUniqueInput, {
    nullable: false
  })
  where!: Product_attribute_setWhereUniqueInput;
}
