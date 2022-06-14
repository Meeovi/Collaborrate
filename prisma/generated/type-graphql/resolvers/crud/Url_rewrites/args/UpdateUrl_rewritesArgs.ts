import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Url_rewritesUpdateInput } from "../../../inputs/Url_rewritesUpdateInput";
import { Url_rewritesWhereUniqueInput } from "../../../inputs/Url_rewritesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateUrl_rewritesArgs {
  @TypeGraphQL.Field(_type => Url_rewritesUpdateInput, {
    nullable: false
  })
  data!: Url_rewritesUpdateInput;

  @TypeGraphQL.Field(_type => Url_rewritesWhereUniqueInput, {
    nullable: false
  })
  where!: Url_rewritesWhereUniqueInput;
}
