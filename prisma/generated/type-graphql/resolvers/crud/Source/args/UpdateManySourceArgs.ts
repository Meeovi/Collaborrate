import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SourceUpdateManyMutationInput } from "../../../inputs/SourceUpdateManyMutationInput";
import { SourceWhereInput } from "../../../inputs/SourceWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySourceArgs {
  @TypeGraphQL.Field(_type => SourceUpdateManyMutationInput, {
    nullable: false
  })
  data!: SourceUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SourceWhereInput, {
    nullable: true
  })
  where?: SourceWhereInput | undefined;
}
