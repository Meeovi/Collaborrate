import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SourceWhereInput } from "../../../inputs/SourceWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySourceArgs {
  @TypeGraphQL.Field(_type => SourceWhereInput, {
    nullable: true
  })
  where?: SourceWhereInput | undefined;
}
