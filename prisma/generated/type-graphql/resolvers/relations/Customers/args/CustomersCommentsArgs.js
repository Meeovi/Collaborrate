"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersCommentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentsOrderByWithRelationInput_1 = require("../../../inputs/CommentsOrderByWithRelationInput");
const CommentsWhereInput_1 = require("../../../inputs/CommentsWhereInput");
const CommentsWhereUniqueInput_1 = require("../../../inputs/CommentsWhereUniqueInput");
const CommentsScalarFieldEnum_1 = require("../../../../enums/CommentsScalarFieldEnum");
let CustomersCommentsArgs = class CustomersCommentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentsWhereInput_1.CommentsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentsWhereInput_1.CommentsWhereInput)
], CustomersCommentsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentsOrderByWithRelationInput_1.CommentsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CustomersCommentsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentsWhereUniqueInput_1.CommentsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentsWhereUniqueInput_1.CommentsWhereUniqueInput)
], CustomersCommentsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CustomersCommentsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CustomersCommentsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentsScalarFieldEnum_1.CommentsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CustomersCommentsArgs.prototype, "distinct", void 0);
CustomersCommentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CustomersCommentsArgs);
exports.CustomersCommentsArgs = CustomersCommentsArgs;
