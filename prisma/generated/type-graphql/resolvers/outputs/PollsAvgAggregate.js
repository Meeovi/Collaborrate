"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PollsAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let PollsAvgAggregate = class PollsAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], PollsAvgAggregate.prototype, "id", void 0);
PollsAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("PollsAvgAggregate", {
        isAbstract: true
    })
], PollsAvgAggregate);
exports.PollsAvgAggregate = PollsAvgAggregate;
