import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OotoWhereUniqueInput } from "../../../inputs/OotoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOotoArgs {
  @TypeGraphQL.Field(_type => OotoWhereUniqueInput, {
    nullable: false
  })
  where!: OotoWhereUniqueInput;
}
