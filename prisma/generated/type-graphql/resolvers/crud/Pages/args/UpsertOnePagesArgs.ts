import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PagesCreateInput } from "../../../inputs/PagesCreateInput";
import { PagesUpdateInput } from "../../../inputs/PagesUpdateInput";
import { PagesWhereUniqueInput } from "../../../inputs/PagesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePagesArgs {
  @TypeGraphQL.Field(_type => PagesWhereUniqueInput, {
    nullable: false
  })
  where!: PagesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PagesCreateInput, {
    nullable: false
  })
  create!: PagesCreateInput;

  @TypeGraphQL.Field(_type => PagesUpdateInput, {
    nullable: false
  })
  update!: PagesUpdateInput;
}
