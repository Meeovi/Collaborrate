import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Currency_symbolsOrderByWithRelationInput } from "../../../inputs/Currency_symbolsOrderByWithRelationInput";
import { Currency_symbolsWhereInput } from "../../../inputs/Currency_symbolsWhereInput";
import { Currency_symbolsWhereUniqueInput } from "../../../inputs/Currency_symbolsWhereUniqueInput";
import { Currency_symbolsScalarFieldEnum } from "../../../../enums/Currency_symbolsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstCurrency_symbolsArgs {
  @TypeGraphQL.Field(_type => Currency_symbolsWhereInput, {
    nullable: true
  })
  where?: Currency_symbolsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Currency_symbolsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: Currency_symbolsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => Currency_symbolsWhereUniqueInput, {
    nullable: true
  })
  cursor?: Currency_symbolsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Currency_symbolsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"symbol" | "use_standard"> | undefined;
}
