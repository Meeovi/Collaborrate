import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PushStatusWhereUniqueInput } from "../../../inputs/PushStatusWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOnePushStatusArgs {
  @TypeGraphQL.Field(_type => PushStatusWhereUniqueInput, {
    nullable: false
  })
  where!: PushStatusWhereUniqueInput;
}
