import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CasesUpdateManyMutationInput } from "../../../inputs/CasesUpdateManyMutationInput";
import { CasesWhereInput } from "../../../inputs/CasesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCasesArgs {
  @TypeGraphQL.Field(_type => CasesUpdateManyMutationInput, {
    nullable: false
  })
  data!: CasesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CasesWhereInput, {
    nullable: true
  })
  where?: CasesWhereInput | undefined;
}
