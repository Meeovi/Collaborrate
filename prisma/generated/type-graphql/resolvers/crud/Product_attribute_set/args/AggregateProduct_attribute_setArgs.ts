import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_attribute_setOrderByWithRelationInput } from "../../../inputs/Product_attribute_setOrderByWithRelationInput";
import { Product_attribute_setWhereInput } from "../../../inputs/Product_attribute_setWhereInput";
import { Product_attribute_setWhereUniqueInput } from "../../../inputs/Product_attribute_setWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateProduct_attribute_setArgs {
  @TypeGraphQL.Field(_type => Product_attribute_setWhereInput, {
    nullable: true
  })
  where?: Product_attribute_setWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_attribute_setOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: Product_attribute_setOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_attribute_setWhereUniqueInput, {
    nullable: true
  })
  cursor?: Product_attribute_setWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
