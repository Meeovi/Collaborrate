import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MediamanagerCreateManyInput } from "../../../inputs/MediamanagerCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMediamanagerArgs {
  @TypeGraphQL.Field(_type => [MediamanagerCreateManyInput], {
    nullable: false
  })
  data!: MediamanagerCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
