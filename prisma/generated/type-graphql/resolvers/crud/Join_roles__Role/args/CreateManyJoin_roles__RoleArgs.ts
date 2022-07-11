import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Join_roles__RoleCreateManyInput } from "../../../inputs/Join_roles__RoleCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyJoin_roles__RoleArgs {
  @TypeGraphQL.Field(_type => [Join_roles__RoleCreateManyInput], {
    nullable: false
  })
  data!: Join_roles__RoleCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
