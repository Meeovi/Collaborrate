"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemesAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ThemesAvgAggregate = class ThemesAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ThemesAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ThemesAvgAggregate.prototype, "website_id", void 0);
ThemesAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ThemesAvgAggregate", {
        isAbstract: true
    })
], ThemesAvgAggregate);
exports.ThemesAvgAggregate = ThemesAvgAggregate;
