import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PushStatusUpdateInput } from "../../../inputs/PushStatusUpdateInput";
import { PushStatusWhereUniqueInput } from "../../../inputs/PushStatusWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePushStatusArgs {
  @TypeGraphQL.Field(_type => PushStatusUpdateInput, {
    nullable: false
  })
  data!: PushStatusUpdateInput;

  @TypeGraphQL.Field(_type => PushStatusWhereUniqueInput, {
    nullable: false
  })
  where!: PushStatusWhereUniqueInput;
}
