import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Content_typeCreateInput } from "../../../inputs/Content_typeCreateInput";
import { Content_typeUpdateInput } from "../../../inputs/Content_typeUpdateInput";
import { Content_typeWhereUniqueInput } from "../../../inputs/Content_typeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneContent_typeArgs {
  @TypeGraphQL.Field(_type => Content_typeWhereUniqueInput, {
    nullable: false
  })
  where!: Content_typeWhereUniqueInput;

  @TypeGraphQL.Field(_type => Content_typeCreateInput, {
    nullable: false
  })
  create!: Content_typeCreateInput;

  @TypeGraphQL.Field(_type => Content_typeUpdateInput, {
    nullable: false
  })
  update!: Content_typeUpdateInput;
}
