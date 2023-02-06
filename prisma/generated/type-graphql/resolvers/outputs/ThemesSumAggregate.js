"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemesSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let ThemesSumAggregate = class ThemesSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ThemesSumAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], ThemesSumAggregate.prototype, "website_id", void 0);
ThemesSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ThemesSumAggregate", {
        isAbstract: true
    })
], ThemesSumAggregate);
exports.ThemesSumAggregate = ThemesSumAggregate;
