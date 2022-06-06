"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency_ratesAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const client_1 = require("@prisma/client");
const scalars_1 = require("../../scalars");
let Currency_ratesAvgAggregate = class Currency_ratesAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], Currency_ratesAvgAggregate.prototype, "usd", void 0);
Currency_ratesAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Currency_ratesAvgAggregate", {
        isAbstract: true
    })
], Currency_ratesAvgAggregate);
exports.Currency_ratesAvgAggregate = Currency_ratesAvgAggregate;
