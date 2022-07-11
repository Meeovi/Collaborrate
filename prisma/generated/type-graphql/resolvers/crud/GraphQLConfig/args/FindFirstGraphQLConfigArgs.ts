import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GraphQLConfigOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/GraphQLConfigOrderByWithRelationAndSearchRelevanceInput";
import { GraphQLConfigWhereInput } from "../../../inputs/GraphQLConfigWhereInput";
import { GraphQLConfigWhereUniqueInput } from "../../../inputs/GraphQLConfigWhereUniqueInput";
import { GraphQLConfigScalarFieldEnum } from "../../../../enums/GraphQLConfigScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstGraphQLConfigArgs {
  @TypeGraphQL.Field(_type => GraphQLConfigWhereInput, {
    nullable: true
  })
  where?: GraphQLConfigWhereInput | undefined;

  @TypeGraphQL.Field(_type => [GraphQLConfigOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: GraphQLConfigOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => GraphQLConfigWhereUniqueInput, {
    nullable: true
  })
  cursor?: GraphQLConfigWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [GraphQLConfigScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"objectId" | "config"> | undefined;
}
