"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigiboardAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let DigiboardAvgAggregate = class DigiboardAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], DigiboardAvgAggregate.prototype, "id", void 0);
DigiboardAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("DigiboardAvgAggregate", {
        isAbstract: true
    })
], DigiboardAvgAggregate);
exports.DigiboardAvgAggregate = DigiboardAvgAggregate;
