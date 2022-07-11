import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChecklistCreateManyInput } from "../../../inputs/ChecklistCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyChecklistArgs {
  @TypeGraphQL.Field(_type => [ChecklistCreateManyInput], {
    nullable: false
  })
  data!: ChecklistCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
