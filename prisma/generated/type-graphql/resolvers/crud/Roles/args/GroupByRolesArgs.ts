import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RolesOrderByWithAggregationInput } from "../../../inputs/RolesOrderByWithAggregationInput";
import { RolesScalarWhereWithAggregatesInput } from "../../../inputs/RolesScalarWhereWithAggregatesInput";
import { RolesWhereInput } from "../../../inputs/RolesWhereInput";
import { RolesScalarFieldEnum } from "../../../../enums/RolesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByRolesArgs {
  @TypeGraphQL.Field(_type => RolesWhereInput, {
    nullable: true
  })
  where?: RolesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [RolesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: RolesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [RolesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "role_name" | "content" | "created_at">;

  @TypeGraphQL.Field(_type => RolesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: RolesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
