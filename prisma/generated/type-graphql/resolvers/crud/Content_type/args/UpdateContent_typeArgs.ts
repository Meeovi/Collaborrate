import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Content_typeUpdateInput } from "../../../inputs/Content_typeUpdateInput";
import { Content_typeWhereUniqueInput } from "../../../inputs/Content_typeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateContent_typeArgs {
  @TypeGraphQL.Field(_type => Content_typeUpdateInput, {
    nullable: false
  })
  data!: Content_typeUpdateInput;

  @TypeGraphQL.Field(_type => Content_typeWhereUniqueInput, {
    nullable: false
  })
  where!: Content_typeWhereUniqueInput;
}
