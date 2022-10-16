"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PollsSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let PollsSumAggregate = class PollsSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], PollsSumAggregate.prototype, "id", void 0);
PollsSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("PollsSumAggregate", {
        isAbstract: true
    })
], PollsSumAggregate);
exports.PollsSumAggregate = PollsSumAggregate;
