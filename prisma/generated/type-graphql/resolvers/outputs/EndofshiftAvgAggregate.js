"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EndofshiftAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let EndofshiftAvgAggregate = class EndofshiftAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], EndofshiftAvgAggregate.prototype, "id", void 0);
EndofshiftAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("EndofshiftAvgAggregate", {
        isAbstract: true
    })
], EndofshiftAvgAggregate);
exports.EndofshiftAvgAggregate = EndofshiftAvgAggregate;
