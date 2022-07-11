import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Join_users__RoleOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Join_users__RoleOrderByWithRelationAndSearchRelevanceInput";
import { Join_users__RoleWhereInput } from "../../../inputs/Join_users__RoleWhereInput";
import { Join_users__RoleWhereUniqueInput } from "../../../inputs/Join_users__RoleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateJoin_users__RoleArgs {
  @TypeGraphQL.Field(_type => Join_users__RoleWhereInput, {
    nullable: true
  })
  where?: Join_users__RoleWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Join_users__RoleOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Join_users__RoleOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Join_users__RoleWhereUniqueInput, {
    nullable: true
  })
  cursor?: Join_users__RoleWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
