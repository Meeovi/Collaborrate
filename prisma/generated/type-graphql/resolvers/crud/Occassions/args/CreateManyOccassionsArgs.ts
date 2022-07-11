import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OccassionsCreateManyInput } from "../../../inputs/OccassionsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyOccassionsArgs {
  @TypeGraphQL.Field(_type => [OccassionsCreateManyInput], {
    nullable: false
  })
  data!: OccassionsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
