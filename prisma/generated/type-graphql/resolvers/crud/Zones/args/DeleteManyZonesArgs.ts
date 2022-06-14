import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ZonesWhereInput } from "../../../inputs/ZonesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyZonesArgs {
  @TypeGraphQL.Field(_type => ZonesWhereInput, {
    nullable: true
  })
  where?: ZonesWhereInput | undefined;
}
