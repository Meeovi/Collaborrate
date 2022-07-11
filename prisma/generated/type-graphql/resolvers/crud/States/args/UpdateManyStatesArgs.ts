import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StatesUpdateManyMutationInput } from "../../../inputs/StatesUpdateManyMutationInput";
import { StatesWhereInput } from "../../../inputs/StatesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyStatesArgs {
  @TypeGraphQL.Field(_type => StatesUpdateManyMutationInput, {
    nullable: false
  })
  data!: StatesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => StatesWhereInput, {
    nullable: true
  })
  where?: StatesWhereInput | undefined;
}
