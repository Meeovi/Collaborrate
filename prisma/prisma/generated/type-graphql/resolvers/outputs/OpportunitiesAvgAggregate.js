"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpportunitiesAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let OpportunitiesAvgAggregate = class OpportunitiesAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OpportunitiesAvgAggregate.prototype, "id", void 0);
OpportunitiesAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("OpportunitiesAvgAggregate", {
        isAbstract: true
    })
], OpportunitiesAvgAggregate);
exports.OpportunitiesAvgAggregate = OpportunitiesAvgAggregate;
