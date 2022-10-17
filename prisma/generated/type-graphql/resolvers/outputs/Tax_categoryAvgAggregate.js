"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_categoryAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Tax_categoryAvgAggregate = class Tax_categoryAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Tax_categoryAvgAggregate.prototype, "id", void 0);
Tax_categoryAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Tax_categoryAvgAggregate", {
        isAbstract: true
    })
], Tax_categoryAvgAggregate);
exports.Tax_categoryAvgAggregate = Tax_categoryAvgAggregate;
