"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency_ratesSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const client_1 = require("@prisma/client");
const scalars_1 = require("../../scalars");
let Currency_ratesSumAggregate = class Currency_ratesSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], Currency_ratesSumAggregate.prototype, "usd", void 0);
Currency_ratesSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Currency_ratesSumAggregate", {
        isAbstract: true
    })
], Currency_ratesSumAggregate);
exports.Currency_ratesSumAggregate = Currency_ratesSumAggregate;
