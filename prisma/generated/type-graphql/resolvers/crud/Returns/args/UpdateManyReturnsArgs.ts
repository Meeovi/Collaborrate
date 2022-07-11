import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReturnsUpdateManyMutationInput } from "../../../inputs/ReturnsUpdateManyMutationInput";
import { ReturnsWhereInput } from "../../../inputs/ReturnsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyReturnsArgs {
  @TypeGraphQL.Field(_type => ReturnsUpdateManyMutationInput, {
    nullable: false
  })
  data!: ReturnsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ReturnsWhereInput, {
    nullable: true
  })
  where?: ReturnsWhereInput | undefined;
}
