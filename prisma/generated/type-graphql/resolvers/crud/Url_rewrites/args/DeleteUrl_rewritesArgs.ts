import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Url_rewritesWhereUniqueInput } from "../../../inputs/Url_rewritesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteUrl_rewritesArgs {
  @TypeGraphQL.Field(_type => Url_rewritesWhereUniqueInput, {
    nullable: false
  })
  where!: Url_rewritesWhereUniqueInput;
}
