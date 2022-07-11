import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GlobalConfigWhereInput } from "../../../inputs/GlobalConfigWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyGlobalConfigArgs {
  @TypeGraphQL.Field(_type => GlobalConfigWhereInput, {
    nullable: true
  })
  where?: GlobalConfigWhereInput | undefined;
}
