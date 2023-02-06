"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let SettingsAvgAggregate = class SettingsAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], SettingsAvgAggregate.prototype, "id", void 0);
SettingsAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SettingsAvgAggregate", {
        isAbstract: true
    })
], SettingsAvgAggregate);
exports.SettingsAvgAggregate = SettingsAvgAggregate;
