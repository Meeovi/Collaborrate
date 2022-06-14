import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StatesWhereUniqueInput } from "../../../inputs/StatesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteStatesArgs {
  @TypeGraphQL.Field(_type => StatesWhereUniqueInput, {
    nullable: false
  })
  where!: StatesWhereUniqueInput;
}
