"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponsListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CouponsWhereInput_1 = require("../inputs/CouponsWhereInput");
let CouponsListRelationFilter = class CouponsListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CouponsWhereInput_1.CouponsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CouponsWhereInput_1.CouponsWhereInput)
], CouponsListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CouponsWhereInput_1.CouponsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CouponsWhereInput_1.CouponsWhereInput)
], CouponsListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CouponsWhereInput_1.CouponsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CouponsWhereInput_1.CouponsWhereInput)
], CouponsListRelationFilter.prototype, "none", void 0);
CouponsListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("CouponsListRelationFilter", {
        isAbstract: true
    })
], CouponsListRelationFilter);
exports.CouponsListRelationFilter = CouponsListRelationFilter;
