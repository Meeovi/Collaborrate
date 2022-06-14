import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SourceUpdateInput } from "../../../inputs/SourceUpdateInput";
import { SourceWhereUniqueInput } from "../../../inputs/SourceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateSourceArgs {
  @TypeGraphQL.Field(_type => SourceUpdateInput, {
    nullable: false
  })
  data!: SourceUpdateInput;

  @TypeGraphQL.Field(_type => SourceWhereUniqueInput, {
    nullable: false
  })
  where!: SourceWhereUniqueInput;
}
