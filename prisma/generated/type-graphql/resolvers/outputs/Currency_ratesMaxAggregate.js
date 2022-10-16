"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency_ratesMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const client_1 = require("@prisma/client");
const scalars_1 = require("../../scalars");
let Currency_ratesMaxAggregate = class Currency_ratesMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Currency_ratesMaxAggregate.prototype, "import_service", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], Currency_ratesMaxAggregate.prototype, "usd", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Currency_ratesMaxAggregate.prototype, "id", void 0);
Currency_ratesMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Currency_ratesMaxAggregate", {
        isAbstract: true
    })
], Currency_ratesMaxAggregate);
exports.Currency_ratesMaxAggregate = Currency_ratesMaxAggregate;
