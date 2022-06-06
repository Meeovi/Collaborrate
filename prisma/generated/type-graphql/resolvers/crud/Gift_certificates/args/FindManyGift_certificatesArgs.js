"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyGift_certificatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Gift_certificatesOrderByWithRelationInput_1 = require("../../../inputs/Gift_certificatesOrderByWithRelationInput");
const Gift_certificatesWhereInput_1 = require("../../../inputs/Gift_certificatesWhereInput");
const Gift_certificatesWhereUniqueInput_1 = require("../../../inputs/Gift_certificatesWhereUniqueInput");
const Gift_certificatesScalarFieldEnum_1 = require("../../../../enums/Gift_certificatesScalarFieldEnum");
let FindManyGift_certificatesArgs = class FindManyGift_certificatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Gift_certificatesWhereInput_1.Gift_certificatesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Gift_certificatesWhereInput_1.Gift_certificatesWhereInput)
], FindManyGift_certificatesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Gift_certificatesOrderByWithRelationInput_1.Gift_certificatesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyGift_certificatesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Gift_certificatesWhereUniqueInput_1.Gift_certificatesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Gift_certificatesWhereUniqueInput_1.Gift_certificatesWhereUniqueInput)
], FindManyGift_certificatesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyGift_certificatesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyGift_certificatesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Gift_certificatesScalarFieldEnum_1.Gift_certificatesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyGift_certificatesArgs.prototype, "distinct", void 0);
FindManyGift_certificatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyGift_certificatesArgs);
exports.FindManyGift_certificatesArgs = FindManyGift_certificatesArgs;
