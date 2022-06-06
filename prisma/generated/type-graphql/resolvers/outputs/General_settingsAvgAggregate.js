"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.General_settingsAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let General_settingsAvgAggregate = class General_settingsAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], General_settingsAvgAggregate.prototype, "id", void 0);
General_settingsAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("General_settingsAvgAggregate", {
        isAbstract: true
    })
], General_settingsAvgAggregate);
exports.General_settingsAvgAggregate = General_settingsAvgAggregate;
