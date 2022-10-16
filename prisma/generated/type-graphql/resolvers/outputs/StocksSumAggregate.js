"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StocksSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let StocksSumAggregate = class StocksSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], StocksSumAggregate.prototype, "id", void 0);
StocksSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("StocksSumAggregate", {
        isAbstract: true
    })
], StocksSumAggregate);
exports.StocksSumAggregate = StocksSumAggregate;
