import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CasesWhereInput } from "../../../inputs/CasesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCasesArgs {
  @TypeGraphQL.Field(_type => CasesWhereInput, {
    nullable: true
  })
  where?: CasesWhereInput | undefined;
}
