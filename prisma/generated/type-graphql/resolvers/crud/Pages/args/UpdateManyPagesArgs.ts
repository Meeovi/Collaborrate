import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PagesUpdateManyMutationInput } from "../../../inputs/PagesUpdateManyMutationInput";
import { PagesWhereInput } from "../../../inputs/PagesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPagesArgs {
  @TypeGraphQL.Field(_type => PagesUpdateManyMutationInput, {
    nullable: false
  })
  data!: PagesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PagesWhereInput, {
    nullable: true
  })
  where?: PagesWhereInput | undefined;
}
