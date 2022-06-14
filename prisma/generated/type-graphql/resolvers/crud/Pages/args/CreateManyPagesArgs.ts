import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PagesCreateManyInput } from "../../../inputs/PagesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPagesArgs {
  @TypeGraphQL.Field(_type => [PagesCreateManyInput], {
    nullable: false
  })
  data!: PagesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
