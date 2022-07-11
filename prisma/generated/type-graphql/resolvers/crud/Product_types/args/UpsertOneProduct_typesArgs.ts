import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_typesCreateInput } from "../../../inputs/Product_typesCreateInput";
import { Product_typesUpdateInput } from "../../../inputs/Product_typesUpdateInput";
import { Product_typesWhereUniqueInput } from "../../../inputs/Product_typesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneProduct_typesArgs {
  @TypeGraphQL.Field(_type => Product_typesWhereUniqueInput, {
    nullable: false
  })
  where!: Product_typesWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_typesCreateInput, {
    nullable: false
  })
  create!: Product_typesCreateInput;

  @TypeGraphQL.Field(_type => Product_typesUpdateInput, {
    nullable: false
  })
  update!: Product_typesUpdateInput;
}
