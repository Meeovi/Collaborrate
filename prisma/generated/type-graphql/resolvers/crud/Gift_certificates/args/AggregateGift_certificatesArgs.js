"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateGift_certificatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Gift_certificatesOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/Gift_certificatesOrderByWithRelationAndSearchRelevanceInput");
const Gift_certificatesWhereInput_1 = require("../../../inputs/Gift_certificatesWhereInput");
const Gift_certificatesWhereUniqueInput_1 = require("../../../inputs/Gift_certificatesWhereUniqueInput");
let AggregateGift_certificatesArgs = class AggregateGift_certificatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Gift_certificatesWhereInput_1.Gift_certificatesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Gift_certificatesWhereInput_1.Gift_certificatesWhereInput)
], AggregateGift_certificatesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Gift_certificatesOrderByWithRelationAndSearchRelevanceInput_1.Gift_certificatesOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateGift_certificatesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Gift_certificatesWhereUniqueInput_1.Gift_certificatesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Gift_certificatesWhereUniqueInput_1.Gift_certificatesWhereUniqueInput)
], AggregateGift_certificatesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateGift_certificatesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateGift_certificatesArgs.prototype, "skip", void 0);
AggregateGift_certificatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateGift_certificatesArgs);
exports.AggregateGift_certificatesArgs = AggregateGift_certificatesArgs;
