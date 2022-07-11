import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Join_roles__RoleOrderByWithAggregationInput } from "../../../inputs/Join_roles__RoleOrderByWithAggregationInput";
import { Join_roles__RoleScalarWhereWithAggregatesInput } from "../../../inputs/Join_roles__RoleScalarWhereWithAggregatesInput";
import { Join_roles__RoleWhereInput } from "../../../inputs/Join_roles__RoleWhereInput";
import { Join_roles__RoleScalarFieldEnum } from "../../../../enums/Join_roles__RoleScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByJoin_roles__RoleArgs {
  @TypeGraphQL.Field(_type => Join_roles__RoleWhereInput, {
    nullable: true
  })
  where?: Join_roles__RoleWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Join_roles__RoleOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Join_roles__RoleOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Join_roles__RoleScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"relatedId" | "owningId">;

  @TypeGraphQL.Field(_type => Join_roles__RoleScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Join_roles__RoleScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
