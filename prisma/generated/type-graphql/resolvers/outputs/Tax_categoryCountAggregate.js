"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_categoryCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Tax_categoryCountAggregate = class Tax_categoryCountAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Tax_categoryCountAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Tax_categoryCountAggregate.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Tax_categoryCountAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Tax_categoryCountAggregate.prototype, "default", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Tax_categoryCountAggregate.prototype, "_all", void 0);
Tax_categoryCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Tax_categoryCountAggregate", {
        isAbstract: true
    })
], Tax_categoryCountAggregate);
exports.Tax_categoryCountAggregate = Tax_categoryCountAggregate;
