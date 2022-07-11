import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StatesWhereInput } from "../../../inputs/StatesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyStatesArgs {
  @TypeGraphQL.Field(_type => StatesWhereInput, {
    nullable: true
  })
  where?: StatesWhereInput | undefined;
}
