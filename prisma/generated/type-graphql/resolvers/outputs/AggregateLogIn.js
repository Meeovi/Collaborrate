"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateLogIn = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LogInAvgAggregate_1 = require("../outputs/LogInAvgAggregate");
const LogInCountAggregate_1 = require("../outputs/LogInCountAggregate");
const LogInMaxAggregate_1 = require("../outputs/LogInMaxAggregate");
const LogInMinAggregate_1 = require("../outputs/LogInMinAggregate");
const LogInSumAggregate_1 = require("../outputs/LogInSumAggregate");
let AggregateLogIn = class AggregateLogIn {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LogInCountAggregate_1.LogInCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LogInCountAggregate_1.LogInCountAggregate)
], AggregateLogIn.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LogInAvgAggregate_1.LogInAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LogInAvgAggregate_1.LogInAvgAggregate)
], AggregateLogIn.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LogInSumAggregate_1.LogInSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LogInSumAggregate_1.LogInSumAggregate)
], AggregateLogIn.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LogInMinAggregate_1.LogInMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LogInMinAggregate_1.LogInMinAggregate)
], AggregateLogIn.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LogInMaxAggregate_1.LogInMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LogInMaxAggregate_1.LogInMaxAggregate)
], AggregateLogIn.prototype, "_max", void 0);
AggregateLogIn = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateLogIn", {
        isAbstract: true
    })
], AggregateLogIn);
exports.AggregateLogIn = AggregateLogIn;
