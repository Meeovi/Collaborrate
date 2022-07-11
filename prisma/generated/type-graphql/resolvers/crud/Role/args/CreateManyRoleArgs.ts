import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RoleCreateManyInput } from "../../../inputs/RoleCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyRoleArgs {
  @TypeGraphQL.Field(_type => [RoleCreateManyInput], {
    nullable: false
  })
  data!: RoleCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
