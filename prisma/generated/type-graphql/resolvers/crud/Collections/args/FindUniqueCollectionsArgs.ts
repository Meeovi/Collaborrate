import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CollectionsWhereUniqueInput } from "../../../inputs/CollectionsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCollectionsArgs {
  @TypeGraphQL.Field(_type => CollectionsWhereUniqueInput, {
    nullable: false
  })
  where!: CollectionsWhereUniqueInput;
}
