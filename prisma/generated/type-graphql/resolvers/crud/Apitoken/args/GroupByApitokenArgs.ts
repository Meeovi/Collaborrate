import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ApitokenOrderByWithAggregationInput } from "../../../inputs/ApitokenOrderByWithAggregationInput";
import { ApitokenScalarWhereWithAggregatesInput } from "../../../inputs/ApitokenScalarWhereWithAggregatesInput";
import { ApitokenWhereInput } from "../../../inputs/ApitokenWhereInput";
import { ApitokenScalarFieldEnum } from "../../../../enums/ApitokenScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByApitokenArgs {
  @TypeGraphQL.Field(_type => ApitokenWhereInput, {
    nullable: true
  })
  where?: ApitokenWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ApitokenOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ApitokenOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApitokenScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "created_at" | "name" | "token_type" | "description" | "token">;

  @TypeGraphQL.Field(_type => ApitokenScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ApitokenScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
