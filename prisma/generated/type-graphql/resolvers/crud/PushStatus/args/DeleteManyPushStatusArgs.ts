import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PushStatusWhereInput } from "../../../inputs/PushStatusWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPushStatusArgs {
  @TypeGraphQL.Field(_type => PushStatusWhereInput, {
    nullable: true
  })
  where?: PushStatusWhereInput | undefined;
}
