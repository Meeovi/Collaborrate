import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ApitokenUpdateManyMutationInput } from "../../../inputs/ApitokenUpdateManyMutationInput";
import { ApitokenWhereInput } from "../../../inputs/ApitokenWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyApitokenArgs {
  @TypeGraphQL.Field(_type => ApitokenUpdateManyMutationInput, {
    nullable: false
  })
  data!: ApitokenUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ApitokenWhereInput, {
    nullable: true
  })
  where?: ApitokenWhereInput | undefined;
}
