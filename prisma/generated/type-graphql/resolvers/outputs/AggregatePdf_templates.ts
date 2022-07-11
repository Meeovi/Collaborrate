import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Pdf_templatesAvgAggregate } from "../outputs/Pdf_templatesAvgAggregate";
import { Pdf_templatesCountAggregate } from "../outputs/Pdf_templatesCountAggregate";
import { Pdf_templatesMaxAggregate } from "../outputs/Pdf_templatesMaxAggregate";
import { Pdf_templatesMinAggregate } from "../outputs/Pdf_templatesMinAggregate";
import { Pdf_templatesSumAggregate } from "../outputs/Pdf_templatesSumAggregate";

@TypeGraphQL.ObjectType("AggregatePdf_templates", {
  isAbstract: true
})
export class AggregatePdf_templates {
  @TypeGraphQL.Field(_type => Pdf_templatesCountAggregate, {
    nullable: true
  })
  _count!: Pdf_templatesCountAggregate | null;

  @TypeGraphQL.Field(_type => Pdf_templatesAvgAggregate, {
    nullable: true
  })
  _avg!: Pdf_templatesAvgAggregate | null;

  @TypeGraphQL.Field(_type => Pdf_templatesSumAggregate, {
    nullable: true
  })
  _sum!: Pdf_templatesSumAggregate | null;

  @TypeGraphQL.Field(_type => Pdf_templatesMinAggregate, {
    nullable: true
  })
  _min!: Pdf_templatesMinAggregate | null;

  @TypeGraphQL.Field(_type => Pdf_templatesMaxAggregate, {
    nullable: true
  })
  _max!: Pdf_templatesMaxAggregate | null;
}
