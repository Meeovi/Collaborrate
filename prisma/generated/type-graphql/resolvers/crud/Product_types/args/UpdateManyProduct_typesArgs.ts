import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_typesUpdateManyMutationInput } from "../../../inputs/Product_typesUpdateManyMutationInput";
import { Product_typesWhereInput } from "../../../inputs/Product_typesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyProduct_typesArgs {
  @TypeGraphQL.Field(_type => Product_typesUpdateManyMutationInput, {
    nullable: false
  })
  data!: Product_typesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Product_typesWhereInput, {
    nullable: true
  })
  where?: Product_typesWhereInput | undefined;
}
