import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SourceWhereUniqueInput } from "../../../inputs/SourceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneSourceArgs {
  @TypeGraphQL.Field(_type => SourceWhereUniqueInput, {
    nullable: false
  })
  where!: SourceWhereUniqueInput;
}
