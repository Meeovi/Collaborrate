import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SourceCreateInput } from "../../../inputs/SourceCreateInput";
import { SourceUpdateInput } from "../../../inputs/SourceUpdateInput";
import { SourceWhereUniqueInput } from "../../../inputs/SourceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSourceArgs {
  @TypeGraphQL.Field(_type => SourceWhereUniqueInput, {
    nullable: false
  })
  where!: SourceWhereUniqueInput;

  @TypeGraphQL.Field(_type => SourceCreateInput, {
    nullable: false
  })
  create!: SourceCreateInput;

  @TypeGraphQL.Field(_type => SourceUpdateInput, {
    nullable: false
  })
  update!: SourceUpdateInput;
}
