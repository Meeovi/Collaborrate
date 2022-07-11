import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommentsCreateManyInput } from "../../../inputs/CommentsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCommentsArgs {
  @TypeGraphQL.Field(_type => [CommentsCreateManyInput], {
    nullable: false
  })
  data!: CommentsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
