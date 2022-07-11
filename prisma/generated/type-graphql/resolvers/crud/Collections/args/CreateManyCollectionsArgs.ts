import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CollectionsCreateManyInput } from "../../../inputs/CollectionsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCollectionsArgs {
  @TypeGraphQL.Field(_type => [CollectionsCreateManyInput], {
    nullable: false
  })
  data!: CollectionsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
