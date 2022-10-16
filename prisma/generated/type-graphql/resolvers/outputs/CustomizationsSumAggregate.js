"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomizationsSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CustomizationsSumAggregate = class CustomizationsSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CustomizationsSumAggregate.prototype, "id", void 0);
CustomizationsSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CustomizationsSumAggregate", {
        isAbstract: true
    })
], CustomizationsSumAggregate);
exports.CustomizationsSumAggregate = CustomizationsSumAggregate;
