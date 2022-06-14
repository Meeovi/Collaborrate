import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Url_rewritesCreateInput } from "../../../inputs/Url_rewritesCreateInput";
import { Url_rewritesUpdateInput } from "../../../inputs/Url_rewritesUpdateInput";
import { Url_rewritesWhereUniqueInput } from "../../../inputs/Url_rewritesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertUrl_rewritesArgs {
  @TypeGraphQL.Field(_type => Url_rewritesWhereUniqueInput, {
    nullable: false
  })
  where!: Url_rewritesWhereUniqueInput;

  @TypeGraphQL.Field(_type => Url_rewritesCreateInput, {
    nullable: false
  })
  create!: Url_rewritesCreateInput;

  @TypeGraphQL.Field(_type => Url_rewritesUpdateInput, {
    nullable: false
  })
  update!: Url_rewritesUpdateInput;
}
