import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Core_storeWhereInput } from "../../../inputs/Core_storeWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCore_storeArgs {
  @TypeGraphQL.Field(_type => Core_storeWhereInput, {
    nullable: true
  })
  where?: Core_storeWhereInput | undefined;
}
