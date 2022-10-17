"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadsAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let LeadsAvgAggregate = class LeadsAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], LeadsAvgAggregate.prototype, "id", void 0);
LeadsAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("LeadsAvgAggregate", {
        isAbstract: true
    })
], LeadsAvgAggregate);
exports.LeadsAvgAggregate = LeadsAvgAggregate;
