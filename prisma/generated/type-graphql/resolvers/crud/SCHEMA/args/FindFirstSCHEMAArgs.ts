import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SCHEMAOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/SCHEMAOrderByWithRelationAndSearchRelevanceInput";
import { SCHEMAWhereInput } from "../../../inputs/SCHEMAWhereInput";
import { SCHEMAWhereUniqueInput } from "../../../inputs/SCHEMAWhereUniqueInput";
import { SCHEMAScalarFieldEnum } from "../../../../enums/SCHEMAScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstSCHEMAArgs {
  @TypeGraphQL.Field(_type => SCHEMAWhereInput, {
    nullable: true
  })
  where?: SCHEMAWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SCHEMAOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: SCHEMAOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => SCHEMAWhereUniqueInput, {
    nullable: true
  })
  cursor?: SCHEMAWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [SCHEMAScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"className" | "schema" | "isParseClass"> | undefined;
}
