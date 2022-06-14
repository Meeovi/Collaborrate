import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StatesCreateInput } from "../../../inputs/StatesCreateInput";
import { StatesUpdateInput } from "../../../inputs/StatesUpdateInput";
import { StatesWhereUniqueInput } from "../../../inputs/StatesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertStatesArgs {
  @TypeGraphQL.Field(_type => StatesWhereUniqueInput, {
    nullable: false
  })
  where!: StatesWhereUniqueInput;

  @TypeGraphQL.Field(_type => StatesCreateInput, {
    nullable: false
  })
  create!: StatesCreateInput;

  @TypeGraphQL.Field(_type => StatesUpdateInput, {
    nullable: false
  })
  update!: StatesUpdateInput;
}
