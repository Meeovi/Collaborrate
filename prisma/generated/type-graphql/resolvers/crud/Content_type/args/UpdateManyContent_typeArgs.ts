import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Content_typeUpdateManyMutationInput } from "../../../inputs/Content_typeUpdateManyMutationInput";
import { Content_typeWhereInput } from "../../../inputs/Content_typeWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyContent_typeArgs {
  @TypeGraphQL.Field(_type => Content_typeUpdateManyMutationInput, {
    nullable: false
  })
  data!: Content_typeUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Content_typeWhereInput, {
    nullable: true
  })
  where?: Content_typeWhereInput | undefined;
}
