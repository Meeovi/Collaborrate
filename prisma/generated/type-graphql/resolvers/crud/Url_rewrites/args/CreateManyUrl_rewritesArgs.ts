import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Url_rewritesCreateManyInput } from "../../../inputs/Url_rewritesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyUrl_rewritesArgs {
  @TypeGraphQL.Field(_type => [Url_rewritesCreateManyInput], {
    nullable: false
  })
  data!: Url_rewritesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
