import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GraphQLConfigCreateManyInput } from "../../../inputs/GraphQLConfigCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyGraphQLConfigArgs {
  @TypeGraphQL.Field(_type => [GraphQLConfigCreateManyInput], {
    nullable: false
  })
  data!: GraphQLConfigCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
