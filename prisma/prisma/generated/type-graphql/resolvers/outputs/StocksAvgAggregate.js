"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StocksAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let StocksAvgAggregate = class StocksAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], StocksAvgAggregate.prototype, "id", void 0);
StocksAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("StocksAvgAggregate", {
        isAbstract: true
    })
], StocksAvgAggregate);
exports.StocksAvgAggregate = StocksAvgAggregate;
