import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PagesCreateInput } from "../../../inputs/PagesCreateInput";

@TypeGraphQL.ArgsType()
export class CreatePagesArgs {
  @TypeGraphQL.Field(_type => PagesCreateInput, {
    nullable: false
  })
  data!: PagesCreateInput;
}
