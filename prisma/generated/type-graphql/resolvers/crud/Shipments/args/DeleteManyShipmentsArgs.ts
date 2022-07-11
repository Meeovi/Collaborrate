import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShipmentsWhereInput } from "../../../inputs/ShipmentsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyShipmentsArgs {
  @TypeGraphQL.Field(_type => ShipmentsWhereInput, {
    nullable: true
  })
  where?: ShipmentsWhereInput | undefined;
}
