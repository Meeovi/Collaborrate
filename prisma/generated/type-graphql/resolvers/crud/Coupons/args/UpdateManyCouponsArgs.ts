import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CouponsUpdateManyMutationInput } from "../../../inputs/CouponsUpdateManyMutationInput";
import { CouponsWhereInput } from "../../../inputs/CouponsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCouponsArgs {
  @TypeGraphQL.Field(_type => CouponsUpdateManyMutationInput, {
    nullable: false
  })
  data!: CouponsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CouponsWhereInput, {
    nullable: true
  })
  where?: CouponsWhereInput | undefined;
}
