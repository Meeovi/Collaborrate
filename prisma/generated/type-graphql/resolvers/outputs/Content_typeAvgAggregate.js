"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content_typeAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const client_1 = require("@prisma/client");
const scalars_1 = require("../../scalars");
let Content_typeAvgAggregate = class Content_typeAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Content_typeAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], Content_typeAvgAggregate.prototype, "number", void 0);
Content_typeAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Content_typeAvgAggregate", {
        isAbstract: true
    })
], Content_typeAvgAggregate);
exports.Content_typeAvgAggregate = Content_typeAvgAggregate;
