import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GraphQLConfigWhereInput } from "../../../inputs/GraphQLConfigWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyGraphQLConfigArgs {
  @TypeGraphQL.Field(_type => GraphQLConfigWhereInput, {
    nullable: true
  })
  where?: GraphQLConfigWhereInput | undefined;
}
