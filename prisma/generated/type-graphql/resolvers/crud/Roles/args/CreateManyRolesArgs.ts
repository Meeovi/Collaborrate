import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RolesCreateManyInput } from "../../../inputs/RolesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyRolesArgs {
  @TypeGraphQL.Field(_type => [RolesCreateManyInput], {
    nullable: false
  })
  data!: RolesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
