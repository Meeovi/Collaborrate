import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Url_rewritesCreateInput } from "../../../inputs/Url_rewritesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateUrl_rewritesArgs {
  @TypeGraphQL.Field(_type => Url_rewritesCreateInput, {
    nullable: false
  })
  data!: Url_rewritesCreateInput;
}
