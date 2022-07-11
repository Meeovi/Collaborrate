import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Credit_memosUpdateInput } from "../../../inputs/Credit_memosUpdateInput";
import { Credit_memosWhereUniqueInput } from "../../../inputs/Credit_memosWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCredit_memosArgs {
  @TypeGraphQL.Field(_type => Credit_memosUpdateInput, {
    nullable: false
  })
  data!: Credit_memosUpdateInput;

  @TypeGraphQL.Field(_type => Credit_memosWhereUniqueInput, {
    nullable: false
  })
  where!: Credit_memosWhereUniqueInput;
}
