import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeepdiveCreateInput } from "../../../inputs/DeepdiveCreateInput";
import { DeepdiveUpdateInput } from "../../../inputs/DeepdiveUpdateInput";
import { DeepdiveWhereUniqueInput } from "../../../inputs/DeepdiveWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneDeepdiveArgs {
  @TypeGraphQL.Field(_type => DeepdiveWhereUniqueInput, {
    nullable: false
  })
  where!: DeepdiveWhereUniqueInput;

  @TypeGraphQL.Field(_type => DeepdiveCreateInput, {
    nullable: false
  })
  create!: DeepdiveCreateInput;

  @TypeGraphQL.Field(_type => DeepdiveUpdateInput, {
    nullable: false
  })
  update!: DeepdiveUpdateInput;
}
