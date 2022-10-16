"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigiboardSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let DigiboardSumAggregate = class DigiboardSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], DigiboardSumAggregate.prototype, "id", void 0);
DigiboardSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("DigiboardSumAggregate", {
        isAbstract: true
    })
], DigiboardSumAggregate);
exports.DigiboardSumAggregate = DigiboardSumAggregate;
