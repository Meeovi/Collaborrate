import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PushStatusUpdateManyMutationInput } from "../../../inputs/PushStatusUpdateManyMutationInput";
import { PushStatusWhereInput } from "../../../inputs/PushStatusWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPushStatusArgs {
  @TypeGraphQL.Field(_type => PushStatusUpdateManyMutationInput, {
    nullable: false
  })
  data!: PushStatusUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PushStatusWhereInput, {
    nullable: true
  })
  where?: PushStatusWhereInput | undefined;
}
