import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StatesWhereUniqueInput } from "../../../inputs/StatesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueStatesArgs {
  @TypeGraphQL.Field(_type => StatesWhereUniqueInput, {
    nullable: false
  })
  where!: StatesWhereUniqueInput;
}
