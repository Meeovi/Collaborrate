import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OotoUpdateManyMutationInput } from "../../../inputs/OotoUpdateManyMutationInput";
import { OotoWhereInput } from "../../../inputs/OotoWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyOotoArgs {
  @TypeGraphQL.Field(_type => OotoUpdateManyMutationInput, {
    nullable: false
  })
  data!: OotoUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => OotoWhereInput, {
    nullable: true
  })
  where?: OotoWhereInput | undefined;
}
