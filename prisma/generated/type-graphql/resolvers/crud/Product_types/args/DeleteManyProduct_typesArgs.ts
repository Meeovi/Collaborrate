import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_typesWhereInput } from "../../../inputs/Product_typesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyProduct_typesArgs {
  @TypeGraphQL.Field(_type => Product_typesWhereInput, {
    nullable: true
  })
  where?: Product_typesWhereInput | undefined;
}
