import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OotoCreateInput } from "../../../inputs/OotoCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOotoArgs {
  @TypeGraphQL.Field(_type => OotoCreateInput, {
    nullable: false
  })
  data!: OotoCreateInput;
}
