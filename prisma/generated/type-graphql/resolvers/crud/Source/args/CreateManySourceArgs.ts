import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SourceCreateManyInput } from "../../../inputs/SourceCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySourceArgs {
  @TypeGraphQL.Field(_type => [SourceCreateManyInput], {
    nullable: false
  })
  data!: SourceCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
