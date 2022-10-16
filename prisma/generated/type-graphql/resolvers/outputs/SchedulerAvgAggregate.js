"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchedulerAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let SchedulerAvgAggregate = class SchedulerAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], SchedulerAvgAggregate.prototype, "id", void 0);
SchedulerAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SchedulerAvgAggregate", {
        isAbstract: true
    })
], SchedulerAvgAggregate);
exports.SchedulerAvgAggregate = SchedulerAvgAggregate;
