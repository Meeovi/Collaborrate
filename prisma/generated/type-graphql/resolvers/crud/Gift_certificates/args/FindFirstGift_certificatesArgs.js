"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstGift_certificatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Gift_certificatesOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/Gift_certificatesOrderByWithRelationAndSearchRelevanceInput");
const Gift_certificatesWhereInput_1 = require("../../../inputs/Gift_certificatesWhereInput");
const Gift_certificatesWhereUniqueInput_1 = require("../../../inputs/Gift_certificatesWhereUniqueInput");
const Gift_certificatesScalarFieldEnum_1 = require("../../../../enums/Gift_certificatesScalarFieldEnum");
let FindFirstGift_certificatesArgs = class FindFirstGift_certificatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Gift_certificatesWhereInput_1.Gift_certificatesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Gift_certificatesWhereInput_1.Gift_certificatesWhereInput)
], FindFirstGift_certificatesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Gift_certificatesOrderByWithRelationAndSearchRelevanceInput_1.Gift_certificatesOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstGift_certificatesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Gift_certificatesWhereUniqueInput_1.Gift_certificatesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Gift_certificatesWhereUniqueInput_1.Gift_certificatesWhereUniqueInput)
], FindFirstGift_certificatesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstGift_certificatesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstGift_certificatesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Gift_certificatesScalarFieldEnum_1.Gift_certificatesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstGift_certificatesArgs.prototype, "distinct", void 0);
FindFirstGift_certificatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstGift_certificatesArgs);
exports.FindFirstGift_certificatesArgs = FindFirstGift_certificatesArgs;
