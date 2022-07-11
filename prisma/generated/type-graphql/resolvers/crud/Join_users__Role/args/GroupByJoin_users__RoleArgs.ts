import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Join_users__RoleOrderByWithAggregationInput } from "../../../inputs/Join_users__RoleOrderByWithAggregationInput";
import { Join_users__RoleScalarWhereWithAggregatesInput } from "../../../inputs/Join_users__RoleScalarWhereWithAggregatesInput";
import { Join_users__RoleWhereInput } from "../../../inputs/Join_users__RoleWhereInput";
import { Join_users__RoleScalarFieldEnum } from "../../../../enums/Join_users__RoleScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByJoin_users__RoleArgs {
  @TypeGraphQL.Field(_type => Join_users__RoleWhereInput, {
    nullable: true
  })
  where?: Join_users__RoleWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Join_users__RoleOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Join_users__RoleOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Join_users__RoleScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"relatedId" | "owningId">;

  @TypeGraphQL.Field(_type => Join_users__RoleScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Join_users__RoleScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
