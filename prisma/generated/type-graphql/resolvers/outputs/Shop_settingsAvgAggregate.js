"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shop_settingsAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Shop_settingsAvgAggregate = class Shop_settingsAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Shop_settingsAvgAggregate.prototype, "id", void 0);
Shop_settingsAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Shop_settingsAvgAggregate", {
        isAbstract: true
    })
], Shop_settingsAvgAggregate);
exports.Shop_settingsAvgAggregate = Shop_settingsAvgAggregate;
