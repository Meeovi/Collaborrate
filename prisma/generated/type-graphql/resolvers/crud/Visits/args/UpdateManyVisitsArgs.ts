import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VisitsUpdateManyMutationInput } from "../../../inputs/VisitsUpdateManyMutationInput";
import { VisitsWhereInput } from "../../../inputs/VisitsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyVisitsArgs {
  @TypeGraphQL.Field(_type => VisitsUpdateManyMutationInput, {
    nullable: false
  })
  data!: VisitsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => VisitsWhereInput, {
    nullable: true
  })
  where?: VisitsWhereInput | undefined;
}
