"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeetingAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let MeetingAvgAggregate = class MeetingAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], MeetingAvgAggregate.prototype, "id", void 0);
MeetingAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("MeetingAvgAggregate", {
        isAbstract: true
    })
], MeetingAvgAggregate);
exports.MeetingAvgAggregate = MeetingAvgAggregate;
