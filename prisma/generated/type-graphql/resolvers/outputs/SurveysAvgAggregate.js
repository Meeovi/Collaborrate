"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurveysAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let SurveysAvgAggregate = class SurveysAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], SurveysAvgAggregate.prototype, "id", void 0);
SurveysAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SurveysAvgAggregate", {
        isAbstract: true
    })
], SurveysAvgAggregate);
exports.SurveysAvgAggregate = SurveysAvgAggregate;
