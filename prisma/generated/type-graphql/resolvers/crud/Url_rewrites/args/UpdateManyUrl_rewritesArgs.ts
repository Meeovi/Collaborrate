import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Url_rewritesUpdateManyMutationInput } from "../../../inputs/Url_rewritesUpdateManyMutationInput";
import { Url_rewritesWhereInput } from "../../../inputs/Url_rewritesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyUrl_rewritesArgs {
  @TypeGraphQL.Field(_type => Url_rewritesUpdateManyMutationInput, {
    nullable: false
  })
  data!: Url_rewritesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Url_rewritesWhereInput, {
    nullable: true
  })
  where?: Url_rewritesWhereInput | undefined;
}
