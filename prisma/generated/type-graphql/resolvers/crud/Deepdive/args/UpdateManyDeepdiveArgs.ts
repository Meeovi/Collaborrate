import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeepdiveUpdateManyMutationInput } from "../../../inputs/DeepdiveUpdateManyMutationInput";
import { DeepdiveWhereInput } from "../../../inputs/DeepdiveWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyDeepdiveArgs {
  @TypeGraphQL.Field(_type => DeepdiveUpdateManyMutationInput, {
    nullable: false
  })
  data!: DeepdiveUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => DeepdiveWhereInput, {
    nullable: true
  })
  where?: DeepdiveWhereInput | undefined;
}
