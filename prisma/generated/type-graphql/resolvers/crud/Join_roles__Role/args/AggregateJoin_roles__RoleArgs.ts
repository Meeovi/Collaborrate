import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Join_roles__RoleOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Join_roles__RoleOrderByWithRelationAndSearchRelevanceInput";
import { Join_roles__RoleWhereInput } from "../../../inputs/Join_roles__RoleWhereInput";
import { Join_roles__RoleWhereUniqueInput } from "../../../inputs/Join_roles__RoleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateJoin_roles__RoleArgs {
  @TypeGraphQL.Field(_type => Join_roles__RoleWhereInput, {
    nullable: true
  })
  where?: Join_roles__RoleWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Join_roles__RoleOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Join_roles__RoleOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Join_roles__RoleWhereUniqueInput, {
    nullable: true
  })
  cursor?: Join_roles__RoleWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
