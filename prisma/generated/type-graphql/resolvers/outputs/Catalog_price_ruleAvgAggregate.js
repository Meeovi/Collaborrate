"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Catalog_price_ruleAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const client_1 = require("@prisma/client");
const scalars_1 = require("../../scalars");
let Catalog_price_ruleAvgAggregate = class Catalog_price_ruleAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Catalog_price_ruleAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], Catalog_price_ruleAvgAggregate.prototype, "actions_discount_amount", void 0);
Catalog_price_ruleAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Catalog_price_ruleAvgAggregate", {
        isAbstract: true
    })
], Catalog_price_ruleAvgAggregate);
exports.Catalog_price_ruleAvgAggregate = Catalog_price_ruleAvgAggregate;
