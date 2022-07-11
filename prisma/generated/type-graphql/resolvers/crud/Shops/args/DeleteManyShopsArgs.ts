import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShopsWhereInput } from "../../../inputs/ShopsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyShopsArgs {
  @TypeGraphQL.Field(_type => ShopsWhereInput, {
    nullable: true
  })
  where?: ShopsWhereInput | undefined;
}
