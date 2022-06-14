import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TargetsCreateInput } from "../../../inputs/TargetsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateTargetsArgs {
  @TypeGraphQL.Field(_type => TargetsCreateInput, {
    nullable: false
  })
  data!: TargetsCreateInput;
}
