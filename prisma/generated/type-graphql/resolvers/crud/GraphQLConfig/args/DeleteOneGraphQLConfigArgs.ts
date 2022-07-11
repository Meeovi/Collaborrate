import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GraphQLConfigWhereUniqueInput } from "../../../inputs/GraphQLConfigWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneGraphQLConfigArgs {
  @TypeGraphQL.Field(_type => GraphQLConfigWhereUniqueInput, {
    nullable: false
  })
  where!: GraphQLConfigWhereUniqueInput;
}
