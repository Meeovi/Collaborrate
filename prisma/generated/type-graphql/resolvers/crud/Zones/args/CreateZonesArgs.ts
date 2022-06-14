import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ZonesCreateInput } from "../../../inputs/ZonesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateZonesArgs {
  @TypeGraphQL.Field(_type => ZonesCreateInput, {
    nullable: false
  })
  data!: ZonesCreateInput;
}
