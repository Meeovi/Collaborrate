import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShopsWhereUniqueInput } from "../../../inputs/ShopsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteShopsArgs {
  @TypeGraphQL.Field(_type => ShopsWhereUniqueInput, {
    nullable: false
  })
  where!: ShopsWhereUniqueInput;
}
