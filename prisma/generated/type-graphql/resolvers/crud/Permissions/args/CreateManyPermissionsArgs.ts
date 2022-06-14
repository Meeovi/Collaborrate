import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PermissionsCreateManyInput } from "../../../inputs/PermissionsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPermissionsArgs {
  @TypeGraphQL.Field(_type => [PermissionsCreateManyInput], {
    nullable: false
  })
  data!: PermissionsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
