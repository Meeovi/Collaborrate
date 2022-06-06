"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency_ratesCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Currency_ratesCountAggregate = class Currency_ratesCountAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Currency_ratesCountAggregate.prototype, "import_service", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Currency_ratesCountAggregate.prototype, "usd", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Currency_ratesCountAggregate.prototype, "_all", void 0);
Currency_ratesCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Currency_ratesCountAggregate", {
        isAbstract: true
    })
], Currency_ratesCountAggregate);
exports.Currency_ratesCountAggregate = Currency_ratesCountAggregate;
