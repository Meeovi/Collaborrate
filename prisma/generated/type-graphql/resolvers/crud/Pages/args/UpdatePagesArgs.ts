import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PagesUpdateInput } from "../../../inputs/PagesUpdateInput";
import { PagesWhereUniqueInput } from "../../../inputs/PagesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdatePagesArgs {
  @TypeGraphQL.Field(_type => PagesUpdateInput, {
    nullable: false
  })
  data!: PagesUpdateInput;

  @TypeGraphQL.Field(_type => PagesWhereUniqueInput, {
    nullable: false
  })
  where!: PagesWhereUniqueInput;
}
