import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SCHEMACreateInput } from "../../../inputs/SCHEMACreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSCHEMAArgs {
  @TypeGraphQL.Field(_type => SCHEMACreateInput, {
    nullable: false
  })
  data!: SCHEMACreateInput;
}
