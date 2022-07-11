import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GlobalConfigWhereUniqueInput } from "../../../inputs/GlobalConfigWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneGlobalConfigArgs {
  @TypeGraphQL.Field(_type => GlobalConfigWhereUniqueInput, {
    nullable: false
  })
  where!: GlobalConfigWhereUniqueInput;
}
