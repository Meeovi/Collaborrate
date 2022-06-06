"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sales_settingsAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Sales_settingsAvgAggregate = class Sales_settingsAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Sales_settingsAvgAggregate.prototype, "id", void 0);
Sales_settingsAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Sales_settingsAvgAggregate", {
        isAbstract: true
    })
], Sales_settingsAvgAggregate);
exports.Sales_settingsAvgAggregate = Sales_settingsAvgAggregate;
