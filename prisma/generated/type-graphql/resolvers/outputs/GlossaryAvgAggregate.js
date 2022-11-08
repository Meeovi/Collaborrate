"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlossaryAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let GlossaryAvgAggregate = class GlossaryAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GlossaryAvgAggregate.prototype, "id", void 0);
GlossaryAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("GlossaryAvgAggregate", {
        isAbstract: true
    })
], GlossaryAvgAggregate);
exports.GlossaryAvgAggregate = GlossaryAvgAggregate;
