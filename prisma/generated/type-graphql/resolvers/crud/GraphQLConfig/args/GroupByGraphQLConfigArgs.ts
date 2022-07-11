import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GraphQLConfigOrderByWithAggregationInput } from "../../../inputs/GraphQLConfigOrderByWithAggregationInput";
import { GraphQLConfigScalarWhereWithAggregatesInput } from "../../../inputs/GraphQLConfigScalarWhereWithAggregatesInput";
import { GraphQLConfigWhereInput } from "../../../inputs/GraphQLConfigWhereInput";
import { GraphQLConfigScalarFieldEnum } from "../../../../enums/GraphQLConfigScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByGraphQLConfigArgs {
  @TypeGraphQL.Field(_type => GraphQLConfigWhereInput, {
    nullable: true
  })
  where?: GraphQLConfigWhereInput | undefined;

  @TypeGraphQL.Field(_type => [GraphQLConfigOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: GraphQLConfigOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [GraphQLConfigScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"objectId" | "config">;

  @TypeGraphQL.Field(_type => GraphQLConfigScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: GraphQLConfigScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
