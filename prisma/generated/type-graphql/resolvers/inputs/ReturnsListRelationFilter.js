"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnsListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReturnsWhereInput_1 = require("../inputs/ReturnsWhereInput");
let ReturnsListRelationFilter = class ReturnsListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsWhereInput_1.ReturnsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReturnsWhereInput_1.ReturnsWhereInput)
], ReturnsListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsWhereInput_1.ReturnsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReturnsWhereInput_1.ReturnsWhereInput)
], ReturnsListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsWhereInput_1.ReturnsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReturnsWhereInput_1.ReturnsWhereInput)
], ReturnsListRelationFilter.prototype, "none", void 0);
ReturnsListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("ReturnsListRelationFilter", {
        isAbstract: true
    })
], ReturnsListRelationFilter);
exports.ReturnsListRelationFilter = ReturnsListRelationFilter;
