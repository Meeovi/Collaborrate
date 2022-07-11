import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Credit_memosUpdateManyMutationInput } from "../../../inputs/Credit_memosUpdateManyMutationInput";
import { Credit_memosWhereInput } from "../../../inputs/Credit_memosWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCredit_memosArgs {
  @TypeGraphQL.Field(_type => Credit_memosUpdateManyMutationInput, {
    nullable: false
  })
  data!: Credit_memosUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Credit_memosWhereInput, {
    nullable: true
  })
  where?: Credit_memosWhereInput | undefined;
}
