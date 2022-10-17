"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency_symbolsCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Currency_symbolsCountAggregate = class Currency_symbolsCountAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Currency_symbolsCountAggregate.prototype, "symbol", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Currency_symbolsCountAggregate.prototype, "use_standard", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Currency_symbolsCountAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Currency_symbolsCountAggregate.prototype, "_all", void 0);
Currency_symbolsCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Currency_symbolsCountAggregate", {
        isAbstract: true
    })
], Currency_symbolsCountAggregate);
exports.Currency_symbolsCountAggregate = Currency_symbolsCountAggregate;
