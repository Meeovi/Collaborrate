import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GraphQLConfigUpdateManyMutationInput } from "../../../inputs/GraphQLConfigUpdateManyMutationInput";
import { GraphQLConfigWhereInput } from "../../../inputs/GraphQLConfigWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyGraphQLConfigArgs {
  @TypeGraphQL.Field(_type => GraphQLConfigUpdateManyMutationInput, {
    nullable: false
  })
  data!: GraphQLConfigUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => GraphQLConfigWhereInput, {
    nullable: true
  })
  where?: GraphQLConfigWhereInput | undefined;
}
