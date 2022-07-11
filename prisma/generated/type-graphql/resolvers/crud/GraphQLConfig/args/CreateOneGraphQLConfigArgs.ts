import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GraphQLConfigCreateInput } from "../../../inputs/GraphQLConfigCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneGraphQLConfigArgs {
  @TypeGraphQL.Field(_type => GraphQLConfigCreateInput, {
    nullable: false
  })
  data!: GraphQLConfigCreateInput;
}
