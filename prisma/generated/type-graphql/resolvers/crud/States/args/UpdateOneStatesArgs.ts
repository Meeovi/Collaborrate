import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StatesUpdateInput } from "../../../inputs/StatesUpdateInput";
import { StatesWhereUniqueInput } from "../../../inputs/StatesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneStatesArgs {
  @TypeGraphQL.Field(_type => StatesUpdateInput, {
    nullable: false
  })
  data!: StatesUpdateInput;

  @TypeGraphQL.Field(_type => StatesWhereUniqueInput, {
    nullable: false
  })
  where!: StatesWhereUniqueInput;
}
