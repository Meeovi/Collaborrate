"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RatingWhereInput_1 = require("../inputs/RatingWhereInput");
let RatingListRelationFilter = class RatingListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingWhereInput_1.RatingWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingWhereInput_1.RatingWhereInput)
], RatingListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingWhereInput_1.RatingWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingWhereInput_1.RatingWhereInput)
], RatingListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingWhereInput_1.RatingWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingWhereInput_1.RatingWhereInput)
], RatingListRelationFilter.prototype, "none", void 0);
RatingListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("RatingListRelationFilter", {
        isAbstract: true
    })
], RatingListRelationFilter);
exports.RatingListRelationFilter = RatingListRelationFilter;
