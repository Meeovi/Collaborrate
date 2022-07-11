import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeepdiveUpdateInput } from "../../../inputs/DeepdiveUpdateInput";
import { DeepdiveWhereUniqueInput } from "../../../inputs/DeepdiveWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneDeepdiveArgs {
  @TypeGraphQL.Field(_type => DeepdiveUpdateInput, {
    nullable: false
  })
  data!: DeepdiveUpdateInput;

  @TypeGraphQL.Field(_type => DeepdiveWhereUniqueInput, {
    nullable: false
  })
  where!: DeepdiveWhereUniqueInput;
}
