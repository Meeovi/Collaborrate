import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GraphQLConfigUpdateInput } from "../../../inputs/GraphQLConfigUpdateInput";
import { GraphQLConfigWhereUniqueInput } from "../../../inputs/GraphQLConfigWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneGraphQLConfigArgs {
  @TypeGraphQL.Field(_type => GraphQLConfigUpdateInput, {
    nullable: false
  })
  data!: GraphQLConfigUpdateInput;

  @TypeGraphQL.Field(_type => GraphQLConfigWhereUniqueInput, {
    nullable: false
  })
  where!: GraphQLConfigWhereUniqueInput;
}
