import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VisitsCreateManyInput } from "../../../inputs/VisitsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyVisitsArgs {
  @TypeGraphQL.Field(_type => [VisitsCreateManyInput], {
    nullable: false
  })
  data!: VisitsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
