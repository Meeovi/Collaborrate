import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PagesWhereInput } from "../../../inputs/PagesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPagesArgs {
  @TypeGraphQL.Field(_type => PagesWhereInput, {
    nullable: true
  })
  where?: PagesWhereInput | undefined;
}
