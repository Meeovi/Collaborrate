import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Url_rewritesWhereInput } from "../../../inputs/Url_rewritesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyUrl_rewritesArgs {
  @TypeGraphQL.Field(_type => Url_rewritesWhereInput, {
    nullable: true
  })
  where?: Url_rewritesWhereInput | undefined;
}
