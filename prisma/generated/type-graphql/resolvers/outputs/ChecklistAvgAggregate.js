"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChecklistAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ChecklistAvgAggregate = class ChecklistAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ChecklistAvgAggregate.prototype, "id", void 0);
ChecklistAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ChecklistAvgAggregate", {
        isAbstract: true
    })
], ChecklistAvgAggregate);
exports.ChecklistAvgAggregate = ChecklistAvgAggregate;
