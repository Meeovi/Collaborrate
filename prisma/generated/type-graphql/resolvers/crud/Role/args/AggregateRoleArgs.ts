import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RoleOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/RoleOrderByWithRelationAndSearchRelevanceInput";
import { RoleWhereInput } from "../../../inputs/RoleWhereInput";
import { RoleWhereUniqueInput } from "../../../inputs/RoleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateRoleArgs {
  @TypeGraphQL.Field(_type => RoleWhereInput, {
    nullable: true
  })
  where?: RoleWhereInput | undefined;

  @TypeGraphQL.Field(_type => [RoleOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: RoleOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => RoleWhereUniqueInput, {
    nullable: true
  })
  cursor?: RoleWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
