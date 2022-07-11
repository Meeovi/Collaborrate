import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GraphQLConfigCreateInput } from "../../../inputs/GraphQLConfigCreateInput";
import { GraphQLConfigUpdateInput } from "../../../inputs/GraphQLConfigUpdateInput";
import { GraphQLConfigWhereUniqueInput } from "../../../inputs/GraphQLConfigWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneGraphQLConfigArgs {
  @TypeGraphQL.Field(_type => GraphQLConfigWhereUniqueInput, {
    nullable: false
  })
  where!: GraphQLConfigWhereUniqueInput;

  @TypeGraphQL.Field(_type => GraphQLConfigCreateInput, {
    nullable: false
  })
  create!: GraphQLConfigCreateInput;

  @TypeGraphQL.Field(_type => GraphQLConfigUpdateInput, {
    nullable: false
  })
  update!: GraphQLConfigUpdateInput;
}
