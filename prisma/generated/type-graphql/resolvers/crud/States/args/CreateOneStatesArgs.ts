import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StatesCreateInput } from "../../../inputs/StatesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneStatesArgs {
  @TypeGraphQL.Field(_type => StatesCreateInput, {
    nullable: false
  })
  data!: StatesCreateInput;
}
