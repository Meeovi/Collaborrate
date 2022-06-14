import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TargetsUpdateManyMutationInput } from "../../../inputs/TargetsUpdateManyMutationInput";
import { TargetsWhereInput } from "../../../inputs/TargetsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTargetsArgs {
  @TypeGraphQL.Field(_type => TargetsUpdateManyMutationInput, {
    nullable: false
  })
  data!: TargetsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TargetsWhereInput, {
    nullable: true
  })
  where?: TargetsWhereInput | undefined;
}
