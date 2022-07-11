import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PushStatusCreateInput } from "../../../inputs/PushStatusCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePushStatusArgs {
  @TypeGraphQL.Field(_type => PushStatusCreateInput, {
    nullable: false
  })
  data!: PushStatusCreateInput;
}
