import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OccassionsUpdateManyMutationInput } from "../../../inputs/OccassionsUpdateManyMutationInput";
import { OccassionsWhereInput } from "../../../inputs/OccassionsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyOccassionsArgs {
  @TypeGraphQL.Field(_type => OccassionsUpdateManyMutationInput, {
    nullable: false
  })
  data!: OccassionsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => OccassionsWhereInput, {
    nullable: true
  })
  where?: OccassionsWhereInput | undefined;
}
