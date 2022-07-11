import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_typesUpdateInput } from "../../../inputs/Product_typesUpdateInput";
import { Product_typesWhereUniqueInput } from "../../../inputs/Product_typesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneProduct_typesArgs {
  @TypeGraphQL.Field(_type => Product_typesUpdateInput, {
    nullable: false
  })
  data!: Product_typesUpdateInput;

  @TypeGraphQL.Field(_type => Product_typesWhereUniqueInput, {
    nullable: false
  })
  where!: Product_typesWhereUniqueInput;
}
