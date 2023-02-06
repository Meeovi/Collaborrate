"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgreementsAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let AgreementsAvgAggregate = class AgreementsAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AgreementsAvgAggregate.prototype, "id", void 0);
AgreementsAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AgreementsAvgAggregate", {
        isAbstract: true
    })
], AgreementsAvgAggregate);
exports.AgreementsAvgAggregate = AgreementsAvgAggregate;
