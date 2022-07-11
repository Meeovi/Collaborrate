import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PushStatusCreateInput } from "../../../inputs/PushStatusCreateInput";
import { PushStatusUpdateInput } from "../../../inputs/PushStatusUpdateInput";
import { PushStatusWhereUniqueInput } from "../../../inputs/PushStatusWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePushStatusArgs {
  @TypeGraphQL.Field(_type => PushStatusWhereUniqueInput, {
    nullable: false
  })
  where!: PushStatusWhereUniqueInput;

  @TypeGraphQL.Field(_type => PushStatusCreateInput, {
    nullable: false
  })
  create!: PushStatusCreateInput;

  @TypeGraphQL.Field(_type => PushStatusUpdateInput, {
    nullable: false
  })
  update!: PushStatusUpdateInput;
}
