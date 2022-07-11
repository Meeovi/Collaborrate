import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Join_users__RoleCreateManyInput } from "../../../inputs/Join_users__RoleCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyJoin_users__RoleArgs {
  @TypeGraphQL.Field(_type => [Join_users__RoleCreateManyInput], {
    nullable: false
  })
  data!: Join_users__RoleCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
