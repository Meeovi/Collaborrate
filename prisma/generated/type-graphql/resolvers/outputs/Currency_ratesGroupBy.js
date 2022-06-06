"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency_ratesGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const client_1 = require("@prisma/client");
const scalars_1 = require("../../scalars");
const Currency_ratesAvgAggregate_1 = require("../outputs/Currency_ratesAvgAggregate");
const Currency_ratesCountAggregate_1 = require("../outputs/Currency_ratesCountAggregate");
const Currency_ratesMaxAggregate_1 = require("../outputs/Currency_ratesMaxAggregate");
const Currency_ratesMinAggregate_1 = require("../outputs/Currency_ratesMinAggregate");
const Currency_ratesSumAggregate_1 = require("../outputs/Currency_ratesSumAggregate");
let Currency_ratesGroupBy = class Currency_ratesGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Currency_ratesGroupBy.prototype, "import_service", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], Currency_ratesGroupBy.prototype, "usd", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_ratesCountAggregate_1.Currency_ratesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Currency_ratesCountAggregate_1.Currency_ratesCountAggregate)
], Currency_ratesGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_ratesAvgAggregate_1.Currency_ratesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Currency_ratesAvgAggregate_1.Currency_ratesAvgAggregate)
], Currency_ratesGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_ratesSumAggregate_1.Currency_ratesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Currency_ratesSumAggregate_1.Currency_ratesSumAggregate)
], Currency_ratesGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_ratesMinAggregate_1.Currency_ratesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Currency_ratesMinAggregate_1.Currency_ratesMinAggregate)
], Currency_ratesGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_ratesMaxAggregate_1.Currency_ratesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Currency_ratesMaxAggregate_1.Currency_ratesMaxAggregate)
], Currency_ratesGroupBy.prototype, "_max", void 0);
Currency_ratesGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Currency_ratesGroupBy", {
        isAbstract: true
    })
], Currency_ratesGroupBy);
exports.Currency_ratesGroupBy = Currency_ratesGroupBy;
